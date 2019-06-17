import React from "react";
import PropTypes from "prop-types";
import styles from "./ClassDiscountPage.module.scss";
import { Card } from "antd";
import EditableTable from "../../Common/EditableTable/EditableTable";

const columns = [
  {
    title: "Rodzaj zniżki",
    dataIndex: "socialClassName",
    key: "socialClassName",
    editable: true,
    numberInput: false
  },
  {
    title: "Zniżka",
    dataIndex: "value",
    key: "value",
    editable: true,
    numberInput: true,
    numberRange: { min: 0, max: 1 }
  }
];

const ClassDiscountPage = ({ discounts, editDict }) => {
  return (
    <Card title="Cennik" className={styles.NewsletterPage}>
      <EditableTable
        rowKey="id"
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
