import type { ImageDataType } from "./image";
import { Column } from "./column";

import classes from "./ArtDisplay.module.css"

import { useEffect, useState } from "react";

interface ArtDisplayProps{
    images: ImageDataType[],
    columns: number,
    captionsVisible: boolean
}


export function ArtDisplay (props:ArtDisplayProps){
  const [art, setArt] = useState([...props.images])

    useEffect(() => {
        (async () => {
          // get image URLs for rendering later
            const images: ImageDataType[] = [...props.images]
            for (let i = 0; i < images.length; i ++) {
                const imageData = images[i]
                const imgUrl = await import(`../../../assets/images/${imageData.fileName}`)
                imageData.fileName = imgUrl.default;
                images[i] = imageData
            }
            setArt(images)

        })()
    }, [props.images])
  
 // create art columns
const artColumns : Array<Array<ImageDataType>> = []

for (let i = 0; i < props.columns; i++){
    artColumns.push([])
}
//artColumns will look like [], []
for (let i = 0; i < art.length; i++ ){
    artColumns[i % props.columns].push(art[i])
}
    //e.g. 3 columns
    // 0 -> artColumns[0 % 3] == artColumns[0] -> image goes to the first column
    // 1 -> artColumns[1 % 3] == artColumns[1] -> to second column
    // 2 -> artColumns[2 % 3] == artColumns[2] -> to third column...etc
    return (
        <div className={classes.art_display}>
                  {
                    artColumns.map((group) =>
                        <Column images={group} captionsVisible={props.captionsVisible}/>
                      )
                  }
        </div>
    )
}