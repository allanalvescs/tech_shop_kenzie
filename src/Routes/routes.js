import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Store from '../Pages/Store'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/login" component={Login} />
        </Switch>
    )
}

export default Routes;