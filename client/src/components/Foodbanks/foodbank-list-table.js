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
  CardContent,
  Link
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '../../icons/chevron-right';
import { ChevronDown as ChevronDownIcon } from '../../icons/chevron-down';
import { Image as ImageIcon } from '../../icons/image';
import { Scrollbar } from '../scrollbar';

const FoodbankListTable = (props) => {

  const {
    onPageChange,
    onRowsPerPageChange,
    page,
    foodbanks,
    foodbanksCount,
    rowsPerPage,
  } = props;
  const [openProduct, setOpenProduct] = useState(null);

  const handleOpenProduct = (productId) => {
    setOpenProduct((prevValue) => (prevValue === productId ? null : productId));
  };

  console.log("made to page");


  return (
    <Card>
      <div>
        <Scrollbar>
          <Table sx={{ minWidth: 1200 }}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell width="25%">
                  Name
                </TableCell>
                <TableCell width="25%">
                  Address
                </TableCell>
                <TableCell>
                  Town
                </TableCell>
                <TableCell>
                  Contact Number
                </TableCell>
                <TableCell>
                  Contact Email
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {foodbanks.map((foodbank) => {
                const open = foodbank.cr967_foodbankid === openProduct;

                return (
                  <Fragment key={foodbank.cr967_foodbankid}>
                    <TableRow
                      hover
                      key={foodbank.cr967_foodbankid}
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
                        <IconButton onClick={() => handleOpenProduct(foodbank.cr967_foodbankid)}>
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
                          {foodbank.cr967_image
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
                                src={'data:image/png;base64,'.concat(' ').concat(foodbank.cr967_image)}
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
                              {foodbank.cr967_name}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell width="25%">
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {foodbank.cr967_address}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {foodbank.cr967_town}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary"
                          variant="body2">
                          {foodbank.cr967_phonenumber}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {foodbank.cr967_email}
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
                                  Details - <Link href={"/items/" + foodbank.cr967_foodbankid}> View the stock at this foodbank </Link>
                                <Link href={"/parcels/" + foodbank.cr967_foodbankid}> View the parcels at this foodbank </Link>
                                  
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
                                      defaultValue={foodbank.cr967_name}
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
                                      defaultValue={foodbank.cr967_address}
                                      fullWidth
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      label="Address"
                                      name="address"
                                      type="address"
                                    />


                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    xs={12}
                                  >
                                    <TextField
                                      defaultValue={foodbank.cr967_phonenumber}
                                      fullWidth
                                      label="Phone number"
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
                                      defaultValue={foodbank.cr967_town + ", " + foodbank.cr967_postcode}
                                      fullWidth
                                      label="Town & Postcode"
                                      name="town&postcode"
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
                                      defaultValue={foodbank.cr967_email}
                                      fullWidth
                                      label="Email"
                                      name="email"
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
                                      defaultValue={foodbank.cr967_operatinghours}
                                      fullWidth
                                      label="Operating Hours"
                                      name="operatinghours"
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      id="outlined-multiline-flexible"
                                      multiline
                                      rows={4}
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
          count={foodbanksCount}
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

export default FoodbankListTable;