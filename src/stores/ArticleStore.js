import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE, ADD_COMMENT} from '../actions/constants'
import AppDispatcher from '../dispatcher'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args);
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action;
            switch (type) {
                case DELETE_ARTICLE:
                    this.delete(data.id);
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([args[0].comments.dispatchToken]);
                    this.addCommentId(data.id, data.commentId);
                    break;

                default:
                    return
            }

            this.emitChange();
        })
    }

    addCommentId = (id, commentId) => {
        let item = this.getById(id);
        item.comments ? item.comments.push(commentId) : item.comments = [commentId];
    }
}

export default ArticleStore