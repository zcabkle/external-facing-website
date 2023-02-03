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
  Typography
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '../../icons/chevron-right';
import { Image as ImageIcon } from '../../icons/image';
import { Scrollbar } from '../scrollbar';

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

  if (loading || error) {
    return <span>{error || 'Loading...'}</span>;
  }

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
                W
              </TableCell>
              <TableCell>
                X
              </TableCell>
              <TableCell>
                Y
              </TableCell>
              <TableCell align="right">
                Z
              </TableCell>
            </TableRow>
          </TableHead>
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
                        {item.cr967_description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        {item.cr967_description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        {item.cr967_address}
                      </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        {item.cr967_address}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
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