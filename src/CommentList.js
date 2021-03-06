import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        id: PropTypes.number
    };

    state = {
        isOpen: false
    };

    render() {
        const { isOpen } = this.state;
        const articleId = this.props.id;
        const comments = this.props.comments.map((comment) =>
            <Comment key={comment.id} comment={comment}/>);
        const actionText = isOpen ? 'Hide comments' : !comments.length ? `Write first comment` : comments.length > 1 ?`Read ${comments.length} comments` : `Read comment`;
        return (
            <div>
                <a href="#" className="btn btn-secondary btn-sm pull-right" onClick={this.toggleOpen}>{actionText}</a>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {isOpen ? comments : null}
                        {isOpen ? <li className="list-group-item"><CommentInput articleId={articleId}/></li> : null}
                    </ul>
                </div>
            </div>
        )
    }

    toggleOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList