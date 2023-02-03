import Button from '@mui/material/Button';
import { red, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const StockLevelButton = (stocklevel) => {

  stocklevel = stocklevel.stocklevel;

  if (stocklevel == 1) {
    return null
  };

  var colour;
  if (stocklevel == 0) {
    colour = red
  } else {
    colour = green
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: colour[50],
    backgroundColor: colour[600],
    '&:hover': {
      backgroundColor: colour[700],
    },
    fontSize: '10px',
    borderRadius: '40px'
  }));

  if (stocklevel == 0) {
    return <ColorButton>Understocked</ColorButton>
  } else {
    return <ColorButton>Overstocked</ColorButton>
  }

}

export default StockLevelButton







