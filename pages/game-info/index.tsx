import DynamicVideoBackground from "../../components/dynamic/DynamicVideoBackground"
import MenuCorner from "../../components/menu-corner"
import TapeCard from "./components/TapeCard"


export default function GameInfo() {
  return <div>
    <DynamicVideoBackground />
    <div className="w-screen h-screen backdrop-blur-md fixed" />
    <MenuCorner />
    <div className="w-screen h-screen grid grid-flow-col gap-4 content-center justify-center">
      <TapeCard />
      <TapeCard />
      <TapeCard active={true} />
      <TapeCard />
      <TapeCard />
    </div>
  </div>
}