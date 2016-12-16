import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText,
    TextField,
} from 'material-ui';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
    }
    render() {
        return (<Card>
            <CardHeader
                title={title}
            />
            <CardText>
                <TextField
                    hintText="Start typing the name of a city."
                    onChange={(evt) => {
                        this.setState({query: evt.target.value});
                    }}
                />
            </CardText>
        </Card>);
    }
}
