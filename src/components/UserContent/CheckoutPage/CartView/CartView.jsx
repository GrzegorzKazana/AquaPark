import React from "react";
import styles from "./CartView.module.scss";
import { Card, List, Popconfirm, Button, Select, Divider } from "antd";

const data = [
  {
    ticketType: "Bilet całodniowy",
    ticketPrice: 50
  },
  {
    ticketType: "Bilet poranny",
    ticketPrice: 30
  }
];

const discountOptions = [
  {
    key: "brak",
    name: "Normalny 100%",
    value: 1
  },
  {
    key: "stud",
    name: "Studencki 51%",
    value: 0.51
  },
  {
    key: "dziec",
    name: "Dziecięcy 67%",
    value: 0.67
  },
  {
    key: "emer",
    name: "Emeryt 51%",
    value: 0.51
  }
];

export const CartView = ({ handleSubmit }) => {
  return (
    <Card
      title="Koszyk"
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
      bodyStyle={{ flexGrow: 1, display: "flex" }}
    >
      <div className={styles.CartViewContent}>
        <List
          size="small"
          //   footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item className={styles.CartListItem}>
              <h4 className={styles.CartListItemTitle}>{item.ticketType}</h4>
              <Select
                style={{ width: "150px" }}
                defaultValue={discountOptions[0].key}
              >
                {discountOptions.map(disc => (
                  <Select.Option value={disc.key} key={disc.key}>
                    {disc.name}
                  </Select.Option>
                ))}
              </Select>
              <h3 className={styles.CartListItemPrice}>{item.ticketPrice}zł</h3>
              <Popconfirm
                title="Sure to delete?"
                style={{ float: "right" }}
                // onConfirm={() => handleDelete(record.key)}
              >
                <Button
                  shape="circle"
                  icon="delete"
                  style={{ float: "right" }}
                />
              </Popconfirm>
            </List.Item>
          )}
        />
        <div>
          <Divider />
          <div className={styles.CheckoutCardContentFoorter}>
            <h2>Suma:</h2>
            <h1>646zł</h1>
          </div>
          <Button
            onClick={handleSubmit}
            type="primary"
            style={{ float: "right" }}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
