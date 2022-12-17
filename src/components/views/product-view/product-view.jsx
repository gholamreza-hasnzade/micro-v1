// * import tools
import React from "react";

// * import style
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { LinkButton } from "@components/common/partials/buttons";

// * import components
import { Pagination } from "@components/common/partials/pagination";

export const ProductView = () => {
    return (
        <S.Product>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <LinkButton href={"/product/add"}>محصول جدید</LinkButton>
                </GS.FlexCenterEnd>
                <GS.RowMain>
                    <GS.TableContainer>
                        <GS.Table>
                            <GS.TableHead>
                                <GS.TableRow>
                                    <GS.TableCell>نام محصول</GS.TableCell>
                                    <GS.TableCell align="left">
                                         کد محصول
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                       تعداد
                                    </GS.TableCell>
                                    <GS.TableCell align="left">
                                      قیمت
                                    </GS.TableCell>
                                </GS.TableRow>
                            </GS.TableHead>
                            <GS.TableBody>
                                <GS.TableRowBody>
                                    <GS.TableCellBody>نمر افزار هلو</GS.TableCellBody>
                                    <GS.TableCellBody>
                                         421
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                       2
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                      200
                                    </GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>نمر افزار هلو</GS.TableCellBody>
                                    <GS.TableCellBody>
                                         421
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                       2
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                      200
                                    </GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>نمر افزار هلو</GS.TableCellBody>
                                    <GS.TableCellBody>
                                         421
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                       2
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                      200
                                    </GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>نمر افزار هلو</GS.TableCellBody>
                                    <GS.TableCellBody>
                                         421
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                       2
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                      200
                                    </GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>نمر افزار هلو</GS.TableCellBody>
                                    <GS.TableCellBody>
                                         421
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                       2
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                      200
                                    </GS.TableCellBody>
                                </GS.TableRowBody>

                                <GS.TableRowBody>
                                    <GS.TableCellBody>نمر افزار هلو</GS.TableCellBody>
                                    <GS.TableCellBody>
                                         421
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                       2
                                    </GS.TableCellBody>
                                    <GS.TableCellBody>
                                      200
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
