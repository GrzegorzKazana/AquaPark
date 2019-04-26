import React from "react";
import "./styles/PricingPage.scss";
import styles from "./styles/PricingPage.module.scss";
import { Card, Tabs } from "antd";
import PriceTable from "./PriceTable";

const PricingPage = () => (
  <div className={styles.PricingPage}>
    <Card title="Cennik" className={styles.PricingPage__Card}>
      <Tabs tabPosition="left">
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
  </div>
);
export default PricingPage;
