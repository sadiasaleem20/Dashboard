import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import PrintIcon from '@mui/icons-material/Print';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from MUI
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

//modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  p: 2,
};

function EostoolboxTopBar() {
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

// modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//icons
const [iconsChecked, setIconsChecked] = React.useState(true);

  const handleIconsChange = (event) => {
    setIconsChecked(event.target.checked);
  };

//links
const [linkChecked, setLinkChecked] = React.useState(true);

  const handleLinkChange = (event) => {
    setLinkChecked(event.target.checked);
  };

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: '#2596be' }}>
                <Toolbar>
                    <Typography variant="p" component="div" sx={{ flexGrow: 1, fontSize: '16px' }}>
                        <span style={{ color: '#ffffff91', marginRight: '8px' }}>FILTERS</span> {/* Add the "Filter" text here */}
                        <label htmlFor="teams-select">Teams:</label>
                        <Select
                            variant="standard"
                            id="teams-select"
                            label="Teams"
                            sx={{ marginRight: '16px', marginLeft: '10px', width: '170px' }}
                            defaultValue={1}
                            inputProps={{ style: { border: 'none' } }} // Add border style here
                        >
                            <MenuItem value={1}> All</MenuItem>
                            <MenuItem value={2}>Team 1</MenuItem>
                            <MenuItem value={3}>Team 2</MenuItem>
                            <MenuItem value={4}>Team 3</MenuItem>
                        </Select>
                        <label htmlFor="teams-select">Teams:</label>
                        <Select
                            variant="standard"
                            id="teams-select"
                            label="Teams"
                            sx={{ marginRight: '16px', marginLeft: '10px', width: '170px' }}
                            defaultValue={1}
                            inputProps={{ style: { border: 'none' } }} // Add border style here
                        >
                            <MenuItem value={1}> All</MenuItem>
                            <MenuItem value={2}> Mastered</MenuItem>
                            <MenuItem value={3}>Not Mastered</MenuItem>
                        </Select>
                        <FormControlLabel
                            control={<Switch />}
                            label="Archive"
                            labelPlacement="start" // Adjust label placement as needed
                            sx={{ marginLeft: '-1px' }} // Add any desired styling
                        />
                    </Typography>

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
                        placeholder="Search EOS Toolbox™"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearchChange}
                        sx={{ marginRight: '6px', borderBottom: '1px solid white' }}
                    />
                    <Tooltip title="Open EOS Toolbox™ Setting"> {/* Add Tooltip to show text on hover */}
                        <IconButton
                           onClick={handleOpen}
                           edge="end"
                           color="inherit"
                           aria-label="reset-zoom"
                           sx={{ marginRight: '3px' }}
                        >
                            <SettingsIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>

{/*setting modal*/}
   <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h6 style={{fontFamily: 'Poppins, sans-serif', fontSize: '20px'}} >Issue Settings</h6>

          <div className="d-flex mt-4">
             <div><Checkbox color="warning" onChange={handleIconsChange} inputProps={{ 'aria-label': 'controlled' }}/></div>
             <div className="d-flex flex-column mt-2">
               <h6 className="mx-1 mb-1" style={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: '300', color: '#5E5E5E'}}>Show icons</h6>
               <p className="mx-1 mt-0" style={{fontSize: '14px', color: '#666666'}}>Turing this on will display icons on Tool cards. You can change this icon anytime you create or edit a Tool.</p>
             </div>
          </div>

          <div className="d-flex mt-1">
             <div><Checkbox color="warning" onChange={handleLinkChange} inputProps={{ 'aria-label': 'controlled' }}/></div>
             <div className="d-flex flex-column mt-2">
               <h6 className="mx-1 mb-1" style={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: '300', color: '#5E5E5E'}}>Set links</h6>
               <p className="mx-1 mt-0" style={{fontSize: '14px', color: '#666666'}}>Turning this on will display a "Learn More" button on Tool cards, allowing you to enter a custom URL to link your teammates to learning materials. </p>
             </div>
          </div>



          <div className="text-end mt-2">
             <button className="btn btn-outline-secondary">Cancel</button>
             <Button className="ms-2" sx={{backgroundColor: '#2596be' }} variant="contained">SAVE</Button>
          </div>

        </Box>
      </Modal>
    </div>
            {/* Your content goes here */}
            {/* Add your list of teams and users */}
        </div>
    );
}

export default EostoolboxTopBar;
