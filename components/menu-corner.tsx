import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function MenuCorner(){
    const router = useRouter()

    return (
        <>
            <div className='flex gap-5 absolute top-[32px] left-[80px] z-10'>
            <button className="w-fit h-fit" onClick={() => router.back()}>
                <Image src='/images/back-button.svg' alt="Back Button" width={80} height={60} />
            </button>
            <Link href="/" className="relative bg-[#020202] my-auto rounded-full text-white border-[#838683] border-4 italic font-[900] text-2xl flex gap-4 h-[3.5rem]" 
                style={{width:'200px'}}>
                <div className='absolute -top-1 -left-1 bg-[#020202] h-[3.5rem] w-[3.5rem] rounded-full border-4 box-border border-[#838683] flex items-center'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <Image src='/images/home-icon.svg' alt="Home icon" width={24} height={24} />
                    </div>
                </div>
                <strong className="ml-20 my-auto">Home</strong>
            </Link>
            </div>
        </>
    )
}