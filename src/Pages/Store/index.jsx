import ListProducts from "../../components/ListProducts";
import Research from "../../components/Research";

import { useState } from "react";
import NavProducts from "../../components/NavProducts";

function Store() {
  const [isfilter, setIsFilter] = useState(false);
  return (
    <main>
      <NavProducts setIsFilter={setIsFilter}/>
      <Research setIsFilter={setIsFilter} />

      <ListProducts isfilter={isfilter} />
    </main>
  );
}

export default Store;
