
export default function CharaSelection(){
    const charas = [ 
        {
            name: 'Anbi',
            image: 'images/charas/anbi.svg',
        }, 
        {
            name: 'Anton',
            image: 'images/charas/anton.svg',
        }, 
        {
            name: 'Ben',
            image: 'images/charas/ben.svg',
        }, 
        {
            name: 'Billy',
            image: 'images/charas/billy.svg',
        }, 
        {
            name: 'Corin',
            image: 'images/charas/corin.svg',
        }, 
        {
            name: 'Koleda',
            image: 'images/charas/koleda.svg',
        }, 
        {
            name: 'Lycaon',
            image: 'images/charas/lycaon.svg',
        }, 
        {
            name: 'Miyabi',
            image: 'images/charas/miyabi.svg',
        }, 
        {
            name: 'Nekomiya',
            image: 'images/charas/nekomiya.svg',
        }, 
        {
            name: 'Nicole',
            image: 'images/charas/nicole.svg',
        }, 
        {
            name: 'Solder 11',
            image: 'images/charas/soldier11.svg',
        }, 
        {
            name: 'Soukaku',
            image: 'images/charas/soukaku.svg',
        }, 
        {
            empty: true,
            image: 'images/charas/empty-chara.svg',
        },
        {
            empty: true,
            image: 'images/charas/empty-chara.svg',
        },
        {
            empty: true,
            image: 'images/charas/empty-chara.svg',
        },
        {
            empty: true,
            image: 'images/charas/empty-chara.svg',
        },
        {
            empty: true,
            image: 'images/charas/empty-chara.svg',
        },
        {
            empty: true,
            image: 'images/charas/empty-chara.svg',
        },
    ]

    let active = 7

    return (
        <>
            <img src="/images/side-button.svg" className="absolute right-[0]" style={{height:'100vh'}} />
            <div className="absolute top-[0px] right-[140px] z-[100]"> 
                <svg className="svg absolute">
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                        <path d="M0,0 H0.666 C0.698,0,0.725,0.021,0.733,0.052 L1,1 H0.339 C0.308,1,0.281,0.979,0.272,0.949 L0,0"></path>
                    </clipPath>
                </svg>
                <div className="chara-card-container skew-x-[16deg]">  
                {
                    charas.map((chara, index) => (
                        <div className="chara-card relative mx-[-1.9em] skew-x-[-16deg]" key={index} style={{
                            // marginTop: index == 4 ? '1.5em' : '0',
                        }}>
                            <div className="clipped"
                                style={{
                                    background: index == active ? '#F6D904' : '#000000',
                                    width:'224px', height: '216px'
                                }}
                            ></div> 
                            { chara.empty && 
                                <div className="clipped absolute top-[8px] left-[12px]"
                                    style={{
                                        background:`url('${chara.image}') no-repeat center center`,
                                        backgroundSize: '100%'
                                    }}
                                ></div>
                            }
                            { !chara.empty && 
                                <div className="clipped absolute top-[8px] left-[12px]"
                                    style={{
                                        background:`url('${chara.image}') no-repeat center top`,
                                    }}
                                ></div>
                            }
                        </div>   
                    ))
                }
                </div>
            </div>
        </>
    )
}