'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const imagePaths = Array.from(
	{ length: 64 },
	(_, i) => `/images/IMG-20250204-WA${(i + 4).toString().padStart(4, '0')}.jpg`
)

const Slider = () => {
	const [open, setOpen] = useState(false)
	const [index, setIndex] = useState(0)

	return (
		<div className='w-full max-w-6xl mx-auto my-10 px-4'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={10}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				loop={true}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className='rounded-xl shadow-lg'
			>
				{imagePaths.map((src, i) => (
					<SwiperSlide key={i} className='flex justify-center items-center'>
						<div className='relative w-full h-[300px] sm:h-[400px] lg:h-[500px]'>
							<Image
								src={src}
								alt={`Slide ${i + 1}`}
								fill
								className='object-cover rounded-xl'
								priority={i === 0}
								onClick={() => {
									setIndex(i)
									setOpen(true)
								}}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					index={index}
					slides={imagePaths.map(src => ({ src }))}
					styles={{
						container: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
					}}
				/>
			)}
		</div>
	)
}

export default Slider
