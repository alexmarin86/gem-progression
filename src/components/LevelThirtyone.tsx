function LevelThirtyone() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 31 quest rewards</h2>
			<p>
				At level 31 we complete the quest "A fixture of fate", located
				in the Library, west of the Imperial Gardens. The rewards,
				depending on class are:
			</p>
			<div className="flex gap-4">
				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-red-400">
						Arrogance Support
					</span>
					.
				</p>

				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-blue-400">
						Burning Damage Support
					</span>
					.
				</p>
			</div>
			<p className="text-yellow-500">
				**Note: Completing this quest unlocks Siosa's shop, where you
				can find all the gems level 31 and under, regardless of class.
			</p>
		</div>
	)
}

export default LevelThirtyone
