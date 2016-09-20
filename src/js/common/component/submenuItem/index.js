import Store from '../../store'
import Constants from '../../constants'
import raf from 'raf'

export default (el, parent)=> {
    let scope
    const submenuInitialPos = 17000
    const btnHelper = $j(parent).find('.btn-helper').get(0)
    let submenuTimeout = undefined

    TweenMax.set(el, { y:-submenuInitialPos })

    const onSubmenuMousemove = (e) => {
        e.preventDefault()
        raf(() => {
            const rect = e.currentTarget.getBoundingClientRect()
            const offsetY = e.clientY - rect.top
            if (offsetY > scope.blockLeftH) {
                onCollectionsLiDesktopMouseLeave()
            }
        })
    }

    const onCollectionsLiDesktopMouseEnter = (e) => {
        if (e !== undefined) e.preventDefault()
        TweenMax.set(el, { y:0 })
        $j(el).addClass('active')
        $j(el).on('mousemove', onSubmenuMousemove)
        clearTimeout(submenuTimeout)
    }

    const onCollectionsLiDesktopMouseLeave = (e) => {
        if (e !== undefined) e.preventDefault()
        $j(el).removeClass('active')
        clearTimeout(submenuTimeout)
        submenuTimeout = setTimeout(() => { TweenMax.set(el, { y:-submenuInitialPos }) }, 200)
        $j(el).off('mousemove', onSubmenuMousemove)
    }

    const resize = () => {
    	const windowW = Store.Window.w
        const windowH = Store.Window.h

    	const collectionLiW = $j(parent).width()
        const collectionLiH = $j(parent).height()
        btnHelper.style.width = collectionLiW + 20 + 'px'
        btnHelper.style.height = collectionLiH + (Constants.HEADER_H * 0.7) + 'px'
    }

    $j(parent).on('mouseover', onCollectionsLiDesktopMouseEnter)
    $j(parent).on('mouseout', onCollectionsLiDesktopMouseLeave)

    scope = {
    	el,
    	parent,
    	resize,
    	blockLeftH: 0
    }
    return scope
}
