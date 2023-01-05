import bangbooTileBackground from '../../../public/images/bangboo-tile-background.svg'

export default function BangbooBackground() {
    return <div className='absolute -z-100 w-screen h-screen overflow-clip'>
        <div 
            style={{ backgroundImage: `url(${bangbooTileBackground.src})` }}
            className="animate-bangboo-bg-slide w-[200%] h-[200%] -translate-x-[10%] -translate-y-[45%] bg-repeat bg-[length:222px_380px] -rotate-[16deg]"
        ></div>
    </div>
}