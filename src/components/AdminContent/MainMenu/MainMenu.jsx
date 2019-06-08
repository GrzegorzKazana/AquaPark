import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "antd";

const MainMenu = ({ setOpenPage, views }) => {
  const onClick = item => setOpenPage(item.key);
  return (
    <Menu theme="light" mode="inline" onClick={onClick}>
      <Menu.Item key={views.OCCUPACY}>
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
        <Menu.Item key={views.PRICES}>Ceny</Menu.Item>
        <Menu.Item key={views.CLASS_DISCOUNT}>Zniżki klas</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key={views.NEWSLETTER}>
        <Icon type="mail" />
        Newsletter
      </Menu.Item>
      <Menu.Item key={views.REPORT}>
        <Icon type="file-done" />
        Raporty
      </Menu.Item>
    </Menu>
  );
};
export default MainMenu;

MainMenu.propTypes = {
  setOpenPage: PropTypes.func.isRequired,
  views: PropTypes.object.isRequired
};
