import React from "react";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon } from "antd";

const DropdownMenuOverlay = ({
  onOpenLoginModal,
  onOpenSignUpModal,
  onOpenFaqModal
}) => (
  <Menu>
    <Menu.Item key="1" onClick={onOpenFaqModal}>
      <Icon type="question-circle" />
      FAQ
    </Menu.Item>
    <Menu.Item key="2" onClick={onOpenLoginModal}>
      <Icon type="login" />
      Log in
    </Menu.Item>
    <Menu.Item key="3" onClick={onOpenSignUpModal}>
      <Icon type="user-add" />
      Sign up
    </Menu.Item>
  </Menu>
);

const NavBar = ({
  views,
  setOpenPage,
  onOpenLoginModal,
  onOpenSignUpModal,
  onOpenFaqModal
}) => {
  const onClick = item => setOpenPage(item.key);
  return (
    <>
      <Menu mode="horizontal" theme="dark" onClick={onClick}>
        <Menu.Item key={views.WELCOME}>
          <Icon type="info-circle" />
          Witaj
        </Menu.Item>
        <Menu.Item key={views.AREAS}>
          <Icon type="smile" />
          Atrakcje
        </Menu.Item>
        <Menu.Item key={views.PRICES}>
          <Icon type="dollar" />
          Cennik
        </Menu.Item>
      </Menu>
      <Dropdown
        overlay={
          <DropdownMenuOverlay
            onOpenLoginModal={onOpenLoginModal}
            onOpenSignUpModal={onOpenSignUpModal}
            onOpenFaqModal={onOpenFaqModal}
          />
        }
        className={styles.DropDown}
      >
        <a className="ant-dropdown-link" href="# ">
          <Icon type="user" />
        </a>
      </Dropdown>
    </>
  );
};
export default NavBar;
