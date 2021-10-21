import React from 'react';
import styled from 'styled-components';
import { googleMapsApiRequestUrl } from '../utils/constants';

const StyledSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-bottom: 100%;
  position: relative;
`
const StyledIframe = styled.iframe`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150%;
  height: 150%;
  border: none;
  border-radius: 50%;
`

const Map = () => (
  <StyledSection>
    <StyledIframe loading="lazy" src={googleMapsApiRequestUrl} />
  </StyledSection>
)

export default Map;
