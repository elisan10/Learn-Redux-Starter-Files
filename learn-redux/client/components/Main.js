import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagran</Link>
        </h1>
      </div>
    );
  },
});

export default Main;
