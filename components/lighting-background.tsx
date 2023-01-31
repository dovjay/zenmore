export default function LightingBackground() {
  return <div className="absolute w-screen h-screen overflow-hidden">
    <div 
      style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(217, 217, 217, 0) 100%)" }}
      className="absolute bg-white h-full aspect-square -top-1/3 -right-64"
    />
  </div>
}