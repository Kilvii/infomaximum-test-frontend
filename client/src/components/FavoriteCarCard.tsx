import { FC } from "react";
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { carStore } from "../store/CarStore";

interface FavoriteCarCardProps {
    car: typeof carStore.allCars[0];
}

const FavoriteCarCard: FC<FavoriteCarCardProps> = ({ car }) => {
    
    return (
        <div css={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "16px", fontFamily: "Inter" }}>
            <div css={{ display: "flex", flexDirection: "row" }}>
                <img src={car?.img_src ?? undefined} alt={`${car.brand} ${car.model}`} css={{ width: 443, height: 309, border: "1px solid gray", borderRadius: "15px", marginRight: 16 }} />
                <div css={{ display: "flex", flexDirection: "column" }}>
                    <span css={{ fontSize: 36, fontWeight: 700 }}>{car.brand} {car.model}</span>
                    <span css={{ overflowWrap: "break-word", maxWidth: 810, color: "gray", fontSize: 14, fontWeight: 400, margin: "16px 0 16px 0" }}>{car.description}</span>
                    <span css={{ color: "gray", fontSize: 14, fontWeight: 400, margin: "16px 0 16px 0" }}>Год: {car.model_year}</span>
                    <span css={{ color: "gray", fontSize: 14, fontWeight: 400, margin: "16px 0 16px 0" }}>Цвет: {car.color}</span>
                    <div css={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", marginTop: "auto" }}>
                        <span css={{ fontSize: 24, fontWeight: 500, margin: "16px 0 16px 0" }}>от {car.price}</span>
                        <div>
                            <Button css={{ textTransform: 'none', width: "259px", backgroundColor: "#4F2CD9", color: "white", marginRight: 10 }} variant="contained" size="medium">
                                Выбрать комплектацию
                            </Button>
                            <IconButton onClick={() => { carStore.toggleFavorite(car); }} css={{ textTransform: 'none', padding: 16, backgroundColor: "none", border: "2px solid red", color: "red", width: "24px", height: "24px", borderRadius: "4px" }}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCarCard;
