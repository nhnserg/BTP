'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300) // Показывать кнопку после 300px прокрутки
		}

		window.addEventListener('scroll', toggleVisibility)
		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // Плавный скролл вверх
	}

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<ArrowUp size={24} />
		</button>
	)
}

export default ScrollToTop
