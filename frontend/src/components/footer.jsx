import React from 'react';
import styled from 'styled-components';
import { MascotteIcon } from '.';
import { mascottes, socialLinks } from '../utils/data';

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  max-width: 1140px;
  padding: 80px 180px 100px 180px;
  box-sizing: border-box;
  position: relative;
  border-top: var(--border-color) 1px solid;
`

const SocialWrap=styled.ul`
  display: flex;
  gap: 24px;
`
const ListItem=styled.li`
  width: 24px;
  height: 24px;
  padding: 0;
  list-style-type: none;
`

const Footer = () => (
  <StyledFooter>
    <nav>
    <SocialWrap>
      {
        socialLinks.map((item) => (
          <ListItem key={item.slug}>
            <a aria-labelledby={`Link to ${item.name}`} href={item.url} rel="noopener noreferrer" target="_blank">
              <img src={item.logo} alt={`${item.name} logo`}/>
            </a>
          </ListItem>
        ))
      }
    </SocialWrap>
    </nav>
    <MascotteIcon data={mascottes.goodieFour} />
    <MascotteIcon data={mascottes.goodieFive} />
  </StyledFooter>
);

export default Footer;
