// * import tools
import React from "react";

// * imprort style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { LinkButton, Tooltip } from "@components/common/partials";

export const PreviewClienView = () => {
    return (
        <S.Client>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <Tooltip title="برگشت">
                        <LinkButton href={"/client"}>برگشت </LinkButton>
                    </Tooltip>
                </GS.FlexCenterEnd>

                <GS.RowPreview>
                    <GS.PreviewList>
                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                نام کاربر :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                نام خانوادگی کاربر :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>
                                نرم افزار هلو
                            </GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                شماره موبایل :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>4</GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                ایمیل :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>5000</GS.PreviewListTitle>
                        </GS.PreviewListItem>

                        <GS.PreviewListItem>
                            <GS.PreviewListItemCaption>
                                آدرس :
                            </GS.PreviewListItemCaption>
                            <GS.PreviewListTitle>5000</GS.PreviewListTitle>
                        </GS.PreviewListItem>
                    </GS.PreviewList>
                </GS.RowPreview>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};
