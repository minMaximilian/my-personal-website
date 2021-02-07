import React from 'react';
import Container from './components/Container';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import { ThemeProvider } from 'styled-components';
import darkMode from './styles/css/themes/Themes';
import Navbar from './components/nav/Navbar';
import Navanchor from './components/nav/Navanchor';
import Jumbotron from './components/Jumbotron';
import ShowcaseCard from './components/ShowcaseCard';
import { GlobalStyles } from './components/GlobalStyles';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyles />
        <Navbar>
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
            Hi I am Max, I am a second year Computer Science Student at University College Cork.
        </Jumbotron>
        <Container>
          <Grid>
            <GridItem className='xs'>
              <ShowcaseCard href="https://github.com/minMaximilian/my-personal-website" imgSrc='test.png' title='The website itself'>
                This website is developed with typescript and react, I've tried to use as little dependencies as possible to limit myself and explore my creativity. This website instance is hosted on a docker instance and the image can be found at dockerhub as minMaximilian/my-personal-website.
              </ShowcaseCard>
            </GridItem>
            <GridItem className='xs'>
              <ShowcaseCard href="https://github.com/minMaximilian/community-discord-bot" imgSrc='test.png' title='Community Discord Bot'>
                This is my discord bot, it is made in python for quick development. It is planned to interact with an API to parse game saves, display information, do community tracking, moderation, basic automation such as role assignment and there is more to be planned and added as issues arise.
              </ShowcaseCard>
            </GridItem>
          </Grid>
        </Container>
    </ThemeProvider>
  );
}

export default App;