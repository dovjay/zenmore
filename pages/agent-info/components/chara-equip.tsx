import Image from "next/image"

export default function CharaEquip() {
    return <div className="w-full h-fit bottom-0 mb-20 relative">
        <Image 
            src="/images/Disk Container.svg" alt="Disk Container" width={737} height={671} 
            className="mx-auto"
        />

        <Image
            src="/images/Disk.svg" alt="Disk" width={153} height={153}
            className="absolute top-[2.5rem] left-[10.25rem] rounded-full"
        />

        <Image
            src="/images/Disk.svg" alt="Disk" width={153} height={153}
            className="absolute top-[2.5rem] right-[10.4rem] rounded-full"
        />

        <Image
            src="/images/Disk.svg" alt="Disk" width={153} height={153}
            className="absolute left-[3.8rem] bottom-[16.25rem] rounded-full"
        />

        <Image
            src="/images/Disk.svg" alt="Disk" width={153} height={153}
            className="absolute right-[3.9rem] bottom-[16.25rem] rounded-full"
        />

        <Image
            src="/images/Disk.svg" alt="Disk" width={153} height={153}
            className="absolute bottom-[2.5rem] left-[10.25rem] rounded-full"
        />

        <Image
            src="/images/Disk.svg" alt="Disk" width={153} height={153}
            className="absolute bottom-[2.5rem] right-[10.4rem] rounded-full"
        />
    </div>
}