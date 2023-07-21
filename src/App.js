import React, {useState} from "react"
import "./App.css";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount((currentCount) => currentCount + 1);
          setSubscribedCount((currentCount) => currentCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}

//Using a function means that you will avoid potential race conditions. Instead of taking the value of subscribedCount, which is subject to change, the function will ensure that whatever the most recent value is, it will add 1 to it.

export default App;
