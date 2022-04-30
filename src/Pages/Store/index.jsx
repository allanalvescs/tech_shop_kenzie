import axios from "axios";
import { useEffect, useState } from "react";

function Store() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get("https://kenzieshop.herokuapp.com/products")
      .then((resp) => setStore(resp.data));
  }, []);

  console.log(store);
  return (
    <main>
      <form>
        <input type="text" placeholder="Pesquisa" />
        <button>icone</button>
      </form>
    </main>
  );
}

export default Store;
