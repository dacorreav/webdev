//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./public/components/header";
import Footer from "./public/components/Footer";
import Note from "./public/components/Note";
import notes from "./public/components/notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
