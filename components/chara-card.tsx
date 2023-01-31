import { Dispatch } from "react"
import { SetterOrUpdater } from "recoil"

export function CardClipPath() {
  return <svg className="svg absolute">
    <clipPath id="chara-card-clip-path" clipPathUnits="objectBoundingBox">
      <path d="M0,0 H0.666 C0.698,0,0.725,0.021,0.733,0.052 L1,1 H0.339 C0.308,1,0.281,0.979,0.272,0.949 L0,0"></path>
    </clipPath>
  </svg>
}

export default function CharaCard(props: ICharaCard) {
  let { chara, index, hoverNow, setHoverNow, selectedChara, setSelectedChara } = props

  let charaClass: string = chara ? 'cursor-pointer' : ''

  let cardImage: string = chara ? chara.cardImage : '/images/charas/empty-chara.svg'

  return <>
    <div 
      className={`relative -mx-4 my-2 skew-x-[-16deg] h-fit ${charaClass}`}
    >
      <div className="absolute clipped -left-[7px] -top-1 transition-all duration-300"
        style={{
          background: chara && (hoverNow != -1 ? index == hoverNow : index == selectedChara) ? '#F6D904' : '#000',
          width:'214px', height: '210px'
        }}
      />
      <div className="relative w-full h-full clipped"
        onMouseEnter={() => setHoverNow?.(index)}
        onClick={() => setSelectedChara?.(index)}
        style={{
          background:`url('${cardImage}') no-repeat center center`,
          backgroundSize: '100%'
        }}
      >
        {
          chara &&
          <div className="w-full h-full relative">
            <div 
              className="absolute bottom-0 w-full h-10 opacity-75 bg-black"
              style={{ backgroundImage: "url('/images/Diagonal Texture 600.svg')" }}
            />
            <h6 
              className={`
                mb-0 text-xl absolute text-right text-white font-extrabold bottom-2 right-4
                bg-gradient-to-b from-white via-neutral-100 to-neutral-700 text-transparent bg-clip-text
              `}
            >
              { chara.alias }
            </h6>
          </div>
        }
      </div>
    </div>
  </>
}

interface ICharaCard {
  chara?: any,
  index: number,
  hoverNow?: number,
  setHoverNow?: Dispatch<number>,
  selectedChara?: number,
  setSelectedChara?: SetterOrUpdater<number>
}