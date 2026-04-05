import coverImg from '../assets/392fc8a22c6eed8d401c7a77703ee92f86e797b1.png'
import avatarImg from '../assets/f7b7cb33145f7000c3fac5cc4d409f31a3de3686.jpg'

export default function Sidebar() {
	return (
		<div className="space-y-3">
			<section className="bg-white rounded-[16px] border border-neutral-200 shadow-sm overflow-hidden">
				<div className="relative">
					<div className="h-[96px] w-full bg-neutral-200">
						<img src={avatarImg} alt="" className="h-full w-full object-cover" />
					</div>
					<div className="absolute left-1/2 -bottom-8 -translate-x-1/2">
						<div className="size-16 rounded-full bg-neutral-300 ring-4 ring-white outline outline-1 outline-neutral-200 overflow-hidden">
							<img src={coverImg} alt="Albert Flores" className="h-full w-full object-cover" />
						</div>
					</div>
				</div>
				<div className="pt-10 pb-4 px-4 text-center">
					<h3 className="text-[15px] font-semibold text-neutral-900">Albert Flores</h3>
					<p className="mt-1 text-[12px] text-neutral-600 leading-4">
						Senior Product Designer | UI/UX<br />Designer | Graphic Designer | Web...
					</p>
					<p className="mt-2 text-[12px] text-[#7C8A99]">Clinton, Maryland</p>
				</div>
			</section>

			<section className="bg-white rounded-[12px] border border-neutral-200 overflow-hidden">
				<div className="px-4 py-3 flex items-center justify-between border-b border-neutral-200">
					<p className="text-[13px] text-neutral-700">Profile Visitors</p>
					<p className="text-[13px] font-semibold text-[#0154AA]">140</p>
				</div>
				<div className="px-4 py-3 flex items-center justify-between border-b border-neutral-200">
					<p className="text-[13px] text-neutral-700">Resume Viewers</p>
					<p className="text-[13px] font-semibold text-[#0154AA]">20</p>
				</div>
				<div className="px-4 py-3 flex items-center justify-between">
					<p className="text-[13px] text-neutral-700">My Jobs</p>
					<p className="text-[13px] font-semibold text-[#0154AA]">88</p>
				</div>
			</section>

			<section className="bg-white rounded-[12px] border border-neutral-200 relative">
				<div className="px-4 py-3">
					<p className="text-[14px] font-semibold text-neutral-900">My calendar</p>
				</div>
				<div className="px-4 pb-3 -mt-1">
					<p className="text-[12px] text-[#7EA3D8]">Upcoming Interviews</p>
				</div>
				{/* Right chevron centered vertically */}
				<div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-700">
					<svg width="20" height="20" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
					</svg>
				</div>
			</section>
		</div>
	)
}

