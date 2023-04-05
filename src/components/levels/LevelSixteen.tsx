import Gem from '../Gem'

function LevelSixteen() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 16 quest rewards</h2>
			<p>
				At level 16 we complete the quest "Intruders in black". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<Gem
							content="Herald of Ash"
							src="Herald_of_Ash_icon.png"
							className="text-red-400 underline"
						/>
						.
					</p>
					<p>
						We can also purchase{' '}
						<Gem
							content="Righteous Fire"
							src="Righteous_Fire_icon.png"
							className="text-blue-400 underline"
						/>{' '}
						and optionally{' '}
						<Gem
							content="Blood Rage"
							src="Blood_Rage_icon.png"
							className="text-green-400 underline"
						/>{' '}
						from Yeena.
					</p>
				</div>

				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<Gem
						content="Herald of Ash"
						src="Herald_of_Ash_icon.png"
						className="text-red-400 underline"
					/>
					.
				</p>
			</div>
		</div>
	)
}

export default LevelSixteen
