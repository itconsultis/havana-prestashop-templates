require('../../sass/app.scss')
import Layout from '../common/component/layout'
import Store from '../common/store'
import Constants from '../common/constants'
import blockAnimations from '../common/component/blockAnimations'
import moreBlock from '../common/component/moreBlock'
import videoImagePlayer from '../common/component/videoImagePlayer'
import videoTextPlayer from '../common/component/videoTextPlayer'
import videoSlideshow from '../common/component/videoSlideshow'
import productBlock from '../common/component/productBlock'
import { initGlobalEvents, resize as globalResize } from '../common/service/global-events'
import jQuery from 'jquery'
import MobileDetect from 'mobile-detect'

var md = new MobileDetect(window.navigator.userAgent)

Store.Detector.isMobile = (md.mobile() && !md.tablet()) ? true : false
Store.Detector.isTablet = (md.tablet()) ? true : false
Store.Detector.isMini = (Store.Detector.isMobile || Store.Detector.isTablet) ? true : false

window.$j = jQuery.noConflict()

$j(document).ready(() => {
	initGlobalEvents()
	const app = new App()
	app.init()
	globalResize()
})

class App {
	init() {
		this.resize = this.resize.bind(this)
		Store.on(Constants.WINDOW_RESIZE, this.resize)
		this.layout = new Layout()
		this.layout.init()

		// // animated blocks
		// const animatedBlocks = $j(document).find(".animated-block").get()
		// if (animatedBlocks.length > 0) this.blockAnimations = blockAnimations(animatedBlocks)
		
	}
	resize() {
		if (Store.Window.w < 958) {
			$j('body').addClass('js-mobile')
		} else {
			$j('body').removeClass('js-mobile')
		}

		this.layout.resize()
		// if (this.blockAnimations) this.blockAnimations.resize()
	}
}
