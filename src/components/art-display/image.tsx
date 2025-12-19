import classes from './image.module.css'

interface ImageProps{
    src: string;
    caption?: string;
    setOverlay?: (visible: boolean, src: string) => void
}

export interface ImageDataType {
    name: string,
    caption: string,
    date: string,
    fileName: string
}

export default function Image(props: ImageProps){
    const onClick = () => {
        if (props.setOverlay)
            props.setOverlay(true, props.src)
    }
    return (
        <div 
            className={classes.image}
            onClick={onClick}>
            <img src={props.src} alt={props.caption}/>
            {
                props.caption ? <p>{props.caption}</p> : null
            }
        </div>
    );
}

<Image src={'something.png'} caption={'a string of text'}/>
