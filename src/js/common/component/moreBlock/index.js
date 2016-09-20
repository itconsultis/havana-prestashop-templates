import Store from '../../store'
import Utils from '../../utils'

export default (el)=> {
    let scope
    const background = $j(el).find('.background').get(0)
    const imgUrl = $j(background).find('img').attr('src')
    
    Utils.loadImage(imgUrl, (img) => {
    	resize()
    })

	const resize = () => {
		const windowW = Store.Window.w
		const windowH = Store.Window.h
		const backgroundW = $j(background).width()
		const backgroundH = $j(background).height()
		// background.style.width = backgroundW + 'px'
		// background.style.height = backgroundH + 'px'
	}    

    scope = {
    	el,
    	resize
    }
    return scope
}
