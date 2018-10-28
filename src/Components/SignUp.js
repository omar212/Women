import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Andy.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.info
        }
    }
    render() {
        return(
            <div className = "background">
                <form>
                    <Typography
                        style={{
                            color: "black",
                            paddingTop: "50px",
                     
                        }}
                        gutterBottom = "true"
                        variant = "display2"
                        align = "center"
                        data-aos = "fade-down"
                        data-aos-easing = "linear"
                        data-aos-duration = "500"
                    >
                        Join Us
                    </Typography>
                    <Card
                        style={{
                            marginTop: "25px",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                        }}
                        className = "signUp"
                        raised = "true"
                        data-aos = "fade-down"
                        data-aos-easing = "linear"
                        data-aos-duration = "500"
                    >
                        <TextField
                            style={{
                                width: "85%"
                            }}
                            margin = "normal"
                            label = "Email Address"
                            variant = "outlined"
                            type = "email"
                        />
                        <TextField
                            style={{
                                width: "85%"
                            }}
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
                            style={{
                                width: "85%"
                            }}
                            margin = "normal"
                            label = "Interest 1"
                            variant = "outlined"
                            type = "text"
                        />
                        <TextField
                            style={{
                                width: "85%"
                            }}
                            margin = "normal"
                            label = "Interest 2"
                            variant = "outlined"
                            type = "text"
                        />
                        <TextField
                            style={{
                                width: "85%"
                            }}
                            margin = "normal"
                            label = "Interest 3"
                            variant = "outlined"
                            type = "text"
                        />
                        <Button
                            type='submit'
                            style={{
                                marginTop: "15px",
                                width: "85%",
                                backgroundColor: "#ffc000",
                                fontSize: "24px",
                                border: "0px"
                            }}
                            variant = "outlined"
                            size = "large"
                        > 
                            <Link to = "/bios" style = {{marginTop: "15px", textDecoration: "none", width: "100%", height: "100%"}}>
                                Sign Up
                            </Link>
                        </Button>

                        <Link to = "/" style = {{marginTop: "15px", color: "#ffc000", textDecoration: "none"}}>Have An Account? Log In Here</Link>
                    </Card>
                </form>
            </div>
        );
    }
}

export default SignUp;
