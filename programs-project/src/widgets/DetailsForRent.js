import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import Grid from '@material-ui/core/Grid';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, FloatingLabel, Col } from "react-bootstrap";
import '../styles/detailsForRent.scss'
import { ApiCalls } from '../services/Api';
import moment from 'moment'

export const DetailsForRent = () => {
  const user = useSelector((state) => state.user.user);
  const programCurrent = useSelector((state)=> state.programs.programCurrent)
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [untilHour, setUntilHour] = useState(new Date());
  const [submitted, setSubmitted] = useState(false)
  const [sureRent, setSureRent] = useState(false)
  const { postRent} = ApiCalls()
  const [isFirst, setIsFirst] = useState(true)
  const [detailsRent, setDetailsRent] = useState({
    "RuserId": user.Uid,
    "RfromDate": new Date(selectedDay),
    "RtoDate": new Date(untilHour),
    "Rprice": programCurrent.Pprice,
    "Rpassword": "12345678",
    "Ractive": false,
    "RprogramId": programCurrent.Pid,
    "Rstatus": false
  });
  useEffect(() => {
    console.log("in use effect")
    var newDateObj = moment(selectedDay).add(240, 'm').toDate();
    setUntilHour(newDateObj)
    console.log("untilHour", untilHour.getHours())
  }, [selectedDay])
  const handleChanges = (e) => {
    const { name, value } = e.target;

  }
  const handleDateChange = (date) => {
    setSelectedDay(date);

  };
  const convertDateToString=(str)=> {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth())+1).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const convertHourToString = (str) =>{
    var date = new Date(str),
      hours = ("0" + (date.getHours())).slice(-2),
      min = ("0" + date.getMinutes()).slice(-2);
      return [hours, min].join(":");
  }
  
  const handleSubmit = (e) => {
    setIsFirst(false)
    if (selectedDay >= new Date()) {
      console.log("The date in handle submit is correct", selectedDay <= new Date(), ' this is date:', selectedDay)
      setSubmitted(true)
    }
    else {
      setSubmitted(false)
    }
    console.log("submitted in handleSubmit function:", submitted)
  }

  const handleCancelSubmit = ()=>{
    setSubmitted(false)
    setIsFirst(true)
  }
  const handleSubmitSendEmail = () => {
    console.log("handleSumbitSentEmail");
    let data = {
      "RuserId": user.Uid,
      "RfromDate": new Date(selectedDay),
      "RtoDate": new Date(untilHour),
      "Rprice": programCurrent.Pprice,
      "Rpassword": "12345678",
      "Ractive": false,
      "RprogramId": programCurrent.Pid,
      "Rstatus": false
    };
    setDetailsRent(data);
    console.log("rentttttt", detailsRent);
    postRent(detailsRent)

  }
  return (
    <>
      <Row>
        <Col className="container-hours">
          {(!submitted && !isFirst) &&
            <div >התאריך אינו תקין!!</div>
          }
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Row>
              <KeyboardDatePicker name="date"
                key={2}
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
              <KeyboardTimePicker name="fromHour"
                key={52}
                margin="normal"
                id="time-picker"
                label="משעה"
                value={selectedDay}
                onChange={handleDateChange}
                KeyboardButtonProps={{

                  'aria-label': 'date',
                }}
              />
            </Row>
            <Row>
              <KeyboardTimePicker name="toHour"
                key={245}
                disabled
                dir="rtl"
                margin="normal"
                id="time-picker"
                label="עד שעה"
                onChange={handleChanges}
                value={untilHour}
                InputAdornmentProps={{ display: "none" }}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Row>
          </MuiPickersUtilsProvider>
        </Col>
        <Col className="container-hours">
          <p>תשלום בכרטיס אשראי</p>

        </Col>
      </Row>
      <Row>
        <Button variant="primary" onClick={handleSubmit}>לאישור לחץ כאן</Button>
      </Row>
      {submitted && <div>
        <p>הזמנת התוכנית<span>{programCurrent.Pname}</span></p>
        <p>בתאריך:<span>{convertDateToString(selectedDay)}</span></p>
        <p>משעה: <span>{convertHourToString(selectedDay)}</span></p>
        <p>עד שעה: <span>{convertHourToString(untilHour)}</span></p>
        <p>כרטיס אשראי<span>**** **** **** 4532</span></p>
        <p>מחיר: <span></span></p>
        <Button variant="primary" onClick={handleSubmitSendEmail}>להזמנת התוכנית ולשליחת מייל</Button>
        <Button variant="primary" onClick={handleCancelSubmit}>לביטול</Button>
      </div>
      }
    </>
  )
}
