// * Imort tools
import React from "react";

// * Import style
import { GlobalStyle as GS } from "@global/emotion/global-style";

export const HomePartView = ({ item }) => {
    console.log(item?.user_id);
    return (
        <GS.TableRowBody>
            <GS.TableCellBody>{item?.user_id}</GS.TableCellBody>
            <GS.TableCellBody>حسن زاده</GS.TableCellBody>
            <GS.TableCellBody> 09369780985</GS.TableCellBody>
            <GS.TableCellBody> index@gmail.com</GS.TableCellBody>
            <GS.TableCellBody> تهرون</GS.TableCellBody>
        </GS.TableRowBody>
    );
};
