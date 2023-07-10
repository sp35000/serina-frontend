function NoticiaRow({ noticia }) {
    return (
      // <li>[{noticia.category}-{noticia.initial_date}]&nbsp;<a href="{noticia.link}" target="_blank">{noticia.title}</a></li>
      <li>[{noticia.category}]&nbsp;<a href="{noticia.link}" target="_blank">{noticia.title}</a></li>
      );
  }

export default NoticiaRow;