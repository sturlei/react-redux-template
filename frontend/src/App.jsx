import { withRouter } from "react-router-dom";

// components
import StartUp from "./StartUp";

// minipages


function App( { children } ) {

  return (
    <div className="App"  >
      <StartUp />
      {children}
    </div>
  );
}



export default withRouter( App );