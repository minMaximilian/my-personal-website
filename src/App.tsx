import React from 'react';
import Container from './components/Container';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/css/themes/Themes';
import Navbar from './components/nav/Navbar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Navbar>
          Test
        </Navbar>
        <div> Test </div>
        <div> Line 2 </div>
        <Grid>
          <GridItem className='m'>
            Test
          </GridItem>
          <GridItem>
            Test2 
          </GridItem>
          <GridItem>
            Test3
          </GridItem>
          <GridItem className='xl'>
            <Card>
              Text
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;