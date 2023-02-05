import bangbooTileBackground from '../public/images/bangboo-tile-background.svg'

export default function BangbooBackground() {
    return <>
        <div className='absolute -z-100 w-screen h-screen overflow-clip'>
            <div className='w-full h-full -rotate-[5deg]'>
                <div 
                    style={{ backgroundImage: `url(${bangbooTileBackground.src})` }}
                    className={`
                        animate-bangboo-bg-slide w-[200%] h-[200%] 
                        -translate-x-[10%] -translate-y-[45%] bg-repeat 
                        bg-[length:333px_570px] mobile:bg-[length:166px_285px]
                    `}
                />
            </div>
        </div>
        <div className='absolute -z-100 w-screen h-screen overflow-clip'>
            <div 
                style={{ backgroundImage: `url('/textures/Diagonal Texture 600.png')` }}
                className="w-screen h-screen bg-[length:28rem] mix-blend-overlay opacity-10"
            />
        </div>
    </>
}