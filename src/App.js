import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConnectedAppLayout from "ConnectedAppLayout";
import DisconnectedAppLayout from "DisconnectedAppLayout";
import Home from "pages/connected/Home";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(true);
  }, []);

  return (
    <Router>
      {isConnected ? (
        <ConnectedAppLayout>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </ConnectedAppLayout>
      ) : (
        <DisconnectedAppLayout>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </DisconnectedAppLayout>
      )}
    </Router>
  );
}

export default App;
