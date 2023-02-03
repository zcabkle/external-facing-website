import {
  Box, Container, Grid, Typography, Button, Card
} from'@mui/material'
import ItemListTable from '../components/Items/ItemListTable';
import { ListFilters } from '../components/product-list-filters';

const NewItemsPage = () => {
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
                Items
              </Typography>
            </Grid>
            
          </Grid>
          
        </Box>
        <Card>
          <ListFilters/>
          <ItemListTable/>
        </Card>
      </Container>
    </Box>
  );
};

export default NewItemsPage;