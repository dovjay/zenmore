import Image from "next/image"

import DiskButton from "./disk-button"

export default function CharaEquip() {
    return <div className="w-full h-fit bottom-0 mb-12 relative mobile:mb-4">
        <div className="relative w-fit h-fit mobile:scale-[90%]">
            <Image 
                src="/images/Disk Container.svg" alt="Disk Container" width={737} height={671} 
                className="mx-auto"
            />
            <DiskButton position="top-[2.5rem] left-[8.8rem] mobile:top-[14px] mobile:left-[67px]" />
            <DiskButton position="top-[2.5rem] right-[9rem] mobile:top-[14px] mobile:right-[68px]" />
            <DiskButton position="left-[2.4rem] bottom-[16.25rem] mobile:bottom-[128px] mobile:left-[13px]" />
            <DiskButton position="right-[2.5rem] bottom-[16.25rem] mobile:bottom-[128px] mobile:right-[14px]" />
            <DiskButton position="bottom-[2.5rem] left-[8.8rem] mobile:bottom-[14px] mobile:left-[67px]" />
            <DiskButton position="bottom-[2.5rem] right-[9rem] mobile:bottom-[14px] mobile:right-[68px]" />
        </div>
    </div>
}