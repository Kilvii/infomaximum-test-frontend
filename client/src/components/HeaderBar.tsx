import { FC } from "react";
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface HeaderBarProps {
    navigate: (text: string) => void;
}

const HeaderBar: FC<HeaderBarProps> = ({ navigate }) => {

    const handleNavigate = (path: string) => () => {
        navigate(path);
    };

    return (
        <div css={{
            display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "16px", marginBottom: "14px", fontFamily: "Inter", borderBottom: '2px solid gray' }}>
            <div css={{ fontSize: 24, marginRight: 10 }}>
                <span css={{ color: "#6C47FF", fontWeight: "bold" }}>КУПИ</span>АВТО
            </div>
            <Button onClick={handleNavigate("/cars")} css={{ textTransform: 'none', minWidth: "135px", backgroundColor: "#4F2CD9", marginRight: 10 }} variant="contained" size="medium" startIcon={<MenuIcon />}>
                Каталог
            </Button>
            <span css={{ marginLeft: 'auto', fontWeight: 500, marginRight: 26 }}>Москва, Волгоградский пр-кт, 43, стр 1</span>
            <span css={{ fontWeight: 500, marginRight: 20 }}>+7 800 555 35 35</span>
            <Button onClick={handleNavigate("/favorities")} css={{ textTransform: 'none', minWidth: 135, backgroundColor: "white", color: "black" }} variant="contained" size="medium" startIcon={<FavoriteIcon css={{ color: "#4F2CD9" }} />}>
                Избранное
            </Button>
        </div>
    );
};

export default HeaderBar;
