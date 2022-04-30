import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { Context } from "../../Context/AuthContext";

function Research() {
  const { store } = useContext(Context);
  const { register, handleSubmit } = useForm();

  const [filterProducts, setFilterProducts] = useState([]);

  const handleSearch = (valueInput) => {
    const search = store.filter((product) => {
      const splitTitle = product.title.split(" ");

      const validInput = splitTitle.some((value) => {
        return value.toLowerCase() === valueInput.value.toLowerCase();
      });

      return validInput;
    });

    setFilterProducts(search);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Pesquisa" {...register("value")} />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default Research;
