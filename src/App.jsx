import React from "react";
import Card from "./Card";
import Info from "./Info";

function Create(Info) {
  return (
    <Card
      key={Info.id}
      name={Info.name}
      image={Info.image}
      jobname={Info.jobname}
      location={Info.location}
    />
  );
}
function App() {
  return (
    <div>
      <div className="topic">
        <h1>User Profile Card </h1>
      </div>
      <br />
      <div>{Info.map(Create)}</div>;
    </div>
  );
}

export default App;
