// * import tools
import React from "react";
import * as I from "react-feather";
// * import components
import { LinkButton } from "@components/common/partials";

// * import style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { Pagination } from "@components/common/partials";

export const ClientView = () => {
    return (
        <S.Client>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <LinkButton href={"/client/add"}>کاربر جدید</LinkButton>
                </GS.FlexCenterEnd>
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
                                    <GS.TableCell align="left">
                                        عملیات
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

                                    <GS.TableCellBody>
                                        <GS.TableCellAction>
                                            <GS.TableCellLink
                                                to={"/client/preview/1"}
                                            >
                                                <I.Eye />
                                            </GS.TableCellLink>
                                            <GS.TableCellEdit>
                                                <I.Edit />
                                            </GS.TableCellEdit>
                                            <GS.TableCellEdit>
                                                <I.Trash />
                                            </GS.TableCellEdit>
                                        </GS.TableCellAction>
                                    </GS.TableCellBody>
                                </GS.TableRowBody>

                          
                            </GS.TableBody>
                        </GS.Table>
                    </GS.TableContainer>

                    <Pagination />
                </GS.RowMain>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};
