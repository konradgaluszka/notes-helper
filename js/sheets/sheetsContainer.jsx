var React = require('react');
import SheetLine from './sheetLines.jsx';
import Note from './sheetNotes.jsx';

const linesCfg = {
    length: 600,
    spaces: 10,
    leftMargin: 20,
    areaHeight: 300,
    bottomSpace: 50
};

const notesCfg = {
    notesSpaces: 40,
    leftMargin: 60,
    initialTransition: -3
};

class Sheets extends React.Component {
    render() {
        let noteForKey = (key) => {
            if(key == null) {
                return <div></div>;
            }
            let notePosition = linesCfg.areaHeight - 0.5 * (key + notesCfg.initialTransition) * linesCfg.spaces;
            return <Note notePosition={notePosition} marginLeft={notesCfg.leftMargin} />
        };

        let lineAtPosition = (linePositionIndex, isShadow=false) => {
            let linePosition = linesCfg.areaHeight - linesCfg.bottomSpace - linePositionIndex * linesCfg.spaces;
            return <SheetLine linePosition={linePosition} length={linesCfg.length} marginLeft={linesCfg.leftMargin} shadow={isShadow} />
        };

        let lineShadowAtPosition = (linePositionIndex) => {
            return lineAtPosition(linePositionIndex, true)
        };

        return (
            <div className="content">
                <span>Piano sheets</span>
                <svg width={linesCfg.length} height={linesCfg.spaces * 5 * 3 * 2 + 20}>
                    {lineShadowAtPosition(19)}
                    {lineShadowAtPosition(18)}
                    {lineShadowAtPosition(17)}
                    {lineAtPosition(16)}
                    {lineAtPosition(15)}
                    {lineAtPosition(14)}
                    {lineAtPosition(13)}
                    {lineAtPosition(12)}
                    {lineShadowAtPosition(11)}
                    {lineAtPosition(10)}
                    {lineAtPosition(9)}
                    {lineAtPosition(8)}
                    {lineAtPosition(7)}
                    {lineAtPosition(6)}
                    {lineShadowAtPosition(5)}
                    {lineAtPosition(4)}
                    {lineAtPosition(3)}
                    {lineAtPosition(2)}
                    {lineAtPosition(1)}
                    {lineAtPosition(0)}
                    {lineShadowAtPosition(-1)}
                    {lineShadowAtPosition(-2)}
                    {lineShadowAtPosition(-3)}
                    {lineShadowAtPosition(-4)}
                    {lineShadowAtPosition(-5)}
                    {lineShadowAtPosition(-6)}

                    {noteForKey(this.props.pressedKey)}
                </svg>
            </div>
        );
    }
}

export default Sheets;