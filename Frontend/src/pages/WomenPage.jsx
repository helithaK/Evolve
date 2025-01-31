import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import BodyComponent from "../components/body/BodyComponent";
import { Layout, theme } from "antd";

const WomenPage = () => {
  return (
    <Layout>
      <BodyComponent>
        <h1>Women</h1>
      </BodyComponent>
      <FooterComponent />
    </Layout>
  );
};
export default WomenPage;
