import React from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../redux/userSlice";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="account" style={{ padding: "20px" }}>
      <Avatar
        style={{ marginRight: "10px" }}
        size="large"
        icon={<UserOutlined />}
      />
      <Button onClick={handleSignout} type="dashed">
        Sign Out
      </Button>
    </div>
  );
};

export default Account;
