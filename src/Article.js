import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import withHint from './HOC/withHint'
import { deleteArticle } from './actions/articles'
require('./style.css');

class Article extends Component {


    render() {
        return (
            <div className="card">
                {this.getTitle()}
                <div className="card-block">
                    <CSSTransition transitionName="example" transitionAppear={true}
                                   transitionAppearTimeout={250}
                                   transitionEnterTimeout={250}
                                   transitionLeaveTimeout={250}>
                        {this.getBody()}
                    </CSSTransition>
                </div>
                <div className="card-block text-xs-right">
                    <div className="btn-group" role="group">
                        <a href="#" onClick={this.select.bind(this)} className="btn btn-secondary btn-sm">select</a>
                        <a href="#" onClick={this.handleDeleteArticle} className="btn btn-danger btn-sm">Delete
                            article</a>
                    </div>
                    {this.props.getHint()}
                </div>
            </div>
        )
    }

    getTitle() {
        const {showHint, hideHint, onClick, selected, article: { title }} = this.props;
        const selectedStyle = selected ? {color: 'white'} : null;
        const classNames = require('classnames');
        const headerClasses = classNames({
            'card-header': true,
            'card-primary': this.props.selected,
            'interactive-title': true
        });
        return (
            <h5 className={headerClasses} style={selectedStyle} onClick={onClick} onMouseEnter={showHint(title)} onMouseLeave={hideHint}>
                {title}
            </h5>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null;
        const {article} = this.props;
        return (
            <div className="card-text" key="article">
                <p>{article.body}</p>
                <CommentList comments={article.getRelation('comments')} id={article.id}/>
            </div>
        )
    }

    handleDeleteArticle = (ev) => {
        ev.preventDefault();
        deleteArticle(this.props.article.id);
    };

    select(ev) {
        ev.preventDefault();
        this.props.select();
    }
}

export default withHint(Article);