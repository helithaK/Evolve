import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
const { Content } = Layout;


function BodyComponent({children}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
      <Content
        style={{
          padding: "0 48px",
          height: "100vh",
          marginTop: "20px"
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            backgroundColor:'white',
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            height: "100vh"
          }}
        >
            {children}
        </div>
      </Content>
  );
}

export default BodyComponent;
