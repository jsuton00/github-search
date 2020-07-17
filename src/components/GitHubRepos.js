import React from "react";

export default function GitHub(props) {
  const { repos } = props;

  return (
    <div className="container container-fluid">
      {repos &&
        repos.map((repo, index) => {
          return (
            <ul key={index}>
              <li id={repo.id}>{repo.name}</li>
            </ul>
          );
        })}
    </div>
  );
}
