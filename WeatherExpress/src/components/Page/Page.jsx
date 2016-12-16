import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText,
    Dialog,
    FlatButton,
    Paper,
    TextField,
} from 'material-ui';
import TypeaheadInput from '../TypeaheadInput/TypeaheadInput';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
          query: '',
          cityList: [],
          weatherList: [],
          alertOpen: true,
        };
    }

    handleInputChange(evt) {
      this.setState({query: evt.target.value});
      fetch(`/weather/cities?q=${evt.target.value}`, {credentials: 'same-origin'})
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({cityList: json.items});
        })
        .catch((err) => {
          console.error(err);
        })
    }

    handleItemSelect(zip) {
      this.setState({query: '', cityList: []})
      fetch(`/weather/cities/${zip}`)
        .then((response) => response.json())
        .then((json) => {
          this.setState({weatherList: [...this.state.weatherList, json.data]})
        })
        .catch((err) => {
          console.error(err);
        })
    }

    handleAlertClose() {
      this.setState({alertOpen: false});
    }

    render() {
        return (<Card>
            <CardHeader
                title={title}
            />
            <CardText>
              <TypeaheadInput
                value={this.state.query}
                hint="Start typing the name of a city."
                list={this.state.cityList}
                handleChange={this.handleInputChange.bind(this)}
                handleItemSelect={this.handleItemSelect.bind(this)}
              />
              {
                this.state.weatherList.length > 0 &&
                this.state.weatherList.map((weatherItem, index) => {
                  return (
                    <Paper key={`${weatherItem.city}-${weatherItem.zip}`}
                      style={{
                        margin: '1em',
                        padding: '1em',
                        display: 'inline-block',
                        position: 'relative',
                      }}
                      >
                      <span
                        style={{
                          position: 'absolute',
                          top: '0.25em',
                          right: '0.5em',
                          cursor: 'pointer',
                        }}
                        onClick={(evt) => {
                          let weatherSet = [...this.state.weatherList.slice(0,index), ...this.state.weatherList.slice(index + 1)];
                          this.setState({weatherList: weatherSet});
                        }}
                        >x</span>
                      <strong>{weatherItem.name}</strong> [{weatherItem.zip}]
                      <div style={{display: 'table'}}>
                        <div style={{display: 'table-row', fontWeight: 'bold'}}>
                          <div style={{display: 'table-cell', paddingRight: '0.5em'}}>Temperature</div>
                          <div style={{display: 'table-cell'}}>Description</div>
                        </div>
                        <div style={{display: 'table-row'}}>
                          <div style={{display: 'table-cell', paddingRight: '0.5em'}}>{`${weatherItem.weather.temp.value}${weatherItem.weather.temp.units}`}</div>
                          <div style={{display: 'table-cell'}}>{weatherItem.weather.description}</div>
                        </div>
                      </div>
                    </Paper>
                  )
                })
              }
            </CardText>
            <Dialog
              open={this.state.alertOpen}
              onRequestClose={this.handleAlertClose.bind(this)}
              modal={true}
              title={`Known cities`}
              autoScrollBodyContent={true}
              actions={[<FlatButton onClick={this.handleAlertClose.bind(this)} label="OK"/>]}
            >
              <ul>
                <li>San Jose</li>
                <li>Fremont</li>
                <li>Fairfield</li>
                <li>Fairfax</li>
                <li>Saratoga</li>
              </ul>
            </Dialog>
        </Card>);
    }
}
