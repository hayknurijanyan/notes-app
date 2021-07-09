import React, { useState } from "react";
import { Form, Input, Button, Radio, Col, Row, PageHeader, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";

const Signup = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div className="container" style={{ padding: "140px" }}>
      <Row justify="center">
        <PageHeader
          justify="center"
          className="site-page-header"
          title="Create an account"
        />
      </Row>

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item
          requiredMark="true"
          label="Email"
          required
          //   tooltip="This is a required field"
        >
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item
          requiredMark="true"
          label="Password"
          //   tooltip={{
          //     title: "This is a required field",
          //     icon: <InfoCircleOutlined />,
          //   }}
          required
        >
          <Input placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Row vgutter={8} justify="center">
            <Button style={{ margin: "6px 0" }} block type="primary">
              Sign up
            </Button>
            <Button style={{ margin: "6px 0" }} block type="default">
              Back to Sign in
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
