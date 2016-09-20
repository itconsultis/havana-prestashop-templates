import Store from '../../store'
import Utils from '../../utils'
import Constants from '../../constants'
import miniVideo from 'mini-video'

export default (el)=> {
    let scope
    let videoTimeout = undefined
    const mediaContainer = $j(el).find('.media-container').get(0)
    const videoHolder = $j(mediaContainer).find('.video-holder').get(0)
    const frontImageHolder = $j(mediaContainer).find('.front-image-holder').get(0)
    const titleContainer = $j(el).find('.title-container').get(0)
    const title = $j(titleContainer).find('.vertical-center-child .title').get(0)
    const wistiaUrl = videoHolder.getAttribute('data-wistia-video-url')

    console.log(wistiaUrl)

    const mVideo = miniVideo({
        autoplay: false,
        loop: false,
        volume: 1
    })
    mVideo.addTo(videoHolder)
    mVideo.load(wistiaUrl, () => {})

    const didClicked = (e) => {
        e.preventDefault()
        if (scope.videoIsOpened) {
            closeVideo()
            scope.videoIsOpened = false
        } else {
            openVideo()
            scope.videoIsOpened = true
        }
    }

    const didVideoEnded = () => {
        closeVideo()
    }

    const openVideo = () => {
        $j(el).addClass('video-state')
        mVideo.play(0)
        clearTimeout(videoTimeout)
    }

    const closeVideo = () => {
        $j(el).removeClass('video-state')
        clearTimeout(videoTimeout)
        videoTimeout = setTimeout(() => {
            mVideo.pause(0)
        }, 400)
    }

    const resize = () => {
        const windowW = Store.Window.w
        const windowH = Store.Window.h

        if (windowW < Constants.MQ_LARGE) {
            el.style.height = (windowH * 0.5) + 'px'
            
            // Hack for rotation because width became height when you rotate
            const titleContainerWidth = $j(titleContainer).width()
            TweenMax.set(title, { rotation: 0, transformOrigin: '50% 50%' })
            const titleHeight = $j(title).height()
            const xPos = 0 + 'px'
            TweenMax.set(title, { x: xPos, rotation: 0, transformOrigin: '50% 50%' })

            const mediaContainerW = $j(mediaContainer).width()
            const mediaContainerH = $j(mediaContainer).height()
            const mediaContainerResizeVars = Utils.resizePositionProportionally(mediaContainerW, mediaContainerH, Constants.MEDIA_GLOBAL_W, Constants.MEDIA_GLOBAL_H)
            frontImageHolder.style.width = mediaContainerResizeVars.width + 'px'
            frontImageHolder.style.height = mediaContainerResizeVars.height + 'px'
            frontImageHolder.style.top = mediaContainerResizeVars.top + 'px'
            frontImageHolder.style.left = mediaContainerResizeVars.left + 'px'
            videoHolder.style.width = mediaContainerResizeVars.width + 'px'
            videoHolder.style.height = mediaContainerResizeVars.height + 'px'
            videoHolder.style.top = mediaContainerResizeVars.top + 'px'
            videoHolder.style.left = mediaContainerResizeVars.left + 'px'

        } else {
            el.style.height = windowH - (Constants.HEADER_H * 3) + 'px'

            // Hack for rotation because width became height when you rotate
            const titleContainerWidth = $j(titleContainer).width()
            TweenMax.set(title, { rotation: -90, transformOrigin: '50% 50%' })
            const titleHeight = $j(title).height()
            const xPos = (titleContainerWidth >> 1) - (titleHeight >> 1) + 'px'
            TweenMax.set(title, { x: xPos, rotation: -90, transformOrigin: '50% 50%' })

            const mediaContainerW = $j(mediaContainer).width()
            const mediaContainerH = $j(mediaContainer).height()
            const mediaContainerResizeVars = Utils.resizePositionProportionally(mediaContainerW, mediaContainerH, Constants.MEDIA_GLOBAL_W, Constants.MEDIA_GLOBAL_H)
            frontImageHolder.style.width = mediaContainerResizeVars.width + 'px'
            frontImageHolder.style.height = mediaContainerResizeVars.height + 'px'
            frontImageHolder.style.top = mediaContainerResizeVars.top + 'px'
            frontImageHolder.style.left = mediaContainerResizeVars.left + 'px'
            videoHolder.style.width = mediaContainerResizeVars.width + 'px'
            videoHolder.style.height = mediaContainerResizeVars.height + 'px'
            videoHolder.style.top = mediaContainerResizeVars.top + 'px'
            videoHolder.style.left = mediaContainerResizeVars.left + 'px'
        }

    }

    mVideo.on('ended', didVideoEnded)
    $j([mediaContainer, titleContainer]).on('click', didClicked)

    scope = {
    	el,
    	resize,
        videoIsOpened: false
    }
    return scope
}
