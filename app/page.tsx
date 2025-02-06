import 'swiper/css'
import Slider from '@/components/Slider'

import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
	return (
		<div className='w-full'>
			{/* Hero Section */}
			<section
				className='relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center'
				style={{ backgroundImage: "url('./main-back.webp')" }}
			>
				<div className='bg-black bg-opacity-50 p-8 rounded-xl'>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Construire l&#39;avenir ensemble
					</h1>
					<p className='mt-4 text-lg'>Construction et rénovation de qualité</p>
					<div className='mt-6 space-x-4'>
						<a
							href='#contact'
							className='bg-yellow-500 px-6 py-3 rounded-lg text-lg'
						>
							Estimation de coût
						</a>
						<a
							href='tel:+123456789'
							className='bg-blue-500 px-6 py-3 rounded-lg text-lg'
						>
							Appeler
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-20 text-center bg-gray-100'>
				<h2 className='text-3xl font-bold mb-6'>Nos services</h2>
				<div className='grid md:grid-cols-3 gap-8 container mx-auto px-6'>
					{[
						'Rénovation partielle',
						'Rénovation intégrale',
						'Rénovation rafraîchissante',
					].map((service, index) => (
						<div key={index} className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-xl font-semibold'>{service}</h3>
							<p className='text-gray-600 mt-2'>Description brève du service</p>
						</div>
					))}
				</div>
			</section>

			{/* About Section */}
			<section className='py-20 text-center'>
				<h2 className='text-3xl font-bold mb-6'>
					À propos de l&#39;entreprise
				</h2>
				<p className='max-w-3xl mx-auto text-gray-700'>
					Nous travaillons dans le secteur de la construction depuis plus de 10
					ans, en créant des maisons fiables et confortables.
				</p>
			</section>

			{/* Projects Slider */}
			<section className='py-20 bg-gray-100 text-center'>
				<h2 className='text-3xl font-bold mb-6'>Nos réalisations</h2>
				{/* <Swiper
					spaceBetween={20}
					slidesPerView={1}
					className='max-w-4xl mx-auto'
				>
					{[1, 2, 3].map(index => (
						<SwiperSlide key={index}>
							<div className='bg-white p-4 rounded-lg shadow-lg'>
								<Image
									src={`/project-${index}.jpg`}
									alt={`Projet ${index}`}
									width={600}
									height={400}
									className='rounded-md'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper> */}
				<Slider />
			</section>

			{/* Reviews */}
			<section className='py-20 text-center'>
				<h2 className='text-3xl font-bold mb-6'>Avis des clients</h2>
				<div className='max-w-3xl mx-auto text-gray-700'>
					“Qualité de travail excellente, je recommande à tous!” - Ivan P.
				</div>
			</section>

			{/* Contact */}

			<ScrollToTop />
		</div>
	)
}
