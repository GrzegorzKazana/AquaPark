import React from "react";

export const PayuView = ({ handleBuy }) => (
  <form method="post" action="https://secure.payu.com/api/v2_1/orders">
    <input type="hidden" name="continueUrl" value="http://shop.url/continue" />
    <input type="hidden" name="currencyCode" value="PLN" />
    <input type="hidden" name="customerIp" value="123.123.123.123" />
    <input type="hidden" name="description" value="Order description" />
    <input type="hidden" name="merchantPosId" value="145227" />
    <input type="hidden" name="notifyUrl" value="http://shop.url/notify" />
    <input type="hidden" name="products[0].name" value="Product 1" />
    <input type="hidden" name="products[0].quantity" value="1" />
    <input type="hidden" name="products[0].unitPrice" value="1000" />
    <input type="hidden" name="totalAmount" value="1000" />
    <input
      type="hidden"
      name="OpenPayu-Signature"
      value="sender=145227;algorithm=SHA-256;signature=bc94a8026d6032b5e216be112a5fb7544e66e23e68d44b4283ff495bdb3983a8"
    />
    <button
      style={{
        border: "0px",
        height: "50px",
        width: "290px",
        background:
          "url('http://static.payu.com/pl/standard/partners/buttons/payu_account_button_long_03.png')",
        backgroundRepeat: "no-repeat",
        cursor: "pointer"
      }}
      type="submit"
      id="payu-payment-form"
      formTarget="_blank"
      onClick={handleBuy}
    />
  </form>
);
