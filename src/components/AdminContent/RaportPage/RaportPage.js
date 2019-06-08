import React from "react";
import styles from "./RaportPage.module.scss";
import { Card, Tabs, Button, Form, DatePicker } from "antd";

const TimeForm = Form.create()(
  ({ loading, handleSubmit, form: { getFieldDecorator, validateFields } }) => {
    const handleSubmitLocal = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          handleSubmit({
            dateStart: values.startEndTime[0].format("YYYY-MM-DD"),
            dateEnd: values.startEndTime[1].format("YYYY-MM-DD")
          });
        }
      });
    };
    return (
      <Form layout="inline" onSubmit={handleSubmitLocal}>
        <Form.Item label="Okres">
          {getFieldDecorator("startEndTime", {
            rules: [
              { type: "array", required: true, message: "Please select time!" }
            ]
          })(
            <DatePicker.RangePicker
              format="YYYY-MM-DD"
              onChange={(dates, dateStrings) => console.log(dates, dateStrings)}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            icon="file-done"
            loading={loading}
          >
            Generuj raport
          </Button>
        </Form.Item>
      </Form>
    );
  }
);

const RaportPage = ({ raport, getRaport, getTimedRaport }) => {
  return (
    <Card className={styles.RaportPage} title="Raporty">
      <Tabs>
        <Tabs.TabPane tab="Obecne obłożenie" key="occ_now">
          <div className={styles.TabWrapper}>
            <Button
              type="primary"
              shape="round"
              icon="file-done"
              size="large"
              onClick={getRaport}
              loading={raport.fetching}
            >
              Generuj raport
            </Button>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Obłożenie historyczne" key="occ_then">
          <div className={styles.TabWrapper}>
            <TimeForm
              handleSubmit={vals =>
                getTimedRaport(vals.dateStart, vals.dateEnd)
              }
              loading={raport.fetching}
            />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};
export default RaportPage;
