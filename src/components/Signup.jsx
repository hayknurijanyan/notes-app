import React, { useState } from "react";
import { Form, Input, Button, Radio, Col, Row, PageHeader, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { setActiveUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const history = useHistory();

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        dispatch(
          setActiveUser({
            userName: result.user.uid,
            userEmail: result.user.email,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      })
      .then(history.push("/"));
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
          <Input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item requiredMark="true" label="Password" required>
          <Input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Row vgutter={8} justify="center">
            <Button
              onClick={handleSignup}
              style={{ margin: "6px 0" }}
              block
              type="primary"
            >
              Sign up
            </Button>
            <Button style={{ margin: "6px 0" }} block type="default">
              <Link to="/signin">Back to sign in</Link>
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
