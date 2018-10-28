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
                        Sign In
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
                        ><Link to = "/signin/login">
                            Sign In
                        </Link>
                        </Button>

                        <Link to = "/signup" style = {{marginTop: "15px", textDecoration: "none"}}>Don't Have An Account? Sign Up Here</Link>
                    </Card>
                </form>
            </div>
        )
    }
}

export default SignIn;