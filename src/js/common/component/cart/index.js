import Store from '../../store'
import Constants from '../../constants'
import Actions from '../../actions'

export default (el)=> {
    let scope
    // const initX = 5000
    // const background = $j(el).find('.background').get(0)
    // const purchasedContainer = $j(el).find('.purchased-container').get(0)
    // const noItems = $j(el).find('.no-items').get(0)
    // const itemsNum = $j(purchasedContainer).find('li').length
    // const checkoutContainer = $j(el).find('.checkout-container').get(0)
    // const closeBtn = $j(el).find('.close.btn').get(0)
    // TweenMax.set(el, { x:initX })

    // if (itemsNum > 0) {
    //     noItems.style.display = 'none'
    // } else {
    //     checkoutContainer.style.display = 'none'
    // }

    // const onCloseBtnClick = (e) => {
    // 	e.preventDefault()
    // 	Actions.closeCart()
    // }

    // const onKeyUp = (e) => {
    // 	e.preventDefault()
	   //  if (e.keyCode === 27) Actions.closeCart()
    // }

    // const openCart = () => {
    // 	TweenMax.set(el, { x:0 })
    // 	$j(el).addClass('open')
    // 	$j(background).on('click', onBackgroundClick)
    // 	$j(document).on('keyup', onKeyUp)
    // }

    // const closeCart = () => {
    // 	setTimeout(() => {
    // 		TweenMax.set(el, { x:initX })
    // 		$j(purchasedContainer).scrollTop(0)
    // 	}, 600)
    // 	$j(el).removeClass('open')
    // 	$j(background).off('click', onBackgroundClick)
    // 	$j(document).off('keyup', onKeyUp)
    // }

    // const onBackgroundClick = (e) => {
    // 	e.preventDefault()
    // 	Actions.closeCart()
    // }

    const resize = () => {
    // 	const windowW = Store.Window.w
    // 	const windowH = Store.Window.h
    // 	const checkoutContainerH = $j(checkoutContainer).outerHeight()
    // 	purchasedContainer.style.height = windowH - checkoutContainerH - Constants.HEADER_H + 'px'
    }

    // $j(closeBtn).on('click', onCloseBtnClick)

    scope = {
    	el,
    	// openCart,
    	// closeCart,
    	resize
    }
    return scope
}
