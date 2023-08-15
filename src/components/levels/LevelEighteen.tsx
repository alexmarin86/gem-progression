import Gem from '../Gem'
import ControlledDestruction from '../../assets/gems/Controlled_Destruction_Support_icon.png'
import ElementalFocus from '../../assets/gems/Elemental_Focus_Support_icon.png'

function LevelEighteen() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 18 quest rewards</h2>
			<p>
				At level 18 we complete the quest "Sharp and cruel". The rewards,
				depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a marauder: </span>
					We don't have a choice that fits our character here.
				</p>

				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<Gem
							content="Controlled Destruction Support"
							src={ControlledDestruction}
							className="text-blue-400 underline"
						/>
						. Purchase the remaining copies you need from Yeena.
					</p>
					<p>
						If we have a spare Orb of Alteration we can purchase{' '}
						<Gem
							content="Elemental Focus Support"
							src={ElementalFocus}
							className="text-blue-400 underline"
						/>{' '}
						as it will be useful later for our main skill.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelEighteen
