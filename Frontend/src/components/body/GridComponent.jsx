import React from "react";
import CardComponent from "./card/CardComponent";
import { List } from "antd";

function GridComponent(props) {
  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 7,
        }}
        dataSource={props.products}
        renderItem={(product) => (
          <List.Item>
            <CardComponent
              link={product.images[0]}
              title={product.title}
              price={product.price}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default GridComponent;
