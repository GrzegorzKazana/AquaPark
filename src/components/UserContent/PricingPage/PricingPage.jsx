import React from "react";
import PropTypes from "prop-types";
import "./styles/PricingPage.scss";
import styles from "./styles/PricingPage.module.scss";
import { Card, Tabs } from "antd";
import PriceTable from "./PriceTable";
import SpinnerOverlay from "../../Common/SpinnerOverlay/SpinnerOverlay";

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
      <SpinnerOverlay open={prices.fetching} />
    </Card>
  </div>
);
export default PricingPage;

PricingPage.propTypes = {
  prices: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired
};
