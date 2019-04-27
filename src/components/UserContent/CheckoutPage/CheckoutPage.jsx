import React, { useState } from "react";
import styles from "./CheckoutPage.module.scss";
import { Card, Steps, Button } from "antd";
import { CartView } from "./CartView/CartView";
import { CustomerDataView } from "./CustomerDataView/CustomerDataView";
import { PurchaseView } from "./PurchaseView/PurchaseView";

const CheckoutPage = ({ onOpenLoginModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const prev = () => setCurrentStep(currentStep - 1);
  const next = () => setCurrentStep(currentStep + 1);

  const steps = [
    {
      title: "First",
      content: <CartView handleSubmit={next} />
    },
    {
      title: "Second",
      content: (
        <CustomerDataView
          handleCancel={prev}
          handleSubmit={next}
          onOpenLoginModal={onOpenLoginModal}
        />
      )
    },
    {
      title: "Last",
      content: <PurchaseView handleCancel={prev} />
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
