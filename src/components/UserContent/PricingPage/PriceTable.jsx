import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "antd";

const columnsWithBuy = onBuyClick => [
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
    render: (text, record) => (
      <Button type="primary" onClick={() => onBuyClick(record)}>
        Kup
      </Button>
    )
  }
];

const PriceTable = ({ tickets, addItemToCart }) => {
  const ticketsWrapped = useMemo(
    () => tickets.map(ticket => ({ ...ticket, key: ticket.ticketTypeId })),
    [tickets]
  );

  const columnsWrapped = useMemo(() => columnsWithBuy(addItemToCart), [
    addItemToCart
  ]);

  return (
    <Table
      columns={columnsWrapped}
      dataSource={ticketsWrapped}
      pagination={false}
    />
  );
};
export default PriceTable;

PriceTable.propTypes = {
  tickets: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired
};
