import React from "react";
import { Layout, Menu } from "antd";
import {
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
  SmileTwoTone,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";

const { Sider } = Layout;
const SideMenu = () => (
  <Sider collapsed>
    <Menu defaultSelectedKeys={["1"]} className={styles.menuContainer}>
      <Menu.Item
        key="0"
        icon={<SmileTwoTone twoToneColor="red" />}
        className={styles.logoItem}
        disabled
      />
      <Menu.Item key="1" icon={<MessageOutlined />} />
      <Menu.Item key="2" icon={<UserOutlined />} />
      <Menu.Item key="3" icon={<SettingOutlined />} />
      <Menu.Item key="4" icon={<LogoutOutlined />} className={styles.logout} />
    </Menu>
  </Sider>
);

export default SideMenu;
