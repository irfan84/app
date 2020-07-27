import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Main from "./components/Main";
import M from 'materialize-css/dist/js/materialize.min';

const App = () => {
  useEffect(() =>
  M.AutoInit(), []);

  return (
      <Fragment>
      <div className="container">
    <Main M={M} />
      </div>
      </Fragment>
  );
}

export default App;
