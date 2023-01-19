import Image from "next/image"

interface IDiskButton {
  position: string,
}

export default function DiskButton(props: IDiskButton) {
  let { position } = props

  return <button 
    className={`absolute rounded-full hover:ring-4 hover:ring-[#F6D904] ${position} transition duration-300`}
  >
    <Image
      src="/images/Disk.svg" alt="Disk" width={153} height={153}
    />
  </button>
}