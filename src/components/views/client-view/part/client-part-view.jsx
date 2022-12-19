// * import tools
import React, { useState } from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";

//* import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { Tooltip } from "@components/common/partials";
import { DeleteModal } from "@components/common/segment";
import { deleteUser } from "@redux/slices/client/client-redux-action";

export const ClientPartView = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleIsOpenModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <DeleteModal
                isOpen={isOpen}
                onClick={handleIsOpenModal}
                onDelete={() => deleteUser(data?.id)}
                setIsOpen={setIsOpen}
            />
            <GS.TableRowBody>
                <GS.TableCellBody>{index + 1}</GS.TableCellBody>
                <GS.TableCellBody>{data?.first_name}</GS.TableCellBody>
                <GS.TableCellBody> {data?.last_name} </GS.TableCellBody>
                <GS.TableCellBody> {data?.email}</GS.TableCellBody>
                <GS.TableCellBody> {data?.address} </GS.TableCellBody>

                <GS.TableCellBody>
                    <GS.TableCellAction>
                        <Tooltip title={t("details")}>
                            <GS.TableCellLink
                                to={`/client/preview/${data?.id}`}
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
                            <GS.TableCellEdit onClick={handleIsOpenModal}>
                                <I.Trash />
                            </GS.TableCellEdit>
                        </Tooltip>
                    </GS.TableCellAction>
                </GS.TableCellBody>
            </GS.TableRowBody>
        </>
    );
};
