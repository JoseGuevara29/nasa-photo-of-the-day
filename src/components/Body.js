import React from "react";
import styled from "styled-components";

const Body = (props) => {
  //   console.log(props.photoMedia);
  //   console.log(props.photo);

  return (
    <div>
      <Title>{props.photoTitle}</Title>
      <Date>{props.photoDate}</Date>
      <Para>{props.photoExplanation}</Para>
    </div>
  );
};

export default Body;

const Title = styled.h1`
  font-size: 1.2rem;
  /* display: flex; */
  /* padding: 0px 0px 0px 40px; */
`;
const Date = styled.h3`
  font-size: 0.9rem;
  /* display: flex; */
  /* text-align: center; */
  /* padding: 0px 0px 0px 40px; */
`;

const Para = styled.p`
  width: auto;
  margin: 15px;
  font-size: 0.7rem;
  font-weight: 500;
`;
