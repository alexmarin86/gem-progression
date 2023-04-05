import Gem from '../Gem'
import Frostblink from '../../assets/gems/Frostblink_icon.png'
import MoltenShell from '../../assets/gems/Molten_Shell_icon.png'
import HolyFlameTotem from '../../assets/gems/Holy_Flame_Totem_icon.png'
import SummonPhantasm from '../../assets/gems/Summon_Phantasm_Support_icon.png'
import FlameWall from '../../assets/gems/Flame_Wall_icon.png'
import ArcaneSurge from '../../assets/gems/Arcane_Surge_Support_icon.png'
import RollingMagma from '../../assets/gems/Rolling_Magma_icon.png'

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
						<Gem
							content="Frostblink"
							src={Frostblink}
							className="text-blue-400 underline"
						/>{' '}
						for mobility and{' '}
						<Gem
							content="Molten Shell"
							src={MoltenShell}
							className="text-red-400 underline"
						/>{' '}
						for later use. We can also purchase{' '}
						<Gem
							content="Holy Flame Totem"
							src={HolyFlameTotem}
							className="text-red-400 underline"
						/>{' '}
						if we haven't muled it.
					</p>
					<p className="mt-4">
						<span className="font-semibold">Muling Info.</span> It
						is highly recommended that you mule a witch for the
						following gems:
					</p>
					<ul className="mt-1 ml-4 list-disc">
						<li>
							<Gem
								content="Summon Phantasm Support"
								src={SummonPhantasm}
								className="text-blue-400 underline"
							/>{' '}
							as a reward for completing "Mercy mission".
						</li>
						<li>
							<Gem
								content="Flame Wall"
								src={FlameWall}
								className="text-blue-400 underline"
							/>{' '}
							as a reward for completing "Breaking some eggs".
						</li>
						<li>
							At this point if you have spare currency you can
							pick up{' '}
							<Gem
								content="Holy Flame Totem"
								src={HolyFlameTotem}
								className="text-red-400 underline"
							/>{' '}
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
							<Gem
								content="Arcane Surge Support"
								src={ArcaneSurge}
								className="text-blue-400 underline"
							/>{' '}
							and link it with{' '}
							<Gem
								content="Rolling Magma"
								src={RollingMagma}
								className="text-blue-400 underline"
							/>{' '}
							temporarily if we have a 3 link, or{' '}
							<Gem
								content="Flame Wall"
								src={FlameWall}
								className="text-blue-400 underline"
							/>{' '}
							if we don't.
						</li>
						<li>
							Breaking some eggs: we take either{' '}
							<Gem
								content="Flame Wall"
								src={FlameWall}
								className="text-blue-400 underline"
							/>{' '}
							or{' '}
							<Gem
								content="Frostblink"
								src={Frostblink}
								className="text-blue-400 underline"
							/>{' '}
							and purchase the other from Nessa.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default LevelFour
