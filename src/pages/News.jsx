import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  const newsItems = articles.map((article, index) => (
    <li key={index} className='news-list__list'>
      <Link to={`/news/${index}`} state={{ article }} className='news-list__link'>
        <div className="news-list__list-wrapper">
          <div className='news-list__list-img-holder'>
            <img
              src={article.image}
              alt="feature-img"
              className='news-list__list-img'
              loading='lazy'
            />
          </div>

          <div className="news-list__list-detail">
            <h4 className="news-list__list-heading">{article.title}</h4>
            <p className='news-list__list-description'>{article.description}</p>
            <p className="news-list__list-published">{article.publishedAt}</p>
          </div>
        </div>
      </Link>
    </li>
  ));

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginationButtons = Array(totalPages)
    .fill(null)
    .map((_, index) => (
      <button key={index + 1} onClick={() => handlePageChange(index + 1)} className='news-list__pagination-button'>
        {index + 1}
      </button>
    ));

  const visibleItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      const apikey = '5e9e9b56756fe09e542caef550e72798';
      let page = 1;
      let allArticles = [];

      try {
        while (true) {
          const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&page=${page}&apikey=${apikey}`;
          const response = await fetch(url);
          const data = await response.json();

          if (data.articles.length === 0) {
            // No more articles, break the loop
            break;
          }

          allArticles = [...allArticles, ...data.articles];
          page++;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setArticles(allArticles);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className='news-list'>
      <div className="container">
        <div className="news-list__wrapper">
          <h2 className="heading__secondary">News</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <ul className="news-list__lists">
                {visibleItems}
              </ul>
              <div className="news-list__pagination-wrapper">
                {paginationButtons}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default News;