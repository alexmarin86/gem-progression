function LevelTwentyfour() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 24 quest rewards</h2>
			<p>
				At level 24 we complete the quest "Lost in love". The rewards,
				depending on class are:
			</p>
			<div className="flex gap-4">
				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-red-400">
						Determination
					</span>
					.
				</p>

				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-blue-400">
						Flammability
					</span>
					.
				</p>
			</div>
			<p className="text-yellow-500">
				**Note: If you are playing RF inquisitor, remember to take{' '}
				<span className="underline text-blue-400">
					Armageddon Brand
				</span>{' '}
				as soon as you kill General Gravicius in the Ebony Barracks.
			</p>
		</div>
	)
}

export default LevelTwentyfour
