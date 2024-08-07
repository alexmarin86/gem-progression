import Gem from '../Gem'
import HeraldOfThunder from '../../assets/gems/Herald_of_Thunder_icon.png'
import RighteousFire from '../../assets/gems/Righteous_Fire_icon.png'
import BloodRage from '../../assets/gems/Blood_Rage_icon.png'

function LevelSixteen() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Level 16 quest rewards</h2>
      <p>
        At level 16 we complete the quest "Intruders in black". The rewards,
        depending on class are:
      </p>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="border-2 p-6 md:w-1/2">
          <p className="mb-4">
            <span className="font-semibold">As a marauder: </span>
            We take{' '}
            <Gem
              content="Blood Rage"
              src={BloodRage}
              className="text-green-400 underline"
            />
            .
          </p>
          <p>
            We can also purchase{' '}
            <Gem
              content="Righteous Fire"
              src={RighteousFire}
              className="text-blue-400 underline"
            />{' '}
            from Yeena.
          </p>
        </div>
        <div className="border-2 p-6 md:w-1/2">
          <p className="mb-4">
            <span className="font-semibold">As a templar: </span>
            We take{' '}
            <Gem
              content="Righteous Fire"
              src={RighteousFire}
              className="text-blue-400 underline"
            />
            .
          </p>
          <p>
            If we have a spare Orb of Alteration we can purchase{' '}
            <Gem
              content="Herald of Thunder"
              src={HeraldOfThunder}
              className="text-blue-400 underline"
            />
            , however this will only be useful for act 2.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LevelSixteen
