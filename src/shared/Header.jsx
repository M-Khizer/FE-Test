import logo from '../assets/Group 1907.png'
import avatar from '../assets/f7b7cb33145f7000c3fac5cc4d409f31a3de3686.jpg'

export default function Header() {
	return (
		<header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-neutral-200">
			<div className="mx-auto max-w-[1320px] px-3 lg:px-4 h-[56px] flex items-center">
				{/* Left: Logo + Primary nav */}
				<div className="flex items-center gap-3">
					<img src={logo} alt="Logo" className="h-7 w-auto" />
					<nav className="hidden md:flex items-center gap-6">
						<a className="text-[13px] font-semibold text-[#0154AA]">Find Jobs</a>
						<a className="text-[13px] text-neutral-500 hover:text-neutral-700">Top Companies</a>
						<a className="text-[13px] text-neutral-500 hover:text-neutral-700">Job Tracker</a>
						<a className="text-[13px] text-neutral-500 hover:text-neutral-700">My Calendar</a>
						<a className="text-[13px] text-neutral-500 hover:text-neutral-700">Documents</a>
						<a className="text-[13px] text-neutral-500 hover:text-neutral-700">Messages</a>
						<a className="text-[13px] text-neutral-500 hover:text-neutral-700">Notifications</a>
					</nav>
				</div>

				<div className="flex-1" />

				{/* Right: Search + CTA + Avatar */}
				<div className="hidden md:flex items-center gap-3">
					<div className="w-[280px] rounded-[10px] border border-[#E7ECF3] bg-[#F5F8FD] px-3 py-2 flex items-center gap-2">
						<svg width="14" height="14" viewBox="0 0 24 24" className="text-[#9AA6B2]">
							<path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
						</svg>
						<input
							className="w-full bg-transparent text-[13px] text-neutral-500 placeholder:text-neutral-400 outline-none"
							placeholder="Search"
						/>
					</div>
					<button
						className="h-9 px-4 rounded-[10px] bg-[#0154AA] text-white text-[12px] leading-[100%] font-[500] shadow-sm hover:brightness-95"
						style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
					>
						Resume Builder
					</button>
					<img src={avatar} alt="Profile" className="size-8 rounded-full object-cover" />
				</div>
			</div>
		</header>
	)
}

