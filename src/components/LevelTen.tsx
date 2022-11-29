function LevelTen() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 10 quest rewards</h2>
			<p>
				At level 10 we complete the second part of the quest "The caged
				brute". The rewards, depending on class are:
			</p>
			<div className="flex gap-4">
				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-red-400">Vitality</span>.
				</p>

				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-red-400">Vitality</span>.
				</p>
			</div>
			<p className="text-yellow-500">
				**Note: If you are playing RF inquisitor, remember to take{' '}
				<span className="underline text-blue-400">Flame Surge</span> as
				soon as you enter Cavern of Wrath and activate the waypoint.
			</p>
		</div>
	)
}

export default LevelTen
