import { useState } from 'react';
import './App.css';
import TabButton from './assets/TabButton';
import Topic from './assets/Topic';
import { AppBar, Box, Button, Container, Grid, Menu, Paper, Tab, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './assets/HomePage';
import PageText from './assets/PageText';
import HireDialog from './assets/HireDialog';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f50057'
    },
    background: {
      default: '#292929',
      paper: '#292929'
    }
  },
  typography: {
    fontFamily: [
      'Agbalumo',
      'Permanent Marker'
    ]
  },
});
darkTheme = responsiveFontSizes(darkTheme)

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen= ()=>{
    setOpen(true);
  };

  const handleClose = ()=>{
    setOpen(false);
  }

  function handleClick(selectedButton) {
    if(selectedButton == 'Hire Me!'){
      handleClickOpen()
    }
    else setSelectedTopic(selectedButton);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position='sticky' style={{width: '100vw'}}>

        <Toolbar justifyContent='space-between'>
          <Button onClick={()=>handleClick('')} style={{color: 'white'}}>

          <Typography variant='h4' fontFamily='Agbalumo'>Ryan Bezold</Typography>
          </Button>
          <Box mx={50}>
            <TabButton onClick={() => handleClick('experience')}>Work Experience</TabButton>
            <TabButton onClick={() => handleClick('about')}>About Me</TabButton>
            <TabButton onClick={() => handleClick('projects')}>Projects</TabButton>
            <TabButton onClick={() => handleClick('contact')}>Contact Information</TabButton>
          </Box>
          <Box ml='auto'>
            <Button onClick={()=> handleClick('Hire Me!')} variant='contained' style={{ color: 'white', fontFamily: 'Lato' }}>Hire Me!</Button>

          </Box>
        </Toolbar>
      </AppBar>
      <HireDialog
        open={open}
        onClose={handleClose}
      />
      {!selectedTopic ?
      <HomePage /> :
      <Paper>
        <Grid container justifyContent='center'>
          <Grid item>
            <Typography variant='h1'>{selectedTopic}</Typography>
            <PageText topic={selectedTopic} />
          </Grid>
        </Grid>
      </Paper>
      }
    </ThemeProvider>
  );
}

export default App
