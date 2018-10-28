import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Andy.css";

class SignUp extends Component {
    render() {
        return(
            <div>
                <form>
                    <Typography
                        style = {{
                            marginTop: "2%",
                            color: "black"
                        }}
                        gutterBottom = "true"
                        variant = "display4"
                        align = "center"
                    >
                        Join Us
                    </Typography>
                    <Card
                        style = {{marginTop: "0"}}
                        className = "signUp"
                        raised = "true"
                        data-aos = "fade-down"
                        data-aos-easing = "linear"
                        data-aos-duration = "500"
                    >
                        <TextField 
                            margin = "normal"
                            label = "Full Name"
                            variant = "outlined"
                            type = "text"
                        />
                        <TextField 
                            margin = "normal"
                            label = "Age"
                            variant = "outlined"
                            type = "number"
                            min = "0"
                        />
                        <Typography
                            variant = "body"
                        >
                            Please Enter 3 Interests
                        </Typography>
                        <TextField 
                            margin = "normal"
                            label = "Interest 1"
                            variant = "outlined"
                            type = "text"
                        />
                        <TextField 
                            margin = "normal"
                            label = "Interest 2"
                            variant = "outlined"
                            type = "text"
                        />
                        <TextField 
                            margin = "normal"
                            label = "Interest 3"
                            variant = "outlined"
                            type = "text"
                        />
                        <Button 
                            type = 'submit'
                            variant = "outlined"
                            size = "large"
                            style = {{marginTop:'15px'}}
                        >
                            Sign Up
                        </Button>

                        <Link to = "/" style = {{marginTop: "15px", textDecoration: "none"}}>Have An Account? Log In Here</Link>
                    </Card>
                </form>
            </div>
        );
    }
}

export default SignUp;