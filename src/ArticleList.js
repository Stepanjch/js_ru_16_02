import React, { Component, PropTypes } from 'react'
import Article from './Article'
import CommentList from './CommentList'

class ArticleList extends Component {
    constructor() {
        super();
        this.state = {
            selected: [],
            open: null
        }
    }

    render() {
        const articles = this.props.articles.map((article) =>
            <Article key={article.id} article={article}
                     isOpen={article.id === this.state.open}
                     onClick={this.open.bind(this, article.id)}
                     select={this.select(article.id).bind(this)}
                     selected={this.state.selected.includes(article.id)}/>
        );
        return (
            <div>
                {articles}
            </div>
        )
    }

    open(open) {
        open = this.state.open == open ? null : open;
        this.setState({open});
    }

    select(id) {
        return function () {
            const selected = this.state.selected;
            let newSelected;
            if (selected.includes(id)) {
                newSelected = selected.filter(id1 => id1 !== id);
            } else {
                newSelected = selected.concat(id);
            }

            this.setState({
                selected: newSelected
            })
        }
    }
}

export default ArticleList