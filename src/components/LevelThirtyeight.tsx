function LevelThirtyeight() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 38 quest rewards</h2>
			<p>
				At level 38 we complete the quest "The Eternal Nightmare". The
				rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a marauder: </span>
						We take{' '}
						<span className="underline text-blue-400">
							Increased Area of Effect Support
						</span>{' '}
						and replace Efficacy support with it for more clear.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<span className="underline text-blue-400">
							Ignite Proliferation Support
						</span>{' '}
						and slot it in our Armageddon Brand link group.
					</p>
					<p>
						Feel free to buy{' '}
						<span className="underline text-blue-400">
							Immolate Support
						</span>{' '}
						and{' '}
						<span className="underline text-blue-400">
							Hextouch Support
						</span>{' '}
						from Petarus and Vanja.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelThirtyeight
