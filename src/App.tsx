import React from 'react';
import Container from './components/Container';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/css/themes/Themes';
import Navbar from './components/nav/Navbar';
import Navanchor from './components/nav/Navanchor';
import Jumbotron from './components/Jumbotron';
import ShowcaseCard from './components/ShowcaseCard';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar logo='favicon.ico'>
          <Navanchor href="https://github.com/minMaximilian">
            Github
          </Navanchor>
          <Navanchor href="https://www.linkedin.com/in/maximilian-sebastian-hodor-969180196/">
            LinkedIn
          </Navanchor>
          <Navanchor href="https://leetcode.com/minMaximilian/">
            LeetCode
          </Navanchor>
      </Navbar>
      <Jumbotron>
          Hi I am Max, Welcome to my website
      </Jumbotron>
      <Container>
        <Grid>
          <GridItem className='xs'>
            <ShowcaseCard href="https://www.github.com" imgSrc='test.png' title='The website itself'>
              This website is developed with typescript and react, I've tried to use as little dependencies as possible to limit myself and explore my creativity. This website instance is hosted on a docker instance and the image can be found at dockerhub as minMaximilian/my-personal-website.
            </ShowcaseCard>
          </GridItem>
        </Grid>
        Hi I am Max, welcome to my page I've listed a bunch of projects I've worked that I think you should go and check out. 
      </Container>
    </ThemeProvider>
  );
}

export default App;