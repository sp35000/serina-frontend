import { useState } from 'react';
import NoticiaTable from './NoticiaTable';

function FilterableNoticiaTable({ noticias }) {
    const [filterText, setFilterText] = useState('');
    console.log('FilterableNoticiaTable: '+noticias);
 
    return (
        <NoticiaTable filterText={filterText} noticias={noticias} />
    );  
  }

export default FilterableNoticiaTable;