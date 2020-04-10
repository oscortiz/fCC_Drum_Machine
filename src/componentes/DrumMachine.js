import React from 'react';
import DrumPad from './DrumPad';
import PropTypes from 'prop-types';
import { getDrumPadContent } from '../helper';

const DrumMachine = props => {
 
    return (
        <div className="row mx-2" id="drum-machine">
            <div className="container-fluid col-md-6 offset-md-3" id="keyboard">
                <div className="row justify-content-center align-items-center p-2 shadow" id="display">
                    <span className="text-uppercase text-center font-weight-bolder mt-1">{props.display}</span>
                </div>
                <div className="row justify-content-around p-3">
                    {getDrumPadContent().map(drumPadContent => 
                        <DrumPad 
                            key={drumPadContent.key}
                            drumPadContent={drumPadContent}
                            playClip={props.playClip}
                        />
                    )}
                </div>                
            </div>
        </div>
    );
}

DrumMachine.propTypes = {
    display: PropTypes.string.isRequired,
    playClip: PropTypes.func.isRequired
}
 
export default DrumMachine;