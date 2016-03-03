import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT} from './constants'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: {id}
    })
}
export function addComment(id, comment, commentId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {id, comment, commentId}
    })
}