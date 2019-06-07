import React from "react";
import Style from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledDiv = Style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const StyledSpan1 = Style.span`
  margin-left: 25px;
  flex: 1;
`;

const StyledSpan2 = Style.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledSpan1>SMARCH 32, 2018</StyledSpan1>
      <h1>Lambda Times</h1>
      <StyledSpan2>98°</StyledSpan2>
    </StyledDiv>
  );
};

export default Header;
