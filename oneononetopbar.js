import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import PrintIcon from '@mui/icons-material/Print';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from MUI
import { useNavigate} from 'react-router-dom';
import OneOnOneSettings from './oneononesettings'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function OneononeTopBar() {
    const handleRefreshClick = () => {
        // Handle the refresh icon click event here
        // You can add your refresh logic in this function
        console.log('Refresh icon clicked');
    };

    const handleSearchChange = (event) => {
        // Handle search field input changes here
        // event.target.value contains the search input value
        console.log('Search input:', event.target.value);
    };


// open oneonone setting
const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
const navigate = useNavigate();

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: '#2596be' }}>
                <Toolbar>
                    <Typography variant="p" component="div" sx={{ flexGrow: 1, fontSize: '16px' }}>
                        <span style={{ color: '#ffffff91', marginRight: '8px' }}>FILTERS</span> {/* Add the "Filter" text here */}
                        <label htmlFor="person-select">Person:</label>
                        <Select
                            variant="standard"
                            id="person-select"
                            label="Teams"
                            sx={{ marginRight: '16px', marginLeft: '10px', width: '200px' }}
                            defaultValue={1}
                            inputProps={{ style: { border: 'none' } }} // Add border style here
                        >
                            <MenuItem value={1}> All</MenuItem>
                            <MenuItem value={2}>Peron 1</MenuItem>
                            <MenuItem value={3}>Person 2</MenuItem>
                            <MenuItem value={4}>Person 3</MenuItem>
                        </Select>
                        <FormControlLabel
                            control={<Switch />}
                            label="Show Completed"
                            labelPlacement="end" // Adjust label placement as needed
                            sx={{ marginRight: '16px' }} // Add any desired styling
                        />
                    </Typography>

                    <Tooltip title="Refresh"> {/* Add Tooltip to show text on hover */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="refresh"
                            onClick={handleRefreshClick}
                            sx={{ marginRight: '6px' }}
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Print to PDF"> {/* Add Tooltip to show text on hover */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="print-pdf"
                            sx={{ marginRight: '6px' }}
                        >
                            <PrintIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Search"> {/* Add Tooltip to show text on hover */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="search"
                            sx={{ marginRight: '6px' }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>

                    <InputBase
                        placeholder="Search 1-on-1"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearchChange}
                        sx={{ marginRight: '6px', borderBottom: '1px solid white' }}
                    />
                    <Tooltip title="Open 1-on-1 Setting"> {/* Add Tooltip to show text on hover */}
                        <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="reset-zoom"
                          sx={{ marginRight: '6px' }}
                          onClick={handleSettingsClick}
                        >
                        <SettingsIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            {isSettingsOpen && <OneOnOneSettings />}

            {/* Your content goes here */}
            {/* Add your list of teams and users */}
        </div>
    );
}

export default OneononeTopBar;
