import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import withHint from './HOC/withHint'
import {deleteArticle} from './actions/articles'
require('./style.css');

class Article extends Component {


    render() {
        return (
            <div className="card">
                {this.getTitle()} <CSSTransition transitionName="example" transitionAppear={true} transitionAppearTimeout={250} transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                {this.getBody()}
            </CSSTransition> {this.getFooter()} {this.props.getHint()}
            </div>
        )
    }

    getTitle() {
        const {showHint, hideHint, onClick, selected, article: {title}} = this.props;
        const selectedStyle = selected ? {color: 'white'} : null;
        const classNames = require('classnames');
        const isSelected = this.props.selected;
        const headerClasses = classNames({
            'card-header': true,
            'card-primary': isSelected,
            'interactive-title': true,
            'clearfix': true
        });
        const selectClasses = classNames({
            'fa': true,
            'fa-check-circle': isSelected,
            'fa-check-circle-o': !isSelected,
            'text-info': isSelected,
            'text-muted': !isSelected,
            'fa-lg': true,
            'pull-xs-right': true
        });
        return (
            <h5 className={headerClasses} style={selectedStyle} onClick={onClick} onMouseEnter={showHint(title)} onMouseLeave={hideHint}>
                {title} <i title="Select article" className={selectClasses} onClick={this.select.bind(this)}></i>
            </h5>
        )
    }

    getBody() {
        if (!this.props.isOpen) {
            return null;
        }
        const {article} = this.props;
        return (
            <div className="card-block">
                <div className="card-text" key="article">
                    <p>{article.body}</p>
                    <CommentList comments={article.getRelation('comments')} id={article.id}/>
                </div>
            </div>
        )
    }

    getFooter() {
        if (!this.props.isOpen) {
            return null;
        }
        const deleteTitle = `Delete "${this.props.article.title}" article`;
        return (
            <div className="card-footer clearfix">
                <a href="#" title={deleteTitle} onClick={this.handleDeleteArticle} className="btn btn-danger btn-sm pull-xs-right"><i className='fa fa-trash-o'></i> Delete</a>
            </div>
        )
    }

    handleDeleteArticle = (ev) => {
        ev.preventDefault();
        deleteArticle(this.props.article.id);
    };

    select(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.props.select();
    }
}

export default withHint(Article);