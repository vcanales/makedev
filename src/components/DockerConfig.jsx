import React from 'react';
import PropTypes from 'prop-types';
import { map } from '../utils/objects';

const DockerConfig = ({ settings }) => {
  const services = [];
  const addService = (obj) => {
    services.push(obj);
  };

  const service = {
    name: '',
    image: '',
    settings: {},
  };

  return (
    <div className="docker-config">
      <div>
        <h4>Settings</h4>
        <form>
          <h5>Version</h5>
          <div className="config-file-version">
            <label htmlFor="version1">
              <input type="radio" name="version" id="version1" value="1" /> 1
            </label>
            <label htmlFor="version2">
              <input type="radio" name="version" id="version2" value="2" /> 2
            </label>
          </div>
          <h5>Services</h5>
          <div className="form-control">
            <label htmlFor="service_name">
              Service Name
              <input
                name="service_name"
                type="text"
                onChange={({ target }) => { service.name = target.value; }}
              />
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="image_name">
              Image name
              <input
                onChange={({ target }) => { service.image = target.value; }}
                name="image_name"
                type="text"
              />
              <button type="button">Search the store</button>
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="settings_search">
              Settings
              <input
                name="settings_search"
                type="text"
                placeholder="Setting name"
              />
            </label>
          </div>
          <button type="button" onClick={() => addService(service)}>Add service</button>
          <ul>
            {services.map(({ name, image }) =>
              <li>Name: {name}, Image: {image}</li>)}
          </ul>
        </form>
      </div>
      <div>
        <h5>Result</h5>
        <pre>
          <code className="yaml" />
        </pre>
      </div>
      <div>
        <h5>Available Settings</h5>
        <ul>
          {map(settings, (value, name) => {
            const setting =
              typeof value === 'object' ?
              JSON.stringify(value) : value;
            return <li key={name}>{name}: {setting}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

DockerConfig.propTypes = {
  settings: PropTypes.shape({
    name: PropTypes.string,
    child_settings: PropTypes.string,
  }).isRequired,
};

export default DockerConfig;
