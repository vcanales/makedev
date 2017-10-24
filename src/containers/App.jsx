import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchIfNeeded } from '../actions';
import DockerConfig from '../components/DockerConfig';
import config from '../settings';
import './App.css';

const App = ({
  fetching,
  lastUpdated,
  error,
  result,
  dispatch,
}) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchIfNeeded(input.value));
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label htmlFor="search_term">
          Search Image
          <input ref={(element) => { input = element; }} name="search_term" type="text" />
        </label>
        <input type="submit" value="Search" />
      </form>
      Is Fetching: { fetching ? 'Working' : 'Not Working' }<br />
      Last Update: { lastUpdated }<br />
      Error: { !error ? 'All\'s good' : 'Error' }<br />
      Result:
      <pre>
        <code>
          { JSON.stringify(result) }
        </code>
      </pre>
      <br />
      <br />
      <DockerConfig settings={config} />
    </div>
  );
};

const mapStateToProps = (state) => {
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
};

App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  result: PropTypes.shape({
    page_size: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
    page: PropTypes.number,
    count: PropTypes.number,
    summaries: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      type: PropTypes.string,
      publisher: PropTypes.object,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      short_description: PropTypes.string,
      source: PropTypes.string,
      popularity: PropTypes.number,
    })),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
