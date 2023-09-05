import "./App.css";

import Wizard from "./Wizard";

const App = () => {
  // caller will call even for items that should not be rendered.
  // in that case we just draw a div to make up the height and we uppercase
  // the text to show that this item is not loaded yet.

  return <Wizard></Wizard>;
};
export default App;
