import { ArtDisplay } from '../components/art-display/ArtDisplay';
import { rootRoute } from './__root'
import { createRoute } from '@tanstack/react-router'

import { imageIndex } from '../components/art-display/import_images';
import ImageOverlay from '../components/art-display/image-overlay';
import { useState } from 'react';

function IllustrationPage() {
    const [overlayVisible, setOverlayVisible] = useState(false)
    const [overlaySrc, setOverlaySrc] = useState("")

const setOverlay = (visible: boolean, src: string) => {
    setOverlayVisible(visible)
    setOverlaySrc(src)
}

    return (
        <>
            <h2>grid of illustrations will be here</h2>

            <ArtDisplay 
                images={imageIndex.illustrations} 
                columns={2} captionsVisible={false} 
                setOverlay={setOverlay}/>

            <ImageOverlay src={overlaySrc} visible={overlayVisible}/>
        </>
    )
}

export const IllustrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/illustration',
  component: IllustrationPage, 
});
