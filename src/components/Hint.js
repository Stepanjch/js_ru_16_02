import React, { Component, PropTypes } from 'react'
const style = {
    position: 'fixed',
    backgroundColor: 'rgb(44,44,44)',
    top: 10,
    left: 10,
    height: 50,
    padding: 10,
    borderRadius: 8,
    color: 'white'
};

class Hint extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <div style={style}>
                {this.props.text}
            </div>
        )
    }
}

export default Hint