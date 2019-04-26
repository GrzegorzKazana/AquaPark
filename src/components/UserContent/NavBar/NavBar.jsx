import React from "react";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon } from "antd";

const DropdownMenuOverlay = () => (
  <Menu>
    <Menu.Item key="1">
      <Icon type="question-circle" />
      FAQ
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="login" />
      Log in
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user-add" />
      Sign up
    </Menu.Item>
  </Menu>
);

const NavBar = ({ setOpenPage }) => {
  return (
    <>
      <Menu mode="horizontal" theme="dark" onClick={e => setOpenPage(e.key)}>
        <Menu.Item key="0">
          <Icon type="info-circle" />
          Witaj
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="smile" />
          Atrakcje
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="dollar" />
          Cennik
        </Menu.Item>
      </Menu>
      <Dropdown overlay={<DropdownMenuOverlay />} className={styles.DropDown}>
        <a className="ant-dropdown-link">
          <Icon type="user" />
        </a>
      </Dropdown>
    </>
  );
};
export default NavBar;
