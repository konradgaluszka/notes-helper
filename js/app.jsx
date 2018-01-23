var React = require('react');
var ReactDOM = require('react-dom');
import PianoKeyboard from './pianoKeyboard.jsx';
import SheetNotes from './sheetNotes.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <SheetNotes/>
                <PianoKeyboard/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,  document.getElementById("app"));