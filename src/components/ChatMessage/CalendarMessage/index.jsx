import React from "react";
import { Avatar } from "antd";
import {
  UserOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  CheckOutlined,
  SmileTwoTone,
  RedoOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";

const CalendarMessage = ({
  calendarTitle,
  isDone,
  messageType,
  text,
  date,
  completedBy,
  completedTime,
  calendarDate,
  isCalendar,
  calendarSubTitle,
}) => (
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
        ...(isDone ? { width: "70%" } : { width: "50%" }),
      }}
    >
      <p className={styles.calendarTitle}> {calendarTitle}</p>
      <div
        className={styles.messageBody}
        style={{
          ...(isDone ? { width: "15%" } : {}),
        }}
      >
        <span className={styles.clockIconContainer}>
          <ClockCircleOutlined />{" "}
          <p className={styles.calendarDate}>{calendarDate}</p>
        </span>
        <p className={styles.calendarSubTitle}>{calendarSubTitle}</p>
      </div>
      {isDone ? (
        <>
          <div className={styles.calendarIconContainer}>
            <CalendarOutlined />
            <p className={styles.calendarText}>{text}</p>
          </div>
          <br />
          <div className={styles.isDoneContainer}>
            <span className={styles.calendarFooterContainer}>
              <CheckOutlined />
              <p className={styles.isDone}>done</p>
            </span>
            <div className={styles.calendarCompletedContainer}>
              <span className={styles.calendarCompletedBy}>
                {completedBy}
                <br />
                {completedTime}
              </span>
              <Avatar
                size={30}
                icon={<UserOutlined />}
                className={styles.avatarImage}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.caldenerFooterContainer}>
          <div className={styles.calendarServeContainer}>
            <SmileTwoTone />
            <p className={styles.calenderServeText}>Severe</p>
          </div>
          <div className={styles.calendarHistoryContainer}>
            <RedoOutlined />
            <p className={styles.calendarHistoryText}> View History</p>
          </div>
        </div>
      )}
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

export default CalendarMessage;
