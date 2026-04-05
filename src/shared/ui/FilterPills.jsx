const pills = ['Featured', 'Recommended', 'Latest', 'Full-time', 'Remote']

export default function FilterPills() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{pills.map((p) => (
				<button
					key={p}
					className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs text-neutral-700 hover:border-neutral-300"
				>
					{p}
				</button>
			))}
		</div>
	)
}

