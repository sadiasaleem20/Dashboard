import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SecondaryBar from '../../components/secondaryAppBar/secondaryBar';
import { styled } from '@mui/material/styles';
import Todo from '../../components/dashboardCards/todo';
import PersonalTodo from '../../components/dashboardCards/personalTodo';
import RocksMilestone from '../../components/dashboardCards/rocksMilestones';
import TeamTodoTable from '../../components/teamTodoTable/teamTodoTable';
import ScoreCardTable from '../../components/scoreCardTable/table';
import TableScoreCard from '../../components/scorecard/tableScoreCard';
import ScoreCardAppBar from '../../components/secondaryAppBar/scorecardAppBar';
import TabsScoreCard from '../../components/tabs/tabsScoreCard';
import RocksBar from '../../components/secondaryAppBar/rocksBar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField, IconButton, Menu, MenuItem,Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Done } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faAngleRight, faChevronRight, faUserPlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// table code

function createData(status, title, completed, dueBy, owner) {
  return { status, title, completed, dueBy, owner };
}

const rows = [
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
];

const Rocks = () => {

//Accordions
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

//create and edit

  const [inputValueDay, setInputValueDay] = useState('90 Days');
  const [showValue, setShowValue] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [valueDescription, setValueDescription] = useState([{ coreValue: '', description: '' }]);
  const [value, setValue] = React.useState(dayjs(''));

   const handleButtonClick = () => {
    setIsEditing(false);
    setShowValue(true);
  };
  const handleButtonEdit = () => {
    setIsEditing(true);
  }


  //for Description
  const handleValueDescription = (index, field, value) => {
    const updatedInputs = [...valueDescription];
    updatedInputs[index][field] = value;
    setValueDescription(updatedInputs);
  };
  const handleAddInput = () => {
    setValueDescription([...valueDescription, { coreValue: '', description: '' }]);
  };


  const handleRemoveInput = (index) => {
    const updatedInputs = valueDescription.filter((_, i) => i !== index);
    setValueDescription(updatedInputs);
  };

  const handleInputChange = (event) => {
    setInputValueDay(event.target.value);
  };

// measurables

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

const [values, setValues] = React.useState('');
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

  const handleUnitChange = (event) => {
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
      <Grid container xs={12}>
        <Grid item xs={12}>
          <RocksBar />
        </Grid>

{/*First Card*/}
<div className="mx-1 mt-2 w-100">
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{py: '20px'}}
        >
          <Typography sx={{ fontFamily: 'Poppins, sans-serif' }}>V/TO® | Revenue, Profit, Measurables</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div className="w-75">
                {isEditing ? (<>
                  <TextField sx={{ width: '86%' }} id="standard-basic" label="90 Days" variant="standard" value={inputValueDay}
                    onChange={handleInputChange} />
                  <IconButton onClick={handleButtonClick} style={{ float: 'right', marginTop: '15px' }}>
                    <Done />
                  </IconButton>
                  <IconButton style={{ float: 'right', marginTop: '15px' }} onClick={handleAddInput}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                  {/* for add button */}

                  {/*Date*/}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <h6 className="fw-bold text-black mt-2" style={{fontFamily: 'Poppins, sans=serif'}} >Future Date:</h6>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                          <DatePicker
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />
                        </DemoContainer>
                      </LocalizationProvider>

                      {/*Revenue*/}
                      <div className="d-flex mt-4">
                        <h6 className="fw-bold text-black mt-2" style={{fontFamily: 'Poppins, sans=serif'}} >Revenue:</h6>
                        <IconButton onClick={handleAddInput}>
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </div>

                  {valueDescription.map((input, index) => (
                    <div key={index}>
                      <Box sx={{ pt: 3 }}>

                        <TextField sx={{ width: '70%' , mx: '0' }} value={input.description} id="standard-basic" label="Description" variant="standard"
                          onChange={(e) => handleValueDescription(index, 'description', e.target.value)} /> &nbsp;
                        <TextField sx={{ width: '20%' }} value={input.coreValue} id="standard-basic" label="Value" variant="standard"
                          onChange={(e) => handleValueDescription(index, 'coreValue', e.target.value)} />
                        <IconButton style={{ float: 'right', marginTop: '15px' }} onClick={() => handleRemoveInput(index)}>
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </div>))}

                      {/*Profit*/}
                      <div className="d-flex mt-4">
                        <h6 className="fw-bold text-black mt-2" style={{fontFamily: 'Poppins, sans=serif'}} >Profit:</h6>
                        <IconButton onClick={handleAddInput}>
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </div>

                  {valueDescription.map((input, index) => (
                    <div key={index}>
                      <Box sx={{ pt: 3 }}>

                        <TextField sx={{ width: '70%' , mx: '0' }} value={input.description} id="standard-basic" label="Description" variant="standard"
                          onChange={(e) => handleValueDescription(index, 'description', e.target.value)} /> &nbsp;
                        <TextField sx={{ width: '20%' }} value={input.coreValue} id="standard-basic" label="Value" variant="standard"
                          onChange={(e) => handleValueDescription(index, 'coreValue', e.target.value)} />
                        <IconButton style={{ float: 'right', marginTop: '15px' }} onClick={() => handleRemoveInput(index)}>
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </div>))}

                    <div className="d-flex mt-3">
                      <h6 className="fw-bold text-black" style={{fontFamily: 'Poppins, sans=serif'}} >Measurables:</h6>
                      <span>&nbsp;&nbsp;</span>
                      <AddCircleOutlineIcon onClick={handleClick} sx={{ fontSize: 22 }}/>
                    </div>

                </>
                ) : (
                  <>
                    <IconButton onClick={handleButtonEdit} style={{ float: 'right', marginTop: '15px' }}>
                      <EditIcon />
                    </IconButton>
                    <Typography sx={{ margin: 2 }}>{inputValueDay}</Typography>
                  </>

                )}

                <Divider />
              </div>
        </AccordionDetails>
      </Accordion>
</div>


{/* Second Card*/}
<div className="card mt-2 w-100 mx-1">
  <div className="card-body">
    <h5 className="fs-6" style={{fontFamily:'Poppins, sans-serif'}} >Archived Rocks</h5>

{/*Table code*/}
 <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">Due By</TableCell>
            <TableCell align="right">Owner</TableCell>
          </TableRow>
        </TableHead>
        {/*
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.status}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{row.completed}</TableCell>
              <TableCell align="right">{row.dueBy}</TableCell>
              <TableCell align="right">{row.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
 </TableContainer>

    <div className="mt-3 mb-0 mx-0">
    <button className="btn w-100" style={{backgroundColor:'#FAFAFA', color:'#737373' }} >There are no Company Rocks for the selected team.</button>
    </div>

  </div> {/*card body*/}
</div> {/*card*/}

      </Grid>

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
<ReactQuill modules={module} style={{ marginTop: "8px" }} theme="snow" value={values} onChange={setValues} />

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
          onChange={handleUnitChange}
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
}

export default Rocks