import React from 'react';
import Container from './components/Container';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/css/themes/Themes';
import Navbar from './components/nav/Navbar';
import Navanchor from './components/nav/Navanchor';
import Jumbotron from './components/Jumbotron';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar logo='favicon.ico'>
          <Navanchor href="/">
            Home
          </Navanchor>
          <Navanchor href="/">
            Tab2
          </Navanchor>
          <Navanchor href="/">
            Tab3
          </Navanchor>
      </Navbar>
      <Jumbotron>
          Jumbotron Dummy Text
      </Jumbotron>
      <Container>
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