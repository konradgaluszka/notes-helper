var React = require('react');
var ReactDOM = require('react-dom');

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
            'stroke-width': '2',
            'stroke': 'rgb(0, 0, 0)'
        };

        const blackKeyStyle = {
            'fill': 'rgb(0, 0, 0)',
            'strokeWidth': '2',
            'stroke': 'rgb(0, 0, 0)'
        };

        var isBlackKey = (i) => {
            return !(i == 0 || ((i+2) % 7) == 0 || ((i-2) % 7) == 0);
        };

        var whiteKeysRects = [... new Array(pianoLayoutCfg.keys.number).keys()].map(i => {
            var margin = pianoLayoutCfg.border.width/2;
            var wkw = pianoLayoutCfg.keys.whiteKeyWidth;
            var wkh =  pianoLayoutCfg.keys.whiteKeyLength;
            return <rect x={margin + i * wkw} y="0" width={wkw} height={wkh} style={whiteKeyStyle} />;
        });

        var blackKeysRects = [... new Array(pianoLayoutCfg.keys.number).keys()].filter(isBlackKey).map(i => {
            var margin = pianoLayoutCfg.border.width/2;
            var wkw = pianoLayoutCfg.keys.whiteKeyWidth;
            var bkw = pianoLayoutCfg.keys.blackKeyWidth;
            var bkh =  pianoLayoutCfg.keys.blackKeyLength;
            return <rect x={margin + i * wkw - 0.5 * bkw} y="0" width={bkw} height={bkh} style={blackKeyStyle} />;
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