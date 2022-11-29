function LevelEight() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 8 quest rewards</h2>
			<p>
				At level 8 we enter the lower prison and we complete the first
				part of the quest "The caged brute". The rewards, depending on
				class are:
			</p>
			<div className="flex gap-4">
				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-red-400">
						Lifetap Support
					</span>{' '}
					and save it for our 4 link setup once we gain access to one.
				</p>

				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-blue-400">
						Combustion Support
					</span>{' '}
					and slot it in our main 3 link.
				</p>
			</div>
		</div>
	)
}

export default LevelEight
