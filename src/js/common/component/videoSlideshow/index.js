import Store from '../../store'
import Utils from '../../utils'
import Constants from '../../constants'
import miniVideo from 'mini-video'
import ccounter from 'ccounter'

export default ()=> {
    let scope
    const slideInitPos = 16000
    const el = $j(document).find('.video-slideshow-container').get(0)
    const mediaContainer = $j(el).find('.media-container').get(0)
    const controllersContainer = $j(el).find('.controllers-container').get(0)
    const slidesEl = $j(mediaContainer).find('li').get()
    const nextBtn = $j(controllersContainer).find('.next.btn').get(0)
    const previousBtn = $j(controllersContainer).find('.previous.btn').get(0)
    const counter = ccounter(slidesEl.length)
    let newSlide = undefined
    let oldSlide = undefined
    let slideTimeout = undefined
    let slides = []
    const videoVars = {
        autoplay: false,
        loop: false,
        volume: 1
    }
    const openSlide = () => {
        TweenMax.set(newSlide.el, { x:0 })
        $j(newSlide.el).addClass('open')
        newSlide.mVideo.seek(0)
        newSlide.el.style.zIndex = 11
    }
    const closeSlide = () => {
        $j(oldSlide.el).removeClass('open')
        $j(oldSlide.el).removeClass('play')
        oldSlide.mVideo.pause()
        oldSlide.isPlaying = false
        oldSlide.el.style.zIndex = 10
        oldSlide.mVideo.off('ended', nextSlide)
        slideTimeout = setTimeout(() => {
            oldSlide.mVideo.seek(0)
            TweenMax.set(oldSlide.el, { x:slideInitPos })
        }, 200)
    }
    const onSlideClick = (e) => {
        e.preventDefault()
        if (newSlide.isPlaying) {
            $j(newSlide.el).removeClass('play')
            newSlide.mVideo.pause()
            newSlide.isPlaying = false
        } else {
            $j(newSlide.el).addClass('play')
            newSlide.mVideo.play()
            newSlide.isPlaying = true
            newSlide.mVideo.on('ended', nextSlide)
        }
    }
    slidesEl.forEach((slide) => {
        const s = {}
        const videoHolder = $j(slide).find('.video-holder').get(0)
        const videoUrl = $j(videoHolder).attr('data-wistia-video-url')
        s.preview = $j(slide).find('img').get(0)
        s.mVideo = miniVideo(videoVars)
        s.mVideo.addTo(videoHolder)
        s.mVideo.load(videoUrl, () => {})
        s.el = slide
        s.isPlaying = false
        s.openSlide = openSlide
        s.closeSlide = closeSlide
        TweenMax.set(s.el, { x:slideInitPos })
        slides.push(s)
    })
    const onNextClick = (e) => {
        e.preventDefault()
        nextSlide()
    }
    const onPreviousClick = (e) => {
        e.preventDefault()
        previousSlide()
    }
    const nextSlide = () => {
        counter.inc()
        updateSlideshow()
    }
    const previousSlide = () => {
        counter.dec()
        updateSlideshow()
    }
    const updateSlideshow = () => {
        oldSlide = newSlide
        newSlide = slides[counter.props.index]
        if (oldSlide !== undefined) oldSlide.closeSlide()
        newSlide.openSlide()
    }
    const resize = () => {
        const windowW = Store.Window.w
        const windowH = Store.Window.h
        const mediaW = windowW * 0.8
        const mediaScale = (mediaW / Constants.MEDIA_GLOBAL_W) * 1
        mediaContainer.style.width = mediaW + 'px'
        mediaContainer.style.height = (Constants.MEDIA_GLOBAL_H * mediaScale) + 'px'
    }

    updateSlideshow(counter.props.index)

    $j(nextBtn).on('click', onNextClick)
    $j(previousBtn).on('click', onPreviousClick)
    $j(slidesEl).on('click', onSlideClick)

    scope = {
    	el,
    	resize
    }
    return scope
}
