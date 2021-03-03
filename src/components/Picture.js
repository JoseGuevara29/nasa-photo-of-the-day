import React from "react";
import styled from "styled-components";
const Img = styled.img`
  width: 500px;
  height: 300px;
  margin: 15px;
`;
const Picture = (props) => {
  //   console.log(props.photoMedia);
  //   console.log(props.photo);
  return (
    <div className="imageContainer">
      <Img src={props.photo} className="dailyImage"></Img>
    </div>
  );
};

export default Picture;
