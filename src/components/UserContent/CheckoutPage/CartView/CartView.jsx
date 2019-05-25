import React from "react";
import PropTypes from "prop-types";
import styles from "./CartView.module.scss";
import {
  Card,
  List,
  Popconfirm,
  Button,
  Select,
  Divider,
  InputNumber
} from "antd";

export const CartView = ({
  handleSubmit,
  cart,
  discounts,
  removeItemFromCart,
  addDiscountToItem,
  changeItemCount
}) => {
  const renderListItem = item => (
    <List.Item className={styles.CartListItem}>
      <h4 className={styles.CartListItemTitle}>{item.ticketTypeName}</h4>
      <Select
        style={{ width: "150px", marginRight: "16px" }}
        defaultValue={
          (item.discount || discounts.dictionary[0]) &&
          (item.discount || discounts.dictionary[0]).classDiscountId
        }
        onChange={id =>
          addDiscountToItem(
            item,
            discounts.dictionary.find(d => d.classDiscountId === id)
          )
        }
      >
        {discounts.dictionary.map(disc => (
          <Select.Option
            value={disc.classDiscountId}
            key={disc.classDiscountId}
          >
            {disc.discountLabel}
          </Select.Option>
        ))}
      </Select>
      <InputNumber
        min={1}
        max={99}
        step={1}
        value={item.itemCount}
        parser={value => value.slice(1)}
        formatter={value => "x" + value}
        onChange={value => changeItemCount(item, value)}
      />
      <h3 className={styles.CartListItemPrice}>{item.priceWithDiscount}zł</h3>
      <Popconfirm
        title="Sure to delete?"
        style={{ float: "right" }}
        onConfirm={() => removeItemFromCart(item)}
      >
        <Button shape="circle" icon="delete" style={{ float: "right" }} />
      </Popconfirm>
    </List.Item>
  );

  return (
    <Card
      title="Koszyk"
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
      bodyStyle={{ flexGrow: 1, display: "flex" }}
    >
      <div className={styles.CartViewContent}>
        <List
          size="small"
          bordered
          dataSource={cart.items}
          renderItem={renderListItem}
        />
        <div>
          <Divider />
          <div className={styles.CheckoutCardContentFoorter}>
            <h2>Suma:</h2>
            <h1>{cart.totalPriceWithDiscount}zł</h1>
          </div>
          <Button
            onClick={handleSubmit}
            type="primary"
            style={{ float: "right" }}
            disabled={cart.itemCount === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};

CartView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  discounts: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  addDiscountToItem: PropTypes.func.isRequired,
  changeItemCount: PropTypes.func.isRequired
};
