import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Andy.css";
import "./template.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


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
               
                {/*<Link
                    to="/signin"
                    style={{ left:"35px", top: "25px", position: "absolute", color: "#ffc000", textDecoration: "none", width: "100%", height: "100%" }}
                    >
                        Sign In
                            </Link>*/}
                
                    <Card
                        className = "info"
                        raised = "true"
                        
                    >   
                    

                    <Typography
                        style={{
                            color: "black",
                            fontSize: "24px",
                        }}
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
                
                        <a>More Info</a>
                    </Card>
                </div>
        )
    }
}

export default Template;