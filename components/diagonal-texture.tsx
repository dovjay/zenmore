export default function DiagonalTexture() {
  return <>
  <div className="w-screen h-screen absolute -z-10 bg-black/80 backdrop-blur-lg" />
  <div 
    style={{ backgroundImage: `url('/textures/Diagonal Texture 600.png')` }}
    className="w-screen h-screen absolute -z-10 mix-blend-overlay bg-[length:28rem]"
  />
  </>
}