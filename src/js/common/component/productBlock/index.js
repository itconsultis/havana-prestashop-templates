import Store from '../../store'
import Constants from '../../constants'
import raf from 'raf'
import Counter from 'ccounter'

export default (el)=> {
    let scope
    let mainImagesContainerW = 0
    let mainImagesContainerH = 0
    let oldShoeIndex = undefined
    let newShoeIndex = undefined
    let slideshowInterval = undefined
    const mainImagesContainer = $j(el).find('.main-images-container').get(0)
    const iconShoes = $j(el).find('.alternative-views-container li').get()
    const mainShoes = $j(mainImagesContainer).find('li').get()
    const counter = Counter(iconShoes.length)

    iconShoes.forEach((icon, index) => {
        icon.setAttribute('data-index', index)
    })

    const onContainerMouseMove = (e) => {
        e.preventDefault()
        const windowW = Store.Window.w
        if (windowW < Constants.MQ_LARGE) return
        raf(() => {
            const len = iconShoes.length
            const rect = e.currentTarget.getBoundingClientRect()
            const offsetX = e.pageX - rect.left
            const partW = mainImagesContainerW / len
            for (var i = len - 1; i >= 0; i--) {
                if (offsetX >= partW*i && offsetX < (partW*i) + partW) {
                    openShoeByIndex(i)
                }
            }
        })
    }

    const onContainerMouseLeave = (e) => {
        e.preventDefault()
        openShoeByIndex(0)
    }

    const onIconMouseEnter = (e) => {
        e.preventDefault()
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10)
        openShoeByIndex(index)
    }

    const openShoeByIndex = (index) => {
        oldShoeIndex = newShoeIndex
        newShoeIndex = index
        const newMain = mainShoes[newShoeIndex]
        const newIcon = iconShoes[newShoeIndex]
        const oldMain = mainShoes[oldShoeIndex]
        const oldIcon = iconShoes[oldShoeIndex]
        if (oldMain !== undefined) $j(oldMain).removeClass('active')
        if (oldIcon !== undefined) $j(oldIcon).removeClass('active')
        if (newMain !== undefined) $j(newMain).addClass('active')
        if (newIcon !== undefined) $j(newIcon).addClass('active')
    }

    const nextShoe = () => {
        counter.inc()
        openShoeByIndex(counter.props.index)
    }

    const resize = () => {
        const windowW = Store.Window.w
        const windowH = Store.Window.h

        mainImagesContainerW = $j(mainImagesContainer).width()
        const baseHeight = (windowW < Constants.MQ_LARGE) ? 1100 : 680
        mainImagesContainerH = (windowW / Constants.MEDIA_GLOBAL_W) * baseHeight
        mainImagesContainer.style.height = mainImagesContainerH + 'px'

        if (windowW < Constants.MQ_LARGE) {
            clearInterval(slideshowInterval)
            slideshowInterval = setInterval(() => {
                nextShoe()
            }, 2000)
        } else {
            clearInterval(slideshowInterval)
        }
    }

    $j(mainImagesContainer).on('mousemove', onContainerMouseMove)
    $j(mainImagesContainer).on('mouseleave', onContainerMouseLeave)
    $j(iconShoes).on('mouseenter', onIconMouseEnter)

    openShoeByIndex(0)

    scope = {
    	el,
    	resize
    }
    return scope
}
