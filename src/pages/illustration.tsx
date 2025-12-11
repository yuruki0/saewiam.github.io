import { rootRoute } from './__root'
import { useEffect, useState } from 'react'
import imageIndex from '#assets/images/image-index.json'
import type {ImageDataType} from '../components/art-display/image'
import { createRoute } from '@tanstack/react-router'
import Image from '../components/art-display/image'
import classes from '../pages/illustration.module.css'

function IllustrationPage() {
  const illustrations = imageIndex.illustrations
  
  const [art, setArt] = useState([...illustrations])

    useEffect(() => {
        (async () => {
            const images: ImageDataType[] = [...illustrations]
            for (let i = 0; i < illustrations.length; i ++) {
                const imageData = illustrations[i]
                const imgUrl = await import(`../../assets/images/${imageData.fileName}`)
                const newImageData: ImageDataType = {...imageData};
                newImageData.fileName = imgUrl.default;
                images[i] = newImageData
            }
            setArt(images)
        })()
    }, [])
  return (
    <>
        <h2>grid of illustrations will be here</h2>
        <div className={classes.projects_display}>
                {
                    art.map((image) =>
                        <Image key={image.fileName} src={image.fileName} caption={image.caption} />
                    )
                }
            </div>
    </>
  )
}

export const IllustrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/illustration',
  component: IllustrationPage, 
});