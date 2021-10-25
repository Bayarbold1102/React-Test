import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ConfigProvider } from "antd";
import mn from "antd/lib/locale/mn_MN";
import Main from "Views/Index";
import "Assets/css/main.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <ConfigProvider locale={mn}>
        <ErrorBoundary FallbackComponent={"error"}>
          <Main/>
        </ErrorBoundary>
      </ConfigProvider>
    </Router>
  );
}

export default App;
