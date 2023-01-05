
import { useRef, useEffect } from 'react'

export default function BangbooBackground(){
    
    let rows = 11  
    
    return (
        <>
            <div className="overflow-y-hidden absolute h-screen flex">
                {
                    [...Array(rows)].map((_, row) => (
                        <TileColumn key={row} />
                    ))
                }
            </div>
        </>
    )
}

function TileColumn(){
    let per_column = 4 

    return(
        <>
            <div className="bangboo-column-background" id={'column-'}>
                {
                    [...Array(per_column)].map((_, tile) => (
                        <img className="" src="/images/bangboo-tile-background.svg" key={tile} style={{
                            height: '300px'
                        }} /> 
                    ))
                }
            </div>
        </>
    )
}