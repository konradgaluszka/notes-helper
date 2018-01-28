var React = require('react');
import PianoKey from './pianoKey.jsx';

class PianoKeyboard extends React.Component {
    render() {
        const keyboardStyle = {
            'fill': 'rgb(0, 0, 0)'
        };

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
        let isBlackKey = (i) => {
            return !(i == 0 || ((i+2) % 7) == 0 || ((i-2) % 7) == 0);
        };

        let whiteKeys = [... new Array(pianoLayoutCfg.keys.number).keys()].map(i => {
            let margin = pianoLayoutCfg.border.width/2;
            let wkw = pianoLayoutCfg.keys.whiteKeyWidth;
            let wkh =  pianoLayoutCfg.keys.whiteKeyLength;
            return <PianoKey key={'white'+i} keyColor="white" note={i} positionX={margin + i * wkw} height={wkh} width={wkw}
                             keyPressed={this.props.keyPressed}/>;
        });

        let blackKeys = [... new Array(pianoLayoutCfg.keys.number).keys()].filter(isBlackKey).map(i => {
            let margin = pianoLayoutCfg.border.width/2;
            let wkw = pianoLayoutCfg.keys.whiteKeyWidth;
            let bkw = pianoLayoutCfg.keys.blackKeyWidth;
            let bkh =  pianoLayoutCfg.keys.blackKeyLength;
            return <PianoKey key={'black'+i} keyColor='black' note={i} positionX={margin + i * wkw - 0.5 * bkw} height={bkh} width={bkw}
                             keyPressed={this.props.keyPressed}/>;
        });

        return (
            <div className="content">
                <span>Piano keyboard</span>
                <svg width="2600" height="210">
                    <rect x="0" y="0" width={pianoLayoutCfg.keys.whiteKeyWidth * pianoLayoutCfg.keys.number + pianoLayoutCfg.border.width}
                          height={pianoLayoutCfg.keys.whiteKeyLength + pianoLayoutCfg.border.width} style={keyboardStyle} />;
                    {whiteKeys}
                    {blackKeys}
                </svg>
            </div>
        );
    }
}

export default PianoKeyboard;