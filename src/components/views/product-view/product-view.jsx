// * import tools
import React from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";

// * import style
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { LinkButton, Pagination, Tooltip } from "@components/common/partials";
//import { DeleteModal } from "@components/common/segment";

export const ProductView = () => {
    const { t } = useTranslation();
    return (
        <S.Product>
            <GS.FlexBoxDirColumn>
                {/*  <DeleteModal /> */}
                <GS.FlexCenterEnd>
                    <Tooltip title={t("add product")}>
                        <LinkButton href={"/product/add"}>
                            {t("add product")}
                        </LinkButton>
                    </Tooltip>
                </GS.FlexCenterEnd>
                <GS.RowMain>
                    <GS.TableContainer>
                        <GS.Table>
                            <GS.TableHead>
                                <GS.TableRow>
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
                                <GS.TableRowBody>
                                    <GS.TableCellBody>
                                        نمر افزار هلو
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>421</GS.TableCellBody>
                                    <GS.TableCellBody>2</GS.TableCellBody>
                                    <GS.TableCellBody>200</GS.TableCellBody>

                                    <GS.TableCellBody>
                                        <GS.TableCellAction>
                                            <Tooltip title={t("details")}>
                                                <GS.TableCellLink
                                                    to={"/product/preview/1"}
                                                >
                                                    <I.Eye />
                                                </GS.TableCellLink>
                                            </Tooltip>

                                            <Tooltip title={t("edit")}>
                                                <GS.TableCellEdit>
                                                    <I.Edit />
                                                </GS.TableCellEdit>
                                            </Tooltip>

                                            <Tooltip title={t("حذف")}>
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
        </S.Product>
    );
};
