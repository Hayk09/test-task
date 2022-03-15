import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Contacts from "./pages/Contact"
import Login from "./pages/Login"
import SearchPage from "./pages/Search"



export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {

    return (
      <Switch>
        <Route path='/search' exact>
          <SearchPage />
        </Route>
        <Route path='/contacts' exact>
          <Contacts />
        </Route>
        <Redirect to='/contacts' />
      </Switch>
    )
  }

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Redirect to='/' />
      </Switch>
    </>

  )

}