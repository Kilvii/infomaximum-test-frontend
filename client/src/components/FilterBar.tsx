import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import IconButton from '@mui/material/IconButton';

interface FilterBarProps {
    onSearch: (text: string) => void;
    onSort: (sortType: string) => void;
}

const FilterBar: FC<FilterBarProps> = ({ onSearch, onSort }) => {

    return (
        <div css={{
            display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", fontFamily: "Inter" }}>
            <div css={{ display: "flex", alignItems: "center", fontWeight: 500 }}>
                <i css={{ width: 20, height: 20 }}><SwapVertIcon /></i>
                <select css={{ color: "black", backgroundColor: "white", border: "none", outline: 0 }} onChange={(event) => onSort(event.target.value)}>
                    <option value="availability">Сначала в наличии</option>
                    <option value="name-asc">По имени (A-Z)</option>
                    <option value="name-desc">По имени (Z-A)</option>
                    <option value="newest">Сначала новее</option>
                    <option value="oldest">Сначала старше</option>
                    <option value="price-asc">Сначала дешевле</option>
                    <option value="price-desc">Сначала дороже</option>
                </select>
            </div>
            <div css={{ minWidth: 445, minHeight: 36, display: "flex", flexDirection: "row", alignItems: "center", border: "1px solid #e3dfd3", borderRadius: "4px", padding: "4px 8px" }}>
                <input css={{ outline: "none", minWidth: 418, border: "1px solid white", minHeight: 24, color: "black", backgroundColor: "white" }} name="search" placeholder="Найти авто" type="text" aria-label="search icons" onChange={(event) => onSearch(event.target.value)} />
                <IconButton css={{ backgroundColor: "#4F2CD9", color: "white", width: 24, height: 24, borderRadius: "4px" }}>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default FilterBar;
