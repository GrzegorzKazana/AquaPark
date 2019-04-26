import React from "react";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon } from "antd";

const DropdownMenuOverlay = ({ onLogOut, onOpenFaqModal }) => (
  <Menu>
    <Menu.Item key="1" onClick={onOpenFaqModal}>
      <Icon type="question-circle" />
      FAQ
    </Menu.Item>
    <Menu.Item key="2" onClick={onLogOut}>
      <Icon type="logout" />
      Log out
    </Menu.Item>
  </Menu>
);

const NavBarLoggedIn = ({ setOpenPage, onLogOut, onOpenFaqModal }) => {
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
      <Dropdown
        overlay={
          <DropdownMenuOverlay
            onLogOut={onLogOut}
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
export default NavBarLoggedIn;
