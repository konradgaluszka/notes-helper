var React = require('react');

class PianoKeyboard extends React.Component {
    render() {
        const pianoLayoutCfg = {
          keys: {
              number: 52,
              whiteKeyLength: 150,
              whiteKeyWidth: 20,
              blackKeyLength: 90,
              blackKeyWidth: 12
          },
          border: {
              width: 30
          }

        };
        const whiteKeyStyle = {
            'fill': 'rgb(255, 255, 255)',
            'strokeWidth': '2',
            'stroke': 'rgb(0, 0, 0)'
        };

        const blackKeyStyle = {
            'fill': 'rgb(0, 0, 0)',
            'strokeWidth': '2',
            'stroke': 'rgb(0, 0, 0)'
        };

        let isBlackKey = (i) => {
            return !(i == 0 || ((i+2) % 7) == 0 || ((i-2) % 7) == 0);
        };

        let whiteKeysRects = [... new Array(pianoLayoutCfg.keys.number).keys()].map(i => {
            let margin = pianoLayoutCfg.border.width/2;
            let wkw = pianoLayoutCfg.keys.whiteKeyWidth;
            let wkh =  pianoLayoutCfg.keys.whiteKeyLength;
            return <rect key={'white'+i} x={margin + i * wkw} y="0" width={wkw} height={wkh} style={whiteKeyStyle}
                         onClick={() => this.props.keyPressed(i, 'white')}/>;
        });

        let blackKeysRects = [... new Array(pianoLayoutCfg.keys.number).keys()].filter(isBlackKey).map(i => {
            let margin = pianoLayoutCfg.border.width/2;
            let wkw = pianoLayoutCfg.keys.whiteKeyWidth;
            let bkw = pianoLayoutCfg.keys.blackKeyWidth;
            let bkh =  pianoLayoutCfg.keys.blackKeyLength;
            return <rect key={'white'+i} x={margin + i * wkw - 0.5 * bkw} y="0" width={bkw} height={bkh} style={blackKeyStyle}
                         onClick={() => this.props.keyPressed(i, 'black')} />;
        });

        return (
            <div className="content">
                <span>Piano keyboard</span>
                <svg width="2600" height="210">
                    <rect x="0" y="0" width={pianoLayoutCfg.keys.whiteKeyWidth * pianoLayoutCfg.keys.number + pianoLayoutCfg.border.width}
                          height={pianoLayoutCfg.keys.whiteKeyLength + pianoLayoutCfg.border.width} style={blackKeyStyle} />;
                    {whiteKeysRects}
                    {blackKeysRects}
                </svg>
            </div>
        );
    }
}

export default PianoKeyboard;