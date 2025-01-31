import React from "react";
import FooterComponent from "./components/footer/FooterComponent";
import BodyComponent from "./components/body/BodyComponent";
import { Layout, List } from "antd";
import GridComponent from "./components/body/GridComponent";

const App = () => {
  return (
    <Layout>
      <BodyComponent>
        <h1>Home</h1>
        <GridComponent/>
      </BodyComponent>
      <FooterComponent />
    </Layout>
  );
};
export default App;
