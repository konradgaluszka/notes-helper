var React = require('react');
var ReactDOM = require('react-dom');
import PianoKeyboard from './pianoKeyboard.jsx';
import SheetNotes from './sheetNotes.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };

    }

    render () {
        var that = this;
        let notes = [];
        var keyPressed = function(btn, type) {
            console.log("pressed: " + type + " " + btn);
            notes = [btn];
            that.setState({notes: notes});
        };

        return (
            <div>
                <SheetNotes notes={this.state.notes}/>
                <PianoKeyboard keyPressed={keyPressed}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,  document.getElementById("app"));