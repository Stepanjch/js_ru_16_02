import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    render() {
        return (
            <li className="list-group-item">
                {this.props.comment.text}
            </li>
        )
    }
}

export default Comment