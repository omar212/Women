import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Andy.css";
import "./template.css";


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
            <div

                className="info_container">
                    <Card
                        className = "info"
                        raised = "true"
                        
                    >   
                    

                        <Typography
                            variant = "subtitle1"
                        >
                            {this.state.name}
                        </Typography>

                        < img src={this.state.image} alt=""></img>

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