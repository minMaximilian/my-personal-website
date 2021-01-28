import React from 'react';
import Container from './components/Container';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components';

const theme = null

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div> Test </div>
        <div> Line 2 </div>
        <Grid>
          <GridItem span='2'>
            Test
          </GridItem>
          <GridItem>
            Test2 
          </GridItem>
          <GridItem>
            Test3
          </GridItem>
          <GridItem>
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