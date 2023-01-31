interface IStatInfo {
  statName?: string,
  statValue?: string | number
  empty?: boolean
}

export default function StatInfo(props: IStatInfo) {
  const { statName, statValue, empty } = props

  if (empty) {
    return <div className="bg-black flex gap-4 text-white/20 text-lg font-bold px-6 py-1 rounded-full items-center">
      <hr className="w-full border-x-4 border-white/20" />
      <span className="font-display">EMPTY</span>
      <hr className="w-full border-x-4 border-white/20" />
    </div> 
  }

  return <div className="bg-black flex text-white text-xl font-bold px-6 py-1 rounded-full">
    <span>{statName}</span>
    <span className="ml-auto">{statValue}</span>
  </div>
}