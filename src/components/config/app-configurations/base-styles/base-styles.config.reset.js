// * Import Tools
import { css } from '@emotion/react';

export const BaseStylesConfigReset = css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
`;
