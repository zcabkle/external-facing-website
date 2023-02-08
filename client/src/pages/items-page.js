import {
  Box, Container, Grid, Typography, Card, CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import ItemListTable from '../components/Items/item-list-table';
import { ListFilters } from '../components/Items/item-list-filters';
import { useEffect } from 'react';

const ItemsPage = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    name: undefined,
    category: [],
    status: [],
    inStock: undefined
  });

  useEffect(() => {
    try {
      fetch("http://localhost:8080/items")
        .then(res => res.json())
        .then(res => setItems(res.items.value))
        .then(() => setLoading(false))
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

  const applyFilters = (products, filters) => products.filter((product) => {
    /* if (filters.name) {
      const nameMatched = product.cr967_name.toLowerCase().includes(filters.name.toLowerCase());
  
      if (!nameMatched) {
        return false;
      }
    }
  
    // It is possible to select multiple category options
    if (filters.category?.length > 0) {
      const categoryMatched = filters.category.includes(product.category);
  
      if (!categoryMatched) {
        return false;
      }
    }
  
    // It is possible to select multiple status options
    if (filters.status?.length > 0) {
      const statusMatched = filters.status.includes(product.status);
  
      if (!statusMatched) {
        return false;
      }
    }*/
  
    // Present only if filter required
    if (typeof filters.inStock !== 'undefined') {

      var stockMatched = false;

      if (filters.inStock === 'understocked' && product.cr967_stocklevel === 0 && product.cr967_sharestocklevelwith === 2) {
        console.log("here, understocked")
        stockMatched = true
      } else if (filters.inStock === 'neither' && product.cr967_stocklevel === 1 && product.cr967_sharestocklevelwith === 2) {
        console.log("here, neither")
        stockMatched = true
      } else if (filters.inStock === 'overstocked' && product.cr967_stocklevel === 2 && product.cr967_sharestocklevelwith === 2) {
        console.log("here, overstocked")
        stockMatched = true
      } else {
        stockMatched = false
      }
  
      if (!stockMatched) {
        return false;
      }
    }
  
    return true;
  });

  const handleFiltersChange = (filters) => {
    setFilters(filters);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const applyPagination = (products, page, rowsPerPage) => products.slice(page * rowsPerPage,
    page * rowsPerPage + rowsPerPage);

  //const paginatedItems = applyPagination(items, page, rowsPerPage);

  const filteredProducts = applyFilters(items, filters);
  const paginatedItems = applyPagination(filteredProducts, page, rowsPerPage);

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
          <Card><ListFilters onChange={handleFiltersChange} />
            <ItemListTable
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              items={paginatedItems}
              itemsCount={items.length}
              page={page}
              rowsPerPage={rowsPerPage} /></Card>)}
      </Container>
    </Box>
  );
};

export default ItemsPage;