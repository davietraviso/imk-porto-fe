import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/ArticleDetailPage.css';
import { useNavigate } from 'react-router-dom';

function ArticleDetailPage() {
  const api = import.meta.env.VITE_API_BASE_URL;
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${api}/api/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="article-detail">
      <img src={`/${article.image.replace('public/', '')}`} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {article.referenceLink && (
        <div className="reference-preview">
          <a href={article.referenceLink} target="_blank" rel="noopener noreferrer">
            <div className="reference-card">
              <img src={`/${article.referenceImage.replace('public/', '')}`} alt={article.referenceTitle} />
              <div className="reference-text">
                <h3>{article.referenceTitle}</h3>
                <p>{article.referenceDescription}</p>
                <span className="reference-url">{article.referenceLink}</span>
              </div>
            </div>
          </a>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* <button onClick={() => navigate('/articles')}>Lihat Artikel</button> */}
        <button style={{ backgroundColor:'grey'}} onClick={() => navigate('/articles')}>Back</button> 

      </div>
      
    </div>
  );
}

export default ArticleDetailPage;
