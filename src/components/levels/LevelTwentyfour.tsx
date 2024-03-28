import Gem from '../Gem'
import Determination from '../../assets/gems/Determination_icon.png'
import Flammability from '../../assets/gems/Flammability_icon.png'
import PurityOfElements from '../../assets/gems/Purity_of_Elements_icon.png'
import ArmageddonBrand from '../../assets/gems/Armageddon_Brand_icon.png'
import Malevolence from '../../assets/gems/Malevolence_icon.png'
import Punishment from '../../assets/gems/Punishment_icon.png'

function LevelTwentyfour() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Level 24 quest rewards</h2>
      <p>
        At level 24 we complete the quest "Lost in love". The rewards, depending
        on class are:
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="space-y-4 border-2 p-6 md:w-1/2">
          <p>
            <span className="font-semibold">As a marauder: </span>
            We take{' '}
            <Gem
              content="Determination"
              src={Determination}
              className="text-red-400 underline"
            />
            .
          </p>
          <p>
            Clarissa now sells{' '}
            <Gem
              content="Flammability"
              src={Flammability}
              className="text-blue-400 underline"
            />{' '}
            and{' '}
            <Gem
              content="Purity of Elements"
              src={PurityOfElements}
              className="text-blue-400 underline"
            />
            ; they are fundamental to your survival and damage therefore you
            should prioritize buying them asap.
          </p>
          <p>
            For Chieftain, grab{' '}
            <Gem
              content="Punishment"
              src={Punishment}
              className="text-red-400 underline"
            />{' '}
            for later use.
          </p>
        </div>
        <div className="space-y-4 border-2 p-6 md:w-1/2">
          <p>
            <span className="font-semibold">As a templar: </span>
            We take{' '}
            <Gem
              content="Flammability"
              src={Flammability}
              className="text-blue-400 underline"
            />
            .
          </p>
          <p>
            You can now purchase{' '}
            <Gem
              content="Purity of Elements"
              src={PurityOfElements}
              className="text-blue-400 underline"
            />{' '}
            from Clarissa. This will boost your resistances so try to grab it
            asap. You can also buy{' '}
            <Gem
              content="Determination"
              src={Determination}
              className="text-red-400 underline"
            />{' '}
            and{' '}
            <Gem
              content="Malevolence"
              src={Malevolence}
              className="text-blue-400 underline"
            />{' '}
            and level them in your weapon swap.
          </p>
        </div>
      </div>
      <p className="text-yellow-500">
        **Note: If you are playing RF inquisitor, remember to take{' '}
        <Gem
          content="Armageddon Brand"
          src={ArmageddonBrand}
          className="text-blue-400 underline"
        />{' '}
        as soon as you kill General Gravicius in the Ebony Barracks.
      </p>
    </div>
  )
}

export default LevelTwentyfour
