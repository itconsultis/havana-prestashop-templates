import Constants from '../constants'
import Dispatcher from '../dispatcher'

const Actions = {
    windowResize: (windowW, windowH) => {
        Dispatcher.handleViewAction({
            actionType: Constants.WINDOW_RESIZE,
            item: { windowW: windowW, windowH: windowH }
        })
    },
    openCart: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.OPEN_CART,
            item: undefined
        })
    },
    closeCart: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.CLOSE_CART,
            item: undefined
        })
    },
    openWishlist: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.OPEN_WISHLIST,
            item: undefined
        })
    },
    closeWishlist: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.CLOSE_WISHLIST,
            item: undefined
        })
    },
    triggerMobileMenu: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.TRIGGER_MOBILE_MENU,
            item: undefined
        })
    },
    openMobileMenu: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.OPEN_MOBILE_MENU,
            item: undefined
        })
    },
    closeMobileMenu: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.CLOSE_MOBILE_MENU,
            item: undefined
        })
    },
    overflowHidden: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.OVERFLOW_HIDDEN,
            item: undefined
        })
    },
    overflowVisible: () => {
        Dispatcher.handleViewAction({
            actionType: Constants.OVERFLOW_VISIBLE,
            item: undefined
        })
    },
}

export default Actions
