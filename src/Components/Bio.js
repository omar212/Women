import React, {Component} from "react";
import Template from "./Template";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Data from "./data.json";

class Bio extends Component {

    constructor() {
        super();
        this.state = {
            index: 0
        };
    }

    goToNext = () => {
        this.setState({ index: (this.state.index + 1) % Data.length });
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
                {/*<TextField 
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
                </TextField>*/}
                
                { Data.map((data, index) => {
                    if (this.state.index === index) {
                        return (

                            <Template
                                name={data.Name}
                                born={data.Year}
                                career={data.Keyword}
                                info={data.Description}
                                image={data.Picture}
                                moreInfo={data.Wiki}
                            />
                        )
                    }
                })}
                <button onClick={this.goToNext}>next</button>

                         
                
            </div>
        )
    }
}

export default Bio;