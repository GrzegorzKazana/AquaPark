import React from "react";
import "./styles/PricingPage.scss";
import styles from "./styles/PricingPage.module.scss";
import { Card, Tabs } from "antd";
import PriceTable from "./PriceTable";

const PricingPage = ({ prices, addItemToCart }) => (
  <div className={styles.PricingPage}>
    <Card title="Cennik" className={styles.PricingPage__Card}>
      <Tabs tabPosition="left">
        {prices.dictionary.map(pricing => (
          <Tabs.TabPane key={pricing.areaId} tab={pricing.areaName}>
            <PriceTable
              tickets={pricing.ticketTypes}
              addItemToCart={addItemToCart}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Card>
  </div>
);
export default PricingPage;
