import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

import SecurityIcon from '@material-ui/icons/Security'
import { Typography } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#ff0000",
    },
  },
  typography:{
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      color: '#00ff00',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",    
  },
})

function App() {
  const classes = styles();
  return (
    <div className="App"> 
      <ThemeProvider theme={theme}>
         <NavBar/>
         <div className={classes.wrapper}>
            {/* https://material-ui.com/components/icons/ */}
            <Typography variant="h4" className={classes.bigSpace} color="primary">
              At Rocket Pablos v0.3
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            </Typography>
            <div className={`${classes.grid} ${classes.bigSpace}`}>
              <Grid icon={<SecurityIcon style={{fill: "#4360A6", height: "125", width: "125"}}/>} title="Secure1" btnTitle="Show me more" /> 
              </div>
          </div>  

          <div className={classes.bigSpace}>
            <Footer/>         
         </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
