import dynamic from "next/dynamic";

const DynamicVideoBackground = dynamic(() => import('../video-background'), {
  ssr: false
})
export default DynamicVideoBackground