//* import tools
import React from "react";

// * import style
import { HomeViewStyle as S } from "@components/views/home-view/home-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { Pagination } from "@components/common/partials/pagination";
import { Caption } from "@components/common/partials/caption";
export const HomeView = () => {
    return (
        <S.Home>
            <GS.FlexBoxDirColumn>
                <Caption>لیست سبد خرید</Caption>
                <GS.RowMain>
                    <GS.TableContainer>
                        <GS.Table>
                            <GS.TableHead>
                                <GS.TableRow>
                                    <GS.TableCell>نام کاربر</GS.TableCell>
                                    <GS.TableCell align="left">
                                        نام خانوادگی
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        شماره موبایل{" "}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {" "}
                                        ایمیل{" "}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {" "}
                                        آدرس{" "}
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
