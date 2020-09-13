import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }
    html{
        font-size:16px;
        height:100vh;
        body{
        width:100%;
        height:100%
    }}
`;
