import Store from '../../store'
import Constants from '../../constants'
import Actions from '../../actions'
import header from '../header'
import cart from '../cart'

class Layout {
	init() {
		const headerEl = $j(document).find('header').get(0)
		this.header = header(headerEl)
	}
	// 	this.openCart = this.openCart.bind(this)
	// 	this.closeCart = this.closeCart.bind(this)
	// 	this.openWishlist = this.openWishlist.bind(this)
	// 	this.closeWishlist = this.closeWishlist.bind(this)
	// 	this.overflowVisible = this.overflowVisible.bind(this)
	// 	this.overflowHidden = this.overflowHidden.bind(this)
	// 	this.openMobileMenu = this.openMobileMenu.bind(this)
	// 	this.closeMobileMenu = this.closeMobileMenu.bind(this)
	// 	Store.on(Constants.OPEN_CART, this.openCart)
	// 	Store.on(Constants.CLOSE_CART, this.closeCart)
	// 	Store.on(Constants.OPEN_WISHLIST, this.openWishlist)
	// 	Store.on(Constants.CLOSE_WISHLIST, this.closeWishlist)
	// 	Store.on(Constants.OVERFLOW_VISIBLE, this.overflowVisible)
	// 	Store.on(Constants.OVERFLOW_HIDDEN, this.overflowHidden)
	// 	Store.on(Constants.OPEN_MOBILE_MENU, this.openMobileMenu)
	// 	Store.on(Constants.CLOSE_MOBILE_MENU, this.closeMobileMenu)


	// 	const cartEl = $j(document).find("#cart-container").get(0)
	// 	this.cart = cart(cartEl)

	// 	const wishlistEl = $j(document).find("#wishlist-container").get(0)
	// 	this.wishlist = wishlist(wishlistEl)

	// 	this.html = $j(document).find('html, body')
	// }
	// overflowVisible() {
	// 	this.html.css('overflow', 'visible')
	// }
	// overflowHidden() {
	// 	this.html.css('overflow', 'hidden')
	// }
	// openCart() {
	// 	this.cart.openCart()
	// 	setTimeout(() => { Actions.overflowHidden() }, 0)
	// }
	// closeCart() {
	// 	this.cart.closeCart()
	// 	setTimeout(() => { Actions.overflowVisible() }, 300)
	// }
	// openWishlist() {
	// 	this.wishlist.openWishlist()
	// 	setTimeout(() => { Actions.overflowHidden() }, 0)
	// }
	// closeWishlist() {
	// 	this.wishlist.closeWishlist()
	// 	setTimeout(() => { Actions.overflowVisible() }, 300)
	// }
	// openMobileMenu() {
	// 	this.header.openMobileMenu()
	// }
	// closeMobileMenu() {
	// 	this.header.closeMobileMenu()
	// }
	resize() {
		const windowW = Store.Window.w
		const windowH = Store.Window.h
		this.header.resize()
		// this.cart.resize()
		// this.wishlist.resize()
	}
}

export default Layout
