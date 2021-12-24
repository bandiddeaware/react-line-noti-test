import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routeConfig from './routeConfig'
import RoutePath from 'constants/RoutePath'


const AppRoutes: React.FC = () => {

    return (
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to={RoutePath.page1} />}
          />
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              render={(props) => {
                const { meta } = route
    
                return meta.layout ? (
                  <meta.layout>
                    <route.component {...props} />
                  </meta.layout>
                ) : (
                  <route.component {...props} />
                )
              }}
            />
          ))}
        </Switch>
      )
    }
    
export default AppRoutes