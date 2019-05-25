import React from "react";
import PropTypes from "prop-types";
import styles from "./ClassDiscountPage.module.scss";
import { Card } from "antd";
import EditableTable from "../../Common/EditableTable/EditableTable";

const columns = [
  {
    title: "Rodzaj zniżki",
    dataIndex: "discountLabel",
    key: "discountLabel",
    editable: true,
    numberInput: false
  },
  {
    title: "Nazwa klasy",
    dataIndex: "className",
    key: "className",
    editable: true,
    numberInput: false
  },
  {
    title: "Zniżka",
    dataIndex: "discountRate",
    key: "discountRate",
    editable: true,
    numberInput: true
  }
];

const ClassDiscountPage = ({ discounts, editDict }) => {
  return (
    <Card title="Cennik" className={styles.NewsletterPage}>
      <EditableTable
        rowKey="classDiscountId"
        dataDefault={discounts.dictionary}
        columns={columns}
        onSubmit={editDict}
      />
    </Card>
  );
};
export default ClassDiscountPage;

ClassDiscountPage.propTypes = {
  discounts: PropTypes.object.isRequired,
  editDict: PropTypes.func.isRequired
};
