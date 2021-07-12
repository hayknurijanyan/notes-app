import React, { useState } from "react";
import { Modal, Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import Edit from "./Edit";

const NotePopOver = ({ text, date, handleEditedText }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (newtext) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <PlusSquareOutlined onClick={showModal} />
      <Modal
        title="Text Editor"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{text}</p>
        {/* <Edit text={text} handleEditedText={handleEditedText} /> */}
      </Modal>
    </>
  );
};
export default NotePopOver;
