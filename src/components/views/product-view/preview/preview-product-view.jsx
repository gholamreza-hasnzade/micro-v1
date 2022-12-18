// * import tools
import React from "react";
import { useTranslation } from "react-i18next";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import { LinkButton, Tooltip } from "@components/common/partials/index";

export const PreviewProductView = () => {
    const { t } = useTranslation();
    return (
        <S.Product>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <Tooltip title={t("return")}>
                        <LinkButton href={"/product"}>
                            {t("return")}{" "}
                        </LinkButton>
                    </Tooltip>
                </GS.FlexCenterEnd>
                <GS.RowPreview>
                    <GS.PreviewList>
                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("name product")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("code product")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("quntity")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>4</GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("price")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>5000</GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Product>
    );
};
