//* import tools
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// * import style
import { HomeViewStyle as S } from "@components/views/home-view/home-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { Caption, Pagination } from "@components/common/partials";
import { HomePartView } from "@components/views";
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
            <GS.FlexBoxDirColumn>
                <Caption> {t("shopping cart list")} </Caption>
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
                                        {t("addres")}{" "}
                                    </GS.TableCell>
                                </GS.TableRow>
                            </GS.TableHead>
                            <GS.TableBody>
                                {data?.datas?.map((data, index) => (
                                    <HomePartView key={index} item={data} />
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
        </S.Home>
    );
};
export default HomeView
