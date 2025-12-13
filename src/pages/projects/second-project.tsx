import { createRoute } from '@tanstack/react-router'
import { ArtDisplay } from '../../components/art-display/ArtDisplay';
import { imageIndex } from '../../components/art-display/import_images';
import { ProjectsRoute } from './projects';

function SecondProjectPage() {
    return (    
        <>
            <h2>test prawjects</h2>
            <ArtDisplay images = {imageIndex.projects} columns={1} captionsVisible={false}/>
        </>
    )
}

export const SecondProjectRoute = createRoute({
  getParentRoute: () => ProjectsRoute,
  path: '/second-project',
  component: SecondProjectPage, 
});