import { FC, useState } from "react";
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { carStore } from "../store/CarStore";

interface CarCardProps {
    car: typeof carStore.allCars[0]
}

const CarCard: FC<CarCardProps> = ({ car }) => {
    const [isFavorite, setIsFavorite] = useState(car.favorite);

    return (
        <div css={{
            display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "16px", fontFamily: "Inter" }}>
            <div css={{
                display: "flex", flexDirection: "column", position: "relative" }}>
                {!car.availability && (
                    <div css={{
                        position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "black", color: "white", padding: "8px", borderRadius: "5px", zIndex: 1, fontSize: 24, fontWeight: 500,
                    }}>
                        Нет в наличии
                    </div>
                )}
                <img src={car?.img_src ?? undefined} alt={`${car.brand} ${car.model}`} css={{ width: 445, height: 310, border: "1px solid gray", borderRadius: "15px 15px 0px 0px", marginBottom: 20, opacity: car.availability ? 1 : 0.5 }} />
                <span css={{ fontSize: 24, fontWeight: 500 }}>{car.brand} {car.model}</span>
            </div>
            <div css={{ color: "gray", fontSize: 14, fontWeight: 400, margin: "10px 0 10px 0" }}>
                <span css={{ marginRight: 20 }}>Год: {car.model_year}</span>
                <span>Цвет: {car.color}</span>
            </div>
            <span css={{ fontSize: 16, fontWeight: 500 }}>от {car.price}</span>
            <div css={{ marginTop: 16 }}>
                <Button css={{ textTransform: 'none', minWidth: "254px", backgroundColor: car.availability ? "#4F2CD9" : "#ccc", color: car.availability ? "white" : "gray", marginRight: 10 }} variant="contained" size="medium">
                    Купить
                </Button>
                <IconButton onClick={() => { carStore.toggleFavorite(car); setIsFavorite(!isFavorite); }} css={{ backgroundColor: "none", color: car.availability ? "black" : "gray", width: "24px", height: "24px", borderRadius: "4px" }}>
                    {isFavorite ? (
                        <FavoriteIcon css={{ color: "#4F2CD9" }} />
                    ) : (
                        <FavoriteBorderIcon css={{ color: car.availability ? "black" : "gray" }} />
                    )}
                </IconButton>
            </div>
        </div>
    );
};

export default CarCard;
