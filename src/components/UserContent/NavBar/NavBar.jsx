import React from "react";
import { Menu, Icon } from "antd";

const NavBar = () => (
  <Menu mode="horizontal" theme="dark">
    <Menu.Item key="mail">
      <Icon type="mail" />
      Witaj
    </Menu.Item>
    <Menu.SubMenu
      title={
        <span>
          <Icon type="mail" />
          Atrakcje
        </span>
      }
    >
      <Menu.Item>Strefa Basenów</Menu.Item>
      <Menu.Item>Strefa Saun</Menu.Item>
      <Menu.Item>Strefa Spa</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu
      title={
        <span>
          <Icon type="mail" />
          Cennik
        </span>
      }
    >
      <Menu.Item>Cennik Basenów</Menu.Item>
      <Menu.Item>Cennik Saun</Menu.Item>
      <Menu.Item>Cennik Spa</Menu.Item>
      <Menu.Item>Cennik karnetów</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
export default NavBar;
