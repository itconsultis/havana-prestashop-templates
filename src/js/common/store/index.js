import Dispatcher from '../dispatcher'
import Constants from '../constants'
import Actions from '../actions'
import { EventEmitter } from 'events'
import assign from 'object-assign'

function _windowWidthHeight() {
    return {
        w: window.innerWidth,
        h: window.innerHeight
    }
}

const Store = assign({}, EventEmitter.prototype, {
    emitChange: (type, item) => {
        Store.emit(type, item)
    },
    Window: () => {
        return _windowWidthHeight()
    },
    Mouse: { x:0, y:0, nX:0, nY:0 },
    Parent: undefined,
    Orientation: Constants.ORIENTATION.LANDSCAPE,
    Detector: {},
    MobileMenuIsOpen: false,
    CartIsOpen: false,
    WishlistIsOpen: false,
    dispatcherIndex: Dispatcher.register((payload) => {
        const action = payload.action
        switch (action.actionType) {
        case Constants.WINDOW_RESIZE:
            Store.Window.w = action.item.windowW
            Store.Window.h = action.item.windowH
            Store.Orientation = (Store.Window.w > Store.Window.h) ? Constants.ORIENTATION.LANDSCAPE : Constants.ORIENTATION.PORTRAIT
            Store.emitChange(action.actionType)
            break
        case Constants.TRIGGER_MOBILE_MENU:
            if (Store.MobileMenuIsOpen) setTimeout(() => { Actions.closeMobileMenu() }, 0)
            else setTimeout(() => { Actions.openMobileMenu() }, 0)
            break
        case Constants.OPEN_MOBILE_MENU:
            setTimeout(() => { Actions.overflowHidden() }, 0)
            Store.MobileMenuIsOpen = true
            Store.emitChange(action.actionType)
            break
        case Constants.CLOSE_MOBILE_MENU:
            setTimeout(() => { Actions.overflowVisible() }, 0)
            Store.MobileMenuIsOpen = false
            Store.emitChange(action.actionType)
            break
        case Constants.OPEN_CART:
            Store.CartIsOpen = true
            Store.emitChange(action.actionType)
            break
        case Constants.CLOSE_CART:
            Store.CartIsOpen = false
            Store.emitChange(action.actionType)
            break
        case Constants.OPEN_WISHLIST:
            Store.WishlistIsOpen = true
            Store.emitChange(action.actionType)
            break
        case Constants.CLOSE_WISHLIST:
            Store.WishlistIsOpen = false
            Store.emitChange(action.actionType)
            break
        default:
            Store.emitChange(action.actionType, action.item)
            break
        }
        return true
    })
})

export default Store
