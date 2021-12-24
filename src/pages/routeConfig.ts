import { RouteComponentProps } from 'react-router'
import NotFoundPage from './error/NotFoundPage'
import DefaultLayout from '../components/Layout/DefaultLayout'
import RoutePath from 'constants/RoutePath'
import RoutePermission from 'constants/RoutePermission'

// page import 
import Page from 'pages/Page/Page1'

interface RouteConfig {
  path: string
  component: React.ComponentType<RouteComponentProps>
  meta: {
    layout: React.ComponentType<any> | undefined
    requiredAuth: string[] | undefined
  }
}

const routes: RouteConfig[] = [
  {
    path: RoutePath.page1,
    component: Page,
    meta: {
      layout: DefaultLayout,
      requiredAuth: RoutePermission.none,
    },
  },
]

/**
 * NOTES: This should add at last index to act as fallback route when don't matches any path
 */
routes.push({
  path: '*',
  component: NotFoundPage,
  meta: {
    layout: undefined,
    requiredAuth: RoutePermission.none,
  },
})

export default routes
