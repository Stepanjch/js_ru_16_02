/**
 * Created by sdmy on 08/03/2016.
 */

import $ from 'jquery'

export function loadArticleComments({id}) {
    return $.get(`/api/comment?article=${id}`)
}