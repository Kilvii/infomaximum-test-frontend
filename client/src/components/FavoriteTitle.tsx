import { FC } from "react";

interface FavoriteTitleProps {
    count: number;
}

const FavoriteTitle: FC<FavoriteTitleProps> = ({ count }) => {

    return (
        <div css={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "16px", fontFamily: "Inter" }}>
            <span css={{ fontSize: 48, fontWeight: 700 }}>Избранные товары -  {count} позиций</span>
        </div>
    );
};

export default FavoriteTitle;
