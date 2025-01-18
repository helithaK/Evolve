import React from "react";
import { Tag } from "antd";

function PriceTagComponent(props) {
  return (
    <Tag color="blue" key={props.value}>
      {props.value}
    </Tag>
  );
}

export default PriceTagComponent;
