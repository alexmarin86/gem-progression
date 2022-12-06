import React, { FC, useState } from 'react'
import './App.css'
import LevelTwo from './components/LevelTwo'
import LevelFour from './components/LevelFour'
import LevelEight from './components/LevelEight'
import LevelTen from './components/LevelTen'
import LevelSixteen from './components/LevelSixteen'
import LevelEighteen from './components/LevelEighteen'
import LevelTwentyfour from './components/LevelTwentyfour'
import LevelThirtyone from './components/LevelThirtyone'
import LevelThirtyfour from './components/LevelThirtyfour'
import LevelThirtyeight from './components/LevelThirtyeight'

function App() {
	const [level, setLevel] = useState<number>(0)
	const levelsArray = [2, 4, 8, 10, 16, 18, 24, 31, 34, 38]
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const charLevel = parseInt((e.target as HTMLInputElement).name)
		setLevel(charLevel)
	}

	return (
		<div className="App">
			<main className="flex flex-col gap-8 bg-slate-800 text-white min-h-screen">
				<h1 className="text-4xl text-center mt-14">Gem progression</h1>
				<section className="w-3/4 mx-auto">
					<div className="px-8 flex flex-col gap-8">
						<p>
							Gem progression based on character level and quest
							completion. Select your character level to see
							relevant gem quest rewards.
						</p>
						<p className="text-yellow-500 border-b-2 pb-4">
							*Note that rewards for level 12 and 28 quests are
							not included because they are only relevant for RF
							inquisitor progression. They will be mentioned in
							further notes instead.
						</p>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:flex flex-row justify-between">
							{levelsArray.map((level) => (
								<button
									type="button"
									className="rounded-sm bg-slate-400 text-black transition-all duration-300 text-2xl px-4 py-3 hover:bg-slate-500 focus:bg-slate-500"
									name={level.toString()}
									onClick={handleClick}
								>
									Level {level}
								</button>
							))}
						</div>
						<div>
							{level == 2 ? <LevelTwo /> : ''}
							{level == 4 ? <LevelFour /> : ''}
							{level == 8 ? <LevelEight /> : ''}
							{level == 10 ? <LevelTen /> : ''}
							{level == 16 ? <LevelSixteen /> : ''}
							{level == 18 ? <LevelEighteen /> : ''}
							{level == 24 ? <LevelTwentyfour /> : ''}
							{level == 31 ? <LevelThirtyone /> : ''}
							{level == 34 ? <LevelThirtyfour /> : ''}
							{level == 38 ? <LevelThirtyeight /> : ''}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
