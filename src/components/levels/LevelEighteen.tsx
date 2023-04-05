import Gem from '../Gem'
import FasterAttacks from '../../assets/gems/Faster_Attacks_Support_icon.png'
import ControlledDestruction from '../../assets/gems/Controlled_Destruction_Support_icon.png'

function LevelEighteen() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 18 quest rewards</h2>
			<p>
				At level 18 we complete the quest "Sharp and cruel". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<Gem
						content="Faster Attacks Support"
						src={FasterAttacks}
						className="text-green-400 underline"
					/>
					.
				</p>

				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<Gem
						content="Controlled Destruction Support"
						src={ControlledDestruction}
						className="text-blue-400 underline"
					/>
					.
				</p>
			</div>
		</div>
	)
}

export default LevelEighteen
