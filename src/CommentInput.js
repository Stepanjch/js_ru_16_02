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
            <div className="clearfix">
                <fieldset className="form-group">
                    <textarea className="form-control" rows="3" value={this.state.comment} placeholder="Write your comment" onChange={this.handleCommentChange}></textarea>
                </fieldset>
                <a href="#" onClick={this.handleCommentSubmit} className="btn btn-primary btn-sm pull-xs-right"><i className='fa fa-commenting-o'></i> Add</a>
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