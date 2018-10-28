import React, {Component} from 'react';
import Questions from "./Questions";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Andy.css";

class Ask extends Component {
    constructor(props) {
        super();
        this.state = {
            noteText: '',
            notes: [],
            key: 0,
        }
    }

    

    updateNoteText(noteText) {
        this.setState({
            noteText: noteText.target.value
        })
       
    }

    addNote() {
        if (this.state.noteText === "") {
            return
        }

        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({
            noteText: ''
        });
        this.textInput.focus();
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            let notesArr = this.state.notes;
            notesArr.push(this.state.noteText);
            this.setState({
                noteText: '',
                key: this.state.key++,
            });
        }
    }

    // deleteNote(index){
    //   let notesArr =
    //
    // }

    render() {
        
        // let notes = this.state.notes.map((val, key) => {
        //     return (
        //         <div>
        //         <Questions key = {key} question = {val} color = "#F2F2F2"/>
        //         {console.log(key)}
        //         </div>
        //     )

        // });



        return ( 
            <div>
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
            <Card 
                raised
                className="container"
                style={{
                    width: "85%",
                    height: "58vh",
                    marginTop: "25px"
                   
                }}
            >
                {this.state.notes.map((val, key) => {
                    return (
                    <div>
                        <Questions index = {key} question = {val} color = "#F2F2F2"/>
                        {console.log("key was " + key)}
                    </div>
                )})}
                <TextField
                    type = "text"
                    ref = {((input) => {this.textInput = input})}
                    value = {this.state.noteText}
                    onChange = {noteText => this.updateNoteText(noteText)}
                    onKeyPress = {this.handleKeyPress.bind(this)}
                    variant = "outlined"
                    label = "Question"
                    helperText = "Press Enter to Ask"
                    style = {{position: "fixed", bottom: "50px",}}
                />
                <span
                    className = "btn"
                    onClick = {this.addNote.bind(this)}
                >
                    +
                </span>
                </Card>
                </div>
            // <div className = "container" >
            // <div className = "btn" onClick = {this.addNote.bind(this)}> + </div> 
            // <input type = "text" ref = {((input) => {this.textInput = input})}
            //     className = "textInput"
                // value = {
                //     this.state.noteText
                // }
                // onChange = {
                //     noteText => this.updateNoteText(noteText)
                // }
                // onKeyPress = {
                //     this.handleKeyPress.bind(this)
            //     }
            // />

            // </div>
        );
    }
}

export default Ask;