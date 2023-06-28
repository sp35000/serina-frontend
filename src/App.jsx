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

function NoticiaTable({ noticias }) {
  const rows = [];
  noticias.forEach((noticia) => {
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
  return (
    <div>
      <h1>Serina News</h1>
      <NoticiaTable noticias={noticias} />
    </div>
  );
}

const NEWS = [
  {id: "1", category: "World", title: "Titulo 01", link: "https://google.com", initial_date: "20230101", final_date: "20231231", hashtag: "#cool"},
  {id: "2", category: "World", title: "Titulo 02", link: "https://google.com", initial_date: "20230102", final_date: "20231231", hashtag: "#cool"},
  {id: "3", category: "Brasil", title: "Titulo 03", link: "https://google.com", initial_date: "20230103", final_date: "20231231", hashtag: "#cool"},
  {id: "4", category: "Brasil", title: "Titulo 04", link: "https://google.com", initial_date: "20230104", final_date: "20231231", hashtag: "#cool"},
  {id: "5", category: "America", title: "Titulo 05", link: "https://google.com", initial_date: "20230105", final_date: "20231231", hashtag: "#cool"}
];


export default function App() {
  return <FilterableNoticiaTable noticias={NEWS} />;
}
