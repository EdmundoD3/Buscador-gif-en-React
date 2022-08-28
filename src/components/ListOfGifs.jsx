import React, {useEfect, useState} from "react";
import getGifs from "./GetGifs";

export default function ListOfGifs({params}) {
    const {keyword} = params
    const [gifs,setgifs] = useState([])
    useEfect(()=>{
        getGifs({keyword})
        .then(
            gifs=>setgifs(gifs)
        )},[keyword])
    return <div>
        {
            gifs.map(({id,title,url})=>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}