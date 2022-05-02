import ListProducts from "../../components/ListProducts";
import Research from "../../components/Research";

import { useState } from "react";
import NavProducts from "../../components/NavProducts";
import ShowCar from "../../components/ShowCar";
import CarBuy from "../../components/CarBuy";

function Store() {
  const [isfilter, setIsFilter] = useState(false);
  const [checkCar, setCheckCar] = useState(false);

  
  return (
    <main>
      <NavProducts setIsFilter={setIsFilter} />
      <Research setIsFilter={setIsFilter} />
      <ShowCar setCheckCar={setCheckCar} />
      {checkCar && <CarBuy setCheckCar={setCheckCar} />}
      <ListProducts isfilter={isfilter} />
    </main>
  );
}

export default Store;
