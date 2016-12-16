import React, {Component} from 'react';
import {TextField} from 'material-ui';
import * as Fetch from 'isomorphic-fetch';

export default class TypeaheadInput extends Component {
  render() {
    let cities;
    if (this.props.list.length > 0) {
      cities = (
        <ul style={{
          position: 'absolute',
          top: '1.85em',
          left: '1em',
          backgroundColor: 'white',
          border: 'solid 1px #CCC',
          borderTop: 'none',
          padding: '0em 0.5em 0.25em 0.5em',
          display: 'inline-block',
          listStyleType: 'none'
        }}>
          {this.props.list.map((city) => {
            return (<li onClick={(evt) => this.props.handleItemSelect(evt.target.dataset.zip)} key={`${city.name}-${city.zip}`} data-zip={city.zip}>{city.name}</li>);
          })}
        </ul>
      )
    }
    return <div style={{position: 'relative'}}>
      <TextField
        value={this.props.value}
        hintText={this.props.hint}
        onChange={this.props.handleChange}
      />
      {cities}
    </div>
  }
}

TypeaheadInput.defaultProps = {
  hint: 'Start typing to see options',
  value: '',
  list: [],
  handleChange: (evt) => {
    console.log(evt.target.value);
    console.log('handling default change!');
  },
  handleItemSelect: (zip) => {
    console.log(zip);
  }
}
