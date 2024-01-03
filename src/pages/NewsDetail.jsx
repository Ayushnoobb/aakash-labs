import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NewsDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if article is available in state
  if (!location.state || !location.state.article) {
    // Redirect to 404 page if article is not available
    navigate('/404');
    return null;
  }

  const article = location.state.article;

  return (
    <section className="news-detail">
      <div className="container">
        <div className="news-detail__wrapper">
          <h3 className="news-detail__heading heading__tertiary">{article.title}</h3>
          <div className="news-detail__img-holder">
            <Link className='news-detail__img-link' to={article.url}>
              <img src={article.image} alt=""  className='news-detail__feature-img'/>
            </Link>
          </div>
          <p className='news-detail__img-description common-p'>{article.description}</p>
          <p className='news-detail__news-content common-p'>{article.content}</p>
          <div className="news-detail__news-publication">
            <p className="news-detail__news-source">Source : <Link className='news-detail__news-source' to={article.source.url}>{article.source.name}</Link></p>
            <p className="news-detail__news-published-date">{article.publishedAt.split("T")[0]}</p>
          </div>
          <Link className='news-detail__link-return button__primary bg-purple' to={"/news"}>View All News</Link>
        </div>
      </div>
    </section>
  );
}

export default NewsDetail;
