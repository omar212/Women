import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Andy.css";
import "./template.css";

class Template extends Component {
    render() {
        return (
            <div

                className="info_container">
                <Card
                    className = "info"
                    raised = "true"
                    data-aos = "fade-down"
                    data-aos-easing = "linear"
                    data-aos-duration = "500"
                >   
                    <Typography
                        variant="display1"
                        style={{ color: "black" }}
                    >
                        Women's Name
                    </Typography>

                    <img src = {require("./pete-bellis-199853-unsplash.jpg")} alt = ""></img>

                    <Typography
                        variant = "subtitle1"
                    >
                        (1887 - 1945) 
                    </Typography>

                    <Typography
                        variant = "subtitle1"
                    >
                        Age:
                    </Typography>

                    <Typography
                        variant = "body2"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget maximus nibh. Aenean bibendum ligula quis
                        augueiaculis posuere sit amet eget nulla. Mauris vel tellus nibh. Maecenas eget interdum ipsum, vel vestibulum
                        eros. Integer sit amet velit sed risus ultricies lacinia. Donec a magna felis. Curabitur eu nisi feugiat,
                        tincidunt eros quis, aliquet ligula.
                    </Typography> 
                    
                    <Typography
                        variant = "subtitle1"
                    >
                        Relevant Info:
                    </Typography>
                </Card>
            </div>
        )
    }
}

export default Template;