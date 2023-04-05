import Gem from '../Gem'

function LevelTwo() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 2 quest rewards</h2>
			<p>
				At level 2 we complete the quest "Enemy at the gate". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p>
						<span className="font-semibold">As a marauder: </span>
						It doesn't matter what we take here, just save it for
						the ruby ring recipe we'll be using later.
					</p>
					<p className="mt-4">
						<span className="font-semibold">Muling Info.</span> It
						is highly recommended that you mule a witch for the
						following gems:
					</p>
					<ul className="mt-1 ml-4 list-disc">
						<li>
							<Gem
								content="Rolling Magma"
								src="Rolling_Magma_icon.png"
								className="text-blue-400 underline"
							/>{' '}
							as it is our leveling skill.{' '}
							<span className="text-yellow-500">
								Remember to keep it at level 1 so you can use it
								straight away when you switch to the marauder.
							</span>
						</li>
						<li>
							Make sure to save{' '}
							<Gem
								content="Arcane Surge Support"
								src="Arcane_Surge_Support_icon.png"
								className="text-blue-400 underline"
							/>{' '}
							as it will be part of our main setup. Keep it level
							1 for the same reason as above.
						</li>
					</ul>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p>
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<Gem
							content="Rolling Magma"
							src="Rolling_Magma_icon.png"
							className="text-blue-400 underline"
						/>{' '}
						as it is our leveling skill.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelTwo
