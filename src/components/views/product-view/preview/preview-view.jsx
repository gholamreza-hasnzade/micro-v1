// * import tools
import React from "react";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import { LinkButton } from "@components/common/partials/index";

export const PreviewView = () => {
    return (
        <S.Product>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <LinkButton href={"/product"}>برگشت </LinkButton>
                </GS.FlexCenterEnd>
                <GS.RowPreview>
                    <GS.PreviewList>
                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                نام محصول :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                کد محصول :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                تعداد :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>4</GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                قیمت :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>5000</GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Product>
    );
};
