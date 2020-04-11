export const CSS_RESET = `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
   margin: 0;
   padding: 0;
  }
  
  ul {
   list-style: none;
  }
  
  embed,
  iframe,
  img,
  object,
  video {
   display: block;
   max-width: 100%;
  }
  
  table {
   table-layout: fixed;
   width: 100%;
  }
  
  [hidden] {
   display: none;
  }
  
`;

export const CLASS_UTILITY = `
  /*---------- Custom unility class/Taiwin Css: https://tailwindcss.com/docs ------*/
  /*----------Margin, Padding--------------------*/
  .m-p-0 {
    margin: 0;
    padding: 0;
  }
  .m-0 {
    margin: 0;
  }
  .mt-19 {
    margin-top: 19px;
  }
  .mt-32 {
    margin-top: 32px;
  }
  .mt-378 {
    margin-top: 378px;
  }
  .mt-39 {
    margin-top: 39px;
  }
  .mt-24 {
    margin-top: 24px;
  }
  .mb-39 {
    margin-bottom: 39px;
  }
  .mb-41 {
    margin-bottom: 41px;
  }
  .m-24 {
    margin: 24px;
  }
  .ml-16 {
    margin-left: 16px;
  }
  .ml-12 {
    margin-left: 12px;
  }
  .mb-47 {
    margin-bottom: 47px;
  }
  .mb-9 {
    margin-bottom: 9px;
  }
  .p-0 {
    padding: 0;
  }
  .p-20 {
    padding: 20px;
  }
  .p-24 {
    padding: 24px;
  }
  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  /*----------Flex Box------*/
  .flex {
    display: flex;
  }
  .flex-center {
    align-items: center;
    justify-content: center;
  }
  .inline-block	{
    display: inline-block;
  }
  .items-center {
    align-items: center;
  }
  .justify-center	{
    justify-content: center;
  }
  .justify-between	{
    justify-content: space-between;
  }
  .justify-around	{
    justify-content: space-around;
  }
  .justify-end	{
    justify-content: flex-end;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  /*----------Position------*/
  .static {
    position: static;
  }
  .fixed {
    position: fixed;
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .sticky {
    position: sticky;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .block {
    display: block;
  }
  .hidden	{
    display: none;
  }
  /*-------------------List Style Type------------------------*/
  .list-none {
    list-style-type: none;
  }
  /*-------------------Top / Right / Bottom / Left------------*/
  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .inset-y-0 {
    top: 0;
    bottom: 0;
  }
  .inset-x-0 {
    right: 0;
    left: 0;
  }
  .top-0 {
    top: 0;
  }
  .right-0 {
    right: 0;
  }
  .bottom-0 {
    bottom: 0;
  }
  .left-0 {
    left: 0;
  }
  .inset-auto {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
  }
  /*-------------------------text-------------------------------*/
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-transparent {
    color: transparent;
  }
  .text-black {
    color: #000;
  }
  .text-white {
    color: #fff;
  }
  .text-15 {
    font-size: 15px;
  }
  .text-11 {
    font-size: 11px;
  }
  .text-20 {
    font-size: 20px;
  }
  .text-30 {
    font-size: 30px;
  }
  .text-80 {
    font-size: 80px;
  }
  .truncate-250 {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .line-clamp-3 {   
    display: -webkit-box;   
    -webkit-line-clamp: 3;   
    -webkit-box-orient: vertical;     
    overflow: hidden; 
  }
  /*--------------------Border---------------------------------*/
  .rounded-16 {
    border-radius: 16px;
  }
  .rounded-10 {
    border-radius: 10px;
  }
  .rounded-4 {
    border-radius: 4px;
  }
  .border-tr {
    border-top-width: 1px;
    border-right-width: 1px;
    border-style: solid;
  }
  .border-br-solid-gray-550  {
    border-bottom: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
  }
  .border-t-solid-gray-550 {
    border-top: 1px solid #e9e9e9;
  }
  .border-b-solid-gray-550 {
    border-bottom: 1px solid #e9e9e9;
  }
  .border-r-solid-gray-550  {
    border-right: 1px solid #e9e9e9;
  }
  .border-none {
    border: none;
  }
  /*--------------------Line Height----------------------------*/
  .leading-none	{
    line-height: 1;
  }
  .leading-tight	{
    line-height: 1.25;
  }  
  .leading-snug	{
    line-height: 1.375;
  }
  .leading-normal	{
    line-height: 1.5;
  }
  .leading-relaxed	{
    line-height: 1.625;
  }
  .leading-loose	{
    line-height: 2;
  }
  /*-------------------------Width-------------------------------*/
  .w-half {
    width: 50%;
  }
  .w-auto {
    width: auto;
  }
  .h-screen {
    height: 100vh;
  }
  .min-h-500 {
    min-height: 500px;
  }
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  .h-full {
    height: 100%;
  }
  .w-1\\/2 {
     width: 50%; 
  }
  .w-1\\/3 {
     width: 33.333333%; 
  }
  .w-1\\/12 {
    width: 8.333333%;
  }
  .w-10\\/12 {
    width: 83.333333%;
  }
  .w-11\\/12 {
    width: 91.666667%;
  }
  .w-screen {
    width: 100vw;
  }
  .w-400 {
    width: 400px;
  }
  .w-100 {
    width: 100px;
  }
  .w-62 {
    width: 62px;
  }
  .h-22 {
    height: 22px;
  }
  .h-31 {
    height: 31px;
  }
  .h-48 {
    height: 48px;
  }
  .h-405 {
    height: 405px;
  }
  .h-368 {
    height: 368px;
  }
  .h-400 {
    height: 400px;
  }
  /*-------------------------Height-------------------------------*/
  .h-68 {
    height: 68px;
  }
  /*----------------------Background----------------------------*/
  .bg-auto {
    background-size: auto;
  }
  .bg-cover	{
    background-size: cover;
  }
  .bg-contain {
    background-size: contain;
  }
  .bg-gray-200 {
    background: #edf2f7;
  }
  .bg-gray-250 {
    background: #eeeff0;
  }
  .bg-gray-300 {
    background-color: #e2e8f0;
  }
  .bg-gray-650 {
    background: #717791;
  }
  .bg-white {
    background-color: #fff;	
  }
  .opacity-5 {
    opacity: .05;
  }
  .opacity-70 {
    opacity: .7;
  }
  .opacity-75	{
    opacity: .75;
  }
  .opacity-50	{
    opacity: .5;
  }
  .opacity-25	{
    opacity: .25;
  }
  .object-contain {
    object-fit: contain;
  }
  .object-cover {
    object-fit: cover;
  }
  .object-fill {
    object-fit: fill;
  }
  .object-none {
    object-fit: none;
  }
  .object-scale-down {
    object-fit: scale-down;
  }
  .outline-none {
    outline: none;
  }
  .border-none {
    border: none;
  }
  /*-----------------------Box shadow---------------------------*/
  .shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .shadow-2 {
    box-shadow: 0px 0px 20px rgba(33, 33, 33, 0.1);
  } 
  .shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  /*--------------------Oveflow----------------------------------*/
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  /*--------------------Z-index------------------------------------*/
  .z-50 {
    z-index: 50;
  }
`;
