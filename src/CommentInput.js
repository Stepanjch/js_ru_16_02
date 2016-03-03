import React, { Component, PropTypes } from 'react'
import { addComment } from './actions/articles'

class CommentInput extends Component {
    static propTypes = {
        articleId: PropTypes.number
    };

    constructor() {
        super();
        this.state = {
            comment: ''
        }
    }

    render() {
        return (
            <div>
                <fieldset className="form-group">
                    <label className="text-muted">Add your comment</label>
                    <textarea className="form-control" rows="3" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </fieldset>
                <a href="#" onClick={this.handleCommentSubmit} className="btn btn-primary btn-sm">Add</a>
            </div>
        )
    }

    handleCommentChange = (event) => {
        this.setState({comment: event.target.value});
    };

    handleCommentSubmit = (event) => {
        event.preventDefault();
        const id = this.props.articleId;
        const commentId = parseInt(id + '' + new Date().getTime());
        addComment(id, this.state.comment, commentId);
        this.setState({comment: ''});
    }
}

export default CommentInput