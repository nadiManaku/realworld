import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TestData from "./pages/TestData";
import Performance from "./pages/TestDataPerformance";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    
    <HashRouter>
        <ul className="header">
          <li><NavLink to="/"><Button color="primary">Home</Button></NavLink></li>
          <li><NavLink to="/test-data"><Button color="primary">Test Data</Button></NavLink></li>
          <li><NavLink to="/performance"><Button color="primary">Performance</Button></NavLink></li>
        </ul>
          <div className="content">
            <AppContextProvider>
            <Switch>
              <Route exact path="/" />
              <Route path="/test-data" component={TestData} />
              <Route path="/performance" component={Performance} />
            </Switch>
            </AppContextProvider>
          </div>
    </HashRouter>
  );
}

export default App;
