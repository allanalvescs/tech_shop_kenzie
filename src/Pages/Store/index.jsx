import ListProducts from "../../components/ListProducts";
import Research from "../../components/Research";

import { useState } from "react";

function Store() {
  const [isfilter, setIsFilter] = useState(false);
  return (
    <main>
      <Research setIsFilter={setIsFilter} />

      <ListProducts isfilter={isfilter}/>
    </main>
  );
}

export default Store;
