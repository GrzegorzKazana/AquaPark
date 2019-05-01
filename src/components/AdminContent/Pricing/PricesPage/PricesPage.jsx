import React from "react";
import styles from "./PricesPage.module.scss";
import { Card, Tabs } from "antd";
import EditableTable from "../../Common/EditableTable/EditableTable";

const dataDefault = [
  {
    key: "0",
    ticketType: "Bilet poranny 6:00-12:00",
    ticketPrice: 30
  },
  {
    key: "1",
    ticketType: "Bilet popołudniowy 12:00-18:00",
    ticketPrice: 30
  },
  {
    key: "2",
    ticketType: "Bilet wieczorny 18:00-22:00",
    ticketPrice: 40
  },
  {
    key: "3",
    ticketType: "Bilet całodniowy",
    ticketPrice: 50
  }
];

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
            <EditableTable
              dataDefault={price.ticketTypes}
              columns={columns}
              onSubmit={data => console.log(data)}
            />
          </Tabs.TabPane>
        ))}
        {/* <Tabs.TabPane tab="Stefa Basenów" key="1">
          <EditableTable
            dataDefault={dataDefault}
            columns={columns}
            onSubmit={data => console.log(data)}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Strefa Sauny" key="2">
          <EditableTable
            dataDefault={dataDefault}
            columns={columns}
            onSubmit={data => console.log(data)}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Strefa Spa" key="3">
          <EditableTable
            dataDefault={dataDefault}
            columns={columns}
            onSubmit={data => console.log(data)}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Karnety" key="4">
          <EditableTable
            dataDefault={dataDefault}
            columns={columns}
            onSubmit={data => console.log(data)}
          />
        </Tabs.TabPane> */}
      </Tabs>
    </Card>
  );
};
export default PricesPage;
