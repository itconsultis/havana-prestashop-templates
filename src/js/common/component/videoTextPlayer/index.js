import Store from '../../store'
import Utils from '../../utils'
import Constants from '../../constants'
import miniVideo from 'mini-video'

export default (el)=> {
    let scope
    let videoTimeout = undefined
    const mediaContainer = $j(el).find('.media-container').get(0)
    const videoHolder = $j(mediaContainer).find('.video-holder').get(0)
    const wistiaUrl = videoHolder.getAttribute('data-wistia-video-url')

    const mVideo = miniVideo({
        autoplay: true,
        loop: true,
        volume: 1
    })
    mVideo.addTo(videoHolder)
    mVideo.load(wistiaUrl, () => {})

    const resize = () => {
        const windowW = Store.Window.w
        const windowH = Store.Window.h
        const mediaW = windowW * 0.8
        const mediaScale = (mediaW / Constants.MEDIA_GLOBAL_W) * 1
        mediaContainer.style.width = mediaW + 'px'
        mediaContainer.style.height = (Constants.MEDIA_GLOBAL_H * mediaScale) + 'px'
    }

    scope = {
    	el,
    	resize
    }
    return scope
}
