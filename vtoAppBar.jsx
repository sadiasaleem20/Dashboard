import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ResetZoomIcon from '@mui/icons-material/ZoomOutMap';
import PrintIcon from '@mui/icons-material/Print';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from MUI
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArchiveIcon from '@mui/icons-material/Archive';
import { TextField, Menu } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

//modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  p: 2,
};

function VTOAppBar() {

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

// switch

const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    };

// menu

const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // modal
   const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

// 1st setting switch

 const [visionChecked, setVisionChecked] = React.useState(true);

  const handleVisionChange = (event) => {
    setVisionChecked(event.target.checked);
  };

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: '#2596be' }}>
        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1, fontSize: '16px' }}>
            <span style={{ color: '#ffffff91', marginRight: '8px' }}>FILTERS</span> {/* Add the "Filter" text here */}
            <label htmlFor="owner-select">Team:</label>
            <Select
              variant="standard"
              id="owner-select"
              label="Teams"
              sx={{
                icon: {
                  fill: 'white', // Change the color to white
                },
                marginRight: '16px',
                marginLeft: '10px',
                width: '200px',
                '&:before': {
                  borderColor: 'white',
                },
                '&:after': {
                  borderColor: 'white',
                },
                color: 'white',
              }}
              defaultValue={1}
              inputProps={{ style: { border: 'none' } }} // Add border style here
            >
              <MenuItem value={1}>All</MenuItem>
              <MenuItem value={2}>Team 1</MenuItem>
              <MenuItem value={3}>Team 2</MenuItem>
            </Select>

<FormControlLabel control={
<Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} label="Jason Killian"/>}
label="Share V/TO with All Teams" />

{/*archive*/}

<button onClick={handleClick} className="btn text-white"><ArchiveIcon />&nbsp;&nbsp;Archive</button>

{/*Menu*/}

     <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem><ArchiveIcon /><button onClick={handleClose} className="btn text-decoration-none">Archive a copy of this V/TO</button></MenuItem>
        <MenuItem>
        <button className="btn m-0">View Archive V/TOs</button>
        </MenuItem>

      </Menu>

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

          <Tooltip title="Goal Forecasting"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="zoom-in"
              sx={{ marginRight: '6px' }}
            >
              <EqualizerIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Print to PDF"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="zoom-out"
              sx={{ marginRight: '6px' }}
            >
              <PictureAsPdfIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Open V/TO Settings"> {/* Add Tooltip to show text on hover */}
            <IconButton
             onClick={handleModalOpen}
              edge="end"
              color="inherit"
              aria-label="reset-zoom"
              sx={{ marginRight: 'px' }}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>

{/*setting modal*/}
   <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h6 style={{fontFamily: 'Poppins, sans-serif', fontSize: '20px'}} >Vision Settings</h6>

          <div className="d-flex mt-4">
             <div><Switch color="warning" onChange={handleVisionChange} inputProps={{ 'aria-label': 'controlled' }}/></div>
             <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '300', color: '#5E5E5E'}}>Custom Vision</h6>
          </div>

          <p className="ms-2" style={{color: '#666666', fontFamily: 'Poppins, sans-serif', fontSize: '14px'}}>Allows modification of the layout and content of the Vision page</p>

          <div className="text-end mt-2">
             <Button sx={{backgroundColor: '#2596be' }} variant="contained">CLOSE</Button>
          </div>

        </Box>
      </Modal>
    </div>

      {/* Your content goes here */}
      {/* Add your list of teams and users */}
    </div>
  );
}

export default VTOAppBar;