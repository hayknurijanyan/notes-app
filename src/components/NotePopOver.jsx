import React, { useState } from "react";
import { Modal, Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

const NotePopOver = ({ text, date }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <PlusSquareOutlined onClick={showModal} />
      <Modal
        title="Text Editor"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default NotePopOver;
