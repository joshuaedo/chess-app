import "./App.css";
import Chessboard from "./components/Chessboard/Chessboard";
import TabletChessboard from "./components/Chessboard/TabletChessboard";
import MobileChessboard from "./components/Chessboard/MobileChessboard";

function App() {
  let sm = window.matchMedia("(max-width : 480px)");
  let md = window.matchMedia("(max-width: 768px)");
  let lg = window.matchMedia("(max-width: 2560px)");

  console.log(lg);

  return (
    <div id="app">
      {lg.matches && <Chessboard />}
      {md.matches && <TabletChessboard />}
      {sm.matches && <MobileChessboard />}
    </div>
  );
}

export default App;
