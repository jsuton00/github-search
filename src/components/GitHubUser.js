import React from "react";

export default function GitHubUser(props) {
  const { users } = props;

  return (
    <div className="container container-fluid">
      {users && (
        <div id={users.id}>
          <div id="github-username" className="github-username row">
            <img
              src={users.avatar_url}
              alt={users.userName + "avatar"}
              className="avatar"
            />
            <h3>{users.name}</h3>
          </div>
          <div
            id="github-username-details"
            className="github-username-details content"
          >
            <div className="location">
              <span>Location:</span>
              {users.location}
            </div>
            <div className="bio row">
              <span>Bio:</span>
              {users.bio}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
