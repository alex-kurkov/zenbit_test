import React, { useState, useEffect } from 'react';
import { 
  MascotteIcon,
  FeedbackForm,
  Map,
  Header
} from './components';
import styled from 'styled-components';

const StyledApp = styled.div`
  max-width: 1440px;
  overflow: hidden;

`
const Main = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  display: grid;
  grid-template-columns: 6fr 5fr;
  gap: 96px;
  min-height: calc(100vh - 200px);
`
 

function App() {
  return (
    <StyledApp>
      <Main>
        <FeedbackForm />
        <Map />
      </Main>
      <Header />
{/*       <MascotteIcon looking="up" width="120" height="120" />
      <MascotteIcon width="80" height="80" type="finger" looking="front" color="#46EBB0" direction="down"/>
 */}    </StyledApp>
  );
}

export default App;
