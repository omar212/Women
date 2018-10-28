import React, {Component} from "react";
import Template from "./Template";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Data from "./data.json";


class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            key: [],
            results: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = filter => event => {
        this.setState({
            filter: event.target.value,
        });
    };

    render() {
        const career = [{
                value: '',
                label: '',
            },
            {
                value: 'Mathematics',
                label: 'Mathematics',
            },
            {
                value: 'Computer Science',
                label: 'Computer Science',
            },
            {
                value: 'Computer Engineering',
                label: 'Computer Engineering',
            },
            {
                value: 'Biochemistry',
                label: 'Biochemistry',
            }
        ];

        return (
            <div>
                <TextField 
                    select
                    label = "Career"
                    value = {this.state.filter}
                    variant = "outlined"
                    style = {{width: "200px", borderColor: "red"}}
                    onChange = {this.handleChange('career')}
                >
                    {career.map(option => (
                        <MenuItem key = {option.value} value = {option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <div>
                    {Data.map((data, index) => {
                        // if (data.Keyword === this.state.filter) {
                           return (
                               <div>                       
                                    <Template 
                                        name = {data.Name} 
                                        born = {data.Year}
                                        career = {data.Keyword}
                                        info = {data.Description} 
                                        image = {data.Picture} 
                                        moreInfo = {data.Wiki}
                                    />
                                </div>
                           )
                        // }
                    })}
                </div>
            </div>
        )
    }
}

export default Bio;