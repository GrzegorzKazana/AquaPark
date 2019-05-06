import React from "react";
import PropTypes from "prop-types";
import styles from "./CustomerDataView.module.scss";
import { Card, Button, Switch, Divider, Icon } from "antd";
import UserDataForm from "../../../Common/UserDataForm/UserDataForm";

export const CustomerDataView = ({
  edditing,
  setEdditing,
  userLoaded,
  purchaseUserData,
  handleSubmit,
  onOpenLoginModal,
  handleCancel
}) => {
  const formName = "purchaseUserDataForm";
  return (
    <Card
      title="Dane"
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
      bodyStyle={{ flexGrow: 1, display: "flex" }}
    >
      <div className={styles.CustomerDataContent}>
        {userLoaded ? (
          <div className={styles.CustomerDataSwitchWrapper}>
            <Switch checked={edditing} onChange={val => setEdditing(val)} />
            <h2>Edytuj dane z profilu</h2>
          </div>
        ) : (
          <div className={styles.CustomerDataButtonWrapper}>
            <Button onClick={onOpenLoginModal}>
              <Icon type="login" />
              Zaloguj się
            </Button>
            <Divider>Lub wypełnij formularz</Divider>
          </div>
        )}
        <UserDataForm
          formName={formName}
          initialData={purchaseUserData}
          onSubmit={handleSubmit}
          disabled={userLoaded && !edditing}
        />
        <div>
          <Button onClick={handleCancel}>Prev</Button>
          <Button
            form={formName}
            key="submit"
            htmlType="submit"
            type="primary"
            style={{ float: "right" }}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};

CustomerDataView.propTypes = {
  edditing: PropTypes.bool.isRequired,
  setEdditing: PropTypes.func.isRequired,
  userLoaded: PropTypes.bool.isRequired,
  purchaseUserData: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onOpenLoginModal: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};
