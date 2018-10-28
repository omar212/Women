import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Andy.css";


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
        }
    }
    render() {
        return (
            <div className = "note">
                {this.props.question}
            </div>
        )
    }
}

export default Questions;