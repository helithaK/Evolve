import React from "react";
import { Card } from "antd";
import PriceTagComponent from "./PriceTagComponent";
import styles from "./CardComponent.module.css"; 
const { Meta } = Card;

function CardComponent(props) {
  const clickItem = (id) => {
    navigate(`/${item.key}`);
  }

  return (
    <div>
      <Card
        style={{
          width: "15em",
          height: "30em",
        }}
        className={styles['ant-card-body']} 
        cover={<img alt="example" src={props.link} />}
        onClick={clickItem}
      >
        <div>{props.title}</div>
        <PriceTagComponent value={props.price} />
      </Card>
    </div>
  );
}

export default CardComponent;
