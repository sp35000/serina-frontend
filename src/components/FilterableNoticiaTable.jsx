import { useState } from 'react';

import NoticiaTable from './NoticiaTable';
import getNoticiasByDate from './GetNoticiasByDate';

function FilterableNoticiaTable({ parmDate, setParmDate }) {
    const [filterText, setFilterText] = useState('');
  
    Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
    }  
  
    var calendarDate=parmDate.getFullYear().pad(4)+parmDate.getMonth().pad(2)+parmDate.getDate().pad(2)
    // console.log(calendarDate);
    // getNoticiasByDate(calendarDate);
    var NEWS = getNoticiasByDate(calendarDate);
  
    return (
        <NoticiaTable filterText={filterText} noticias={NEWS} />
    );  
  }

export default FilterableNoticiaTable;