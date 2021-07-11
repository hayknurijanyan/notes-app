import React, { useState } from "react";
import { Form, Input, Button, Radio, Col, Row, PageHeader, Space } from "antd";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { setActiveUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleSignin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.uid,
            userEmail: result.user.email,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container" style={{ padding: "140px" }}>
      <Row justify="center">
        <PageHeader
          justify="center"
          className="site-page-header"
          title="Sign in"
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
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email"
          />
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
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Row vgutter={8} justify="center">
            <Button type="link">Forgot Password?</Button>

            <Button
              onClick={handleSignin}
              style={{ margin: "6px 0" }}
              block
              type="primary"
            >
              Login
            </Button>
            <Button style={{ margin: "6px 0" }} block type="default">
              <Link to="/signup">Create an account</Link>
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signin;
