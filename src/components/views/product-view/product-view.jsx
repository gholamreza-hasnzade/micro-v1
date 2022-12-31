// * import tools
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// * import style
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import {
    EmptyComponent,
    LinkButton,
    Pagination,
    Skeleton,
    Tooltip,
} from "@components/common/partials";
import {ProductPartView} from "@components/views/product-view/part/product-part-view";
// * import store
import { getProducts } from "@redux/slices/product/product-redux-action";
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import paginationHOC from "@components/common/segment/hoc/pagination-hoc";

const ProductView = ({setCurrentPageNo, currentPage}) => {
    const datas = useAppSelector((state) => state?.product);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    useEffect(() => {
        dispatch(getProducts(currentPage));
    }, [dispatch, currentPage]);


    return (
        <S.Product>
            {datas?.datas?.length === 0 ? (
                <EmptyComponent
                    caption={t("No Insert Info")}
                    title={t("add product")}
                    href={"/product/add"}
                />
            ) : (
                <GS.FlexBoxDirColumn>
                    <GS.FlexCenterEnd>
                        <Tooltip title={t("add product")}>
                            {datas?.loading ? (
                                <Skeleton
                                    width={"100px"}
                                    height={"45px"}
                                    variant="rounded"
                                />
                            ) : (
                                <LinkButton href={"/product/add"}>
                                    {t("add product")}
                                </LinkButton>
                            )}
                        </Tooltip>
                    </GS.FlexCenterEnd>
                    <GS.RowMain>
                        {datas?.loading ? (
                            <Skeleton
                                width={"100%"}
                                height={"320px"}
                                variant="rounded"
                            />
                        ) : (
                            <>
                                <GS.TableContainer>
                                    <GS.Table>
                                        <GS.TableHead>
                                            <GS.TableRow>
                                                <GS.TableCell>
                                                    {t("row")}
                                                </GS.TableCell>
                                                <GS.TableCell>
                                                    {t("name product")}
                                                </GS.TableCell>
                                                <GS.TableCell align="left">
                                                    {t("code product")}
                                                </GS.TableCell>
                                                <GS.TableCell align="left">
                                                    {t("quntity")}
                                                </GS.TableCell>
                                                <GS.TableCell align="left">
                                                    {t("price")}
                                                </GS.TableCell>
                                                <GS.TableCell align="left">
                                                    {t("operation")}
                                                </GS.TableCell>
                                            </GS.TableRow>
                                        </GS.TableHead>
                                        <GS.TableBody>
                                            {datas?.datas?.map(
                                                (item, index) => (
                                                    <ProductPartView
                                                        key={index}
                                                        index={index}
                                                        data={item}
                                                    />
                                                )
                                            )}
                                        </GS.TableBody>
                                    </GS.Table>
                                </GS.TableContainer>

                                <Pagination
                                    data={datas}
                                    setCurrentPageNo={setCurrentPageNo}
                                    currentPage={currentPage}
                                />
                            </>
                        )}
                    </GS.RowMain>
                </GS.FlexBoxDirColumn>
            )}
        </S.Product>
    );
};

export default paginationHOC(ProductView)