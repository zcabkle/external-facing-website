import FoodbankParcelsListTable from "../components/Foodbank Parcels/foodbank-parcel-list-table";
import { ListFilters } from "../components/Foodbank Parcels/foodbank-parcel-list-filters";
import {
  Box, Container, Grid, Typography, Card, CircularProgress,
} from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

const FoodbankParcelsPage = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const guid = window.location.href.split("/").pop()

  useEffect(() => {
    try {
      fetch("http://localhost:8080/parcels/".concat(guid))
        .then(res => res.json())
        .then(res => setParcels(res.parcels.value))
        .then(() => setLoading(false));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const applyPagination = (products, page, rowsPerPage) => products.slice(page * rowsPerPage,
    page * rowsPerPage + rowsPerPage);

  const paginatedItems = applyPagination(parcels, page, rowsPerPage);

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
                Parcels at foodbank X
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {(loading || error) ? (
          <Card><Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center",
              minHeight: "10vh",
              mt: 3
            }}>
            {error || <CircularProgress />}
          </Box></Card>
        ) : (
          <Card><ListFilters />
            <FoodbankParcelsListTable
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              parcels={paginatedItems}
              parcelsCount={parcels.length}
              page={page}
              rowsPerPage={rowsPerPage} /></Card>)}
      </Container>
    </Box>
  );
};

export default FoodbankParcelsPage;