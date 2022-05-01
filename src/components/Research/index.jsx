import { useForm } from "react-hook-form";

import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

import { FaSearch } from "react-icons/fa";
import { ContainerResearch } from "./style";

function Research() {
  const { store, setFilterProducts } = useContext(Context);
  const { register, handleSubmit, reset } = useForm();

  const handleSearch = (valueInput) => {
    const search = store.filter((product) => {
      const splitTitle = product.title.split(" ");

      const validInput = splitTitle.some((value) => {
        return value.toLowerCase() === valueInput.value.toLowerCase();
      });

      return validInput;
    });

    setFilterProducts(search);
    reset();
  };

  return (
    <ContainerResearch onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Pesquisa" {...register("value")} />
      <button type="submit">
        <FaSearch size="20" />
      </button>
    </ContainerResearch>
  );
}

export default Research;
