import React, { useState } from "react";
import styles from "./NewsletterPage.module.scss";
import { Card, Input, Button } from "antd";

const NewsletterPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Card title="Newsletter" className={styles.NewsletterPage}>
      <Input.TextArea
        autosize={{ minRows: 3, maxRows: 12 }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button type="primary" className={styles.NewsletterEndButton}>
        Wyślij
      </Button>
    </Card>
  );
};
export default NewsletterPage;
