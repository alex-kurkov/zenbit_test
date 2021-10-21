import React from 'react';
import { 
  FeedbackForm,
  Map,
  Footer,
  MascotteIcon,
} from './components';
import styled from 'styled-components';
import { mascottes } from './utils/data';

const StyledApp = styled.div`
  max-width: 1440px;
  overflow: hidden;
  margin: 0 auto;
`
const Main = styled.div`
  position: relative;
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
        <MascotteIcon data={mascottes.goodieThree} />
      </Main>
      <Footer />
    </StyledApp>
  );
}

export default App;
