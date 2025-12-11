import { rootRoute } from './__root'
import imageIndex from '#assets/images/image-index.json'
import { createRoute } from '@tanstack/react-router'
import { ArtDisplay } from '../components/art-display/ArtDisplay'

function IllustrationPage() {

    return (
    <>
        <h2>grid of illustrations will be here</h2>
        <ArtDisplay images={imageIndex.illustrations} columns={2} captionsVisible={false}/>
    </>
  )
}

export const IllustrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/illustration',
  component: IllustrationPage, 
});