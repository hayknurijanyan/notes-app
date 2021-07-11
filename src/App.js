import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  return userName ? (
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
