// * Import tools
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// * Import Comonents
import { ProductAddView } from "@components/views";

// * Import Store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getByIdProduct } from "@redux/slices/product/product-redux-action";

 const ProductEditView = () => {
    const data = useAppSelector((state) => state?.product);
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getByIdProduct(id));
        }
    }, [id, dispatch]);

    return (
        <ProductAddView
            id={id}
            productInfo={data?.item}
            editMode
            loading={data?.loading}
        />
    );
};

export default ProductEditView