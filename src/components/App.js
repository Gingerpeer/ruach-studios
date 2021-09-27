import React from "react"
import Signup from "./signed_in_components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./signed_in_components/Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./signed_in_components/UpdateProfile"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Blogs from "./Blogs"

/*Remember database url from firebase, not sure why my api key did not include. If something goes wrong check back and try to get from firebase config database URL*/
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/create-new-user" component={Signup} />
              {/* 
                - Blogs must have functionality to be created and deleted thus using CRUD but only through users
                -I need blogs to use state and firestore db
                -Individual blog posts should have their own pages rendered and be clickable on the preview card at /blogs. 
              */}
              <Route path="/blogs" component={Blogs} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
