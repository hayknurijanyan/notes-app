import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { useSelector } from "react-redux";
import { selectUserEmail } from "./redux/userSlice";

function App() {
  const userEmail = useSelector(selectUserEmail);

  return userEmail ? (
    <div>
      <Dashboard />
    </div>
  ) : (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
