function LevelThirtyone() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 31 quest rewards</h2>
			<p>
				At level 31 we complete the quest "A fixture of fate", located
				in the Library, west of the Imperial Gardens. The rewards,
				depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<span className="underline text-red-400">
							Arrogance Support
						</span>
						.
					</p>
					<p>
						Talk to Siosa to purchase the following gems:{' '}
						<span className="underline text-blue-400">
							Efficacy Support
						</span>
						,{' '}
						<span className="underline text-blue-400">
							Elemental Focus Support
						</span>
						,{' '}
						<span className="underline text-red-400">
							Burning Damage Support
						</span>
						,{' '}
						<span className="underline text-green-400">
							Trap and Mine Damage Support
						</span>
						, and{' '}
						<span className="underline text-green-400">
							Fire Trap
						</span>
						. Remember to bring Orbs of Transmutation, Alteration
						and Chance along to be able to purchase the gems.
					</p>
					<p>
						If you decide to swap to the{' '}
						<span className="underline text-blue-400">
							Armageddon Brand
						</span>{' '}
						setup, you can also purchase it from Siosa at this time.
						Remember to go back to Nessa in act 1 and pick up{' '}
						<span className="underline text-red-400">
							Searing Bond
						</span>{' '}
						to replace Flame Wall.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<span className="underline text-red-400">
							Burning Damage Support
						</span>
						.
					</p>
					<p>
						Remember to grab{' '}
						<span className="underline text-green-400">
							Fire Trap
						</span>{' '}
						and level it for the RF transition after cruel lab.
					</p>
				</div>
			</div>
			<p className="text-yellow-500">
				**Note: Completing this quest unlocks Siosa's shop, where you
				can find all the gems level 31 and under, regardless of class.
				Please check your PoB and purchase the gems you're missing at
				this point.
			</p>
		</div>
	)
}

export default LevelThirtyone
