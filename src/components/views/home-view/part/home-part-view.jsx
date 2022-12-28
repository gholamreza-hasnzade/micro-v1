// * Imort tools
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as I from "react-feather";

// * Import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * Import components
import { Tooltip } from "@components/common/partials";
import { DeleteModal } from "@components/common/segment";

// * Import Store
import { deleteOrder } from "@redux/slices/order/order-redux-action";

export const HomePartView = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const handleIsOpenModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <DeleteModal
                isOpen={isOpen}
                handleClose={handleIsOpenModal}
                onDelete={() => deleteOrder(item?.id)}
                setIsOpen={setIsOpen}
            />
            <GS.TableRowBody>
                <GS.TableCellBody>{item?.id}</GS.TableCellBody>
                <GS.TableCellBody>حسن زاده</GS.TableCellBody>
                <GS.TableCellBody> 09369780985</GS.TableCellBody>
                <GS.TableCellBody> index@gmail.com</GS.TableCellBody>
                <GS.TableCellBody> {item?.quantity}</GS.TableCellBody>
                <GS.TableCellBody>
                    <GS.TableCellAction>
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