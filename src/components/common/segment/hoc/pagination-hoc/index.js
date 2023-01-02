// * import tools
import React, {  useState } from "react";


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
