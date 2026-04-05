export default function Button({ children, size = 'md' }) {
	const sizeCls =
		size === 'sm'
			? 'px-3 py-1.5'
			: 'px-4 py-2'
	return (
		<button
			className={`inline-flex items-center justify-center rounded-md bg-[#0154AA] text-white hover:brightness-95 focus:outline-none ${sizeCls} text-[12px] leading-[100%] font-[500]`}
			style={{ fontFamily: '"Neue Haas Grotesk Display Pro", Inter, system-ui, sans-serif' }}
		>
			{children}
		</button>
	)
}

