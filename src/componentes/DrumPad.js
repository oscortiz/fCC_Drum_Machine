import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrumPad extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }        
 
    handleKeyPress(e) {
        e.preventDefault();
        const pressedKey = document.getElementById(e.key.toUpperCase());
        if (pressedKey != null) {
            pressedKey.parentElement.click();
        }
    }

    handleClick = () => {    
        this.props.playClip(this.props.drumPadContent);
    }

    render() { 

        const {key, id, clipUrl} = this.props.drumPadContent;

        return (
            <div className="drum-pad col-3 m-2 text-center align-items-center" id={id} onClick={this.handleClick}>
                <audio 
                    className="clip"
                    id={key}
                    src={clipUrl}
                />
                <div className="mt-1">{key}</div>
            </div>            
        );
    }
}

DrumPad.propTypes = {
    drumPadContent: PropTypes.object.isRequired,
    playClip: PropTypes.func.isRequired
}
 
export default DrumPad;