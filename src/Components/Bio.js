import React, {Component} from "react";
import Template from "./Template";
import * as data from "./data.json";

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: data.Name,
        }
    }
    render() {
        console.log(data.name);
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Bio;