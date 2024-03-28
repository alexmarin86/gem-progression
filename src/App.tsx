import React, { FC, useState } from 'react'
import './App.css'
import LevelTwo from './components/levels/LevelTwo'
import LevelFour from './components/levels/LevelFour'
import LevelEight from './components/levels/LevelEight'
import LevelTen from './components/levels/LevelTen'
import LevelSixteen from './components/levels/LevelSixteen'
import LevelEighteen from './components/levels/LevelEighteen'
import LevelTwentyfour from './components/levels/LevelTwentyfour'
import LevelThirtyone from './components/levels/LevelThirtyone'
import LevelThirtyfour from './components/levels/LevelThirtyfour'
import LevelThirtyeight from './components/levels/LevelThirtyeight'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const [level, setLevel] = useState<number>(0)
  const levelsArray = [2, 4, 8, 10, 16, 18, 24, 31, 34, 38]
  const [animationParent] = useAutoAnimate<HTMLDivElement>()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const charLevel = parseInt((e.target as HTMLInputElement).name)
    setLevel(charLevel)
  }

  return (
    <div className="App">
      <main className="flex min-h-screen flex-col gap-8 bg-slate-800 text-white">
        <h1 className="mt-14 text-center text-4xl">Gem progression</h1>
        <section className="mx-auto w-full md:w-3/4">
          <div className="flex flex-col gap-8 px-8">
            <span className="text-center text-xl text-red-500">
              Updated for 3.24
              <small className="flex justify-center text-sm">
                Added Punishment to level 24 marauder rewards for Chieftain.
              </small>
            </span>
            <div>
              <p>
                Gem progression based on character level and quest completion.
                Select your character level to see relevant gem quest rewards.
              </p>
              <p>
                Relevant{' '}
                <span className="font-semibold">muling information</span> is
                included for early levels.
              </p>
            </div>
            <div>
              <p className="text-yellow-500">
                *Note that rewards for level 12 and 28 quests are not included
                because they are only relevant for RF inquisitor progression.
                They will be mentioned in further notes instead.
              </p>
            </div>
            <div className="grid grid-cols-2 flex-row justify-between gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:flex">
              {levelsArray.map((level, index) => (
                <button
                  type="button"
                  className="rounded-sm bg-slate-400 px-4 py-3 text-2xl text-black transition-all duration-300 hover:bg-slate-500 focus:bg-slate-500"
                  name={level.toString()}
                  onClick={handleClick}
                  key={index}
                >
                  Level {level}
                </button>
              ))}
            </div>
            <div ref={animationParent}>
              {level == 2 && <LevelTwo />}
              {level == 4 && <LevelFour />}
              {level == 8 && <LevelEight />}
              {level == 10 && <LevelTen />}
              {level == 16 && <LevelSixteen />}
              {level == 18 && <LevelEighteen />}
              {level == 24 && <LevelTwentyfour />}
              {level == 31 && <LevelThirtyone />}
              {level == 34 && <LevelThirtyfour />}
              {level == 38 && <LevelThirtyeight />}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
