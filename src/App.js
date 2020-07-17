import React, { Component } from "react";
import GitHubSearch from "./components/GitHubSearch";
import GitHubUser from "./components/GitHubUser";
import GitHubRepos from "./components/GitHubRepos.js";
import Loader from "./components/Loader";
import axios from "axios";

class App extends Component {
  state = {
    userSearchResults: "",
    repoSearchResults: "",
    searchTerm: "",
    isError: false,
    isLoading: false,
  };

  fetchGitHubUsers = async () => {
    try {
      this.setState({ isLoading: true });
      const url = `https://api.github.com/users/${this.state.searchTerm}`;
      const results = await axios.get(url);
      console.log(results.data);
      this.setState({
        isError: false,
        isLoading: false,
        userSearchResults: results.data,
      });
    } catch (error) {
      console.error("An error has occurred!", error);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  fetchGitHubReposByUser = async () => {
    try {
      this.setState({ isLoading: true });
      const url = `https://api.github.com/users/${this.state.searchTerm}/repos`;
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        repoSearchResults: results.data,
      });
    } catch (error) {
      console.error("An error has occurred!", error);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };
  render() {
    return (
      <div>
        <GitHubSearch
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          searchGitHubUsers={this.fetchGitHubUsers}
          searchGitHubRepos={this.fetchGitHubReposByUser}
        />
        {this.state.isLoading && <Loader />}
        {this.state.isError && <p>An error has occured!</p>}
        <GitHubUser users={this.state.userSearchResults} />
        <GitHubRepos repos={this.state.repoSearchResults} />
      </div>
    );
  }
}

export default App;
