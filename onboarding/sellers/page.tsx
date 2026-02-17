import { Metadata } from 'next'
import { Button } from '../components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Onboarding',
	description: 'Get started with our platform',
}

export default function OnboardingPage() {
	return (
		<section className="h-auto">
			<div className='w-full mx-auto max-w-7xl px-16'>
				<div className='w-180 py-20 mx-auto border border-gray-300 rounded-xl'>
					<h1 className="text-4xl font-extrabold text-center">Welcome Back!</h1>
					<p className='mt-3 text-center'>Let us get you back into your dashboard.</p>
					<div className='flex justify-center mt-8'>
						<button className='border-b border-b-gray-500 py-2 px-12 text-xl'>
							Seller's Account
						</button>
						<button className='border-b border-b-gray-300 py-2 px-12 text-xl'>
							Shopper's Account
						</button>
					</div>

					{/* why is this not the full width of the div */}
					<div className='w-full max-w-md mx-auto flex flex-col mt-18'>
						<div className='flex flex-col mb-8'>
							<label className='text-[13px] text-gray-500 mb-2'>Email Address</label>
							<input type="text" className="text-[14px] p-3 outline-1 outline-gray-300 rounded-sm w-full"
								placeholder="Enter email" />
						</div>
						<div className='flex flex-col'>
							<label className='text-[13px] text-gray-500 mb-2'>Password</label>
							<input type="text" className="text-[14px] p-3 outline-1 outline-gray-300 rounded-sm w-full"
								placeholder="Enter password" />
						</div>
						<div className='justify-items-end mt-6'>
							<p className='text-sm font-bold text-[#6A1B9A]'>Forget Password?</p>
						</div>

						<div className='w-full justify-items-center mt-14'>
							<Link href="" className="bg-[#6A1B9A] hover:bg-[#8646ad] text-white gap-x-2 py-2 px-26 rounded-sm cursor-pointer flex">
								<span>Login</span>
							</Link>
							<p className='mt-4'>Don't have an account? <span className='text-sm font-bold text-[#6A1B9A]'>Create Yours Here</span></p>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}