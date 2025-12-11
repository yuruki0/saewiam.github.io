import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'


function ProjectsPage() {
 return (    
        <>
            <h2>prawjects</h2>
        </>
    )
}

export const ProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage, 
});