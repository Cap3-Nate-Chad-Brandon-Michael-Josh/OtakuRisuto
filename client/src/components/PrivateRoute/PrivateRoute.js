//makes route require to be logged in to access

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import OtakuContext from '../../contexts/OtakuContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <OtakuContext.Consumer>
          {userContext =>
            !!userContext.user.id
              ? <Component {...componentProps} />
              : (
                <Redirect
                  to={{
                    pathname: userContext.user.idle ? '/login' : '/register',
                    state: { from: componentProps.location },
                  }}
                />
              )
          }
        </OtakuContext.Consumer>
      )}
    />
  )
}