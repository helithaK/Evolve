import React from "react";
import { makeStyles } from "@mui/styles";
import { Input, Space } from 'antd';
const { Search } = Input;


// Using makeStyles to define styles outside the function component
const useStyles = makeStyles({
  search_bar: {
    position:'fixed',
    bottom: '2vh',
    right:'15vw',
    width: '70vw',
    border:'10px',
    borderColor:'red'
  },
});

function FooterComponent() {
  const classes = useStyles();
  return (
    <div className={classes.search_bar}>
     <Space.Compact style={{display: 'flex',}}>
      <Search  placeholder="input search text" allowClear />
    </Space.Compact>
    </div>
  );
}

export default FooterComponent;
