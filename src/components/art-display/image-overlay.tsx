import classes from "./image-overlay.module.css"

interface ImageOverlayProps {
    src: string
    visible: boolean
}

export default function ImageOverlay (props:ImageOverlayProps){
    const cssClasses = [classes.overlay]

    if (props.visible) cssClasses.push(classes.visible)

    const getClassName = () => cssClasses.join(" ")

    return(
        <div className = {getClassName()}>
            <div>
                <p>x</p>
                <img src={props.src}/>
            </div>
        </div>
    )
}