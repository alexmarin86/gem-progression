function Gem(props: { src: string; content: string; className: string }) {
	const route = '../src/assets/gems/'
	return (
		<span className={props.className}>
			<img
				src={route + props.src}
				alt={props.content + ' gem icon'}
				className="h-6 inline"
			/>
			{props.content}
		</span>
	)
}

export default Gem
