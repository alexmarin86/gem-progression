import Gem from '../Gem'

function LevelEight() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 8 quest rewards</h2>
			<p>
				At level 8 we enter the lower prison and we complete the first
				part of the quest "The caged brute". The rewards, depending on
				class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<Gem
							content="Added Fire Damage Support"
							src="Added_Fire_Damage_Support_icon.png"
							className="text-red-400 underline"
						/>{' '}
						and slot it in our{' '}
						<Gem
							content="Holy Flame Totem"
							src="Holy_Flame_Totem_icon.png"
							className="text-red-400 underline"
						/>{' '}
						setup.
					</p>
					<p>
						At this point we can purchase{' '}
						<Gem
							content="Combustion Support"
							src="Combustion_Support_icon.png"
							className="text-blue-400 underline"
						/>{' '}
						and slot it in our primary 3 link.{' '}
						<Gem
							content="Lifetap Support"
							src="Lifetap_Support_icon.png"
							className="text-red-400 underline"
						/>{' '}
						also becomes available for purchase from Nessa. Feel
						free to grab one as you need it.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p>
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<Gem
							content="Combustion Support"
							src="Combustion_Support_icon.png"
							className="text-blue-400 underline"
						/>{' '}
						and slot it in our main 3 link.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelEight