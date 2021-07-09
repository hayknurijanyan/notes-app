import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const SearchCont = ({ onSearchClick }) => {
  const onSearch = (value) => {
    onSearchClick(value);
  };

  return (
    <div style={{ margin: " 20px 0" }}>
      <Space align="center">
        <Search
          placeholder="Search note"
          onSearch={onSearch}
          onChange={(e) => onSearchClick(e.target.value)}
          style={{ width: 930 }}
        />
      </Space>
    </div>
  );
};

export default SearchCont;
