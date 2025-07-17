"use client";

import React from "react";
import Popular from "../popular/popular";
import { useGlobalContext } from "../../context/global";
import Upcoming from "../Upcoming/Upcoming";
import Airing from "../Airing/Airing";
import Footer from "../Footer/Footer";
import "./Homepage.css";

function Homepage() {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getUpcomingAnime,
    getPopularAnime,
    getAiringAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = React.useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  const getPageTitle = () => {
    switch (rendered) {
      case "popular":
        return "Popular Anime";
      case "airing":
        return "Airing Anime";
      case "upcoming":
        return "Upcoming Anime";
      default:
        return "Popular Anime";
    }
  };

  const handleFilterClick = (filterType: string) => {
    setRendered(filterType);

    switch (filterType) {
      case "airing":
        getAiringAnime();
        break;
      case "upcoming":
        getUpcomingAnime();
        break;
      case "popular":
        getPopularAnime();
        break;
    }
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <h1 className="logo-text">KuroPlay</h1>
            </div>
          </div>

          <div className="search-section">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="search-input-wrapper">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Search your favorite anime..."
                  value={search}
                  onChange={handleChange}
                  className="search-input"
                />
                <button type="submit" className="search-btn">
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="filter-section">
            <div className="filter-buttons">
              <button
                className={`filter-btn ${
                  rendered === "popular" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("popular")}
              >
                <i className="fas fa-fire"></i>
                <span>Popular</span>
              </button>

              <button
                className={`filter-btn ${
                  rendered === "airing" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("airing")}
              >
                <i className="fas fa-broadcast-tower"></i>
                <span>Airing</span>
              </button>

              <button
                className={`filter-btn ${
                  rendered === "upcoming" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("upcoming")}
              >
                <i className="fas fa-clock"></i>
                <span>Upcoming</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="homepage-content">
        <div className="content-wrapper">
          <div className="page-title-section">
            <h2 className="current-page-title">{getPageTitle()}</h2>
            <div className="title-underline"></div>
          </div>
          {switchComponent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
