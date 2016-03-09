import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, _START, _FAIL, _SUCCESS } from '../actions/constants'
import AppDispatcher from '../dispatcher'
import { loadComments } from '../actions/comment'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args);
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action;

            switch (type) {
                case ADD_COMMENT:
                    this.add({
                        id: data.id,
                        text: data.text
                    });
                    break;

                case LOAD_ALL_COMMENTS + _START:
                    this.loading = true;
                    this.loaded = false;
                    break;

                case LOAD_ALL_COMMENTS + _FAIL:
                    this.loaded = false;
                    this.loading = false;
                    this.error = error;
                    break;

                case LOAD_ALL_COMMENTS + _SUCCESS:
                    this.loaded = true;
                    this.loading = false;
                    response.forEach(this.add);
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) loadComments();
        return this.getAll()
    }
}

export default CommentStore