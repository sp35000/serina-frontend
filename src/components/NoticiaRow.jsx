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

export default NoticiaRow;