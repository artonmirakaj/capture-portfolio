import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <StyledNav>
      <h1><Link id='logo' to='/'>Capture Portfolio</Link></h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
          <Line 
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
          <Line 
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
          <Line 
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.8rem;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
`

export default Nav;