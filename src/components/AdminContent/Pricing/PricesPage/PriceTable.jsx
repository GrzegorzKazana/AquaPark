import React from "react";
import { Table, Button } from "antd";

const columns = [
  {
    title: "Rodzaj biletu",
    dataIndex: "ticketType",
    key: "ticketType"
  },
  {
    title: "Cena",
    dataIndex: "ticketPrice",
    key: "ticketPrice"
  },
  {
    title: "",
    dataIndex: "ticketAction",
    key: "ticketAction",
    render: (text, record) => (
      <Button type="primary" style={{ float: "right" }}>
        Edit
      </Button>
    )
  }
];

const data = [
  {
    key: "1",
    ticketType: "Bilet poranny 6:00-12:00",
    ticketPrice: "30zł"
  },
  {
    key: "2",
    ticketType: "Bilet popołudniowy 12:00-18:00",
    ticketPrice: "30zł"
  },
  {
    key: "3",
    ticketType: "Bilet wieczorny 18:00-22:00",
    ticketPrice: "40zł"
  },
  {
    key: "4",
    ticketType: "Bilet całodniowy",
    ticketPrice: "50zł"
  }
];

const PriceTable = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
);
export default PriceTable;
