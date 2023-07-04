import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

function NoticiaRow({ noticia }) {
  return (
    <tr>
      <td>{noticia.category}</td>
      <td>{noticia.title}</td>
      <td>{noticia.link}</td>
      <td>{noticia.initial_date}</td>
      <td>{noticia.final_date}</td>
      <td>{noticia.hashtag}</td>
    </tr>
  );
}

function NoticiaTable({ noticias, filterText }) {
  const rows = [];
  noticias.forEach((noticia) => {
    if (
      noticia.title.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    )
    {
      return;
    }
    rows.push(
      <NoticiaRow
        noticia={noticia}
        key={noticia.id} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Link</th>
          <th>Initial Date</th>
          <th>Final Date</th>
          <th>Hashtag</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterableNoticiaTable({ noticias }) {
  const [filterText, setFilterText] = useState('');
  const [date, setDate] = useState(new Date())
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }  
  var calendarDate=date.getFullYear().pad(4)+date.getMonth().pad(2)+date.getDate().pad(2)
  return (
    <div>
      <h1>Serina News</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <SearchBar filterText={calendarDate} onFilterTextChange={setFilterText} />
      <NoticiaTable filterText={filterText} noticias={noticias} />
    </div>
  );
}

function SearchBar({filterText,onFilterTextChange}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>  );
}


const NEWS = [
  // {id: "1", category: "World", title: "Titulo 01", link: "https://google.com", initial_date: "20230101", final_date: "20231231", hashtag: "#cool"},
  // {id: "2", category: "World", title: "Titulo 02", link: "https://google.com", initial_date: "20230102", final_date: "20231231", hashtag: "#cool"},
  // {id: "3", category: "Brasil", title: "Titulo 03", link: "https://google.com", initial_date: "20230103", final_date: "20231231", hashtag: "#cool"},
  // {id: "4", category: "Brasil", title: "Titulo 04", link: "https://google.com", initial_date: "20230104", final_date: "20231231", hashtag: "#cool"},
  // {id: "5", category: "America", title: "Titulo 05", link: "https://google.com", initial_date: "20230105", final_date: "20231231", hashtag: "#cool"}
  {"id":72,"title":"Portugal encerra Golden Visa para compra de im\u00c3\u00b3veis nas regi\u00c3\u00b5es de Lisboa e Porto","category":"Europe","link":"https:\/\/www.infomoney.com.br\/minhas-financas\/portugal-encerra-golden-visa-para-comprar-de-imoveis-nas-regioes-de-lisboa-e-porto\/","initial_date":20200206,"final_date":20250206,"hashtag":"","media":null,"created_at":null,"updated_at":null},
  {"id":349,"title":"Portugal vive &quot;crise social&quot;, alerta relat\u00c3\u00b3rio do terceiro estado de emerg\u00c3\u00aancia - DN","category":"Europe","link":"https:\/\/www.dn.pt\/dinheiro\/portugal-vive-crise-social-alerta-relatorio-do-terceiro-estado-de-emergencia-12187400.html?","initial_date":20200513,"final_date":20250513,"hashtag":"","media":null,"created_at":null,"updated_at":null},
  {"id":383,"title":"Fim da quarentena em Portugal esbarra no medo da popula\u00c3\u00a7\u00c3\u00a3o de sair \u00c3\u00a0s ruas","category":"Europe","link":"https:\/\/g1.globo.com\/mundo\/blog\/sandra-cohen\/post\/2020\/05\/19\/fim-da-quarentena-em-portugal-esbarra-no-medo-da-populacao-de-sair-as-ruas.ghtml","initial_date":20200519,"final_date":20250519,"hashtag":"","media":null,"created_at":null,"updated_at":null},
  {"id":591,"title":"Governo portugu\u00eas anuncia estatiza\u00e7\u00e3o da TAP","category":"Travel","link":"https:\/\/www.melhoresdestinos.com.br\/tap-air-portugal-estatal.html","initial_date":20200703,"final_date":20250703,"hashtag":"","media":"text","created_at":null,"updated_at":null}
  ];


export default function App() {
  return <FilterableNoticiaTable noticias={NEWS} />;
}

