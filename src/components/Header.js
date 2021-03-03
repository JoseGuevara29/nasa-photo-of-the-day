import React from "react";
import styled from "styled-components";
const Head = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #e6e6e6;
`;
const Title = styled.h1`
  text-align: center;
  padding: 0 15px 0px 0px;
`;

export default function Header(props) {
  //   console.log(props);

  return (
    <div>
      <Head>
        <Title>{props.header}</Title>
      </Head>
    </div>
  );
}
