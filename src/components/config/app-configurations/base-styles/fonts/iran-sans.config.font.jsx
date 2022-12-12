// * Import Tools
import { css } from '@emotion/react'; 

// * Import Fonts 
import IRANSansWebBlackEot from '../../../../../assets/fonts/fa/iran-sans/eot/IRANSansWeb_Black.eot';
import IRANSansWebBlackWoff2 from '../../../../../assets/fonts/fa/iran-sans/woff2/IRANSansWeb_Black.woff2';
import IRANSansWebBlackWoff from '../../../../../assets/fonts/fa/iran-sans/woff/IRANSansWeb_Black.woff';
import IRANSansWebBlackTtf from '../../../../../assets/fonts/fa/iran-sans/ttf/IRANSansWeb_Black.ttf';

import IRANSansWebBoldEot from '../../../../../assets/fonts/fa/iran-sans/eot/IRANSansWeb_Bold.eot';
import IRANSansWebBoldWoff2 from '../../../../../assets/fonts/fa/iran-sans/woff2/IRANSansWeb_Bold.woff2';
import IRANSansWebBoldWoff from '../../../../../assets/fonts/fa/iran-sans/woff/IRANSansWeb_Bold.woff';
import IRANSansWebBoldTtf from '../../../../../assets/fonts/fa/iran-sans/ttf/IRANSansWeb_Bold.ttf';

import IRANSansWebMediumEot from '../../../../../assets/fonts/fa/iran-sans/eot/IRANSansWeb_Medium.eot';
import IRANSansWebMediumWoff2 from '../../../../../assets/fonts/fa/iran-sans/woff2/IRANSansWeb_Medium.woff2';
import IRANSansWebMediumWoff from '../../../../../assets/fonts/fa/iran-sans/woff/IRANSansWeb_Medium.woff';
import IRANSansWebMediumTtf from '../../../../../assets/fonts/fa/iran-sans/ttf/IRANSansWeb_Medium.ttf';

import IRANSansWebLightEot from '../../../../../assets/fonts/fa/iran-sans/eot/IRANSansWeb_Light.eot';
import IRANSansWebLightWoff2 from '../../../../../assets/fonts/fa/iran-sans/woff2/IRANSansWeb_Light.woff2';
import IRANSansWebLightWoff from '../../../../../assets/fonts/fa/iran-sans/woff/IRANSansWeb_Light.woff';
import IRANSansWebLightTtf from '../../../../../assets/fonts/fa/iran-sans/ttf/IRANSansWeb_Light.ttf';

import IRANSansWebUltraLightEot from '../../../../../assets/fonts/fa/iran-sans/eot/IRANSansWeb_UltraLight.eot';
import IRANSansWebUltraLightWoff2 from '../../../../../assets/fonts/fa/iran-sans/woff2/IRANSansWeb_UltraLight.woff2';
import IRANSansWebUltraLightWoff from '../../../../../assets/fonts/fa/iran-sans/woff/IRANSansWeb_UltraLight.woff';
import IRANSansWebUltraLightTtf from '../../../../../assets/fonts/fa/iran-sans/ttf/IRANSansWeb_UltraLight.ttf';

import IRANSansWebEot from '../../../../../assets/fonts/fa/iran-sans/eot/IRANSansWeb.eot';
import IRANSansWebWoff2 from '../../../../../assets/fonts/fa/iran-sans/woff2/IRANSansWeb.woff2';
import IRANSansWebWoff from '../../../../../assets/fonts/fa/iran-sans/woff/IRANSansWeb.woff';
import IRANSansWebTtf from '../../../../../assets/fonts/fa/iran-sans/ttf/IRANSansWeb.ttf';


export const IranSansConfigFonts = css`
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 900;
        src: url(${ IRANSansWebBlackEot });
        src: url('${ IRANSansWebBlackEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebBlackWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebBlackWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebBlackTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: bold;
        src: url(${ IRANSansWebBoldEot });
        src: url('${ IRANSansWebBoldEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebBoldWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebBoldWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebBoldTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 500;
        src: url(${ IRANSansWebMediumEot });
        src: url('${ IRANSansWebMediumEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebMediumWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebMediumWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebMediumTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 300;
        src: url(${ IRANSansWebLightEot });
        src: url('${ IRANSansWebLightEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebLightWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebLightWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebLightTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 200;
        src: url(${ IRANSansWebUltraLightEot });
        src: url('${ IRANSansWebUltraLightEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebUltraLightWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebUltraLightWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebUltraLightTtf }) format('truetype');
    }
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: normal;
        src: url(${ IRANSansWebEot });
        src: url('${ IRANSansWebEot }?#iefix') format('embedded-opentype'),  /* IE6-8 */
            url(${ IRANSansWebWoff2 }) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
            url(${ IRANSansWebWoff }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url(${ IRANSansWebTtf }) format('truetype');
    }
`;