import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Andy.css";


class Questions extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.index,
            question: this.props.question,
            color: "",
        }
        this.colorize = this.colorize.bind(this);
        this.fontize = this.fontize.bind(this);
        this.floatize = this.floatize.bind(this);
    }
    


    colorize() {
        if(this.state.key % 2 === 0) {
            return("#3999F8")
        } else {
            return ("#F2F2F2")
        }
    }

    fontize() {
        if(this.state.key % 2 === 0) {
            return("white")
        } else {
            return ("black")
        }
    }

    floatize(){
        if(this.state.key % 2 === 0) {
            return("right")
        } else {
            return ("left")
        }
    }

    render() {
        // let quest;
        // (this.state.key % 2 === 0) ? 
        //         quest = (<div className = "note" style = {{background: "red"}}>{this.state.question}</div>) : 
        //         quest = (<div className = "note">{this.state.question}</div>)
        return (
            <div>
                <div className = "note" style = {{backgroundColor: this.colorize(), color: this.fontize(), textAlign: this.floatize(), float: this.floatize()}}>{this.state.question}</div>
            </div>
        )
    }
}

export default Questions;