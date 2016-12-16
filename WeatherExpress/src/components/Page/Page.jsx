import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText,
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
        };
    }

    handleInputChange(evt) {
      fetch(`/weather/cities?q=${evt.target.value}`, {credentials: 'same-origin'})
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({cityList: json.items});
        })
        .catch((err) => {
          document.write(JSON.stringify(err));
        })
    }

    handleItemSelect(zip) {
      fetch(`/weather/cities/${zip}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({weatherList: [...this.state.weatherList, json.data]})
        })
        .catch((err) => {
          console.log('err', err);
          document.write(JSON.stringify(err));
        })
    }

    render() {
        return (<Card>
            <CardHeader
                title={title}
            />
            <CardText>
              <TypeaheadInput
                hint="Start typing the name of a city."
                list={this.state.cityList}
                handleChange={this.handleInputChange.bind(this)}
                handleItemSelect={this.handleItemSelect.bind(this)}
              />
              {
                this.state.weatherList.length > 0 &&
                this.state.weatherList.map((weatherItem) => {
                  console.log(weatherItem);
                  return (
                    <Paper key={`${weatherItem.city}-${weatherItem.zip}`}
                      style={{
                        margin: '1em',
                        padding: '1em',
                      }}
                      >
                      <span>
                        <strong>{weatherItem.name}</strong> [{weatherItem.zip}]
                        <table>
                          <thead>
                            <tr>
                              <th>Temperature</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{`${weatherItem.weather.temp.value}${weatherItem.weather.temp.units}`}</td>
                              <td>{weatherItem.weather.description}</td>
                            </tr>
                          </tbody>
                        </table>
                      </span>
                    </Paper>
                  )
                })
              }
            </CardText>
        </Card>);
    }
}
