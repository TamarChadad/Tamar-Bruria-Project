import React, { useState, useEffect } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import Grid from '@material-ui/core/Grid';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, FloatingLabel, Col } from "react-bootstrap";
import '../styles/detailsForRent.scss'

export const DetailsForRent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    return (
    <div className="container-hours">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <Row>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="תאריך לצפייה"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Row>
        <Row>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="משעה"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{

              'aria-label':'date',
            }}
          />
        </Row>
        <Row>
          <KeyboardTimePicker
            disabled
            dir = "rtl"
            margin="normal"
            id="time-picker"
            label="עד שעה"
            value={selectedDate}
            onChange={handleDateChange}
            InputAdornmentProps={{ display: "none" }}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Row>
      </MuiPickersUtilsProvider>
      <Button className="submit" variant="primary" type="submit">
        אישור
      </Button>
    </div>
  )
}


// import React, { Fragment, useState } from "react";
// import { KeyboardDatePicker } from "@material-ui/pickers";
// import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";

// export const DetailsForRent =()=>{
//   const [selectedDate, handleDateChange] = useState(new Date());

//   return (
//     <Fragment>
//       <KeyboardDatePicker
//         clearable
//         value={selectedDate}
//         placeholder="10/10/2018"
//         onChange={date => handleDateChange(date)}
//         minDate={new Date()}
//         format="MM/dd/yyyy"
//       />

//       <KeyboardDatePicker
//         placeholder="2018/10/10"
//         value={selectedDate}
//         onChange={date => handleDateChange(date)}
//         format="yyyy/MM/dd"
//       />
//     </Fragment>
//   );
// }


// import React from 'react';
// import { DateTime } from 'react-datetime-bootstrap';


// export  const DetailsForRent = (props) => (
//     <div>
//         <h4>Minimum Usage to pick today date</h4>
//         <DateTime />
//         <h4>Provide a value</h4>
//         <DateTime value="2017-04-20"/>
//         <h4>Format (See momentjs for available formats)</h4>
//         <DateTime pickerOptions={{format:"LL"}} value="2017-04-20"/>
//         <h4>Time Only</h4>
//         <DateTime pickerOptions={{format:"LTS"}}/>
//     </div>
// );

// import React, { useState } from 'react';
// import DatePicker from 'react-date-picker';
// //import AdapterDateFns from '@mui/lab/AdapterDateFns';
// export const DetailsForRent = () => {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div className="col-sm-6">
//       <div className="form-group">
//         <div className='input-group date' id='datetimepicker8'>
//           <input type='text' className="form-control" />
//           <span className="input-group-addon">
//             <span className="fa fa-calendar">
//             </span>
//           </span>
//         </div>
//       </div>
//     </div>
    // <div>
    //     <form>
    //         <DatePicker
    //             onChange={date => onChange(date)}
    //             value={value}
    //             className="form-control"
    //             selected ={value}
    //         />

    //     </form>
    // </div>
//   )
// }

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';
// import Stack from '@mui/material/Stack';

// export const DetailsForRent = () => {
//   const [value, setValue] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <TimePicker
//           ampm={false}
//           openTo="hours"
//           views={['hours', 'minutes', 'seconds']}
//           inputFormat="HH:mm:ss"
//           mask="__:__:__"
//           label="With seconds"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }

