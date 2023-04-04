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
						<span className="underline text-red-400">
							Added Fire Damage Support
						</span>{' '}
						and slot it in our Holy Flame Totem setup.
					</p>
					<p>
						At this point we can purchase{' '}
						<span className="underline text-blue-400">
							Combustion Support
						</span>{' '}
						and and slot it in our primary 3 link.{' '}
						<span className="underline text-red-400">
							Lifetap Support
						</span>{' '}
						also becomes available for purchase from Nessa. Feel
						free to grab one as you need it.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p>
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<span className="underline text-blue-400">
							Combustion Support
						</span>{' '}
						and slot it in our main 3 link.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelEight
