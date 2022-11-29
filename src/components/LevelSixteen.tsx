function LevelSixteen() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 16 quest rewards</h2>
			<p>
				At level 16 we complete the quest "Intruders in black". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4">
				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-red-400">
						Herald of Ash
					</span>
					.
				</p>

				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-red-400">
						Herald of Ash
					</span>
					.
				</p>
			</div>
		</div>
	)
}

export default LevelSixteen
