import React from 'react';
import { connect } from 'react-redux';
import { searchStart } from '@/actions';
import './App.css';

const App = ({ fetching, lastUpdated, error, result, dispatch }) => {

  let input;
  const onSubmit = e => {
    e.preventDefault();
    dispatch(searchStart(input.value))
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>
          Search Image
          <input ref={element => input = element} name="image" type="text" />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};


const mapStateToProps = state => {
  const {
    fetching,
    lastUpdated,
    result,
    error,
  } = state.docker;

  return {
    error,
    fetching,
    lastUpdated,
    result,
  };
}

export default connect(mapStateToProps)(App);
