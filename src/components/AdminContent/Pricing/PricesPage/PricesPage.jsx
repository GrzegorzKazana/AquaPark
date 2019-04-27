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
    dataIndex: "ticketType",
    key: "ticketType",
    editable: true
  },
  {
    title: "Cena",
    dataIndex: "ticketPrice",
    key: "ticketPrice",
    editable: true
  }
];

const PricesPage = () => {
  return (
    <Card title="Cennik" className={styles.NewsletterPage}>
      <Tabs tabPosition="top">
        <Tabs.TabPane tab="Stefa Basenów" key="1">
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
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};
export default PricesPage;
