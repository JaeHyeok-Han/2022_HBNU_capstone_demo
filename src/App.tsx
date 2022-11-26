import React from "react";

const fetchAnalyze = async (text: string) => {
  const response = await fetch("http://203.230.103.35:3000", {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
  });
  if (response.ok) {
    const jsonRes = await response.json();
    console.log(jsonRes);
  } else {
    console.log(response.statusText);
  }
};

function App() {
  return <div className="App"></div>;
}

export default App;
