import teamsIcon from '../assets/Frame 1321315412.png'

export default function JobMiniCard() {
	return (
		<article className="rounded-[12px] border border-[#E6E8EB] bg-white p-3 shadow-[0_1px_0_0_rgba(16,24,40,0.04)]">
			<p className="text-[10px] font-semibold text-neutral-700">Promoted</p>

			<div className="mt-2 flex items-start gap-2.5">
				<div className="size-9 rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
					<img src={teamsIcon} alt="Teams" className="h-12 w-12 object-contain" />
				</div>
				<div className="min-w-0">
					<h4
						className="text-[14px] leading-[100%] font-[500] text-neutral-900"
						style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
					>
						UI/UX Designer
					</h4>
					<p className="text-[12px] leading-[16px] text-neutral-900 -mt-0.5">Teams</p>
				</div>
			</div>

			<ul className="mt-2.5 space-y-1.5">
				<li className="flex items-center gap-2">
					<svg width="14" height="14" viewBox="0 0 24 24" className="text-[#6B7280]">
						<path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z" />
						<circle cx="12" cy="10" r="2.2" fill="currentColor" />
					</svg>
					<p className="text-[12px] leading-[16px] text-neutral-600">
						Seattle, USA <span className="text-neutral-500">(Remote)</span>
					</p>
				</li>
				<li className="flex items-center gap-2">
					<svg width="14" height="14" viewBox="0 0 24 24" className="text-[#6B7280]">
						<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
						<path d="M12 7.5v4.2l3 1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<p className="text-[12px] leading-[16px] text-neutral-600">
						1 day ago <span className="text-neutral-400">|</span>{' '}
						<a className="text-[#0154AA] underline-offset-2 hover:underline text-[12px]">22 applicants</a>
					</p>
				</li>
			</ul>

			<div className="mt-3 flex items-center justify-between">
				<button
					className="h-9 w-[70%] rounded-[12px] bg-[#0154AA] text-white text-[12px] leading-[100%] font-[500]"
					style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
				>
					Apply Now
				</button>
				<button
					aria-label="Save"
					className="size-9 rounded-md flex items-center justify-center text-[#B3B3B3]"
				>
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" strokeWidth="1.8" d="M7 5h10a1 1 0 0 1 1 1v14l-6-4-6 4V6a1 1 0 0 1 1-1z"/>
					</svg>
				</button>
			</div>
		</article>
	)
}

