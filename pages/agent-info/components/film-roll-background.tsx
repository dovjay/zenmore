interface IFilmRollBackground {
    tintColor: string
}

export default function FilmRollBackground(props: IFilmRollBackground) {
    let { tintColor } = props

    return <>
        <div className='w-screen overflow-clip h-screen relative'>
            <div className="w-fit h-full flex -rotate-[16deg] absolute -left-40 -top-12">
                <div className={`
                    w-40 h-screen relative
                    before:content-[""] before:bg-lime-600 before:mix-blend-hard-light 
                    before:absolute before:w-full before:h-[150%]
                `}>
                    <div
                        style={{ backgroundImage: `url("/images/agent-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-agent-roll-slide"
                    />
                </div>
                <div className='w-40 h-screen'>
                    <div
                        style={{ backgroundImage: `url("/images/film-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-film-roll-slide"
                    />
                </div>
                <div className={`
                    w-40 h-screen relative
                    before:content-[""] before:bg-lime-600 before:mix-blend-hard-light 
                    before:absolute before:w-full before:h-[150%]
                `}>
                    <div
                        style={{ backgroundImage: `url("/images/agent-roll.svg")` }}
                        className="w-full h-[200%] bg-[length:100%] bg-repeat-y animate-agent-roll-slide-50"
                    />
                </div>
                <div className='w-40 h-screen'>
                    <div
                        style={{ backgroundImage: `url("/images/film-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-film-roll-slide"
                    />
                </div>
                <div className={`
                    w-40 h-screen relative
                    before:content-[""] before:bg-lime-600 before:mix-blend-hard-light 
                    before:absolute before:w-full before:h-[150%]
                `}>
                    <div
                        style={{ backgroundImage: `url("/images/agent-roll.svg")` }}
                        className="w-full h-[150%] bg-[length:100%] bg-repeat-y animate-agent-roll-slide"
                    />
                </div>
            </div>
        </div>
    </>
}