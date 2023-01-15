import FilmRoll from '../../../public/images/film-roll-main.svg'
import FilmRollDeco1 from '../../../public/images/film-roll-deco.svg'

export default function FilmRollBackground() {
    return <>
        <div className='w-screen overflow-clip h-screen absolute'>
            <div style={{ backgroundImage: `url(${FilmRollDeco1.src})` }}
                className="animate-film-roll-deco-slide w-[10%] h-[400%] bg-repeat absolute rotate-[-10deg] left-[-0%] top-[-50%] "
            ></div> 
            <div style={{ backgroundImage: `url(${FilmRoll.src})` }}
                className="animate-film-roll-main-slide w-[10%] h-[200%] bg-repeat absolute rotate-[-10deg] left-[0%] top-[-50%] "
            ></div> 
            <div className="animate-film-roll-deco-slide w-[10%] h-[400%] bg-repeat absolute left-[18.8%] rotate-[-10deg] top-[-50%]" 
                style={{ backgroundImage: `url(${FilmRollDeco1.src})` }} > 
            </div> 
            <div className="animate-film-roll-main-slide w-[10%] h-[200%] bg-repeat absolute left-[20%] rotate-[-10deg] top-[-50%]" 
                style={{ backgroundImage: `url(${FilmRoll.src})` }} > 
            </div> 
            <div className="animate-film-roll-deco-slide w-[10%] h-[400%] bg-repeat absolute left-[38.9%] rotate-[-10deg] top-[-50%]" 
                style={{ backgroundImage: `url(${FilmRollDeco1.src})` }} > 
            </div> 
        </div>
    </>
}