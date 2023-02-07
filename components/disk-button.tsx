import TwImage from "./tw-image"

interface IDiskButton {
  position: string,
}

export default function DiskButton(props: IDiskButton) {
  let { position } = props

  return <button 
    className={`absolute rounded-full hover:ring-4 hover:ring-[#F6D904] ${position} transition duration-300`}
  >
    <TwImage
      src="/images/Disk.svg" alt="Disk"
      className="w-[153px] h-[153px] mobile:w-[94px] mobile:h-[94px]"
    />
  </button>
}