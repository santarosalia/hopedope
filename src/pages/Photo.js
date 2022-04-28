import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import "./photo.css";

const Photo = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <div className="photo">
      <h3>사진입니당</h3>
      <div>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
  function Item(props) {
    return (
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    );
  }
};

export default Photo;
