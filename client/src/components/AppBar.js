import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router-dom";
import PinDropIcon from '@mui/icons-material/PinDrop';
import StoreIcon from '@mui/icons-material/Store';
import { grey } from '@mui/material/colors';


const AppBar = () => {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return (
        <BottomNavigation
            showLabels={true}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{ position: "fixed", bottom: 0, width: "100%", height: "10%", bgcolor: '#00126b'}}>
            <BottomNavigationAction sx={{ color: grey[50] }} label="Foodbanks"
                value="foodbanks" icon={<PinDropIcon sx={{ color: grey[50] }} />} onClick={() => navigate('/foodbanks')} />
            <BottomNavigationAction sx={{ color: grey[50] }} label="Items"
                value="Items" icon={<StoreIcon sx={{ color: grey[50] }} />} onClick={() => navigate('/items')} />
        </BottomNavigation>
    );
}

export default AppBar;