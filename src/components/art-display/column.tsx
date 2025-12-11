import type { ImageDataType } from "./image"
import Image from "./image"

interface ColumnProps {
    images: ImageDataType[],
    captionsVisible: boolean
}

export function Column (props:ColumnProps){
    return(
        <div>
            {
                props.images.map((image) =>
                    <Image 
                        key={image.fileName} 
                        src={image.fileName} 
                        caption={props.captionsVisible ? image.caption : undefined} />
                )
            }
        </div>
    )
}