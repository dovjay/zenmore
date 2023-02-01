import Image from "next/image"

export default function TwImage(props: ITwImage) {
  return <div 
      className={`relative ${props.className}`}
    >
    <Image src={props.src} alt={props.alt} fill />
  </div>
}

interface ITwImage {
  className: string,
  src: string,
  alt: string
}