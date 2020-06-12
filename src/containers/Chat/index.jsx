import React, { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Typography, Input } from "antd";
import {
  MessageOutlined,
  UsergroupDeleteOutlined,
  FilterOutlined,
  SearchOutlined,
  PlusOutlined,
  SendOutlined,
} from "@ant-design/icons";
import moment from "moment";
import SideMenu from "../../components/SideMenu";
import ConversationTag from "../../components/ConversationTag";
import ChatMessage from "../../components/ChatMessage/NormalMessage";
import CalendarMessage from "../../components/ChatMessage/CalendarMessage";
import Conversations from "../../assets/constants/conversations.json";
import Messages from "../../assets/constants/messages.json";
import styles from "./styles.module.scss";

const { Header, Content } = Layout;
const { Title } = Typography;

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setChatMessages(Messages);
  }, []);

  const handleSendMessage = () => {
    setMessage("");
    if (message.length > 0) {
      const length = chatMessages.length;
      const newMessageArray = [...chatMessages];
      newMessageArray[length] = {
        messageType: "receive",
        date: moment().format("h:mma"),
        text: message,
      };
      setChatMessages(newMessageArray);
    }
  };

  return (
    <Layout className={styles.layoutIntro}>
      <SideMenu />
      <Layout className={`site-layout ${styles.layoutContainer}`}>
        <Row>
          <Col span={7}>
            <Header
              className={`site-layout-background ${styles.coversationHeader}`}
            >
              <div className={styles.coversationContainer}>
                <Title level={3} className={styles.coversationTitle}>
                  Conversation
                </Title>
                <MessageOutlined />
              </div>
            </Header>
            <Content className={styles.coversationConent}>
              <Menu defaultSelectedKeys={["0"]}>
                {Conversations.map((conv, index) => (
                  <Menu.Item key={index} className={styles.conversationItem}>
                    <ConversationTag
                      name={conv.name}
                      date={conv.date}
                      chatMsg={conv.chatMsg}
                      unSeenCount={conv.unSeenCount}
                      extra={conv.extra}
                    />
                  </Menu.Item>
                ))}
              </Menu>
            </Content>
          </Col>
          <Col span={17} style={{ backgroundColor: "#f0f0f0" }}>
            <Header
              className={`site-layout-background ${styles.headerContainer}`}
            >
              <div className={styles.headerTitleContainer}>
                <span className={styles.headerTitle}>Mom’s Discharge Plan</span>
                <div className={styles.headerIcons}>
                  <UsergroupDeleteOutlined />
                  <FilterOutlined />
                  <SearchOutlined />
                </div>
              </div>
            </Header>
            <Content className={styles.messageContainer}>
              <div className={`site-layout-background ${styles.chatContainer}`}>
                <span className={styles.chatInfo}>
                  <h4 className={styles.chatInfoTitle}>
                    Starter Care Plan created + daily actions added
                  </h4>
                  <h5 className={styles.chatInfoDate}>12:10p</h5>
                </span>
                {chatMessages.map((msg, index) =>
                  msg.isCalendar ? (
                    <CalendarMessage
                      ket={index}
                      calendarTitle={msg.calendarTitle}
                      messageType={msg.messageType}
                      date={msg.date}
                      text={msg.text}
                      isDone={msg.isDone}
                      completedBy={msg.completedBy}
                      completedTime={msg.completedTime}
                      calendarDate={msg.calendarDate}
                      calendarSubTitle={msg.calendarSubTitle}
                    />
                  ) : (
                    <ChatMessage
                      ket={index}
                      messageType={msg.messageType}
                      date={msg.date}
                      text={msg.text}
                    />
                  )
                )}
              </div>
              <div className={styles.chatSendMessage}>
                <span className={styles.chatFooterAttachment}>
                  <PlusOutlined className={styles.attachmentIcon} />
                </span>
                <div className={styles.chatFooterContainer}>
                  <Input
                    placeholder="message"
                    className={styles.chatMessageInput}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) =>
                      e.keyCode === 13 ? handleSendMessage() : {}
                    }
                  />
                  <SendOutlined onClick={() => handleSendMessage()} />
                </div>
              </div>
            </Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Chat;
