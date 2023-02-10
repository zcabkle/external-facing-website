import { Fragment, useState } from 'react';
import {
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Grid,
  Divider,
  TextField,
  CardContent
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '../../icons/chevron-right';
import { ChevronDown as ChevronDownIcon } from '../../icons/chevron-down';
import { Image as ImageIcon } from '../../icons/image';
import { Scrollbar } from '../scrollbar';
import { SeverityPill } from '../severity-pill';

const getCategory = (n) => {
  switch (n) {
    case 0:
      return "Fresh/Fruit/Veg";
    case 1:
      return "Dairy";
    case 2:
      return "Toiletries";
    case 3:
      return "Cereal";
    case 4:
      return "Canned";
    case 5:
      return "Meat";
    case 6:
      return "Bread";
    case 7:
      return "Miscellaneous";
    case 8:
      return "Dry Food/Long Life";
    default:
      return "HERE";
  }
}

const FoodbankParcelsListTable = (props) => {

  const {
    onPageChange,
    onRowsPerPageChange,
    page,
    parcels,
    parcelsCount,
    rowsPerPage,
    tags
  } = props;
  const [openProduct, setOpenProduct] = useState(null);

  const handleOpenProduct = (productId) => {
    setOpenProduct((prevValue) => (prevValue === productId ? null : productId));
  };

  return (
    <Card>
      <div>
        <Scrollbar>
          <Table sx={{ minWidth: 1200 }}>
            <TableHead>
              <TableRow>
                <TableCell width='10%'/>
                <TableCell width="25%">
                  Name
                </TableCell>
                <TableCell width="45%">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {parcels.map((parcel) => {
                const open = parcel.cr967_parcelpk === openProduct;

                return (
                  <Fragment key={parcel.cr967_parcelpk }>
                    <TableRow
                      hover
                      key={parcel.cr967_parcelpk}
                    >
                      <TableCell
                        padding="checkbox"
                        sx={{
                          ...(open && {
                            position: 'relative',
                            '&:after': {
                              position: 'absolute',
                              content: '" "',
                              top: 0,
                              left: 0,
                              backgroundColor: 'primary.main',
                              width: 3,
                              height: 'calc(100% + 1px)'
                            }
                          })
                        }}
                        width="25%"
                      >
                        <IconButton onClick={() => handleOpenProduct(parcel.cr967_parcelpk)}>
                          {open
                            ? <ChevronDownIcon fontSize="small" />
                            : <ChevronRightIcon fontSize="small" />}
                        </IconButton>
                      </TableCell>
                      <TableCell width="25%">
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          {parcel.cr967_image
                            ? (
                              <Box
                                component="img"
                                sx={{
                                  alignItems: 'center',
                                  backgroundColor: 'background.default',
                                  backgroundImage: 'background.default',
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  borderRadius: 1,
                                  display: 'flex',
                                  height: 80,
                                  justifyContent: 'center',
                                  overflow: 'hidden',
                                  width: 80
                                }}
                                src={'data:image/png;base64,'.concat(' ').concat(parcel.cr967_image)}
                              />
                            )
                            : (
                              <Box
                                sx={{
                                  alignItems: 'center',
                                  backgroundColor: 'background.default',
                                  borderRadius: 1,
                                  display: 'flex',
                                  height: 80,
                                  justifyContent: 'center',
                                  width: 80
                                }}
                              >
                                <ImageIcon fontSize="small" />
                              </Box>
                            )}
                          <Box
                            sx={{
                              cursor: 'pointer',
                              ml: 2
                            }}
                          >
                            <Typography variant="subtitle2">
                              {parcel.cr967_name}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell width="45%">
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {parcel.cr967_description ? <div style={{whiteSpace: 'pre-line'}}>{parcel.cr967_description}</div> : "No description given."}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    {open && (
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          sx={{
                            p: 0,
                            position: 'relative',
                            '&:after': {
                              position: 'absolute',
                              content: '" "',
                              top: 0,
                              left: 0,
                              backgroundColor: 'primary.main',
                              width: 3,
                              height: 'calc(100% + 1px)'
                            }
                          }}
                        >
                          <CardContent>
                            <Grid
                              container
                              spacing={3}
                            >
                              <Grid
                                item
                                md={6}
                                xs={12}
                              >
                                <Typography variant="h6">
                                  Details
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Grid
                                  container
                                  spacing={3}
                                >
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={parcel.cr967_name}
                                      fullWidth
                                      label="Name"
                                      name="name"
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={parcel.cr967_description ? parcel.cr967_description : "No description given."}
                                      fullWidth
                                      label="Description"
                                      name="description"
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={getCategory(parcel.cr967_itemcategory)}
                                      fullWidth
                                      label="Item Category"
                                      name="category"
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                    />

                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={"Link to the stock at this foodbank"}
                                      disabled
                                      fullWidth
                                      label="Foodbank"
                                      name="foodbank"
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                md={6}
                                xs={12}
                              >
                                <Typography variant="h6">
                                  &nbsp;
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Grid
                                  container
                                  spacing={3}
                                >
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={parcel.cr967_quantity}
                                      fullWidth
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      label="Quantity"
                                      name="quantity"
                                      type="number"
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={
                                        (() => {
                                          if (parcel.cr967_stocklevel === 0) {
                                            return (
                                              "Understocked"
                                            )
                                          } else if (parcel.cr967_stocklevel === 1) {
                                            return (
                                              "Neither"
                                            )
                                          } else {
                                            return (
                                              "Overstocked"
                                            )
                                          }
                                        })()
                                      }
                                      fullWidth
                                      label="Stock level"
                                      name="stock-level"
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    sx={{
                                      alignItems: 'center',
                                      display: 'flex'
                                    }}
                                  >
                          
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </CardContent>
                          <Divider />
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              px: 2,
                              py: 1
                            }}
                          >
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
        <TablePagination
          component="div"
          count={parcelsCount}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </div>
    </Card>
  );
};

export default FoodbankParcelsListTable;