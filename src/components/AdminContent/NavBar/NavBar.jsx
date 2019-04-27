import React from "react";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon } from "antd";

const DropdownMenuOverlay = ({ onLogOut }) => (
  <Menu>
    <Menu.Item key="1" onClick={onLogOut}>
      <Icon type="logout" />
      Log out
    </Menu.Item>
  </Menu>
);

const NavBar = ({ onLogOut }) => {
  return (
    <div className={styles.Header}>
      <span>PANEL ADMINISTRACYJNY</span>
      <Dropdown
        overlay={<DropdownMenuOverlay onLogOut={onLogOut} />}
        className={styles.DropDown}
      >
        <a className="ant-dropdown-link" href="# ">
          <Icon type="user" />
        </a>
      </Dropdown>
    </div>
  );
};
export default NavBar;
