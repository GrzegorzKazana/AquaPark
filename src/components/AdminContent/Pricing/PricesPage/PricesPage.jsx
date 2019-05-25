import React from "react";
import PropTypes from "prop-types";
import styles from "./PricesPage.module.scss";
import { Card, Tabs } from "antd";
import EditableTable from "../../Common/EditableTable/EditableTable";
import PeriodDiscountForm from "./EditableTableForm";

const columns = [
  {
    title: "Rodzaj biletu",
    dataIndex: "ticketTypeName",
    key: "ticketTypeName",
    editable: true,
    numberInput: false
  },
  {
    title: "Godzina rozpoczęcia",
    dataIndex: "startHour",
    key: "startHour",
    editable: true,
    numberInput: true,
    numberRange: { min: 0, max: 24 }
  },
  {
    title: "Godzina zakończenia",
    dataIndex: "endHour",
    key: "endHour",
    editable: true,
    numberInput: true,
    numberRange: { min: 0, max: 24 }
  },
  {
    title: "Cena",
    dataIndex: "price",
    key: "price",
    editable: true,
    numberInput: true
  }
];

const PricesPage = ({ prices }) => {
  return (
    <Card title="Cennik" className={styles.NewsletterPage}>
      <Tabs tabPosition="top">
        {prices.dictionary.map(price => (
          <Tabs.TabPane tab={price.zoneName} key={price.zoneId}>
            <EditableTable
              rowKey={"ticketTypeId"}
              dataDefault={price.ticketTypes}
              columns={columns}
              onSubmit={data => console.log(data)}
              createExpandedRowRender={(dataSource, setDataSource) => (
                record,
                index
              ) => {
                const handleDiscountSubmit = index => discountData => {
                  setDataSource(
                    dataSource.map((data, idx) =>
                      index === idx
                        ? { ...data, periodDiscount: discountData }
                        : data
                    )
                  );
                };

                const handleDiscountDelete = index => () =>
                  setDataSource(
                    dataSource.map((data, idx) =>
                      index === idx ? { ...data, periodDiscount: null } : data
                    )
                  );
                return (
                  <PeriodDiscountForm
                    ticket={record}
                    handleSubmit={handleDiscountSubmit(index)}
                    handleDelete={handleDiscountDelete(index)}
                  />
                );
              }}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Card>
  );
};
export default PricesPage;

PricesPage.propTypes = {
  prices: PropTypes.object.isRequired
};
