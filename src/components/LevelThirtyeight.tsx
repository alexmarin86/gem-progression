function LevelThirtyeight() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 38 quest rewards</h2>
			<p>
				At level 38 we complete the quest "The Eternal Nightmare". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4">
				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a marauder: </span>
					We take{' '}
					<span className="underline text-blue-400">
						Increased Area of Effect Support
					</span>{' '}
					and save it for later.
				</p>

				<p className="w-1/2 border-2 p-6">
					<span className="font-semibold">As a templar: </span>
					We take{' '}
					<span className="underline text-blue-400">
						Ignite Proliferation Support
					</span>{' '}
					and slot it in our Armageddon Brand link group.
				</p>
			</div>
		</div>
	)
}

export default LevelThirtyeight
