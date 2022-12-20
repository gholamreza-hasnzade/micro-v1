// * import tools
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// * import components
import { LinkButton, Tooltip } from "@components/common/partials";
import { ClientPartView } from "@components/views/client-view/part/client-part-view";
import { Pagination } from "@components/common/partials";

// * import style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import store
import { getUsers } from "@redux/slices/client/client-redux-action";
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";

export const ClientView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const datas = useAppSelector((stata) => stata?.client);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    useEffect(() => {
        dispatch(getUsers(currentPage));
    }, [dispatch, currentPage]);

    const setCurrentPageNo = (event, pageNumber) => {
        setCurrentPage(Number(pageNumber));
    };
    return (
        <S.Client>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <Tooltip title={t("client user")}>
                        <LinkButton href={"/client/add"}>
                            {t("client user")}{" "}
                        </LinkButton>
                    </Tooltip>
                </GS.FlexCenterEnd>
                <GS.RowMain>
                    <GS.TableContainer>
                        <GS.Table>
                            <GS.TableHead>
                                <GS.TableRow>
                                    <GS.TableCell>{t("row")}</GS.TableCell>
                                    <GS.TableCell>
                                        {t("name client")}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {t("family name client")}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {" "}
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
                                    <GS.TableCell align="left">
                                        {t("operation")}
                                    </GS.TableCell>
                                </GS.TableRow>
                            </GS.TableHead>
                            <GS.TableBody>
                                {datas?.datas?.map((data, index) => (
                                    <ClientPartView
                                        data={data}
                                        key={index}
                                        index={index}
                                    />
                                ))}
                            </GS.TableBody>
                        </GS.Table>
                    </GS.TableContainer>

                    <Pagination
                        data={datas}
                        setCurrentPageNo={setCurrentPageNo}
                        currentPage={currentPage}
                    />
                </GS.RowMain>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};
