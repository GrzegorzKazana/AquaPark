import React, { useState } from "react";
import styles from "./CheckoutPage.module.scss";
import { Card, Steps, Button } from "antd";
import { CartView } from "./CartView/CartView";
import { CustomerDataView } from "./CustomerDataView/CustomerDataView";

const steps = [
  {
    title: "First",
    content: "First-content"
  },
  {
    title: "Second",
    content: "Second-content"
  },
  {
    title: "Last",
    content: "Last-content"
  }
];

const CheckoutPage = ({ onOpenLoginModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isStepFirst = currentStep === 0;
  const isStepLast = currentStep === steps.length;
  const prev = () => setCurrentStep(currentStep - 1);
  const next = () => setCurrentStep(currentStep + 1);

  return (
    <Card className={styles.CheckoutPage} bodyStyle={{ height: "100%" }}>
      <div className={styles.CheckoutContent}>
        <Steps current={currentStep}>
          {steps.map(item => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={styles.CheckoutMain}>
          {/* <CartView handleSubmit={next} /> */}
          <CustomerDataView
            handleSubmit={next}
            onOpenLoginModal={onOpenLoginModal}
          />
        </div>
      </div>
    </Card>
  );
};
export default CheckoutPage;
