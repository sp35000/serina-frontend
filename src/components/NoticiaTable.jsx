import NoticiaRow from "./NoticiaRow";

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

  export default NoticiaTable;