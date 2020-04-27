
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
      return (
            <header>
                  <div className={"header"}>
                        <div id={"header-img"}></div>
                        <h1 className={"hello"}>Välkommen</h1>
                        <span id={"span1"}>Boka din tid nu</span>
                        {
                              <button className={"btn1"}><Link to={"/features"}>Tjänster</Link></button>
                        }
                  </div>
            </header>


      )
}
export default App;