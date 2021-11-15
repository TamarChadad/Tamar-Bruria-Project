import React, { useState, useEffect } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import Grid from '@material-ui/core/Grid';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, FloatingLabel, Col } from "react-bootstrap";
import '../styles/detailsForRent.scss'
import { setHours } from 'date-fns';

export const DetailsForRent = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const[selectedHour, setSelecedtHour] = useState(new Date());
  const[untilHour, setUntilHour] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDay(date);
  };
const handleHourChange=(date)=>{
  setSelecedtHour(date)
  let hour = selectedHour.getHours() +1;
  let temp = untilHour.setHours(hour);
  console.log(temp)
 setUntilHour(temp) 
}
    return (
    <div className="container-hours">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

      
        <Row>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="תאריך לצפייה"
            format="dd/MM/yyyy"
            value={selectedDay}
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
            value={selectedHour}
            onChange={handleHourChange}
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
            value={untilHour}
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
