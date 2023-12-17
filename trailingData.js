import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faAngleRight, faChevronRight, faUserPlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import Select from '@mui/material/Select';


const TrailingData = () => {

const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // measurables
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: 450,
  bgcolor: 'background.paper',
  p: 3,
};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);
// quill

const [value, setValue] = React.useState('');
var toolbarOptions = [
  ['bold', 'italic'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'direction': 'rtl' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']
];
const module = {
toolbar : toolbarOptions,
};

// offcanvas text-field

// unit
const [unit, setUnit] = React.useState('');

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

// orientation
const [orientation, setOrientation] = React.useState('');

  const handleOrientationChange = (event) => {
    setOrientation(event.target.value);
  };

  // t4w calculations
const [t4w, setT4w] = React.useState('');

  const handleT4WChange = (event) => {
    setT4w(event.target.value);
  };

  // owner change
const [measurableOwner, setmeasurableOwner] = React.useState('');

  const handleOwnerChange = (event) => {
    setmeasurableOwner(event.target.value);
  };

// seats
  const [seat, setSeat] = React.useState('');

  const handleSeatChange = (event) => {
    setSeat(event.target.value);
  };

  return (
    <>
    {/*First Card*/}
<div className="card">
  <div className="card-body">

    <div className="row">

      <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex">
        <div className="d-flex mt-3">
        <h5 className="fs-6">Trailing Four Weeks</h5>
        <span>&nbsp;&nbsp;</span>
        <AddCircleOutlineIcon onClick={handleClick} sx={{ fontSize: 22 }}/>
      </div>
      </div> {/*1st col*/}

      <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
        <div className="mt-2">
          <h6 className="mt-1">Drag and Drop:</h6>
        </div>
        <div className="form-check form-switch ms-3 mt-2">
          <input className="form-check-input fs-5" type="checkbox" role="switch" />
        </div>

        <div className="ms-2 me-3">
        <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">Number of 4 Week Periods</InputLabel>
        <NativeSelect
          defaultValue={13}
          inputProps={{
            name: 'week',
            id: 'uncontrolled-native',
          }}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={17}>17</option>
        </NativeSelect>
      </FormControl>
    </Box>
    </div>
      </div> {/*2nd col*/}

    </div> {/*row*/}

    <div className="mt-3">
    <button className="btn w-100" style={{backgroundColor:'#FAFAFA', color:'#737373' }} >There are no Measurables for this Scorecard.</button>
    </div>

  </div> {/*card body*/}
</div> {/*card*/}

{/*2nd Card*/}

<div className="card mt-3">
  <div className="card-body">

    <div className="row">

      <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex">
        <div className="d-flex mt-3">
        <h5 className="fs-6">Trailing Four Weeks</h5>
        <span>&nbsp;&nbsp;</span>
        <AddCircleOutlineIcon onClick={handleClick} sx={{ fontSize: 22 }}/>
      </div>
      </div> {/*1st col*/}

      <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
        <div className="mt-2">
          <h6 className="mt-1">Drag and Drop:</h6>
        </div>
        <div className="form-check form-switch ms-3 mt-2">
          <input className="form-check-input fs-5" type="checkbox" role="switch" />
        </div>

        <div className="ms-2 me-3">
        <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">Number of 13 Week Periods</InputLabel>
        <NativeSelect
          defaultValue={13}
          inputProps={{
            name: 'week',
            id: 'uncontrolled-native',
          }}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={17}>17</option>
        </NativeSelect>
      </FormControl>
    </Box>
    </div>
      </div> {/*2nd col*/}

    </div> {/*row*/}

    <div className="mt-3">
    <button className="btn w-100" style={{backgroundColor:'#FAFAFA', color:'#737373' }} >There are no Measurables for this Scorecard.</button>
    </div>

  </div> {/*card body*/}
</div> {/*card*/}

{/*Menu*/}

     <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><IconButton><EditIcon/></IconButton><button onClick={handleOpen} className="btn text-decoration-none">Add an Existing Measurable</button></MenuItem>
        <MenuItem onClick={handleClose}> <IconButton><AddIcon/></IconButton>
        <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Create and Add New Measurable</button>
        </MenuItem>

      </Menu>

{/*measurable model*/}
<Modal
        open={open}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-title">
            <h3>Add Measurables</h3>
          </div>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField id="standard-basic" style = {{width: 800}} label="Search Measurables" variant="standard" />



{/*Buttons*/}
<div className="row mt-2">
   <div className="col-12 col-lg-6 col-sm-12 d-flex align-text-bottom">
      <button className="btn shadow w-100 text-center">Cancel</button>
   </div>
   <div className="col-12 col-lg-6 col-sm-12 d-flex align-text-bottom">
      <button className="btn w-100 text-center shadow" style={{backgroundColor:'#F6F6F6'}}>SAVE</button>
    </div>
</div>
         </div> {/*modal body div*/}
        </Box>
      </Modal>

{/*offcanvas*/}
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-body">
      <div className="d-flex">
      <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon icon={faAngleRight} /></button>
      <h5 className="mt-1">Add New Measurable</h5>
      </div>

      <hr />

{/* Title Field */}
<div class="d-flex">
      <TextField
      variant="standard"
      size="lg"
      style = {{width: 400}}
      label="Title*" />
</div>

{/* Description starts */}

<label className="mt-3 text-secondary fs-6">Description</label>
<ReactQuill modules={module} style={{ marginTop: "8px" }} theme="snow" value={value} onChange={setValue} />

{/*Text Field*/}

<div className="row">
  <div className="col-12 col-lg-4 d-flex">
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={unit}
          onChange={handleChange}
          label="Unit"
        >
          <MenuItem value={'Currency'}>Currency</MenuItem>
          <MenuItem value={'Percentage'}>Percentage</MenuItem>
          <MenuItem value={'Number'}>Number</MenuItem>
          <MenuItem value={'Yes/No'}>Yes/No</MenuItem>
          <MenuItem value={'Time'}>Time</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div> {/*col*/}

  <div className="col-12 col-lg-8 d-flex">
    <div>
      <TextField sx={{ m: 1, minWidth: 120 }} id="standard-basic" label="Goal" variant="standard" />
    </div>
  </div> {/*col*/}

</div> {/*row*/}

{/*2nd row*/}

<div className="row">
  <div className="col-12 col-lg-6 d-flex">
    <div>
      <FormControl variant="standard" sx={{ my:1 , minWidth: 160  }}>
        <InputLabel id="demo-simple-select-standard-label"><small>Goal Orientation Role</small></InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={orientation}
          onChange={handleOrientationChange}
          label="Goal Orientation Role"
        >
          <MenuItem value={'Inside min and max'}>Inside min and max</MenuItem>
          <MenuItem value={'Outside min and max'}>Outside min and max</MenuItem>
          <MenuItem value={'Greater than or equal to Goal'}>Greater than or equal to Goal</MenuItem>
          <MenuItem value={'Greater than Goal'}>Greater than Goal</MenuItem>
          <MenuItem value={'Equal to Goal'}>Equal to Goal</MenuItem>
          <MenuItem value={'Less to Goal'}>Less to Goal</MenuItem>
          <MenuItem value={'Less than or equal to Goal'}>Less than or equal to Goal</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div> {/*col*/}

  <div className="col-12 col-lg-6 d-flex">
    <div className="w-100">
      <FormControl variant="standard" sx={{ my: 1, ms: 0, minWidth: 160  }}>
        <InputLabel id="demo-simple-select-standard-label"><small>T4W & T13W Goal Calculation</small></InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={t4w}
          onChange={handleT4WChange}
          label="T4W & T13W Goal Calculation"
        >
          <MenuItem value={'Total'}>Total(default)</MenuItem>
          <MenuItem value={'Average'}>Average</MenuItem>
        </Select>
      </FormControl>

    </div>
  </div> {/*col*/}

</div> {/*row*/}

{/*3rd row*/}

<div className="row">
  <div className="col-12 col-lg-6 d-flex">
    <div>
      <FormControl variant="standard" sx={{ my:1 , minWidth: 160  }}>
        <InputLabel id="demo-simple-select-standard-label"><small>Measurable Owner</small></InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={measurableOwner}
          onChange={handleOwnerChange}
          label="Measurable Owner"
        >
          <MenuItem value={'Adeel Saleem'}>Adeel Saleem</MenuItem>
          <MenuItem value={'Husnain Khalid'}>Husnain Khalid</MenuItem>
          <MenuItem value={'Muhammad Huzaifa'}>Muhammad Huzaifa</MenuItem>
          <MenuItem value={'Sadia Saleem'}>Sadia Saleem</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div> {/*col*/}

  <div className="col-12 col-lg-6 d-flex">
    <div className="w-100">
      <FormControl variant="standard" sx={{ my: 1, ms: 0, minWidth: 160  }}>
        <InputLabel id="demo-simple-select-standard-label"><small>Seat</small></InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={seat}
          onChange={handleSeatChange}
          label="Seat"
        >
          <MenuItem value={'Total'}>Total(default)</MenuItem>
          <MenuItem value={'Average'}>Average</MenuItem>
        </Select>
      </FormControl>

    </div>
  </div> {/*col*/}

</div> {/*row*/}

{/*Buttons*/}
<div className="row mt-3">
   <div className="col-12 col-lg-4 col-sm-12 d-flex align-text-bottom">
      <button className="btn shadow w-100 text-center">Cancel</button>
   </div>
   <div className="col-12 col-lg-8 col-sm-12 d-flex align-text-bottom">
      <button className="btn w-100 text-center shadow" style={{backgroundColor:'#F6F6F6'}}>SAVE</button>
    </div>
</div>

</div> {/*offcanvas-body*/}
</div> {/*offcanvas*/}

</>
  )
};

export default TrailingData