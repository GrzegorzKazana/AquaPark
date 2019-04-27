import React from "react";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon, Badge } from "antd";

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
          <Icon type="info-circle" style={{ fontSize: "1.5rem" }} />
          Witaj
        </Menu.Item>
        <Menu.Item key={views.AREAS}>
          <Icon type="smile" style={{ fontSize: "1.5rem" }} />
          Atrakcje
        </Menu.Item>
        <Menu.Item key={views.PRICES}>
          <Icon type="dollar" style={{ fontSize: "1.5rem" }} />
          Cennik
        </Menu.Item>
        <Menu.Item key={views.CHECKOUT}>
          <Badge count={2}>
            <Icon type="shopping-cart" style={{ fontSize: "1.5rem" }} />
          </Badge>
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
          <Icon type="user" style={{ fontSize: "1.5rem" }} />
        </a>
      </Dropdown>
    </>
  );
};
export default NavBar;
