import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';

const { Header } = Layout;

function HeaderComponent() {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();

  const onClickMenu = (item) => {
    
    setCurrent(item.key);
    
    navigate(`/${item.key}`);
    
    console.log("Selected Key:", item.key);
  };

  const items = [
    { key: "", label: <HomeOutlined /> },
    { key: "women", label: `Women` },
    { key: "men", label: `Men` },
    { key: "kids", label: `Kids` },
  ];

  return (
    <Header
      style={{
        display: "flex",
        zIndex: "1",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        top: "0",
        left:"0"
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        selectedKeys={[current]}
        onClick={onClickMenu}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}

export default HeaderComponent;
