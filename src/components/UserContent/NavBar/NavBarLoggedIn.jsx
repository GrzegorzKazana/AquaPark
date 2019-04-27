import React from "react";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon, Badge } from "antd";

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

const NavBarLoggedIn = ({ views, setOpenPage, onLogOut, onOpenFaqModal }) => {
  return (
    <div className={styles.Header}>
      AQUAPARK
      <div className={styles.HeaderMenu}>
        <Menu mode="horizontal" theme="dark" onClick={e => setOpenPage(e.key)}>
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
      </div>
    </div>
  );
};
export default NavBarLoggedIn;
