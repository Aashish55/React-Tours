import React from "react";
import styled from "styled-components";
import logo from "../../images/Logo.png";
import "./appbar.css";

const Container = styled.div`
  height: 8rem;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0;
`;

const Appbar = () => (
  <Container>
    <img
      src={logo}
      style={{ height: "4rem", cursor: "pointer" }}
      alt="ExploreIT"
    />
    <label className='label'>
      <input className='checkBox' type="checkbox" />
      <span className="menu">
        <div className="hamburger"></div>
      </span>
      <ul>
        <li>
          <a className='menuOptionLink' href="/option"> Option 1 </a>
        </li>
        <li>
          <a className='menuOptionLink' href="/option"> Option 2 </a>
        </li>
        <li>
          <a className='menuOptionLink' href="/option"> Option 3 </a>
        </li>
      </ul>
    </label>
  </Container>
);

export default Appbar;
