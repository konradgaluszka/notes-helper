var React = require('react');


const linesCfg = {
    linesLength: 600,
    linesSpaces: 10
};

const notesCfg = {
    notesSpaces: 40,
    notesSize: 7

};

class LinesGroup extends React.Component {
    render() {

        let linesStyle = {
            stroke: 'rgb(0, 0, 0)'

        };

        let lines = [... new Array(5).keys()].map(i => {
            return <line x1="0" y1={this.props.offset + linesCfg.linesSpaces * i} x2={linesCfg.linesLength}
                         y2={this.props.offset + linesCfg.linesSpaces * i}
                         style={linesStyle} key={"line: " + this.props.group + "-" + i}/>;
        });
        return (
                <g>
                    {lines}
                </g>
        );
    }

}

class SheetLines extends React.Component {

    render() {
        return (
                <g>
                    <LinesGroup group="1" offset="0"/>
                    <LinesGroup group="2" offset={linesCfg.linesSpaces * (5 + 1)}/>
                    <LinesGroup group="3" offset={linesCfg.linesSpaces * (10 + 2)}/>
                </g>
        );
    }
}
class Notes extends React.Component {

    render() {
        const maxPosition = 22.5 * linesCfg.linesSpaces;
        let noteToLine = function(note) {
            console.log("note: " + note);
            return maxPosition - note * linesCfg.linesSpaces/2;
        };
        let noteStyle = {
            fill: 'rgb(0, 0, 0)'
        };

        let notes = this.props.notes.map(function(note, i) {
            return <ellipse cx={i * notesCfg.notesSpaces} cy={noteToLine(note)} rx={notesCfg.notesSize} ry={notesCfg.notesSize * 0.75} style={noteStyle} />
        });
        return (
            <g>
                {notes}
            </g>
        );
    }
}

class SheetNotes extends React.Component {

    render() {
        return (
            <div className="content">
                <svg width={linesCfg.linesLength} height={linesCfg.linesSpaces * 5 * 3 + 20}>
                    <SheetLines/>
                    <Notes notes={this.props.notes}/>
                </svg>
            </div>
        );
    }
}

export default SheetNotes;