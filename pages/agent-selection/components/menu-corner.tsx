export default function MenuCorner(){
    return (
        <>
            <div className='flex gap-5 absolute top-[32px] left-[80px]'>
            <img src='/images/back-button.svg' style={{maxWidth: '80px'}} />
            <button className="relative bg-[#020202] rounded-full text-white border-[#838683] border-4 italic font-[900] text-2xl pb-1" 
                style={{width:'200px'}}>
                <div className='absolute bg-[#020202] h-[49px] w-[49px] top-[-4px] left-[-5px] rounded-full border-4 border-[#838683] flex items-center'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <img src='/images/home-icon.svg' className='h-[23px]' />
                    </div>
                </div>
                <strong className='ml-12' >Home</strong>
            </button>
            </div>
        </>
    )
}