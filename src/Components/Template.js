import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Andy.css";

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            year: this.props.born,
            info: this.props.info,
            image: this.props.image,
            moreInfo: this.props.moreInfo,
        }
    }
    render() {
        return (
            <div>
                <Card
                    className = "info"
                    raised = "true"
                    data-aos = "fade-down"
                    data-aos-easing = "linear"
                    data-aos-duration = "500"
                >   
                    < img src = {this.state.image} alt = ""></img>

                    <Typography
                        variant = "display1"
                        style = {{color: "black"}}
                    >
                        {this.state.name}
                    </Typography>

                    <Typography
                        variant = "subtitle1"
                    >
                        {this.state.year} 
                    </Typography>

                    <Typography
                        variant = "body2"
                    >
                        {this.state.info}
                    </Typography> 
                
                    < a href = {this.state.moreInfo} >More Info</a>
                </Card>
            </div>
        )
    }
}

export default Template;