// * import tools
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// * imprort style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { LinkButton, Skeleton, Tooltip } from "@components/common/partials";
// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getByIdUser } from "@redux/slices/client/client-redux-action";

export const PreviewClienView = () => {
    const data = useAppSelector((stata) => stata?.client);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        if (id) {
            dispatch(getByIdUser(id));
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
                                {data?.loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    data?.data?.first_name ??
                                    t("No Insert Info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("family name client")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {data?.loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    data?.data?.last_name ?? t("No Insert Info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("phone")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {data?.loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    data?.data?.phone ?? t("No Insert Info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("email")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {data?.loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    data?.data?.email ?? t("No Insert Info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("addres")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {data?.loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    data?.data?.address ?? t("No Insert Info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};