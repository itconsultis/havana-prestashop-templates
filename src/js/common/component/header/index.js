import Store from '../../store'
import Constants from '../../constants'
import Actions from '../../actions'
import submenuItem from '../submenuItem'

export default (el)=> {
    let scope

    const hamburger = $j(el).find('.hamburger').get(0)
    const menu = $j(el).find('.header__menu').get(0)
    // const mobileMenuClose = $j(mobileSecondaryMenu).find('.close.btn').get(0)
    let oldLinkIndex = undefined
    let newLinkIndex = undefined
    let closeMobileMenuTimeout = undefined
    let mobileSecondaryMenuHeight = 0
    const submenuInitialPos = 17000
    const desktopMenu = $j(el).find('.desktop-menu').get(0)
    const mobileMenu = $j(el).find('.mobile-menu').get(0)
    const desktopPrimaryMenu = $j(desktopMenu).find('.primary-menu').get(0)
    const mobileSecondaryMenu = $j(mobileMenu).find('.secondary-menu').get(0)
    const topMenu = $j(desktopMenu).find('.top-menu').get()
    const mobileSecondaryMenuHolder = $j(mobileSecondaryMenu).find('.holder').get(0)
    const submenu = $j(desktopPrimaryMenu).find('.submenu').get(0)
    const submenuEl = $j(topMenu).find('li > .submenu').get()
    const icons = $j(submenu).find('.block.right li').get()
    const links = $j(submenu).find('.block.left li').get()
    const collectionsLiMobile = $j(mobileMenu).find('li#collections-btn').get(0)
    const cartBtn = $j(el).find('li.cart.btn').get(0)
    const wishlistBtn = $j(el).find('li.wishlist.btn').get(0)
    const mobileBurger = $j(mobileMenu).find('li#burger').get(0)
    const mobileShop = $j(mobileMenu).find('li#shop').get(0)
    const mobileMenuClose = $j(mobileSecondaryMenu).find('.close.btn').get(0)

    // let submenuItems = []
    // submenuEl.forEach((item) => {
    //     const parent = $j(item).parent().get(0)
    //     const subItem = submenuItem(item, parent)
    //     submenuItems.push(subItem)
    // })

    // TweenMax.set(mobileSecondaryMenu, { y:-submenuInitialPos })

    // links.forEach((link, index) => {
    //     link.setAttribute('data-index', index)
    // })

    // const onIconMouseEnter = (e) => {
    //     e.preventDefault()
    //     const index = parseInt(e.currentTarget.getAttribute('data-index'), 10)
    //     openIconByIndex(index)
    // }

    // const onIconMouseLeave = (e) => {
    //     e.preventDefault()
    //     openIconByIndex(0)
    // }

    // const onCollectionsLiMobileClick = (e) => {
    //     e.preventDefault()
    //     const $target = $j(e.currentTarget)
    //     if ($target.hasClass('open')) {
    //         $j(e.currentTarget).removeClass('open')
    //     } else {
    //         $j(e.currentTarget).addClass('open')
    //     }
    //     setTimeout(() => { updateMobileSecondaryMenuHolder() }, 100)
    // }

    // const openIconByIndex = (index) => {
    //     oldLinkIndex = newLinkIndex
    //     newLinkIndex = index
    //     const newLink = links[newLinkIndex]
    //     const newIcon = icons[newLinkIndex]
    //     const oldLink = links[oldLinkIndex]
    //     const oldIcon = icons[oldLinkIndex]
    //     if (oldLink !== undefined) $j(oldLink).removeClass('active')
    //     if (oldIcon !== undefined) $j(oldIcon).removeClass('active')
    //     if (newLink !== undefined) $j(newLink).addClass('active')
    //     if (newIcon !== undefined) $j(newIcon).addClass('active')
    // }

    const onCartClick = (e) => {
        e.preventDefault()
        Actions.openCart()
    }

    // const onWishlistClick = (e) => {
    //     e.preventDefault()
    //     Actions.openWishlist()
    // }

    // const onMobileBurgerClick = (e) => {
    //     e.preventDefault()
    //     Actions.triggerMobileMenu()
    // }

    // const onMobileShopClick = (e) => {
    //     e.preventDefault()
    //     if (Store.CartIsOpen) Actions.closeCart()
    //     else Actions.openCart()
    // }

    // const updateMobileSecondaryMenuHolder = () => {
    //     const updateMobileSecondaryMenuHolderH = $j(mobileSecondaryMenuHolder).height()
    //     const holderY = (mobileSecondaryMenuHeight >> 1) - (updateMobileSecondaryMenuHolderH >> 1)
    //     TweenMax.set(mobileSecondaryMenuHolder, { y:holderY })
    // }

    // const openMobileMenu = () => {
    //     clearTimeout(closeMobileMenuTimeout)
    //     TweenMax.set(mobileSecondaryMenu, { y:0 })
    //     $j(mobileSecondaryMenu).addClass('open')
    // }

    // const closeMobileMenu = () => {
    //     $j(mobileSecondaryMenu).removeClass('open')
    //     clearTimeout(closeMobileMenuTimeout)
    //     closeMobileMenuTimeout = setTimeout(() => {
    //         TweenMax.set(mobileSecondaryMenu, { y:-submenuInitialPos })
    //     }, 500)
    // }

    // const onMobileMenuCloseClick = (e) => {
    //     e.preventDefault()
    //     Actions.closeMobileMenu()
    // }

    const openMenu = () => {
        setTimeout(() => {
            $j(menu).addClass('header__menu--open')
        }, 0)
    }

    const closeMenu = () => {
        $j(menu).removeClass('header__menu--open')
    }

    const handleClickOutside = (e) => {
        if (document.querySelector('body').classList.contains('js-mobile') && menu.classList.contains('header__menu--open')) {
            closeMenu()
        }
    }

    const handleScroll = (e) => {
        closeMenu()
    }

    const resize = () => {
        const windowW = Store.Window.w
        const windowH = Store.Window.h
        // mobileSecondaryMenuHeight = windowH
        // mobileSecondaryMenu.style.height = mobileSecondaryMenuHeight + 'px'
        // updateMobileSecondaryMenuHolder()
    }

    // $j(links).on('mouseenter', onIconMouseEnter)
    // $j(links).on('mouseleave', onIconMouseLeave)
    // $j(collectionsLiMobile).on('click', onCollectionsLiMobileClick)
    // $j(cartBtn).on('click', onCartClick)
    $j('body').on('click', handleClickOutside)
    $j(hamburger).on('click', openMenu)
    window.onscroll = handleScroll
    // $j(wishlistBtn).on('click', onWishlistClick)
    // $j(mobileBurger).on('click', onMobileBurgerClick)
    // $j(mobileShop).on('click', onMobileShopClick)
    // $j(mobileMenuClose).on('click', onMobileMenuCloseClick)

    // openIconByIndex(0)

    scope = {
    	// el,
     //    openMobileMenu,
     //    closeMobileMenu,
    	resize
    }
    return scope
}
