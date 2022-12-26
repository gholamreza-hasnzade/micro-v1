// * Import tools
import React, { useState } from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// * Import components
import { Tooltip } from "@components/common/partials";
import { DeleteModal } from "@components/common/segment";
import { endpoints } from "@components/config/app-configurations/callApi";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { deleteProduct } from "@redux/slices/product/product-redux-action";
import { toastContainer } from "@helpers";
import { notificationTypes } from "@constants/content";

const ProductPartView = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleIsOpenModal = () => {
        setIsOpen(!isOpen);
    };
    const handleEditClick = () => {
        navigate(`/product/edit/${data?.id}`);
    };
    const handleAddToBasket = async (bodyForm) => {
        try {
            const { baseURL9000, v1 } = endpoints;
            const { status } = await axios.post(
                `${baseURL9000}/${v1}/product/add-to-basket`,
                bodyForm
            );
            if (status == 200) {
                toastContainer(notificationTypes.success, t("Add To Basket"));
            }
        } catch (error) {
            toastContainer(notificationTypes.error, t("error in sever"));
        }
    };
    return (
        <>
            <DeleteModal
                isOpen={isOpen}
                handleClose={handleIsOpenModal}
                onDelete={() => deleteProduct(data?.id)}
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
                        <Tooltip
                            title="افزودن به سبد خرید"
                            /*  onClick={() =>
                                dispatch(
                                    addToBasket({
                                        user_id: data?.user_id,
                                        product_id: data?.id,
                                        quantity: 1,
                                    })
                                )
                            } */
                            onClick={() =>
                                handleAddToBasket({
                                    user_id: data?.user_id,
                                    product_id: data?.id,
                                    quantity: 1,
                                })
                            }
                        >
                            <GS.TableCellEdit>
                                <I.PlayCircle />
                            </GS.TableCellEdit>
                        </Tooltip>
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
export default ProductPartView;
