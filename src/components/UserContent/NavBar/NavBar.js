import React from "react";
import { Menu, Icon } from "antd";

const NavBar = () => (
  <Menu mode="horizontal" theme="dark">
    <Menu.SubMenu
      title={
        <span>
          <Icon type="mail" />
          One
        </span>
      }
    >
      <Menu.Item>asdasd</Menu.Item>
      <Menu.Item>fghfgh</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu
      title={
        <span>
          <Icon type="mail" />
          One
        </span>
      }
    >
      <Menu.Item>asdasd</Menu.Item>
      <Menu.Item>fghfgh</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu
      title={
        <span>
          <Icon type="mail" />
          One
        </span>
      }
    >
      <Menu.Item>asdasd</Menu.Item>
      <Menu.Item>fghfgh</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
export default NavBar;
