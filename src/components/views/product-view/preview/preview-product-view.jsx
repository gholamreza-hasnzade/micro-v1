// * import tools
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * Import components
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import {
    LinkButton,
    Tooltip,
    Skeleton,
} from "@components/common/partials/index";
// * Import Store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getByIdProduct } from "@redux/slices/product/product-redux-action";

export const PreviewProductView = () => {
    const { item, loading } = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { t } = useTranslation();
    useEffect(() => {
        if (id) {
            dispatch(getByIdProduct(id));
        }
    }, [dispatch, id]);

    return (
        <S.Product>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <Tooltip title={t("return")}>
                        {loading ? (
                            <Skeleton
                                width={"90px"}
                                height={"40px"}
                                variant="rounded"
                            />
                        ) : (
                            <LinkButton href={"/product"}>
                                {t("return")}{" "}
                            </LinkButton>
                        )}
                    </Tooltip>
                </GS.FlexCenterEnd>
                <GS.RowPreview>
                    <GS.PreviewList>
                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("name product")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    item?.name ?? t("no insert info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("code product")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    item?.code ?? t("no insert info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("quntity")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    item?.total ?? t("no insert info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                {t("price")} :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                {loading ? (
                                    <Skeleton
                                        width={"150px"}
                                        height={"25px"}
                                        variant="rounded"
                                    />
                                ) : (
                                    item?.price ?? t("no insert info")
                                )}
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Product>
    );
};
