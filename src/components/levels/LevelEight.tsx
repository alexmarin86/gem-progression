import Gem from '../Gem'
import AddedFire from '../../assets/gems/Added_Fire_Damage_Support_icon.png'
import HolyFlameTotem from '../../assets/gems/Holy_Flame_Totem_icon.png'
import Combustion from '../../assets/gems/Combustion_Support_icon.png'
import Lifetap from '../../assets/gems/Lifetap_Support_icon.png'
import RollingMagma from '../../assets/gems/Rolling_Magma_icon.png'
import Efficacy from '../../assets/gems/Efficacy_Support_icon.png'
import FlameSurge from '../../assets/gems/Flame_Surge_icon.png'
import FasterAttacks from '../../assets/gems/Faster_Attacks_Support_icon.png'
import LeapSlam from '../../assets/gems/Leap_Slam_icon.png'

function LevelEight() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 8 quest rewards</h2>
			<p>
				At level 8 we enter the lower prison and we complete the first part of
				the quest "The caged brute". The rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<Gem
							content="Added Fire Damage Support"
							src={AddedFire}
							className="text-red-400 underline"
						/>{' '}
						and slot it in our{' '}
						<Gem
							content="Holy Flame Totem"
							src={HolyFlameTotem}
							className="text-red-400 underline"
						/>{' '}
						setup.
					</p>
					<p>
						At this point we can purchase{' '}
						<Gem
							content="Combustion Support"
							src={Combustion}
							className="text-blue-400 underline"
						/>{' '}
						and slot it in our primary 3 link.{' '}
						<Gem
							content="Lifetap Support"
							src={Lifetap}
							className="text-red-400 underline"
						/>{' '}
						and{' '}
						<Gem
							content="Faster Attacks Support"
							src={FasterAttacks}
							className="text-green-400 underline"
						/>{' '}
						also become available for purchase from Nessa. Feel free to grab one
						as you need it (to be linked with{' '}
						<Gem
							content="Leap Slam"
							src={LeapSlam}
							className="text-red-400 underline"
						/>{' '}
						later).
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p>
						<span className="font-semibold">As a templar </span>
						you have two options:
						<ul className="mt-1 ml-4 list-disc">
							<li className="mb-2">
								<Gem
									content="Combustion Support"
									src={Combustion}
									className="text-blue-400 underline"
								/>{' '}
								if you're running the{' '}
								<Gem
									content="Rolling Magma"
									src={RollingMagma}
									className="text-blue-400 underline"
								/>{' '}
								setup,
							</li>
							<li>
								or{' '}
								<Gem
									content="Added Fire Damage Support"
									src={AddedFire}
									className="text-red-400 underline"
								/>{' '}
								if you're running the{' '}
								<Gem
									content="Holy Flame Totem"
									src={HolyFlameTotem}
									className="text-red-400 underline"
								/>{' '}
								setup.
							</li>
						</ul>
					</p>
					<p>
						Remember to purchase{' '}
						<Gem
							content="Efficacy Support"
							src={Efficacy}
							className="text-blue-400 underline"
						/>{' '}
						and save it for the{' '}
						<Gem
							content="Flame Surge"
							src={FlameSurge}
							className="text-blue-400 underline"
						/>{' '}
						setup.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelEight
