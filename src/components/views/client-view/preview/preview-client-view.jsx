// * import tools
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// * imprort style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { LinkButton, Tooltip } from "@components/common/partials";
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getBytUser } from "@redux/slices/client/client-redux-action";

export const PreviewClienView = () => {
    const data = useAppSelector((stata) => stata?.client);
    console.log(data?.data?.first_name);
    const { id } = useParams();
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(getBytUser(id));
        }
    }, [dispatch, id]);
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
                                {data?.data?.first_name || "ثبت نشده است"}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("family name client")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {data?.data?.last_name || "ثبت نشده است"}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("email")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {" "}
                                {data?.data?.email || "ثبت نشده است"}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("addres")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {" "}
                                {data?.data?.addres || "ثبت نشده است"}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};
