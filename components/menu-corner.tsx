import TwImage from "./tw-image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function MenuCorner(){
    const router = useRouter()

    return (
        <>
            <div className='flex gap-5 absolute top-[32px] left-[80px] z-10 mobile:left-[20px] mobile:top-[20px]'>
            <button className="w-fit h-fit" onClick={() => router.back()}>
                <TwImage
                    className="w-[80px] h-[60px] mobile:w-[60px] mobile:h-[45px]" 
                    src="/images/back-button.svg" alt="Back Button" 
                />
            </button>
            <Link href="/" 
                className={`
                    relative bg-[#020202] my-auto rounded-full text-white
                    border-[#838683] border-4 italic font-[900] text-2xl flex gap-4
                    w-[12rem] h-[3.5rem] mobile:h-[2.5rem] mobile:w-[10rem]
                `}
            >
                <div className={`
                    absolute -top-1 -left-1 bg-[#020202] h-[3.5rem] w-[3.5rem] 
                    rounded-full border-4 box-border border-[#838683] flex items-center
                    mobile:w-[2.5rem] mobile:h-[2.5rem]
                `}>
                    <div className='flex items-center justify-center w-full h-full'>
                        <TwImage 
                            className="w-[24px] h-[24px] mobile:w-[16px] mobile:h-[16px]"
                            src='/images/home-icon.svg' alt="Home icon"
                        />
                    </div>
                </div>
                <strong className="ml-20 my-auto mobile:text-lg mobile:ml-16">Home</strong>
            </Link>
            </div>
        </>
    )
}