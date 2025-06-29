import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/ArticlePage.css';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const api = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${api}/api/articles`)
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);
 
  return (
    <div className="articles-container">
      <h1 className="articles-title">Artikel</h1>
      <div className="articles-grid">
        {articles.map(article => (
          <Link to={`/articles/${article.id}`} className="article-card" key={article.id}>
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <span className="read-more">Baca Selengkapnya →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
}

export default ArticlesPage;
