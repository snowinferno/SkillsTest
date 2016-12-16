import React, {Component} from 'react';
import {TextField} from 'material-ui';
import * as Fetch from 'isomorphic-fetch';

export default class TypeaheadInput extends Component {
  render() {
    let cities;
    if (this.props.list.length > 0) {
      cities = (
        <ul style={{
          position: 'relative',
          top: '-1em',
          listStyleType: 'none'
        }}>
          {this.props.list.map((city) => {
            return (<li onClick={(evt) => this.props.handleItemSelect(evt.target.dataset.zip)} key={`${city.name}-${city.zip}`} data-zip={city.zip}>{city.name}</li>);
          })}
        </ul>
      )
    }
    return <div>
      <TextField
        hintText={this.props.hint}
        onChange={this.props.handleChange}
      />
      {cities}
    </div>
  }
}

TypeaheadInput.defaultProps = {
  hint: 'Start typing to see options',
  list: [],
  handleChange: (evt) => {
    console.log(evt.target.value);
    console.log('handling default change!');
  },
  handleItemSelect: (zip) => {
    console.log(zip);
  }
}
