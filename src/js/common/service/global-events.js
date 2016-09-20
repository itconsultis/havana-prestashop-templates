import Actions from '../actions'
import Store from '../store'

export function resize() {
    Actions.windowResize(window.innerWidth, window.innerHeight)
}

function mousemove(e) {
	e.preventDefault()
	const windowW = Store.Window.w
	const windowH = Store.Window.h
	Store.Mouse.x = e.clientX
	Store.Mouse.y = e.clientY
	Store.Mouse.nX = (e.clientX / windowW) * 2 - 1
	Store.Mouse.nY = (e.clientY / windowH) * 2 + 1
}

export function initGlobalEvents() {
	$j(window).on('resize', resize)
	// $j(window).on('mousemove', mousemove)
}
