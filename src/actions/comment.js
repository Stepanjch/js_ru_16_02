import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_ALL_COMMENTS } from './constants'
import { loadArticleComments} from './api/comments'
import { asyncAC } from './api/utils'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text,
            id: Date.now(),
            articleId
        }
    })
}

export const loadComments = asyncAC(LOAD_ALL_COMMENTS, loadArticleComments);