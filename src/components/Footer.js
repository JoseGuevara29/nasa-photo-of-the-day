import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px auto;
  background-color: #e6e6e6;
  text-decoration: none;
`;
export default function Footer(props) {
  return (
    <div>
      <Foot>
        <footer>
          <p>Developer's name {props.nameDev}</p>
          <p>
            Developer's <a href="{props.gitHub}">GitHub</a>
          </p>
          <p>{props.address}</p>
        </footer>
      </Foot>
    </div>
  );
}
