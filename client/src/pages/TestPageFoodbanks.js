import {
  Box, Container, Grid, Typography, Card
} from'@mui/material'
import FoodbankListTable from '../components/Foodbanks/FoodbankListTable';

const TestPageFoodbanks = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h4">
                Foodbanks
              </Typography>
            </Grid>
            
          </Grid>
          
        </Box>
        <Card>
          <FoodbankListTable/>
        </Card>
      </Container>
    </Box>
  );
};

export default TestPageFoodbanks;