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
            response: [{
                    send: false,
                    first: "Hello"
                },
                {
                    send: false,
                    second: "goodbye"
                },
                {
                    send: false,
                    thrid: "okay"
                }
            ]

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
                noteText: ''
            });
        }
    }

    // deleteNote(index){
    //   let notesArr =
    //
    // }

    render() {

        let notes = this.state.notes.map((val, key) => {
            return <Questions key = {key} question = {val}/>
        });



        return ( 
            <Card 
                raised
                className = "container"
            >
                {notes}
                <TextField
                    type = "text"
                    ref = {((input) => {this.textInput = input})}
                    value = {this.state.noteText}
                    onChange = {noteText => this.updateNoteText(noteText)}
                    onKeyPress = {this.handleKeyPress.bind(this)}
                    variant = "outlined"
                    label = "Question"
                    helperText = "Press Enter to Ask"
                    style = {{position: "fixed", bottom: "100px"}}
                />
                <span
                    className = "btn"
                    onClick = {this.addNote.bind(this)}
                >
                    +
                </span>
            </Card>
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