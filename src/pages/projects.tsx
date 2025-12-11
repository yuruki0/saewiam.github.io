import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

import classes from './projects.module.css'
import Image from '../components/art-display/image'

import imageIndex from '#assets/images/image-index.json'

import { useEffect, useState } from "react";

import type {ImageDataType} from '../components/art-display/image'

function ProjectsPage() {
  const [art, setArt] = useState([...imageIndex.projects])

    useEffect(() => {
        (async () => {
            const images: ImageDataType[] = [...imageIndex.projects]
            for (let i = 0; i < imageIndex.projects.length; i ++) {
                const imageData = imageIndex.projects[i]

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
            <h2>prawjects</h2>
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

export const ProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage, 
});