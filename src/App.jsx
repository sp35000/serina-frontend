import { useState } from 'react';
import Calendar from 'react-calendar';

import FilterableNoticiaTable from './components/FilterableNoticiaTable';

// Mockup
// const NEWS = [
//   {"id":72,"title":"Portugal encerra Golden Visa para compra de im\u00c3\u00b3veis nas regi\u00c3\u00b5es de Lisboa e Porto","category":"Europe","link":"https:\/\/www.infomoney.com.br\/minhas-financas\/portugal-encerra-golden-visa-para-comprar-de-imoveis-nas-regioes-de-lisboa-e-porto\/","initial_date":20200206,"final_date":20250206,"hashtag":"","media":null,"created_at":null,"updated_at":null},
//   {"id":349,"title":"Portugal vive &quot;crise social&quot;, alerta relat\u00c3\u00b3rio do terceiro estado de emerg\u00c3\u00aancia - DN","category":"Europe","link":"https:\/\/www.dn.pt\/dinheiro\/portugal-vive-crise-social-alerta-relatorio-do-terceiro-estado-de-emergencia-12187400.html?","initial_date":20200513,"final_date":20250513,"hashtag":"","media":null,"created_at":null,"updated_at":null},
//   {"id":383,"title":"Fim da quarentena em Portugal esbarra no medo da popula\u00c3\u00a7\u00c3\u00a3o de sair \u00c3\u00a0s ruas","category":"Europe","link":"https:\/\/g1.globo.com\/mundo\/blog\/sandra-cohen\/post\/2020\/05\/19\/fim-da-quarentena-em-portugal-esbarra-no-medo-da-populacao-de-sair-as-ruas.ghtml","initial_date":20200519,"final_date":20250519,"hashtag":"","media":null,"created_at":null,"updated_at":null},
//   {"id":591,"title":"Governo portugu\u00eas anuncia estatiza\u00e7\u00e3o da TAP","category":"Travel","link":"https:\/\/www.melhoresdestinos.com.br\/tap-air-portugal-estatal.html","initial_date":20200703,"final_date":20250703,"hashtag":"","media":"text","created_at":null,"updated_at":null}
//   ];

export default function App() {
  const [date, setDate] = useState(new Date());
  const [parmDate, setParmDate] = useState(new Date());

  return (
    <div>
      <h1>Serina News</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>            
      <FilterableNoticiaTable parmDate={date} />;
    </div>
  )
}