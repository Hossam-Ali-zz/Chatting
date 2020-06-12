import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const ChatMessage = ({ messageType, text, date, isCalendar }) => (
  <div
    className={styles.messageContainer}
    style={{
      ...(messageType === "receive" ? { alignItems: "flex-end" } : {}),
    }}
  >
    <p
      className={`${styles.message} ${styles[messageType]}`}
      style={{
        ...(isCalendar ? { backgroundColor: "#eeeef8" } : {}),
      }}
    >
      {text}
    </p>
    <span
      style={{
        color: "#B4B4B4",
        ...(messageType === "receive" ? { alignItems: "flex-end" } : {}),
      }}
    >
      {messageType === "receive" ? (
        <>
          {date}{" "}
          <Avatar
            size={30}
            icon={<UserOutlined />}
            className={styles.avatarImage}
          />
        </>
      ) : (
        <>
          <Avatar
            size={30}
            icon={<UserOutlined />}
            className={styles.avatarImage}
          />{" "}
          {date}
        </>
      )}
    </span>
  </div>
);

export default ChatMessage;
