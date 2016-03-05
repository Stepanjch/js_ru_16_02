import React, {Component, PropTypes} from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    render() {
        return (
            // <li className="list-group-item">
            //     <i className='fa fa-comment-o fa-lg'></i> {this.props.comment.text}
            // </li>

            <div className="card card-block">
                <p className="card-text"><i className='fa fa-comment-o fa-lg'></i> {this.props.comment.text}</p>
            </div>
        )
    }
}

export default Comment