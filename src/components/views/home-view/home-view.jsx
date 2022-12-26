//* import tools
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// * import style
import { HomeViewStyle as S } from "@components/views/home-view/home-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import {
    Caption,
    EmptyComponent,
    Pagination,
} from "@components/common/partials";
import { HomePartView } from "@components/views";

// * Import Store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getOrders } from "@redux/slices/order/order-redux-action";

const HomeView = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { t } = useTranslation();
    const data = useAppSelector((state) => state?.order);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getOrders(currentPage));
    }, [dispatch, currentPage]);

    const setCurrentPageNo = (event, pageNumber) => {
        setCurrentPage(Number(pageNumber));
    };
    return (
        <S.Home>
            {data?.datas?.length === 0 ? (
                <EmptyComponent caption={t("No Insert Info")} />
            ) : (
                <GS.FlexBoxDirColumn>
                    <S.RowBasket>
                        <Caption> {t("shopping cart list")} </Caption>
                        <S.LengthBasket>
                            {data?.datas?.length} {t("Number Basket")}
                        </S.LengthBasket>
                    </S.RowBasket>
                    <GS.RowMain>
                        <GS.TableContainer>
                            <GS.Table>
                                <GS.TableHead>
                                    <GS.TableRow>
                                        <GS.TableCell>
                                            {" "}
                                            {t("name client")}{" "}
                                        </GS.TableCell>
                                        <GS.TableCell align="left">
                                            {t("family name client")}
                                        </GS.TableCell>
                                        <GS.TableCell align="left">
                                            {t("phone")}{" "}
                                        </GS.TableCell>
                                        <GS.TableCell align="left">
                                            {" "}
                                            {t("email")}{" "}
                                        </GS.TableCell>
                                        <GS.TableCell align="left">
                                            {" "}
                                            {t("quntity")}{" "}
                                        </GS.TableCell>
                                        <GS.TableCell align="left">
                                            {t("operation")}
                                        </GS.TableCell>
                                    </GS.TableRow>
                                </GS.TableHead>
                                <GS.TableBody>
                                    {data?.datas &&
                                        data?.datas?.map((data, index) => (
                                            <HomePartView
                                                key={index}
                                                item={data}
                                            />
                                        ))}
                                </GS.TableBody>
                            </GS.Table>
                        </GS.TableContainer>

                        <Pagination
                            data={data}
                            setCurrentPageNo={setCurrentPageNo}
                            currentPage={currentPage}
                        />
                    </GS.RowMain>
                </GS.FlexBoxDirColumn>
            )}
        </S.Home>
    );
};
export default HomeView;
