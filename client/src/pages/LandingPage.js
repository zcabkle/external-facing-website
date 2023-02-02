import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

window.user_type = "";

const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = (str) => {
    window.user_type = str;
    navigate("/foodbanks");
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[900],
    '&:hover': {
      backgroundColor: indigo[700],
    },
    fontSize: 'small',
  }));

  return (
    <Container maxWidth="100%">
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '93vh' }}>
        <Box sx={{ bgcolor: '#00126b', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>External Foodbank Portal </h2>
        </Box>
        
        <Box sx={{ overflow: 'auto', bgcolor: 'fff111', height: '86vh',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{
          alignItems: 'center',
        }}>
          <Grid item xs={12} style={{ textAlign: "center" }}><p>Who are you accessing the website as?</p></Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}><ColorButton onClick={() => { handleClick('user') }}> Foodbank User</ColorButton></Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}><ColorButton onClick={() => { handleClick('donator') }}>Foodbank Donator</ColorButton></Grid>
        </Grid>
        </Box>
      </Box>
    </Container>)
}

export default LandingPage;