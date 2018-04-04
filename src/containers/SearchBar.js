import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({term: '' });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
        <input 
        placeholder="Get a 5-day forecast for your favourite city"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { onSubmit: (term) => dispatch(fetchWeather(term)) };
};

export default connect(null, mapDispatchToProps)(SearchBar);