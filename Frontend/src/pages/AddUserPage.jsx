import React from "react";
import FooterComponent from "../components/footer/FooterComponent";
import BodyComponent from "../components/body/BodyComponent";
import { Layout, theme } from "antd";

function AddUserPage() {
  return (
    <Layout>
      <BodyComponent>
        <h1>Add user</h1>
      </BodyComponent>
      <FooterComponent />
    </Layout>
  )
}

export default AddUserPage