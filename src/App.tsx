import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { decrement, increment, incrementByAmount } from "./redux/userSlice";
function App() {
  const count = useAppSelector((state) => state.user.count);
  const dispatch = useAppDispatch();

  let isLogin = true;
  if (!isLogin) return <Login />;
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/chat/:id">
          <Chat />
          {count}
          <button onClick={() => dispatch(decrement())}>-1</button>
          <button onClick={() => dispatch(increment())}>+1</button>
          <button onClick={() => dispatch(incrementByAmount(100))}>+100</button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
