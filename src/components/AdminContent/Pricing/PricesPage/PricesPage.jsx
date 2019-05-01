import React from "react";
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
          <Tabs.TabPane tab={price.areaName} key={price.areaId}>
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
