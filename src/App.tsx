import React from "react";
import AppHeader from "./AppHeader";
import BookList from "./BookList";
import AddBook from "./AddBook";
import Cart from "./Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBook from "./SearchBook";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <Router>
        <AppHeader />
        <div
          style={{ height: "calc(100vh - 48px" }}
          className="overflow-y-hidden w-full"
        >
          <Switch>
            <Route exact path="/">
              <BookList />
            </Route>
            <Route path="/AddBook">
              <AddBook />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/SearchBook">
              <SearchBook />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
