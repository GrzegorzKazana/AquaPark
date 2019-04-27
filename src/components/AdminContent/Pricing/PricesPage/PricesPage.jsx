import React from "react";
import styles from "./PricesPage.module.scss";
import PriceTable from "./PriceTable";
import { Card, Tabs } from "antd";

const PricesPage = () => {
  return (
    <Card title="Cennik" className={styles.NewsletterPage}>
      <Tabs tabPosition="top">
        <Tabs.TabPane tab="Stefa Basenów" key="1">
          <PriceTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Strefa Sauny" key="2">
          <PriceTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Strefa Spa" key="3">
          <PriceTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Karnety" key="4">
          <PriceTable />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};
export default PricesPage;
