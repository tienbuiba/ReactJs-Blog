import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import "./footer.css";

function Copyright() {
  return (
    <div className="footer">  <Typography  variant="body2" color="textSecondary">
    {'Copyright © '}
    <Link color="inherit" href="https://www.facebook.com/profile.php?id=100015361149056">
     TienBui
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography></div>
  
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    fontSize:'200px'

  },
  footer: {
    padding: theme.spacing(1.5, 2),
    marginTop: 'auto',
    backgroundColor: '#def2f1 ',
    
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">   
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}