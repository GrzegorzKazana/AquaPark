import React from "react";
import styles from "./PricesPage.module.scss";
import PriceTable from "./PriceTable";
import { Card, Input, Button, Tabs } from "antd";

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
      <Button type="primary" className={styles.PriceEndButton}>
        Wyślij
      </Button>
    </Card>
  );
};
export default PricesPage;
