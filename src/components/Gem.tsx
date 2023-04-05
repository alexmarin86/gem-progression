function Gem(props: { src: string; content: string; className: string }) {
	return (
		<span className={props.className}>
			<img
				src={props.src}
				alt={props.content + ' gem icon'}
				className="h-6 inline"
			/>
			{props.content}
		</span>
	)
}

export default Gem
