import Gem from '../Gem'
import Arrogance from '../../assets/gems/Arrogance_Support_icon.png'
import Efficacy from '../../assets/gems/Efficacy_Support_icon.png'
import ElementalFocus from '../../assets/gems/Elemental_Focus_Support_icon.png'
import BurningDamage from '../../assets/gems/Burning_Damage_Support_icon.png'
import TrapAndMineDamage from '../../assets/gems/Trap_and_Mine_Damage_Support_icon.png'
import FireTrap from '../../assets/gems/Fire_Trap_icon.png'
import ArmageddonBrand from '../../assets/gems/Armageddon_Brand_icon.png'
import SearingBond from '../../assets/gems/Searing_Bond_icon.png'
import FlameWall from '../../assets/gems/Flame_Wall_icon.png'
import FasterAttacks from '../../assets/gems/Faster_Attacks_Support_icon.png'
import ShieldCharge from '../../assets/gems/Shield_Charge_icon.png'

function LevelThirtyone() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 31 quest rewards</h2>
			<div>
				<p className="mb-2">
					At this point you may want to start leveling some gems in your weapon
					swap. To access it, press "x" with your inventory open, and equip
					weapons in each slot. Slot the gems you want to level in and press "x"
					again to go back to your main weapons.
				</p>
				<p>
					At level 31 we complete the quest "A fixture of fate", located in the
					Library, west of the Imperial Gardens. The rewards, depending on class
					are:
				</p>
			</div>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<Gem
							content="Arrogance Support"
							src={Arrogance}
							className="text-red-400 underline"
						/>
						.
					</p>
					<p className="mb-4">
						Talk to Siosa to purchase the following gems:{' '}
						<Gem
							content="Efficacy Support"
							src={Efficacy}
							className="text-blue-400 underline"
						/>
						,{' '}
						<Gem
							content="Elemental Focus Support"
							src={ElementalFocus}
							className="text-blue-400 underline"
						/>
						,{' '}
						<Gem
							content="Burning Damage Support"
							src={BurningDamage}
							className="text-red-400 underline"
						/>
						,{' '}
						<Gem
							content="Trap and Mine Damage Support"
							src={TrapAndMineDamage}
							className="text-green-400 underline"
						/>
						, and{' '}
						<Gem
							content="Fire Trap"
							src={FireTrap}
							className="text-green-400 underline"
						/>
						. Remember to bring Orbs of Transmutation, Alteration and Chance
						along to be able to purchase the gems.
					</p>
					<p>
						If you decide to swap to the{' '}
						<Gem
							content="Armageddon Brand"
							src={ArmageddonBrand}
							className="text-blue-400 underline"
						/>{' '}
						setup, you can also purchase it from Siosa at this time. Remember to
						go back to Nessa in act 1 and pick up{' '}
						<Gem
							content="Searing Bond"
							src={SearingBond}
							className="text-red-400 underline"
						/>{' '}
						to replace{' '}
						<Gem
							content="Flame Wall"
							src={FlameWall}
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
							src={BurningDamage}
							className="text-red-400 underline"
						/>
						.
					</p>
					<p className="mb-4">
						While at Siosa, remember to grab{' '}
						<Gem
							content="Fire Trap"
							src={FireTrap}
							className="text-green-400 underline"
						/>{' '}
						and level it in weapon swap (it will later be your single target),
						as well as{' '}
						<Gem
							content="Faster Attacks Support"
							src={FasterAttacks}
							className="text-green-400 underline"
						/>{' '}
						for the{' '}
						<Gem
							content="Shield Charge"
							src={ShieldCharge}
							className="text-red-400 underline"
						/>{' '}
						setup as soon as you equip a shield and have the slots.
					</p>
					<p>
						You can also grab{' '}
						<Gem
							content="Elemental Focus Support"
							src={ElementalFocus}
							className="text-blue-400 underline"
						/>{' '}
						and{' '}
						<Gem
							content="Trap and Mine Damage Support"
							src={TrapAndMineDamage}
							className="text-green-400 underline"
						/>{' '}
						from Yeena back in act 2 and start leveling them in your weapon swap
						as well.
					</p>
				</div>
			</div>
			<p className="text-yellow-500">
				**Note: Completing this quest unlocks Siosa's shop, where you can find
				all the gems level 31 and under, regardless of class. Please check your
				PoB and purchase the gems you're missing at this point.
			</p>
		</div>
	)
}

export default LevelThirtyone
