import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import UserData from "./components/UserData";

function App() {
  const [username, setUsername] = useState("");

  const handleSearch = (username) => {
    setUsername(username);
  };

  const handleReset = () => {
    setUsername("");
  };

  return (
    <div className="App">
      <h1>Github Data</h1>
      {username ? (
        <UserData username={username} onReset={handleReset} />
      ) : (
        <Form onSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
