function LevelTwentyfour() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 24 quest rewards</h2>
			<p>
				At level 24 we complete the quest "Lost in love". The rewards,
				depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<span className="underline text-red-400">
							Determination
						</span>
						.
					</p>
					<p>
						Clarissa now sells{' '}
						<span className="underline text-blue-400">
							Flammability
						</span>{' '}
						and{' '}
						<span className="underline text-blue-400">
							Purity of Elements
						</span>
						; they are fundamental to your survival and damage
						therefore you should prioritize buying them asap.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<span className="underline text-blue-400">
							Flammability
						</span>
						.
					</p>
					<p>
						You can now purchase{' '}
						<span className="underline text-blue-400">
							Purity of Elements
						</span>{' '}
						from Clarissa. This will boost your resistances so try
						to grab it asap.
					</p>
				</div>
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
