import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["frontend"]);

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAgregar}>Agregar</button> */}

      <ul>
        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ul>
    </>
  );
}

export default GifExpertApp;
