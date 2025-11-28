"use client";
import { useEffect, useState } from "react";

export default function NewsClient({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch(`/api/news?category=${category}`);
      const data = await res.json();

      // ✅ Filter out articles with missing essentials
      const validArticles = (data.articles || []).filter(
        (a) =>
          a &&
          a.title &&
          a.url &&
          a.description &&
          a.urlToImage // require image
      );

      setArticles(validArticles);
    }
    fetchNews();
  }, [category]);

  return (
    <div>
<h2 className="text-dark fw-bold mb-4 text-uppercase">
  {category} Headlines
</h2>

      <div className="row">
        {articles.map((a, i) => (
          <div key={i} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={a.urlToImage || "/fallback.jpg"} // ✅ fallback image
                alt={a.title}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text text-muted">
                  {a.description?.slice(0, 100)}...
                </p>

                {/* ✅ Metadata */}
                <div className="mt-2 small text-secondary">
                  {a.author && <span>By <strong>{a.author}</strong></span>}
                  {a.source?.name && (
                    <span className="ms-2">| <strong>{a.source.name}</strong></span>
                  )}
                  {a.publishedAt && (
                    <span className="ms-2">
                      • {new Date(a.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <a
                  href={a.url}
                  className="btn btn-sm btn-outline-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
                    
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
