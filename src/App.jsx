import { useState } from 'react';
import Calendar from 'react-calendar';

import FilterableNoticiaTable from './components/FilterableNoticiaTable';
import getNoticiasByDate from './components/GetNoticiasByDate';

export default function App() {
  const [date, setDate] = useState(new Date());
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }  
  var calendarDate=date.getFullYear().pad(4)+date.getMonth().pad(2)+date.getDate().pad(2)
  console.log("calling getNoticiasByDate: "+calendarDate)
  var noticias = getNoticiasByDate(calendarDate);

  return (
    <div>
      <h1>Serina News</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <FilterableNoticiaTable noticias={noticias} />;
    </div>
  )
}