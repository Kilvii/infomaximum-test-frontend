import { FC, useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import FilterBar from "../../components/FilterBar";
import CarCard from "../../components/CarCard";
import { useNavigate } from "react-router-dom";
import { carStore } from "../../store/CarStore";

const Cars: FC = () => {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleSort = (sortType: string) => {
    setSortType(sortType);
  };

  const sortFunctions = {
    "availability": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) => {
      if (a.availability === b.availability) {
        return 0;
      } else if (a.availability) {
        return -1;
      } else {
        return 1;
      }
    },
    "name-asc": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) => a.brand.localeCompare(b.brand),
    "name-desc": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) => b.brand.localeCompare(a.brand),
    "newest": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) => b.model_year - a.model_year,
    "oldest": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) => a.model_year - b.model_year,
    "price-asc": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) => a.price.localeCompare(b.price),
    "price-desc": (a: typeof carStore.allCars[0], b: typeof carStore.allCars[0]) =>b.price.localeCompare(a.price),
  };

  const sortedCars = carStore.allCars.sort(sortFunctions[sortType as keyof typeof sortFunctions]);

  return (
    <div>
      <HeaderBar navigate={navigate}/>
      <FilterBar onSearch={handleSearch} onSort={handleSort} />
      <div css={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {sortedCars.filter((car) => {
          return car.brand.toLowerCase().includes(searchText.toLowerCase()) ||
            car.model.toLowerCase().includes(searchText.toLowerCase());
        }).map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
