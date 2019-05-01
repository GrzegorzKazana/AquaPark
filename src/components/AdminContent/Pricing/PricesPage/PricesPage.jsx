import React from "react";
import styles from "./PricesPage.module.scss";
import { Card, Tabs } from "antd";
import EditableTableForm from "./EditableTableForm";

const columns = [
  {
    title: "Rodzaj biletu",
    dataIndex: "ticketTypeName",
    key: "ticketTypeName",
    editable: true,
    numberInput: false
  },
  {
    title: "Cena",
    dataIndex: "price",
    key: "price",
    editable: true,
    numberInput: true
  }
];

const PricesPage = ({ prices }) => {
  return (
    <Card title="Cennik" className={styles.NewsletterPage}>
      <Tabs tabPosition="top">
        {prices.dictionary.map(price => (
          <Tabs.TabPane tab={price.areaName} key={price.areaId}>
            <EditableTableForm
              rowKey={"ticketTypeId"}
              dataDefault={price.ticketTypes}
              columns={columns}
              onSubmit={data => console.log(data)}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Card>
  );
};
export default PricesPage;
