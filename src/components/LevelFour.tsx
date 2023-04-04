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
					<p>
						Breaking some eggs: we take{' '}
						<span className="underline text-blue-400">
							Frostblink
						</span>{' '}
						for mobility and{' '}
						<span className="underline text-red-400">
							Molten Shell
						</span>{' '}
						for later use. We can also purchase{' '}
						<span className="underline text-red-400">
							Holy Flame Totem
						</span>{' '}
						if we haven't muled it.
					</p>
					<p className="mt-4">
						<span className="font-semibold">Muling Info.</span> It
						is highly recommended that you mule a witch for the
						following gems:
					</p>
					<ul className="mt-1 ml-4 list-disc">
						<li>
							<span className="underline text-blue-400">
								Summon Phantasm Support
							</span>{' '}
							as a reward for completing "Mercy mission".
						</li>
						<li>
							<span className="underline text-blue-400">
								Flame Wall
							</span>{' '}
							as a reward for completing "Breaking some eggs".
						</li>
						<li>
							At this point if you have spare currency you can
							pick up{' '}
							<span className="underline text-red-400">
								Holy Flame Totem
							</span>{' '}
							from Nessa. If not, you can pick it up later as a
							marauder.
						</li>
					</ul>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<span className="font-semibold">As a templar: </span>
					<ul>
						<li className="mb-4">
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
