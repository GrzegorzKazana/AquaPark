import React, { useState } from "react";
import styles from "./CheckoutPage.module.scss";
import { Card, Steps, Button } from "antd";
import { CartView } from "./CartView/CartView";

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

const CheckoutPage = () => {
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
          <CartView />
        </div>

        <div className={styles.CheckoutFooter}>
          <Button disabled={isStepFirst} onClick={prev}>
            Prev
          </Button>
          <Button disabled={isStepLast} onClick={next} type="primary">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default CheckoutPage;
