// * Import tools
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

// * Import style
import { LanguageComponentStyle as S } from "@components/common/segment/language/language-component.style";
// * Import components
import { Tooltip } from "@components/common/partials";

export const LanguageComponent = () => {
    const { i18n } = useTranslation();

    const handleLangUpdate = (e, lang) => {
        e.preventDefault();
        i18n.changeLanguage(lang);
    };
    return (
        <S.RowActionHeader>
            <S.ActionFlag onClick={(e) => handleLangUpdate(e, "en")}>
                <Tooltip title="USA">
                    <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: "1.5em",
                            height: "1.5em",
                        }}
                    />
                </Tooltip>
            </S.ActionFlag>
            <S.ActionFlag>
                <Tooltip
                    title="Persian"
                    onClick={(e) => handleLangUpdate(e, "fa")}
                >
                    <ReactCountryFlag
                        countryCode="IR"
                        svg
                        style={{
                            width: "1.5em",
                            height: "1.5em",
                        }}
                    />
                </Tooltip>
            </S.ActionFlag>
        </S.RowActionHeader>
    );
};
