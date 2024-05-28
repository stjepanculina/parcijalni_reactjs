import { useState } from "react";

const Form = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Please Enter GitHub username"
      ></input>
      <button type="submit">GO!</button>
    </form>
  );
};

export default Form;
