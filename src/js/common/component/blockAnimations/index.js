import raf from 'raf'
import Store from '../../store'

export default (elements)=> {
	let scope
	let items = []

	elements.forEach((item) => {
		items.push({
			el: item,
			pos: 0,
			isOpen: false
		})
	})

	const onScroll = (e) => {
		e.preventDefault()
		raf(trigger)
	}

	const trigger = () => {
		const windowH = Store.Window.h
		const scrollPos = $j(document).scrollTop() + (windowH)
		items.forEach((item, i) => {
			if (scrollPos > item.pos) {
				if (!item.isOpen) {
					setTimeout(() => { $j(item.el).addClass('highlight') }, 900)
					item.isOpen = true
				}
			}
		})
	}

	const resize = () => {
		items.forEach((item) => {
			const offset = $j(item.el).offset().top
			item.pos = offset
		})
	}

	$j(document).on('scroll', onScroll)
	setTimeout(trigger, 100)

	scope = {
		resize,
		items
	}
	return scope
}
