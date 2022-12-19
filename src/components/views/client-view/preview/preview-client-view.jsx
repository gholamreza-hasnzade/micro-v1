// * import tools
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// * imprort style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { LinkButton, Tooltip } from "@components/common/partials";

export const PreviewClienView = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    return (
        <S.Client>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <Tooltip title={t("return")}>
                        <LinkButton href={"/client"}>{t("return")} </LinkButton>
                    </Tooltip>
                </GS.FlexCenterEnd>

                <GS.RowPreview>
                    <GS.PreviewList>
                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("name client")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("family name client")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("mobile number")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>4</GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("email")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>5000</GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("addres")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>5000</GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};
