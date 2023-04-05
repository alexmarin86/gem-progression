import Gem from '../Gem'
import IncAoe from '../../assets/gems/Increased_Area_of_Effect_Support_icon.png'
import Efficacy from '../../assets/gems/Efficacy_Support_icon.png'
import IgniteProlif from '../../assets/gems/Ignite_Proliferation_Support_icon.png'
import Immolate from '../../assets/gems/Immolate_Support_icon.png'
import Hextouch from '../../assets/gems/Hextouch_Support_icon.png'

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
						<Gem
							content="Increased Area of Effect Support"
							src={IncAoe}
							className="text-blue-400 underline"
						/>{' '}
						and replace{' '}
						<Gem
							content="Efficacy Support"
							src={Efficacy}
							className="text-blue-400 underline"
						/>{' '}
						with it for more clear.
					</p>
				</div>
				<div className="border-2 p-6 md:w-1/2">
					<p className="mb-4">
						<span className="font-semibold">As a templar: </span>
						We take{' '}
						<Gem
							content="Ignite Proliferation Support"
							src={IgniteProlif}
							className="text-blue-400 underline"
						/>{' '}
						and slot it in our Armageddon Brand link group.
					</p>
					<p>
						Feel free to buy{' '}
						<Gem
							src={Immolate}
							content="Immolate Support"
							className="text-blue-400 underline"
						/>{' '}
						and{' '}
						<Gem
							content="Hextouch Support"
							src={Hextouch}
							className="text-blue-400 underline"
						/>{' '}
						from Petarus and Vanja.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LevelThirtyeight
