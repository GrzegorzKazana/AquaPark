import React, { useState, useEffect } from "react";
import styles from "./CheckoutPage.module.scss";
import { Card, Steps } from "antd";
import { CartView } from "./CartView/CartView";
import { CustomerDataView } from "./CustomerDataView/CustomerDataView";
import { PurchaseView } from "./PurchaseView/PurchaseView";

const CheckoutPage = ({
  onOpenLoginModal,
  user,
  cart,
  removeItemFromCart,
  addDiscountToItem,
  discounts
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const prev = () => setCurrentStep(currentStep - 1);
  const next = () => setCurrentStep(currentStep + 1);

  const [purchaseUserData, setPurchaseUserData] = useState(user.user);
  const [edittingPurchaseUserData, setEdittingPurchaseUserData] = useState(
    false
  );

  useEffect(() => {
    setPurchaseUserData(user.user);
  }, [user.user]);

  const handleDataSubmit = userData => {
    next();
    console.log(userData);
    setPurchaseUserData(userData);
  };

  const handleBuy = () => {
    console.log(purchaseUserData);
    console.log(cart);
  };

  const steps = [
    {
      title: "Koszyk",
      content: (
        <CartView
          handleSubmit={next}
          purchaseUserData={purchaseUserData}
          cart={cart}
          discounts={discounts}
          removeItemFromCart={removeItemFromCart}
          addDiscountToItem={addDiscountToItem}
        />
      )
    },
    {
      title: "Dane",
      content: (
        <CustomerDataView
          edditing={edittingPurchaseUserData}
          setEdditing={setEdittingPurchaseUserData}
          userLoaded={user.userLoaded}
          purchaseUserData={purchaseUserData}
          handleCancel={prev}
          handleSubmit={handleDataSubmit}
          onOpenLoginModal={onOpenLoginModal}
        />
      )
    },
    {
      title: "Zakup",
      content: <PurchaseView handleCancel={prev} handleBuy={handleBuy} />
    }
  ];

  return (
    <Card className={styles.CheckoutPage} bodyStyle={{ height: "100%" }}>
      <div className={styles.CheckoutContent}>
        <Steps current={currentStep}>
          {steps.map(item => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={styles.CheckoutMain}>{steps[currentStep].content}</div>
      </div>
    </Card>
  );
};
export default CheckoutPage;
