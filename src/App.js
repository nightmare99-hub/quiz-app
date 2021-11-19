import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import List from "./components/List";
import Detail from "./components/Detail";
import EditAdd from "./components/EditAdd";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <MyComponents /> */}

      <Nav />
    

    
    </div>

    <Switch>
      <Route path="/" exact>
        <Home /> 
      </Route>
      <Route path="/todo" exact>
        <List />
      </Route>
      <Route path="/todo/:id" component={Detail}/>
      <Route path="/edit/:idLevel" component={EditAdd}/>
        
      
    </Switch>
  </BrowserRouter>
  );
}

export default App;
