export default function FilmRollBackground() {
    return <>
        <div className='w-screen overflow-clip h-screen relative'>
            <div className="w-fit h-full flex -rotate-[16deg] absolute -left-48 -top-12">
                <div className='w-48 h-screen bg-black'>
                    <div
                        style={{ backgroundImage: `url("/images/agent-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-agent-roll-slide"
                    />
                </div>
                <div className='w-48 h-screen bg-black'>
                    <div
                        style={{ backgroundImage: `url("/images/film-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-film-roll-slide"
                    />
                </div>
                <div className='w-48 h-screen bg-black'>
                    <div
                        style={{ backgroundImage: `url("/images/agent-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-agent-roll-slide"
                    />
                </div>
                <div className='w-48 h-screen bg-black'>
                    <div
                        style={{ backgroundImage: `url("/images/film-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-film-roll-slide"
                    />
                </div>
                <div className='w-48 h-screen bg-black'>
                    <div
                        style={{ backgroundImage: `url("/images/agent-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-agent-roll-slide"
                    />
                </div>
            </div>
        </div>
    </>
}