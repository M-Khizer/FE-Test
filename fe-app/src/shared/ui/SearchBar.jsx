export default function SearchBar() {
	return (
		<form className="flex w-full max-w-xl items-center gap-2">
			<input
				type="text"
				placeholder="Search by title, company, or keyword"
				className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-violet-400"
			/>
			<button
				type="submit"
				className="rounded-lg bg-neutral-900 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
			>
				Search
			</button>
		</form>
	)
}

