import React, { useState, useMemo } from "react";
import styles from "./CheckoutPage.module.scss";
import { Card, Steps } from "antd";
import { CartView } from "./CartView/CartView";
import { CustomerDataView } from "./CustomerDataView/CustomerDataView";
import { PurchaseView } from "./PurchaseView/PurchaseView";

const CheckoutPage = ({ onOpenLoginModal, cart }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const prev = () => setCurrentStep(currentStep - 1);
  const next = () => setCurrentStep(currentStep + 1);

  const steps = useMemo(
    () => [
      {
        title: "Koszyk",
        content: <CartView handleSubmit={next} cart={cart} />
      },
      {
        title: "Dane",
        content: (
          <CustomerDataView
            handleCancel={prev}
            handleSubmit={next}
            onOpenLoginModal={onOpenLoginModal}
          />
        )
      },
      {
        title: "Zakup",
        content: <PurchaseView handleCancel={prev} />
      }
    ],
    [onOpenLoginModal, prev, next, cart]
  );

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
