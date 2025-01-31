import React from "react";
import FooterComponent from "../components/footer/FooterComponent";
import BodyComponent from "../components/body/BodyComponent";
import { Layout, theme } from "antd";

const MenPage = () => {
  return (
    <Layout>
      <BodyComponent>
        <h1>Men</h1>
      </BodyComponent>
      <FooterComponent />
    </Layout>
  );
};
export default MenPage;
