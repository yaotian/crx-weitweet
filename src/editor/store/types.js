/**
 * Vuex Mutation types
 * @typedef {string} Mutations
 * @readonly
 * @example store.commit(type, payload)
 */

/**
 * Vuex Action types
 * @typedef {string} Actions
 * @readonly
 * @example store.dispatch(type, payload)
 */

/**
 * Updates the text contents of a box.
 * @type Mutations
 * @param {string} payload.text - The text to be updated.
 */
export const UPDATE_MASTER_TEXT = 'UPDATE_MASTER_TEXT'
export const UPDATE_TWITTER_TEXT = 'UPDATE_TWITTER_TEXT'
export const UPDATE_WEIBO_TEXT = 'UPDATE_WEIBO_TEXT'

/**
 * Updates the selected photo of a box.
 * @type Mutations
 * @param {string} payload.type - 'master', 'twitter' or 'weibo'
 * @param {string} payload.src - src of the image.
 */
export const UPDATE_PHOTO = 'UPDATE_PHOTO'

/**
 * Should be called after the confirmation in master box.
 * @type Mutations
 * @param {boolean} payload.isSlavery - Should slave boxes be controlled?
 * @param {string} [payload.text] - The text to be updated. Needed if isSlavery is true.
 */
export const REQUEST_SLAVERY_FINISH = 'REQUEST_SLAVERY_FINISH'

/**
 * Update isLogingIn
 * @type Mutations
 * @param {boolean} payload.flag - true or false
 */
export const UPDATE_TWITTER_LOGING_IN = 'UPDATE_TWITTER_LOGING_IN'
export const UPDATE_WEIBO_LOGING_IN = 'UPDATE_WEIBO_LOGING_IN'

/**
 * Update oauth access token
 * @type Mutations
 * @param {string} payload.token - The access token
 */
export const UPDATE_TWITTER_TOKEN = 'UPDATE_TWITTER_TOKEN'
export const UPDATE_WEIBO_TOKEN = 'UPDATE_WEIBO_TOKEN'

/**
 * Get asscess token.
 * @type Actions
 */
export const LOG_IN_TWITTER = 'LOG_IN_TWITTER'
export const LOG_IN_WEIBO = 'LOG_IN_WEIBO'

