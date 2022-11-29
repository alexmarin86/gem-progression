function LevelTwo() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 2 quest rewards</h2>
			<p>
				At level 2 we complete the quest "Enemy at the gate". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a marauder: </span>
					It doesn't matter what we take here, just save it for the
					ruby ring recipe we'll be using later.
				</p>
				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-blue-400">
						Rolling Magma
					</span>{' '}
					as it is our leveling skill.
				</p>
			</div>
		</div>
	)
}

export default LevelTwo
