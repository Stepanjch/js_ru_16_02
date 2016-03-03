import SimpleStore from './SimpleStore'
import { ADD_COMMENT } from '../actions/constants'
import AppDispatcher from '../dispatcher'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args);
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action;

            switch (type) {
                case ADD_COMMENT:
                    const comment = {text: data.comment, id:data.commentId};
                    this.add(comment);
                    //this.saveComment(data.comment, data.commentId);
                    break;

                default: return
            }

            this.emitChange();
        })
    }

}

export default CommentStore