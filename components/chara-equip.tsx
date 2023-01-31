import Image from "next/image"

import DiskButton from "./disk-button"

export default function CharaEquip() {
    return <div className="w-full h-fit bottom-0 mb-12 relative">
        <div className="relative w-fit h-fit">
            <Image 
                src="/images/Disk Container.svg" alt="Disk Container" width={737} height={671} 
                className="mx-auto"
            />
            <DiskButton position="top-[2.5rem] left-[8.8rem]" />
            <DiskButton position="top-[2.5rem] right-[9rem]" />
            <DiskButton position="left-[2.4rem] bottom-[16.25rem]" />
            <DiskButton position="right-[2.5rem] bottom-[16.25rem]" />
            <DiskButton position="bottom-[2.5rem] left-[8.8rem]" />
            <DiskButton position="bottom-[2.5rem] right-[9rem]" />
        </div>
    </div>
}