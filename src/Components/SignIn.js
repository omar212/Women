import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Andy.css";

class SignIn extends Component {
    render() {
        return (
            <div data-aos="" className = "background">
                <Typography
                    style = {{
                        marginTop: "0",
                        color: "white",
                        textShadow: "0 0 10px black",
                        paddingTop: "100px"
                    }}
                    gutterBottom = "true"
                    variant = "display4"
                    align = "center"
                    data-aos = "fade-down"
                    data-aos-easing = "linear"
                    data-aos-duration = "500"
                >
                    Sign In
                </Typography>
                <Card
                    raised = "true"
                    data-aos = "fade-down"
                    data-aos-easing = "linear"
                    data-aos-duration = "500"
                    style = {{marginTop: "0", opacity: ".95"}}
                    className = "signUp"
                >
                    <form>
                        <TextField 
                            margin = "normal"
                            label = "Email"
                            variant = "outlined"
                            type = "email"
                        />

                        <TextField 
                            margin = "normal"
                            label = "Password"
                            variant = "outlined"
                            type = "password"
                        />
                        <Button 
                            type = "submit"
                            variant = "outlined"
                            style = {{marginTop: "15px"}}
                            gutterBottom
                        >
                            <Link 
                                to = "/signin/login" 
                                style = {{textDecoration: "none", width: "100%", height: "100%"}}
                            >
                                Sign In
                            </Link>
                        </Button>
                        <br/>
                        <Link to = "/signup" style = {{textDecoration: "none"}}>
                            Don't Have An Account? Sign Up Here
                        </Link>
                    </form>
                </Card>
            </div>
        )
    }
}

export default SignIn;