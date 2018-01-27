var React = require('react');


class Note extends React.Component {

    render() {
        let cfg = {
            sizeX: 7,
            sizeY: 4
        }

        let noteStyle = {
            fill: 'rgb(0, 0, 0)'
        };

        return (
            <ellipse cx={this.props.marginLeft} cy={this.props.notePosition} rx={cfg.sizeX} ry={cfg.sizeY} style={noteStyle} />
        );
    }
}

export default Note;