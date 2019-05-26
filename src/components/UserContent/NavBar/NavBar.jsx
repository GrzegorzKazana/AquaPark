import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.scss";
import { Menu, Dropdown, Icon, Badge } from "antd";

export const DropdownMenuOverlay = ({
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

export const DropdownMenuOverlayLoggedIn = ({ onLogOut, onOpenFaqModal, onOpenUserDataModal }) => (
  <Menu>
    <Menu.Item key="1" onClick={onOpenUserDataModal}>
      <Icon type="edit" />
      Edit user data
    </Menu.Item>
    <Menu.Item key="2" onClick={onOpenFaqModal}>
      <Icon type="question-circle" />
      FAQ
    </Menu.Item>
    <Menu.Item key="3" onClick={onLogOut}>
      <Icon type="logout" />
      Log out
    </Menu.Item>
  </Menu>
);

const NavBar = ({ views, setOpenPage, numberCartItems, userMenuOverlay }) => {
  const onClick = item => setOpenPage(item.key);
  return (
    <div className={styles.Header}>
      AQUAPARK
      <div className={styles.HeaderMenu}>
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
            <Badge count={numberCartItems}>
              <Icon type="shopping-cart" style={{ fontSize: "1.5rem" }} />
            </Badge>
          </Menu.Item>
        </Menu>
        <Dropdown overlay={userMenuOverlay} className={styles.DropDown}>
          <a className="ant-dropdown-link" href="# ">
            <Icon type="user" />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};
export default NavBar;

DropdownMenuOverlay.propTypes = {
  onOpenLoginModal: PropTypes.func.isRequired,
  onOpenSignUpModal: PropTypes.func.isRequired,
  onOpenFaqModal: PropTypes.func.isRequired
};

DropdownMenuOverlayLoggedIn.propTypes = {
  onLogOut: PropTypes.func.isRequired,
  onOpenFaqModal: PropTypes.func.isRequired,
  onopenUserDataModal: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  views: PropTypes.object.isRequired,
  setOpenPage: PropTypes.func.isRequired,
  numberCartItems: PropTypes.number.isRequired,
  userMenuOverlay: PropTypes.element
};
