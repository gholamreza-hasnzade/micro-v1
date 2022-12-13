// * import tools
import React from "react";

// * import style
import { MainFooterStyle as S } from "@components/common/sections/footer/main-footer/main-footer.component.style";

export const MainFooterComponent = () => {
    return (
        <S.Footer component={"footer"}>
            <S.FooterTitle>© ۱۴۰۱ - تمامی حقوق برای شرکت مهندسی نرم افزاری هلو محفوظ است.</S.FooterTitle>
        </S.Footer>
    );
};
