import Gem from '../Gem'
import Vitality from '../../assets/gems/Vitality_icon.png'
import LeapSlam from '../../assets/gems/Leap_Slam_icon.png'
import FlameSurge from '../../assets/gems/Flame_Surge_icon.png'

function LevelTen() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 10 quest rewards</h2>
			<p>
				At level 10 we complete the second part of the quest "The caged
				brute". The rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<Gem
							content="Vitality"
							src={Vitality}
							className="text-red-400 underline"
						/>
						.
					</p>
					<p>
						Nessa now sells{' '}
						<Gem
							content="Leap Slam"
							src={LeapSlam}
							className="text-red-400 underline"
						/>
						, grab it if you prefer running it for leveling.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<Gem
							content="Vitality"
							src={Vitality}
							className="text-red-400 underline"
						/>
						.
					</p>
					<p>
						Nessa now sells{' '}
						<Gem
							content="Leap Slam"
							src={LeapSlam}
							className="text-red-400 underline"
						/>
						, grab it if you prefer running it for leveling.
					</p>
				</div>
			</div>
			<p className="text-yellow-500">
				**Note: If you are playing RF inquisitor, remember to take{' '}
				<Gem
					content="Flame Surge"
					src={FlameSurge}
					className="text-blue-400 underline"
				/>{' '}
				as soon as you enter Cavern of Wrath and activate the waypoint.
			</p>
		</div>
	)
}

export default LevelTen
