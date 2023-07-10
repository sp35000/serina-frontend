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
      <ul>{rows}</ul>
    );
  }

  export default NoticiaTable;