import { FC } from "react";
import HeaderBar from "../../components/HeaderBar";
import FavoriteCarCard from "../../components/FavoriteCarCard";
import FavoriteTitle from "../../components/FavoriteTitle";
import { useNavigate } from "react-router-dom";
import { carStore } from "../../store/CarStore";
import { observer } from "mobx-react";

const Favorities: FC = observer(() => {

    const navigate = useNavigate();

    return (
        <div>
            <HeaderBar navigate={navigate} />
            <FavoriteTitle count={carStore.favoriteCars.length} />
            {carStore.favoriteCars.map((car) => (
                <FavoriteCarCard key={car.id} car={car} />
            ))}
        </div>
    );
});

export default Favorities;
