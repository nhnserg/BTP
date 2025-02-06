import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href='/'>
			<Image
				src='/logo.svg'
				alt='MULTISERVICES'
				width={120}
				height={40}
				className='w-[120px] md:w-[160px] h-auto transition-all duration-300 hover:scale-105 rounded'
			/>
		</Link>
	)
}
