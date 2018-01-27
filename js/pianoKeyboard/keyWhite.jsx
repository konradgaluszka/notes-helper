var React = require('react');

export default class WhiteKey extends React.Component {
    render() {
        let keyStyle = {
            'fill': 'rgb(255, 255, 255)',
            'strokeWidth': '2',
            'stroke': 'rgb(0, 0, 0)'
        };

        return (
            <rect x={this.props.positionX} y="0" width={this.props.width} height={this.props.height} style={keyStyle}
                  onClick={() => this.props.keyPressed(this.props.note, 'white')}/>
        );
    }
}
