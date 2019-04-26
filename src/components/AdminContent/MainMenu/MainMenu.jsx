import React from "react";
import { Menu, Icon, Switch } from "antd";

const MainMenu = () => (
  <Menu
    theme="light"
    //   onClick={this.handleClick}
    mode="inline"
  >
    <Menu.Item key="1">
      <Icon type="fund" />
      Obłożenie
    </Menu.Item>
    <Menu.SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="dollar" />
          <span>Cennik</span>
        </span>
      }
    >
      <Menu.Item key="2">Ceny</Menu.Item>
      <Menu.Item key="3">Zniżki periodyczne</Menu.Item>
      <Menu.Item key="4">Zniżki klas</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="book" />
          <span>Słowniki</span>
        </span>
      }
    >
      <Menu.Item key="5">Słownik A</Menu.Item>
      <Menu.Item key="6">Słownik B</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item key="7">
      <Icon type="mail" />
      Newsletter
    </Menu.Item>
    <Menu.Item key="8">
      <Icon type="file-done" />
      Raporty
    </Menu.Item>
  </Menu>
);
export default MainMenu;
