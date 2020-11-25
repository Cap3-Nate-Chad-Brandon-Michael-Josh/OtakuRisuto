//makes routes only be accessible by people who are not logged in
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import OtakuContext from '../../contexts/OtakuContext'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <OtakuContext.Consumer>
          {OtakuContext =>
            !!OtakuContext.user.id
              ? <Redirect to={'/'} />
              : <Component {...componentProps} />
          }
        </OtakuContext.Consumer>
      )}
    />
  )
}
