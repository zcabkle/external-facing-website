import { Fragment, useState, useEffect } from 'react';
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
  CircularProgress
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '../../icons/chevron-right';
import { Image as ImageIcon } from '../../icons/image';
import { Scrollbar } from '../scrollbar';
import { SeverityPill } from '../severity-pill';

const ItemListTable = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      fetch("http://localhost:8080/items")
        .then(res => res.json())
        .then(res => setItems(res.items.value))
        .then(() => setLoading(false));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

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
                  Description
                </TableCell>
                <TableCell>
                  Quantity
                </TableCell>
                <TableCell>
                  Stock Level
                </TableCell>
                <TableCell>
                  Foodbank
                </TableCell>
              </TableRow>
            </TableHead>
            {(loading || error) && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: "center",
                  minHeight: "10vh",
                  mt: 3
                }}>
                {error || <CircularProgress/>}
              </Box>
            )}
            <TableBody>
              {items.map((item) => {
                return (
                  <Fragment key={item.cr967_name}>
                    <TableRow
                      hover
                      key={item.cr967_name}
                    >
                      <TableCell
                        padding="checkbox"
                        sx={{
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
                        width="25%"
                      >
                        <IconButton>
                          <ChevronRightIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell width="25%">
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          {item.cr967_image
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
                                src={'data:image/png;base64,'.concat(' ').concat(item.cr967_image)}
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
                              {item.cr967_name}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell width="25%">
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {item.cr967_description ? item.cr967_description : "No description given."}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {item.cr967_sharequantitywith === 2 ?
                            item.cr967_quantity : "Quantity not being shared."}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {item.cr967_sharestocklevelwith === 2 &&
                          <Box>
                            <SeverityPill color={
                              (() => {
                                if (item.cr967_stocklevel === 0) {
                                  return (
                                    'error'
                                  )
                                } else if (item.cr967_stocklevel === 1) {
                                  return (
                                    'info'
                                  )
                                } else {
                                  return (
                                    'success'
                                  )
                                }
                              })()
                            }>
                              {
                                (() => {
                                  if (item.cr967_stocklevel === 0) {
                                    return (
                                      "UNDERSTOCKED"
                                    )
                                  } else if (item.cr967_stocklevel === 1) {
                                    return (
                                      "NEITHER"
                                    )
                                  } else {
                                    return (
                                      "OVERSTOCKED"
                                    )
                                  }
                                })()
                              }
                            </SeverityPill>
                            <Typography
                              color="textSecondary"
                              variant="body2"
                            >
                              {item.cr967_stocklevel === 0 && "Donations requested!"}
                            </Typography></Box>}
                        {
                          item.cr967_sharestocklevelwith !== 2 && <Typography
                            color="textSecondary"
                            variant="body2"
                          > Stock level not being shared.</Typography>
                        }
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {item.cr967_address}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </div>
    </Card>
  );
};

export default ItemListTable;