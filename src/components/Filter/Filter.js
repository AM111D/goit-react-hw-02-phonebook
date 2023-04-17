import React, { Component } from 'react';
import css from './filter.module.css';

class Filter extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        {/* <label htmlFor="search">Search:</label> */}
        <input
          className={css.formSearch}
          type="text"
          id="search"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
