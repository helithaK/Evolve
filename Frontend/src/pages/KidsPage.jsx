import React from "react";
import FooterComponent from "../components/footer/FooterComponent";
import BodyComponent from "../components/body/BodyComponent";
import { Layout, theme } from "antd";

const KidsPage = () => {
  return (
    <Layout>
      
      <BodyComponent>
        <h1>Kids</h1>
      </BodyComponent>
      <FooterComponent />
    </Layout>
  );
};
export default KidsPage;
