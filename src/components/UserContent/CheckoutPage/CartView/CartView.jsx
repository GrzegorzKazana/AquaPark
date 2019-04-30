import React from "react";
import styles from "./CartView.module.scss";
import { Card, List, Popconfirm, Button, Select, Divider } from "antd";

export const CartView = ({
  handleSubmit,
  cart,
  discounts,
  removeItemFromCart,
  addDiscountToItem
}) => {
  const renderListItem = item => (
    <List.Item className={styles.CartListItem}>
      <h4 className={styles.CartListItemTitle}>{item.ticketTypeName}</h4>
      <Select
        style={{ width: "150px" }}
        defaultValue={
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
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
