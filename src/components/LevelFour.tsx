function LevelFour() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl">Level 4 quest rewards</h2>
			<p>
				At level 4 we complete the quests "Mercy mission" and "Breaking
				some eggs". The rewards, depending on class are:
			</p>
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a marauder: </span>
					<ul>
						<li>
							Mercy mission: we take{' '}
							<span className="underline text-green-400">
								Onslaught Support
							</span>{' '}
							and we will try to link it to Frostblink.
							<span className="font-semibold text-red-500">
								{' '}
								This is optional.
							</span>
						</li>
						<li>
							Breaking some eggs: we take{' '}
							<span className="underline text-red-400">
								Molten Shell
							</span>{' '}
							for later use.
						</li>
					</ul>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					<ul>
						<li>
							Mercy mission: we take{' '}
							<span className="underline text-blue-400">
								Arcane Surge Support
							</span>{' '}
							and link it with Rolling Magma temporarily if we
							have a 3 link, or Flame Wall if we don't.
						</li>
						<li>
							Breaking some eggs: we take either{' '}
							<span className="underline text-blue-400">
								Flame Wall
							</span>{' '}
							or{' '}
							<span className="underline text-blue-400">
								Frostblink
							</span>{' '}
							and purchase the other from Nessa.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default LevelFour
