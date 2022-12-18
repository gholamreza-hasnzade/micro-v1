//* import tools
import React from "react";
import { useTranslation } from "react-i18next";

// * import style
import { HomeViewStyle as S } from "@components/views/home-view/home-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { Caption, Pagination } from "@components/common/partials";
export const HomeView = () => {
    const { t } = useTranslation();
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
                                        {t("name user")}{" "}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {t("family name user")}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {t("mobile number")}{" "}
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
                                <GS.TableRowBody>
                                    <GS.TableCellBody>غلامرضا</GS.TableCellBody>
                                    <GS.TableCellBody>
                                        حسن زاده
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        09369780985
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        index@gmail.com
                                    </GS.TableCellBody>
                                    <GS.TableCellBody> تهرون</GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>غلامرضا</GS.TableCellBody>
                                    <GS.TableCellBody>
                                        حسن زاده
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        09369780985
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        index@gmail.com
                                    </GS.TableCellBody>
                                    <GS.TableCellBody> تهرون</GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>غلامرضا</GS.TableCellBody>
                                    <GS.TableCellBody>
                                        حسن زاده
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        09369780985
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        index@gmail.com
                                    </GS.TableCellBody>
                                    <GS.TableCellBody> تهرون</GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>غلامرضا</GS.TableCellBody>
                                    <GS.TableCellBody>
                                        حسن زاده
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        09369780985
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        index@gmail.com
                                    </GS.TableCellBody>
                                    <GS.TableCellBody> تهرون</GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>غلامرضا</GS.TableCellBody>
                                    <GS.TableCellBody>
                                        حسن زاده
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        09369780985
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        index@gmail.com
                                    </GS.TableCellBody>
                                    <GS.TableCellBody> تهرون</GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>غلامرضا</GS.TableCellBody>
                                    <GS.TableCellBody>
                                        حسن زاده
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        09369780985
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                        {" "}
                                        index@gmail.com
                                    </GS.TableCellBody>
                                    <GS.TableCellBody> تهرون</GS.TableCellBody>
                                </GS.TableRowBody>
                            </GS.TableBody>
                        </GS.Table>
                    </GS.TableContainer>

                    <Pagination />
                </GS.RowMain>
            </GS.FlexBoxDirColumn>
        </S.Home>
    );
};
