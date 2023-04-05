import Gem from '../Gem'

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
						<Gem
							content="Arrogance Support"
							src="Arrogance_Support_icon.png"
							className="text-red-400 underline"
						/>
						.
					</p>
					<p>
						Talk to Siosa to purchase the following gems:{' '}
						<Gem
							content="Efficacy Support"
							src="Efficacy_Support_icon.png"
							className="text-blue-400 underline"
						/>
						,{' '}
						<Gem
							content="Elemental Focus Support"
							src="Elemental_Focus_Support_icon.png"
							className="text-blue-400 underline"
						/>
						,{' '}
						<Gem
							content="Burning Damage Support"
							src="Burning_Damage_Support_icon.png"
							className="text-red-400 underline"
						/>
						,{' '}
						<Gem
							content="Trap and Mine Damage Support"
							src="Trap_and_Mine_Damage_Support_icon.png"
							className="text-green-400 underline"
						/>
						, and{' '}
						<Gem
							content="Fire Trap"
							src="Fire_Trap_icon.png"
							className="text-green-400 underline"
						/>
						. Remember to bring Orbs of Transmutation, Alteration
						and Chance along to be able to purchase the gems.
					</p>
					<p>
						If you decide to swap to the{' '}
						<Gem
							content="Armageddon Brand"
							src="Armageddon_Brand_icon.png"
							className="text-blue-400 underline"
						/>{' '}
						setup, you can also purchase it from Siosa at this time.
						Remember to go back to Nessa in act 1 and pick up{' '}
						<Gem
							content="Searing Bond"
							src="Searing_Bond_icon.png"
							className="text-red-400 underline"
						/>{' '}
						to replace{' '}
						<Gem
							content="Flame Wall"
							src="Flame_Wall_icon.png"
							className="text-blue-400 underline"
						/>
						.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<Gem
							content="Burning Damage Support"
							src="Burning_Damage_Support_icon.png"
							className="text-red-400 underline"
						/>
						.
					</p>
					<p>
						Remember to grab{' '}
						<Gem
							content="Fire Trap"
							src="Fire_Trap_icon.png"
							className="text-green-400 underline"
						/>{' '}
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
