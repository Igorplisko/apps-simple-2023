import './App.css';
import { IconButton, Container, Toolbar, AppBar, Typography } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
function App() {
  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuSharpIcon/>
            <Typography>Igor Plisko</Typography>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}

//9:28

export default App;
//12-04-2023