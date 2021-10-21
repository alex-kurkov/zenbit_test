import React from 'react';
import styled from 'styled-components';
import { MascotteIcon } from '.';
import { googleMapsApiRequestUrl, mascottes } from '../utils/data';

const StyledSection = styled.section`
  width: 140%;
  height: fit-content;
  padding-bottom: 140%;
  position: relative;
  @media screen and (max-width: 961px) {
    width: 100%;
    padding-bottom: 100%;
  }
`
const StyledIframe = styled.iframe`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 120%;
  height: 120%;
  border: none;
  border-radius: 50%;
  @media screen and (max-width: 961px) {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`

const Map = () => (
  <StyledSection>
    <StyledIframe loading="lazy" src={googleMapsApiRequestUrl} />
    <MascotteIcon data={mascottes.goodieOne} />
    <MascotteIcon data={mascottes.goodieTwo} />
    <MascotteIcon data={mascottes.goodieSix} />
  </StyledSection>
)

export default Map;
