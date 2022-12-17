// * import tools
import React from "react";

//* import style
import { SelectOptionComponentStyle as S } from "@components/common/partials/select-option/select-option-component.style";
export const SelectOptionComponent = () => {
   
    return (
        <S.FormControl fullWidth>
            <S.InputLabel id="demo-simple-select-label">کاربران</S.InputLabel>
            <S.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <S.MenuItem value={10}>Ten</S.MenuItem>
                <S.MenuItem value={20}>Twenty</S.MenuItem>
                <S.MenuItem value={30}>Thirty</S.MenuItem>
            </S.Select>
        </S.FormControl>
    );
};
