import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

import classes from './projects.module.css'
import Image from '../components/art-display/image'

import imageIndex from '../../assets/images/image-index.json'

import { useEffect, useState } from "react";

interface ImageDataType {
    name: string,
    caption: string,
    date: string,
    fileName: string
}

function ProjectsPage() {
  const [art, setArt] = useState([...imageIndex.projects])

    useEffect(() => {
        (async () => {
            const images: ImageDataType[] = [...imageIndex.projects]
            for (let i = 0; i < imageIndex.projects.length; i ++) {
                const imageData = imageIndex.projects[i]
                const imgUrl = await import(`../../assets/images/${imageData.fileName}.jpg`)
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
            <div className={classes.art_display}>
                {
                    art.map((image) =>
                        <Image key={image.fileName} src={image.fileName} caption={image.caption} />
                    )
                }
            </div>
        </>
    )
}


{/* // async function ProjectsPage() {
//   const imageComponents = [];
//   for (let image of imageIndex.projects){
//     const imgUrl = await import(`../../assets/images/${image.fileName}.png`)
//     imageComponents.push(<Image src={imgUrl} caption={image.caption}/>)
//   }
//   return (
//     <>
//         <h2>prawjects</h2>
//         <div className={classes.projects_display}>
//           {imageComponents}
//         </div>
//     </>
//   )
// } */}

export const ProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage, 
});