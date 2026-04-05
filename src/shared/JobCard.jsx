import Button from './ui/Button'

export default function JobCard({ job }) {
	return (
		<article
			className={[
				'rounded-2xl border shadow-sm p-5 transition-colors',
				job.featured ? 'border-violet-300 bg-violet-50/60' : 'border-neutral-200 bg-white',
			].join(' ')}
		>
			<header className="flex items-start gap-3">
				<div className="size-12 rounded-xl bg-neutral-100 shrink-0" />
				<div className="min-w-0">
					<h3 className="text-base lg:text-lg font-semibold text-neutral-900 truncate">{job.title}</h3>
					<p className="text-sm text-neutral-500 truncate">{job.company}</p>
				</div>
			</header>
			<div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
				<span className="rounded-md bg-neutral-100 px-2.5 py-1">{job.location}</span>
				<span className="rounded-md bg-neutral-100 px-2.5 py-1">{job.type}</span>
			</div>
			<footer className="mt-4 flex items-center justify-between">
				<p className="text-sm text-neutral-500">Posted 2d ago</p>
				<Button>Apply Now</Button>
			</footer>
		</article>
	)
}

