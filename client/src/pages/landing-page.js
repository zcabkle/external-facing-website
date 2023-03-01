import { Box, Link, Container, Paper, Typography, ButtonGroup, Button, Grid, Card, CardContent, Divider, CardActions } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { ArrowRight as ArrowRightIcon } from '../icons/arrow-right';
import * as MdIcons from "react-icons/md";

window.user_type = "";

function Item(props) {
  return (
    <Paper style={{ zIndex: '-3', textAlign: 'center', alignContent: 'center' }}>
      <img width="auto" height="500vh" src={props.item.src} />
      <Typography variant="h6">
        {props.item.description}
      </Typography>
      <br></br>
    </Paper>
  )
}

const LandingPage = () => {

  const [userType, setUserType] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [foodbanksCount, setFoodbanksCount] = useState(0);
  const [visitsCount, setVisitsCount] = useState(0);
  const [rerendered, setRerendered] = useState(false)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  if (sessionStorage.getItem("userType") && !rerendered) {
    setUserType(sessionStorage.getItem("userType"));
    setRerendered(true);
  }

  useEffect(() => {
    try {
      fetch("http://localhost:8080/stats")
        .then(res => res.json())
        .then(res => {
          setItemCount(res.items_count)
          setFoodbanksCount(res.foodbanks_count)
          setVisitsCount(res.visits_count)
        })
        .then(() => setLoading(false));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

  function ChoosePersona() {
    return (
      <Paper style={{ zIndex: '-3', textAlign: 'center', alignContent: 'center' }}>
        <br></br>
        <Typography variant='h6'>Who are you visiting this website as?</Typography>
        <br></br>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          {userType === 'donator' ? <Button sx={{ color: 'white' }} onClick={() => {
            window.sessionStorage.setItem("userType", "donator");
            setUserType('donator')
          }}>Foodbank Donator</Button> : <Button sx={{ color: 'grey' }} variant="outlined" onClick={() => {
            window.sessionStorage.setItem("userType", "donator");
            setUserType('donator')
          }}>Foodbank Donator</Button>}
          {userType === 'user' ? <Button sx={{ color: 'white' }} onClick={() => {
            window.sessionStorage.setItem("userType", "user");
            setUserType('user')
          }}>Foodbank User</Button> : <Button sx={{ color: 'grey' }} variant="outlined" onClick={() => {
            window.sessionStorage.setItem("userType", "user");
            setUserType('user')
          }}>Foodbank User</Button>}
        </ButtonGroup>

        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            mx: '50px'
          }}
        >
          {userType === '' && <Typography variant='body1'> <br></br> </Typography>}

          {userType === 'user' && <Typography variant='body1'> <br />  <li>Use the <Link href='/foodbanks'>foodbank tab</Link> to find foodbanks and browse their items or parcels from the dropdowns. </li>
            <li> Alternatively, view the items available across all of our branches and filter them on the <Link href='/items'>items tab</Link>. </li>
            <li> Use the contact details provided to book a visit to the foodbank that can best support your needs at the moment. </li> <br /><br /></Typography>}
          {userType === 'donator' && <Typography variant='body1'> <br />  <li>Use the <Link href='/foodbanks'>foodbank tab</Link> to find foodbanks and browse which items are in need at those foodbanks. </li>
            <li> Alternatively, view the items available across all of our branches on the <Link href='/items'>items tab</Link> to see which foodbanks are in need of donations. </li>
            <li> Use the contact details provided to book a visit to the foodbank that you would like to help out. </li> <br /><br /> </Typography>}
        </Box>
      </Paper>
    )
  }

  var items = [
    {
      name: "Item 1",
      description: "Providing help when you need it most!",
      src: "./foodbank_smiling.png"
    },
    {
      name: "Item 1",
      description: "We are requesting donations, it's a great way to help out your local community.",
      src: "./fooddonations.jpg"
    },
    {
      name: "Item 2",
      description: "A wide variety of items are available, use the items tab to see what is currently in stock.",
      src: "/foodbank_items.jpg"
    },
    {
      name: "Item 4",
      description: "Cash donations are accepted, contact your local foodbank to arrange this.",
      src: "/coins.jpg"
    }
  ]

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <ChoosePersona />
        <br></br>
        <Carousel
          NextIcon={<AiIcons.AiFillCaretRight />}
          PrevIcon={<AiIcons.AiFillCaretLeft />}
          autoPlay={true}
          interval={5000}
          animation={"slide"}
          navButtonsAlwaysVisible={true}
          style={{ height: "100%", width: '100%', zIndex: '-3' }}
        >
          {
            items.map((item, i) => <Item key={i} item={item} />)
          }
        </Carousel>

        <br></br>

        <Grid
          container
          justifyContent="space-between"
          spacing={3}
        >
          <Grid
            item
            md={4}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    <AiIcons.AiFillShop
                      color="primary"
                      fontSize="medium"
                    />
                    &nbsp;
                    Registered Branches
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mt: 2 }}
                >
                  {foodbanksCount} foodbank branches are registered on the app!
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  endIcon={<ArrowRightIcon fontSize="small" />}
                  size="small"
                >
                  <Link href="/foodbanks" underline="none">
                    Browse Foodbanks
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >

                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    <AiIcons.AiOutlineStock
                      color="primary"
                      fontSize="large"
                    />
                    &nbsp;
                    Recorded Visits
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mt: 2 }}
                >
                  {visitsCount} visits recorded across our nationwide network!
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  endIcon={<ArrowRightIcon fontSize="small" />}
                  size="small"
                >
                  <Link href="/help" underline="none">
                    Find Help
                  </Link>

                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            md={4}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >

                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    <MdIcons.MdFoodBank
                      color="primary"
                      fontSize="large"
                    />
                    &nbsp;
                    Number of Items
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mt: 2 }}
                >
                  {itemCount} items offered across the foodbank network!
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  endIcon={<ArrowRightIcon fontSize="small" />}
                  size="small"
                >
                  <Link href="/items" underline="none">
                    Browse Items
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    <FaIcons.FaQuestionCircle />
                  </Typography>
                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    What is this project?
                  </Typography>
                </Box>
                <br></br>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  This project seeks to reduce food wastage by providing more powerful insights to foodbank workers, users and donators in order to drive more useful donations across the UK in order to better serve the community.
                  Information shown is completely synced with the foodbanks systems giving an up-to-date snapshot of the situation at each foodbank.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    <FaIcons.FaQuestionCircle />
                  </Typography>
                  <Typography
                    color="primary.main"
                    sx={{ pl: 1 }}
                    variant="h6"
                  >
                    Who does this website serve?
                  </Typography>
                </Box>
                <br></br>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  <li>It provides donators with an opportunity to donate essential items that are currently needed by their local community. This helps donators, both large and small, to make a larger impact.</li>
                  <li>It also gives foodbank users the ability to browse stock before visiting a foodbank. Enabling them to visit the foodbanks that best cater to their needs.</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LandingPage;