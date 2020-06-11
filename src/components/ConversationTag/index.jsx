import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const ConversationTag = ({ name, date, chatMsg, unSeenCount, extra }) => (
  <>
    <Avatar size={45} icon={<UserOutlined />} className={styles.avatarImage} />
    <div className={styles.chatContainer}>
      <div className={styles.chatMsg}>
        <p className={styles.chatName}>{name}</p>
        <p className={styles.chatDate}>{date}</p>
      </div>
      <div className={styles.chatMsg}>
        {extra ? (
          <p className={styles.chatExtra}>{extra}</p>
        ) : (
          <p className={styles.chatMessage}>{chatMsg}</p>
        )}
        {unSeenCount && (
          <span className={styles.unSeen}>
            <p className={styles.unSeenText}>{unSeenCount}</p>
          </span>
        )}
      </div>
      {!!extra && <p className={styles.chatMessage}>{chatMsg}</p>}
    </div>
  </>
);

export default ConversationTag;
