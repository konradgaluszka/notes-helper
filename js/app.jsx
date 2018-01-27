var React = require('react');
var ReactDOM = require('react-dom');
import PianoKeyboard from './pianoKeyboard/pianoKeyboardContainer.jsx';
import Sheets from './sheets/sheetsContainer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKey: null
        };
    }

    render () {
        var that = this;
        let keyPressed = function(btn, type) {
            console.log("Pressed key: " + type + " " + btn);
            that.setState({pressedKey: btn});
        };

        return (
            <div>
                <Sheets pressedKey={this.state.pressedKey}/>
                <PianoKeyboard keyPressed={keyPressed}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,  document.getElementById("app"));
