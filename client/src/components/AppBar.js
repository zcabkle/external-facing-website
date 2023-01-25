import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

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
            sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <BottomNavigationAction label="Foodbanks"
                value="foodbanks" icon={<RestoreIcon />} onClick={() => navigate('/foodbanks')} />
            <BottomNavigationAction label="Items"
                value="Items" icon={<FavoriteIcon />} onClick={() => navigate('/items')} />
        </BottomNavigation>
    );
}

export default AppBar;