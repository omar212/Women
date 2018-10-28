import React, {Component} from "react";
import Template from "./Template";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {
    Link
} from "react-router-dom";
import Data from "./data.json";
import Button from "@material-ui/core/Button";


class Bio extends Component {

    constructor() {
        super();
        this.state = {
            index: 0
        };
    }

    goToNext = () => {
        this.setState({ index: (this.state.index + 1) % Data.length });
    }



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



        //const data = Data[this.state.index];
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');

        }


        return (
            <div onTouchStart={this.goToNext}>
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

                            let str = data.Description.substring(0, 475)  + "..."


                        return (
                            <Template
                                name={data.Name}
                                born={data.Year}
                                career={data.Keyword}
                                info={str}
                                image={data.Picture}
                                moreInfo={data.Wiki}
                            />
                        )
                    }

                    }
                    )
                }
                {/* <Button
                    onClick={this.goToNext}
                    type="submit"
                    variant="outlined"
                    style={{
                        marginTop: "12px",
                        width: "25%",
                        backgroundColor: "white",
                        fontSize: "24px",
                        border: "0px"
                    }}
                    gutterBottom>
                    next</Button>
                     */}
                <Button>
                    <Link to = "/bios/ask" style = {{width: "100%", height: "100%", textDecoration: "none"}}>
                        Ask Me
                    </Link>
                </Button>



            </div>
        )
    }
}

export default Bio;
