// * Import tools
import React, { useState } from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// * Import components
import { Tooltip } from "@components/common/partials";
import { DeleteModal } from "@components/common/segment";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";

export const ProductPartView = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleIsOpenModal = () => {
        setIsOpen(!isOpen);
    };
    const handleEditClick = () => {
        navigate(`/product/edit/${data?.id}`);
    };
    return (
        <>
            <DeleteModal
                isOpen={isOpen}
                onClick={handleIsOpenModal}
                //onDelete={() => deleteUser(data?.id)}
                setIsOpen={setIsOpen}
            />
            <GS.TableRowBody>
                <GS.TableCellBody> {index + 1}</GS.TableCellBody>
                <GS.TableCellBody>{data?.name ?? "---"}</GS.TableCellBody>
                <GS.TableCellBody>{data?.code ?? "---"}</GS.TableCellBody>
                <GS.TableCellBody>{data?.total ?? "---"}</GS.TableCellBody>
                <GS.TableCellBody>{data?.price ?? "---"}</GS.TableCellBody>

                <GS.TableCellBody>
                    <GS.TableCellAction>
                        <Tooltip title={t("details")}>
                            <GS.TableCellLink
                                to={`/product/preview/${data?.id}`}
                            >
                                <I.Eye />
                            </GS.TableCellLink>
                        </Tooltip>

                        <Tooltip title={t("edit")}>
                            <GS.TableCellEdit onClick={handleEditClick}>
                                <I.Edit />
                            </GS.TableCellEdit>
                        </Tooltip>

                        <Tooltip title={t("حذف")}>
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