import React from "react";
import { Form, DatePicker, Input, Button } from "antd";
import moment from "moment";

const PeriodDiscountForm = Form.create()(
  ({
    ticket,
    handleSubmit,
    handleDelete,
    form: { getFieldDecorator, validateFields, resetFields }
  }) => {
    const handleSubmitLocal = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          handleSubmit({
            rate: values.rate,
            dateStart: values.startEndTime[0].format("YYYY-MM-DD"),
            dateEnd: values.startEndTime[1].format("YYYY-MM-DD")
          });
        }
      });
    };

    return (
      <Form layout="inline" onSubmit={handleSubmitLocal}>
        <Form.Item label="Okres">
          {getFieldDecorator("startEndTime", {
            rules: [
              { type: "array", required: true, message: "Please select time!" }
            ],
            initialValue: ticket.periodDiscount && [
              moment(ticket.periodDiscount.dateStart),
              moment(ticket.periodDiscount.dateEnd)
            ]
          })(
            <DatePicker.RangePicker
              format="YYYY-MM-DD"
              onChange={(dates, dateStrings) => console.log(dates, dateStrings)}
            />
          )}
        </Form.Item>
        <Form.Item label="Zniżka">
          {getFieldDecorator("rate", {
            rules: [
              {
                required: true,
                message: `Rate is required.`
              }
            ],
            initialValue: ticket.periodDiscount && ticket.periodDiscount.value
          })(<Input type="number" />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Zapisz
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              handleDelete();
              resetFields();
            }}
            disabled={ticket.periodDiscount === null}
          >
            Usuń
          </Button>
        </Form.Item>
      </Form>
    );
  }
);
export default PeriodDiscountForm;
