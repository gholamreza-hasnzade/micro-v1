// * import tools
import React from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";

// * import components
import { LinkButton, Tooltip } from "@components/common/partials";

// * import style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { Pagination } from "@components/common/partials";

export const ClientView = () => {
    const { t } = useTranslation();
    return (
        <S.Client>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <Tooltip title={"کاربر جدید"}>
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
                                    <GS.TableCell>
                                        {t("name client")}
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                        {t("family name client")}
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
                                    <GS.TableCell align="left">
                                        {t("operation")}
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
                                            <Tooltip title={t("details")}>
                                                <GS.TableCellLink
                                                    to={"/client/preview/1"}
                                                >
                                                    <I.Eye />
                                                </GS.TableCellLink>
                                            </Tooltip>
                                            <Tooltip title={t("edit")}>
                                                <GS.TableCellEdit>
                                                    <I.Edit />
                                                </GS.TableCellEdit>
                                            </Tooltip>

                                            <Tooltip title={t("delete")}>
                                                <GS.TableCellEdit>
                                                    <I.Trash />
                                                </GS.TableCellEdit>
                                            </Tooltip>
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
