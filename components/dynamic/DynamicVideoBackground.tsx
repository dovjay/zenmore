import dynamic from "next/dynamic";

const DynamicVideoBackground = dynamic(() => import('../VideoBackground'), {
  ssr: false
})
export default DynamicVideoBackground