// * import tools
import React, {  useState } from "react";

// * store

export default function paginationHOC(OriginalComponent) {
    const NewComponent = (props) => {
        const [currentPage, setCurrentPage] = useState(1);

       
        const setCurrentPageNo = (event, pageNumber) => {
            setCurrentPage(Number(pageNumber));
        };
        return (
            <OriginalComponent
                {...props}
                currentPage={currentPage}
                setCurrentPageNo={setCurrentPageNo}
            />
        );
    };

    return NewComponent;
}
