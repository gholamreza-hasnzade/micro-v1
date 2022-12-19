// * import tools
import React from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";

//* import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { Tooltip } from "@components/common/partials";

export const ClientPartView = ({ data, index }) => {
    const { t } = useTranslation();

    return (
        <GS.TableRowBody>
            <GS.TableCellBody>{index + 1}</GS.TableCellBody>
            <GS.TableCellBody>{data?.first_name}</GS.TableCellBody>
            <GS.TableCellBody> {data?.last_name} </GS.TableCellBody>
            <GS.TableCellBody> {data?.email}</GS.TableCellBody>
            <GS.TableCellBody> {data?.address} </GS.TableCellBody>

            <GS.TableCellBody>
                <GS.TableCellAction>
                    <Tooltip title={t("details")}>
                        <GS.TableCellLink to={`/client/preview/${data?.id}`}>
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
    );
};
