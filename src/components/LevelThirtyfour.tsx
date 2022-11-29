function LevelThirtyfour() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 34 quest rewards</h2>
			<p>
				At level 34 we complete the quest "Breaking the seal". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-red-400">
						Summon Stone Golem
					</span>
					.
				</p>

				<p className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-red-400">
						Summon Stone Golem
					</span>
					.
				</p>
			</div>
		</div>
	)
}

export default LevelThirtyfour
