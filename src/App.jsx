import GlobalStyle from "./GlobalStyles";
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App; // export default가 있어야 App을 import할 수 있습니다.
