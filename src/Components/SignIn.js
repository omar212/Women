import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles"; 
import "./Andy.css";
//import Splash from "./Splash"; 

class SignIn extends Component {
    render() {
        const { classes } = this.props; 
        return (
            <div data-aos="" className="background">
           
                <form>
                    <Typography
                        style={{
                            color: "white",
                            paddingTop: "20px",
                    textShadow: "2px 2px 2px rgba(0, 0,0,0.3)",
                    fontWeight: "bold",
                    fontSize: "30px",
                
                                        }}
                                        gutterBottom="true"
                                        variant="display2"
                                        align="center"
                                        data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="500"
                                    >
                                        iAm
                    </Typography>
                    <hr
                        style={{
                            border: "1px solid white",
width: "85%",
marginTop: "25px",
                            marginBottom: "-15px"
                        }}

                    ></hr>
                    <Typography
                        style={{
                            color: "black",
                            paddingTop: "75px",
                            
                        }}
                        gutterBottom = "true"
                        variant = "display2"
                        align="center"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        Sign In
                    </Typography>
                    <Card
                        style={{
                            marginTop: "50px",
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
                            margin="normal"
                            label="Email"
                            variant="outlined"
                            type="email"
                            style={{
                                width: "85%"
                            }}
                            classes={{
                                focused: classes.labelsFocused,
                                root: classes.labels,
                            }}
                        />

                        <TextField 
                            margin = "normal"
                            label="Password"
                            style={{
                                width: "85%"
                            }}
                            variant = "outlined"
                            type = "password"
                        />
                        <Button 
                            type = "submit"
                            variant = "outlined"
                            style={{
                                marginTop: "15px",
                                width: "85%",
                                backgroundColor: "#ffc000",
                                fontSize: "24px",
                                border: "0px"
                    }}
                            gutterBottom
                        >
                            <Link 
                                to = "/bios" 
                                style = {{color: "black", textDecoration: "none", width: "100%", height: "100%"}}
                            >
                                Sign In
                            </Link>
                        </Button>

                        <Link to = "/signup" style = {{color: "#ffc000", marginTop: "15px", textDecoration: "none"}}>Don't Have An Account? Sign Up Here</Link>
                    </Card>
                </form>
            </div>
        )
    }
}

const styles = () => ({
    labels: {
        '&$labelsFocused': {
            color: 'red',
            borderColor: 'red',
        },
    },
    labelsFocused: { },
})

export default withStyles(styles)(SignIn);