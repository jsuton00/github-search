import React from "react";

export default function GitHubSearch(props) {
  const {
    searchTerm,
    setSearchTerm,
    searchGitHubUsers,
    searchGitHubRepos,
  } = props;

  const clickHandler = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      setSearchTerm(searchTerm);
      await searchGitHubUsers();
      await searchGitHubRepos();
    }
  };

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header
      id="search-header"
      className="search-header container cotainer-fluid"
    >
      <div id="search header-title" className="search-header-title row">
        <h1>GitHub Search</h1>
      </div>
      <div id="search-container" className="search container">
        <form id="github-search-form" className="github-search-form form">
          <div id="input-row" className="input-row row">
            <label htmlFor="search-github-username">GitHub Username:</label>
            <input
              id="search-github-username"
              name="search-github-username"
              type="text"
              placeholder="e.g. facebook"
              value={searchTerm}
              onChange={changeHandler}
            />
          </div>
          <button
            id="btnSearch"
            name="btnSearch"
            type="submit"
            onClick={clickHandler}
          >
            GO!
          </button>
        </form>
      </div>
    </header>
  );
}
