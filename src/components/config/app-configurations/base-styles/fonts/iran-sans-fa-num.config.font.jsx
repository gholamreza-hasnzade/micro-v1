// * Import Tools
import { css } from '@emotion/react';

// * Import Fonts
import IRANSansWebBlackEot from '../../../../../assets/fonts/fa/iran-sans-fa-num/eot/IRANSansWeb(FaNum)_Black.eot';
import IRANSansWebBlackWoff2 from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff2/IRANSansWeb(FaNum)_Black.woff2';
import IRANSansWebBlackWoff from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff/IRANSansWeb(FaNum)_Black.woff';
import IRANSansWebBlackTtf from '../../../../../assets/fonts/fa/iran-sans-fa-num/ttf/IRANSansWeb(FaNum)_Black.ttf';

import IRANSansWebBoldEot from '../../../../../assets/fonts/fa/iran-sans-fa-num/eot/IRANSansWeb(FaNum)_Bold.eot';
import IRANSansWebBoldWoff2 from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff2/IRANSansWeb(FaNum)_Bold.woff2';
import IRANSansWebBoldWoff from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff/IRANSansWeb(FaNum)_Bold.woff';
import IRANSansWebBoldTtf from '../../../../../assets/fonts/fa/iran-sans-fa-num/ttf/IRANSansWeb(FaNum)_Bold.ttf';

import IRANSansWebMediumEot from '../../../../../assets/fonts/fa/iran-sans-fa-num/eot/IRANSansWeb(FaNum)_Medium.eot';
import IRANSansWebMediumWoff2 from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff2/IRANSansWeb(FaNum)_Medium.woff2';
import IRANSansWebMediumWoff from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff/IRANSansWeb(FaNum)_Medium.woff';
import IRANSansWebMediumTtf from '../../../../../assets/fonts/fa/iran-sans-fa-num/ttf/IRANSansWeb(FaNum)_Medium.ttf';

import IRANSansWebLightEot from '../../../../../assets/fonts/fa/iran-sans-fa-num/eot/IRANSansWeb(FaNum)_Light.eot';
import IRANSansWebLightWoff2 from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff2/IRANSansWeb(FaNum)_Light.woff2';
import IRANSansWebLightWoff from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff/IRANSansWeb(FaNum)_Light.woff';
import IRANSansWebLightTtf from '../../../../../assets/fonts/fa/iran-sans-fa-num/ttf/IRANSansWeb(FaNum)_Light.ttf';

import IRANSansWebUltraLightEot from '../../../../../assets/fonts/fa/iran-sans-fa-num/eot/IRANSansWeb(FaNum)_UltraLight.eot';
import IRANSansWebUltraLightWoff2 from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff2/IRANSansWeb(FaNum)_UltraLight.woff2';
import IRANSansWebUltraLightWoff from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff/IRANSansWeb(FaNum)_UltraLight.woff';
import IRANSansWebUltraLightTtf from '../../../../../assets/fonts/fa/iran-sans-fa-num/ttf/IRANSansWeb(FaNum)_UltraLight.ttf';

import IRANSansWebEot from '../../../../../assets/fonts/fa/iran-sans-fa-num/eot/IRANSansWeb(FaNum).eot';
import IRANSansWebWoff2 from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff2/IRANSansWeb(FaNum).woff2';
import IRANSansWebWoff from '../../../../../assets/fonts/fa/iran-sans-fa-num/woff/IRANSansWeb(FaNum).woff';
import IRANSansWebTtf from '../../../../../assets/fonts/fa/iran-sans-fa-num/ttf/IRANSansWeb(FaNum).ttf';


export const IranSansFaNumConfigFonts = css`
    @font-face {
        font-family: IRANSansFaNum;
        font-style: normal;
        font-weight: 900;
        src: url(${ IRANSansWebBlackEot });
        src: url('${ IRANSansWebBlackEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebBlackWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebBlackWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebBlackTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSansFaNum;
        font-style: normal;
        font-weight: bold;
        src: url(${ IRANSansWebBoldEot });
        src: url('${ IRANSansWebBoldEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebBoldWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebBoldWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebBoldTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSansFaNum;
        font-style: normal;
        font-weight: 500;
        src: url(${ IRANSansWebMediumEot });
        src: url('${ IRANSansWebMediumEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebMediumWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebMediumWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebMediumTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSansFaNum;
        font-style: normal;
        font-weight: 300;
        src: url(${ IRANSansWebLightEot });
        src: url('${ IRANSansWebLightEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebLightWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebLightWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebLightTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSansFaNum;
        font-style: normal;
        font-weight: 200;
        src: url(${ IRANSansWebUltraLightEot });
        src: url('${ IRANSansWebUltraLightEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebUltraLightWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebUltraLightWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebUltraLightTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSansFaNum;
        font-style: normal;
        font-weight: normal;
        src: url(${ IRANSansWebEot });
        src: url('${ IRANSansWebEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebTtf }) format('truetype');
    }
`;