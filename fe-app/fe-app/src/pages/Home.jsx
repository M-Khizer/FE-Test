import Header from '../shared/Header'
import Sidebar from '../shared/Sidebar'
import Topbar from '../shared/Topbar'
import JobMiniCard from '../shared/JobMiniCard'

export default function Home() {
	return (
		<div className="bg-neutral-100/60 min-h-dvh">
			<Header />
			<div className="mx-auto max-w-[1320px] px-3 lg:px-4 py-5">
				<div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-4">
					<aside>
						<Sidebar />
					</aside>
					<main className="min-w-0">
						<Topbar />

						{/* Featured Jobs */}
						<section className="mt-4">
							<div className="flex items-end gap-4 mb-5">
								<h3
									className="text-[18px] leading-[100%] font-[500] tracking-[0px] text-neutral-900"
									style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
								>
									Featured Jobs
								</h3>
								<a
									href="#"
									className="text-[14px] leading-[100%] font-[500] tracking-[0px] text-[#0154AA] underline decoration-solid decoration-[#0154AA] decoration-1 underline-offset-[4px]"
									style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
								>
									See Featured Jobs
								</a>
							</div>
							<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
								{Array.from({ length: 5 }).map((_, i) => <JobMiniCard key={i} />)}
							</div>
						</section>

						{/* Recommended Jobs */}
						<section className="mt-4">
							<div className="flex items-end gap-4 mb-5">
								<h3
									className="text-[18px] leading-[100%] font-[500] tracking-[0px] text-neutral-900"
									style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
								>
									Recommended Jobs
								</h3>
								<a
									href="#"
									className="text-[14px] leading-[100%] font-[500] tracking-[0px] text-[#0154AA] underline decoration-solid decoration-[#0154AA] decoration-1 underline-offset-[4px]"
									style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
								>
									See Recommended Jobs
								</a>
							</div>
							<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
								{Array.from({ length: 5 }).map((_, i) => <JobMiniCard key={i} />)}
							</div>
						</section>

						{/* Latest Jobs */}
						<section className="mt-4">
							<div className="flex items-end gap-4 mb-5">
								<h3
									className="text-[18px] leading-[100%] font-[500] tracking-[0px] text-neutral-900"
									style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
								>
									Latest Jobs
								</h3>
								<a
									href="#"
									className="text-[14px] leading-[100%] font-[500] tracking-[0px] text-[#0154AA] underline decoration-solid decoration-[#0154AA] decoration-1 underline-offset-[4px]"
									style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
								>
									See Latest Jobs
								</a>
							</div>
							<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
								{Array.from({ length: 5 }).map((_, i) => <JobMiniCard key={i} />)}
							</div>
						</section>

						
					</main>
				</div>
			</div>
		</div>
	)
}

