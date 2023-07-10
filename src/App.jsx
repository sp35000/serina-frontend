import { useState } from 'react';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import './sig.css'

import FilterableNoticiaTable from './components/FilterableNoticiaTable';
import getNoticiasByDate from './components/GetNoticiasByDate';

export default function App() {
  const [date, setDate] = useState(new Date());
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }  
  var month=date.getMonth()+1
  var calendarDate=date.getFullYear().pad(4)+month.pad(2)+date.getDate().pad(2)
  console.log("calling getNoticiasByDate: "+calendarDate)
  var noticias = getNoticiasByDate(calendarDate);

  return (
    <Container>
    <Row>
      <Col>
      <h1 className="text-center">Serina News</h1>
      <div className="calendar-container .react-calendar--doubleView .react-calendar__viewContainer" align="center">
        <Calendar onChange={setDate} value={date} />
      </div>
      </Col>
    </Row>
    <Row>
      <Col>
      <br/>
      <p className="text-center">Search date: {calendarDate}</p>
      <br/>
      <FilterableNoticiaTable noticias={noticias} />
      </Col>
    </Row>
  </Container>
  )
}