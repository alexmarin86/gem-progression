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
						<span className="underline text-red-400">
							Herald of Ash
						</span>
						.
					</p>
					<p>
						We can also purchase{' '}
						<span className="underline text-blue-400">
							Righteous Fire
						</span>{' '}
						and optionally{' '}
						<span className="underline text-green-400">
							Blood Rage
						</span>{' '}
						from Yeena.
					</p>
				</div>

				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-red-400">
						Herald of Ash
					</span>
					.
				</p>
			</div>
		</div>
	)
}

export default LevelSixteen
