import React, { useMemo } from "react";
import { Table, Button } from "antd";

const columns = [
  {
    title: "Rodzaj biletu",
    dataIndex: "ticketTypeName",
    key: "ticketTypeName"
  },
  {
    title: "Cena",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "",
    dataIndex: "ticketAction",
    key: "ticketAction",
    render: () => <Button type="primary">Kup</Button>
  }
];

const PriceTable = ({ tickets }) => {
  const ticketsWrapped = useMemo(
    () => tickets.map(ticket => ({ ...ticket, key: ticket.ticketTypeId })),
    [tickets]
  );

  return (
    <Table columns={columns} dataSource={ticketsWrapped} pagination={false} />
  );
};
export default PriceTable;
