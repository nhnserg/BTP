import { Logo } from '../Logo'

export default function Header() {
	return (
		<header className='header'>
			<div className='container mx-auto px-6 py-1 flex items-center justify-between'>
				{/* Логотип */}
				<div className='flex items-center'>
					<Logo />
				</div>

				{/* Контактная информация */}
				<div className='hidden md:flex items-center space-x-8'>
					<a href='#projects' className='text-gray-700 text-sm md:text-xl'>
						Nos travaux
					</a>
					<div className='flex flex-col items-start space-y-1'>
						<p className='text-gray-700 text-sm md:text-xl'>
							Consultation <span className='text-red-500'>gratuite!</span>
						</p>
						<a
							href='tel:+33628132576'
							className='text-blue-600 font-semibold text-sm md:text-lg'
						>
							+33(0) 628 13-25-76
						</a>
					</div>
					{/* Кнопка "Demander un devis" */}
					<a
						href='#contact'
						className='bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-medium shadow-lg hover:bg-yellow-600 transition'
					>
						Demander un devis
					</a>
				</div>
			</div>
		</header>
	)
}
