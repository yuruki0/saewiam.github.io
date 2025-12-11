import imageIndexJSON from '#assets/images/image-index.json'
import type { ImageDataType } from './image'

const imageIndex: ImageIndexType = imageIndexJSON

const pngUrls: {[key: string]: string} = import.meta.glob('./*.png', {
    base: '/assets/images/',
    import: 'default',
    eager: true
})

interface ImageIndexType {
    [key: string]: ImageDataType[]
}

Object.keys(imageIndex).forEach((category) => {
    imageIndex[category].forEach((image, index) => {
        const imageUrl = pngUrls[`./${image.fileName}`];
        imageIndex[category][index].fileName = imageUrl
    })
})

export { imageIndex }
