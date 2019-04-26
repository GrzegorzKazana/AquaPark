import React from "react";
// import { Table, Button } from "antd";

// const columns = [
//   {
//     title: "Rodzaj biletu",
//     dataIndex: "ticketType",
//     key: "ticketType"
//   },
//   {
//     title: "Cena",
//     dataIndex: "ticketPrice",
//     key: "ticketPrice"
//   },
//   {
//     title: "",
//     dataIndex: "ticketAction",
//     key: "ticketAction",
//     render: (text, record) => (
//       <Button type="primary" style={{ float: "right" }}>
//         Edit
//       </Button>
//     )
//   }
// ];

// const data = [
//   {
//     key: "1",
//     ticketType: "Bilet poranny 6:00-12:00",
//     ticketPrice: "30zł"
//   },
//   {
//     key: "2",
//     ticketType: "Bilet popołudniowy 12:00-18:00",
//     ticketPrice: "30zł"
//   },
//   {
//     key: "3",
//     ticketType: "Bilet wieczorny 18:00-22:00",
//     ticketPrice: "40zł"
//   },
//   {
//     key: "4",
//     ticketType: "Bilet całodniowy",
//     ticketPrice: "50zł"
//   }
// ];

// const PriceTable = () => (
//   <Table columns={columns} dataSource={data} pagination={false} />
// );
// export default PriceTable;
import * as antd from "antd";
const { Table, Input, Button, Popconfirm, Form, InputNumber } = antd;

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  handleNumberChange = e => {
    const number = parseInt(e.target.value, 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!("value" in this.props)) {
      this.setState({ number });
    }
    // this.triggerChange({ number });
  };

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {form => {
              this.form = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title} is required.`
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(
                    <Input
                      ref={node => (this.input = node)}
                      onPressEnter={this.save}
                      onBlur={this.save}
                      onChange={this.handleNumberChange}
                      // formatter={value => `${value}zł`}
                      // parser={value => value.replace("zł", "")}
                    />
                  )}
                </FormItem>
              ) : (
                <div
                  className="editable-cell-value-wrap"
                  style={{ paddingRight: 24 }}
                  onClick={this.toggleEdit}
                >
                  {restProps.children}
                </div>
              );
            }}
          </EditableContext.Consumer>
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Rodzaj biletu",
        dataIndex: "ticketType",
        key: "ticketType"
      },
      {
        title: "Cena",
        dataIndex: "ticketPrice",
        key: "ticketPrice",
        editable: true
      }
      // {
      //   title: "",
      //   dataIndex: "ticketAction",
      //   key: "ticketAction",
      //   render: (text, record) => (
      //     <Button type="primary" style={{ float: "right" }}>
      //       Edit
      //     </Button>
      //   )
      // }
    ];

    this.state = {
      dataSource: [
        {
          key: "1",
          ticketType: "Bilet poranny 6:00-12:00",
          ticketPrice: 30
        },
        {
          key: "2",
          ticketType: "Bilet popołudniowy 12:00-18:00",
          ticketPrice: 30
        },
        {
          key: "3",
          ticketType: "Bilet wieczorny 18:00-22:00",
          ticketPrice: 40
        },
        {
          key: "4",
          ticketType: "Bilet całodniowy",
          ticketPrice: 50
        }
      ],
      count: 2
    };
  }

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

// ReactDOM.render(<EditableTable />, mountNode);
