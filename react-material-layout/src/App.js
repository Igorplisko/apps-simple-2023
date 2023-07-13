import './App.css';
import {
  IconButton,
  Container,
  Toolbar,
  AppBar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
function App() {
  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuSharpIcon />
            <Typography variant='h6'>Igor Plisko</Typography>
         <Box mr={3}>
          <Button color='inherit' variant='outlined' >Log in</Button>
         </Box>
         <Button color='secondary' variant='contained' >Sign Up</Button>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// 11: 42
// 11: 42
/! 13.07.2023

export default App;
//12-04-2023
