var React = require('react');

export default class PianoKey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    hoverKey() {
        this.setState({isHovered: true});
    }

    unhoverKey() {
        this.setState({isHovered: false});
    }

    render() {

        let keyStateCode = this.props.keyColor + (this.state.isHovered ? 'On' : 'Off');
        let fill = {
            whiteOff: 'rgb(255, 255, 255)',
            whiteOn: 'rgb(200, 200, 200)',
            blackOff: 'rgb(0, 0, 0)',
            blackOn: 'rgb(200, 200, 200)'
        };
        let keyStyle = {
            'fill': fill[keyStateCode],
            'strokeWidth': '2',
            'stroke': 'rgb(0, 0, 0)'
        };

        return (
            <rect x={this.props.positionX} y="0" width={this.props.width} height={this.props.height} style={keyStyle}
                  onClick={() => this.props.keyPressed(this.props.note, this.props.keyColor)}
                  onMouseEnter={() => this.hoverKey()} onMouseLeave={() => this.unhoverKey()}
            />
        );
    }
}
