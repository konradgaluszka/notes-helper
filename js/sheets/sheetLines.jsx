var React = require('react');


class SheetLine extends React.Component {
    render() {

        let linesStyle = {
            stroke: this.props.shadow ? 'rgb(200, 200, 200)' : 'rgb(0, 0, 0)',
            strokeWidth: this.props.shadow ? 1 : 2
        };

        return (
            <line x1={this.props.marginLeft} y1={this.props.linePosition} x2={this.props.marginLeft + this.props.length}
                  y2={this.props.linePosition} style={linesStyle} key={"line-" + this.props.linePosition}/>
        );
    }

}

export default SheetLine;