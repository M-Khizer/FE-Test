export default function Topbar() {
	return (
		<div>
			{/* Hero heading (outside white container, on gray bg) */}
			<h1 className="text-[20px] leading-[24px] tracking-[-0.2px]">
				<span className="font-normal text-neutral-900">Find your Dream Job, </span>
				<span className="font-semibold text-[#0154AA]">Albert!</span>
			</h1>
			<p className="mt-[6px] text-[12px] leading-[16px] tracking-[0px] text-neutral-500">
				Explore the latest job openings and apply for the best opportunities available today!
			</p>

			{/* Search container (white, pixel-aligned) */}
			<div className="mt-3 bg-white rounded-[12px] shadow-[0_1px_0_0_rgba(16,24,40,0.05),0_1px_2px_0_rgba(16,24,40,0.06)] px-4 py-3">
				<div className="grid grid-cols-1 md:grid-cols-[1fr,1px,220px,1px,180px,auto] items-center gap-0">
					<input
						placeholder="Job Title, Company, or Keywords"
						className="h-10 px-5 text-[14px] leading-[20px] placeholder:text-[#6B7280] outline-none"
					/>
					<div className="hidden md:block h-8 w-px bg-[#E7ECF3] mx-3" />
					<div className="flex items-center h-10 px-5">
						<select className="w-full text-[14px] leading-[20px] text-[#4B5563] outline-none bg-transparent appearance-none pr-2">
						<option>Select Location</option>
						</select>
						<svg width="16" height="16" viewBox="0 0 24 24" className="pointer-events-none -ml-2 text-[#6B7280]">
							<path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
						</svg>
					</div>
					<div className="hidden md:block h-8 w-px bg-[#E7ECF3] mx-3" />
					<div className="flex items-center h-10 px-5">
						<select className="w-full text-[14px] leading-[20px] text-[#4B5563] outline-none bg-transparent appearance-none pr-2">
						<option>Job Type</option>
						</select>
						<svg width="16" height="16" viewBox="0 0 24 24" className="pointer-events-none -ml-2 text-[#6B7280]">
							<path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
						</svg>
					</div>
					<div className="mt-3 md:mt-0 md:justify-self-end">
						<button
							className="w-[140px] h-[37px] px-5 py-[10px] rounded-[8px] bg-[#0154AA] text-white text-[12px] leading-[100%] font-[500] inline-flex items-center justify-center gap-[10px] hover:brightness-95"
							style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
								<path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
							</svg>
							Search
						</button>
					</div>
				</div>
			</div>

			{/* Similar chips (outside white, on gray bg) */}
			<div className="mt-3 flex flex-wrap items-center gap-2">
				<span className="text-[12px] text-neutral-500">Similar:</span>
				{['Frontend', 'Backend', 'Graphic Designer'].map((p) => (
					<button
						key={p}
						className="rounded-md border border-[#9AA6B2]/40 px-3 py-1.5 text-[12px] text-[#5B6470] bg-transparent"
					>
						{p}
					</button>
				))}
			</div>

			{/* Divider below "Similar" */}
			<div className="mt-4 mb-5 border-t border-[#E7ECF3]" />
		</div>
	)
}

