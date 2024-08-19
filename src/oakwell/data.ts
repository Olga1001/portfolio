export interface Custom {
  [key: string]: string
}

export const dir: string = 'https://conversionratestore.github.io/projects/oakwell/img/'

export const svg: Custom = {
  time: /*html */ `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
    <g clip-path="url(#clip0_2279_2740)">
      <path d="M10.5005 11.9118L11.152 12.7877C11.4675 12.553 11.7655 12.2896 12.0376 12.0049L11.2485 11.2507C11.0187 11.4911 10.767 11.7136 10.5005 11.9118Z" fill="#0C5947"/>
      <path d="M8.72876 12.8116L9.05098 13.8546C9.42687 13.7385 9.79566 13.5891 10.147 13.4106L9.65251 12.4374C9.35633 12.5879 9.04554 12.7138 8.72876 12.8116Z" fill="#0C5947"/>
      <path d="M11.875 10.4736L12.7796 11.0846C13.0003 10.7579 13.1943 10.4104 13.3563 10.0519L12.3614 9.6025C12.2249 9.90481 12.0612 10.1979 11.875 10.4736Z" fill="#0C5947"/>
      <path d="M6.46792 6.63272H3.41138V7.72434H7.55953V2.26625H6.46792V6.63272Z" fill="#0C5947"/>
      <path d="M12.9084 1.44752V3.46908C12.3951 2.64983 11.7154 1.94368 10.9042 1.39333C9.74594 0.607524 8.3912 0.192173 6.98636 0.192173C5.12023 0.192173 3.36582 0.918888 2.04624 2.23842C0.726715 3.558 0 5.3124 0 7.17853C0 9.04466 0.726715 10.7991 2.04624 12.1186C3.36582 13.4382 5.12023 14.1649 6.98636 14.1649C7.29017 14.1649 7.59598 14.1451 7.89529 14.1062L7.75458 13.0237C7.50176 13.0566 7.24333 13.0733 6.98638 13.0733C3.736 13.0733 1.09164 10.4289 1.09164 7.17853C1.09164 3.92815 3.736 1.28379 6.98638 1.28379C9.09614 1.28379 11.0107 2.39657 12.0615 4.17657H10.1793V5.26819H14V1.44752H12.9084Z" fill="#0C5947"/>
      <path d="M12.8604 7.66976C12.8556 7.72797 12.8498 7.78591 12.8433 7.84366L12.8438 7.84369C12.8127 8.11992 12.7624 8.39448 12.6931 8.66195L13.7498 8.93575C13.8484 8.55537 13.9151 8.16312 13.9481 7.76997L13.9473 7.76992C13.9502 7.73656 13.9531 7.70323 13.9554 7.66976H12.8604Z" fill="#0C5947"/>
    </g>
    <defs>
      <clipPath id="clip0_2279_2740">
        <rect width="14" height="14" fill="white" transform="translate(0 0.178528)"/>
      </clipPath>
    </defs>
  </svg>
  `,
  close: `
  <svg class="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="10" fill="white"/>
    <path d="M7 13L13 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 13L7 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  floweret: `
  <svg class="icon-floweret" width="272" height="271" viewBox="0 0 272 271" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2285_1178)">
    <path d="M258.483 166.647C246.408 158.508 232.071 152.049 217.191 153.559C214.724 153.818 212.311 154.247 209.933 154.568C205.214 155.238 200.521 155.122 195.935 153.854C188.57 151.692 180.297 151.683 173.485 155.587C158.391 163.681 147.046 190.421 145.879 206.931C144.481 226.908 153.743 245.928 165.8 261.259C175.034 272.624 186.468 283.184 200.28 288.598C209.719 291.644 219.177 293.333 228.732 295.834C233.683 296.933 238.491 298.113 243.719 297.818C244.912 297.746 246.168 297.487 247.325 297.103C255.482 294.512 263.933 293.458 272.455 292.475C278.911 291.528 287.282 291.144 291.592 285.328C293.391 282.165 294.433 278.618 295.199 275.098C298.841 255.39 294.183 235.261 288.19 216.517C282.455 199.837 273.123 177.118 258.483 166.656L258.483 166.647ZM258.261 166.987C278.564 181.808 288.048 221.672 291.36 245.732C292.518 255.738 293.061 266.102 290.568 275.876C290.149 277.555 289.624 279.226 288.956 280.798C288.306 282.728 287.282 284.184 285.332 285.105C281.351 287.079 276.427 287.606 271.93 288.258C263.265 289.375 254.396 290.635 246.043 293.44C242.997 294.485 239.836 294.03 236.568 293.619C229.426 292.511 222.356 290.644 215.223 289.232C209.39 287.937 203.379 286.99 197.849 284.756C185.783 279.279 175.31 270.569 166.869 260.366C151.374 241.64 142.282 216.911 151.472 193.208C156.316 180.719 163.431 165.718 175.204 158.696C179.157 156.454 183.708 155.435 188.321 155.685C190.28 155.721 193.325 156.293 195.284 156.695C200.173 157.785 205.401 157.66 210.28 156.695C215.062 155.766 219.702 154.604 224.564 154.783C236.746 155.113 248.269 160.215 258.261 166.969L258.261 166.987Z" fill="#B9D1B1" fill-opacity="0.4"/>
    <path d="M121.546 141.866C100.068 165.214 97.084 193.725 109.858 222.334C121.368 248.915 141.447 271.969 166.871 285.947C185.81 296.344 206.468 303.025 227.18 308.813C238.351 311.939 250.021 314.592 261.717 313.878C263.294 313.878 265.53 313.476 267.107 313.333C268.024 313.172 270.207 312.761 271.107 312.582C271.98 312.377 274.144 311.752 275.035 311.529C275.881 311.243 278.055 310.448 278.875 310.162C279.685 309.823 281.761 308.858 282.589 308.492C288.228 305.696 293.288 301.802 298.312 298.05C309.795 289.395 320.957 279.775 328.547 267.36C342.114 245.066 342.159 220.53 335.371 195.976C332.351 184.4 325.955 173.387 316.539 165.812C308.129 159.06 299.301 153.12 291.31 145.957C285.983 141.312 280.95 136.328 276.051 131.192C264.007 117.044 245.13 111.837 228.213 106.254C213.034 101.547 195.128 96.0537 180.385 104.852C172.572 109.345 165.909 115.597 158.622 120.679C152.867 124.859 146.302 127.744 139.808 130.71C133.349 133.702 126.508 136.542 121.546 141.857L121.546 141.866ZM121.867 142.161C126.82 136.98 133.617 134.166 140.066 131.308C146.623 128.521 153.259 125.672 159.29 121.688C168.261 115.981 176.189 108.416 186.175 104.709C202.397 99.4836 221.559 108.514 237.05 113.56C248.524 117.705 260.23 121.983 269.067 130.558C275.231 137.06 281.467 143.563 288.273 149.44C293.716 154.21 299.435 158.64 305.252 162.856C310.989 166.965 316.619 171.002 321.064 176.441C330.035 187.196 333.188 201.576 335.308 215.179C339.183 240.028 331.353 265.064 313.332 282.705C305.813 290.27 297.43 296.987 288.754 303.168C285.948 305.142 282.723 307.018 279.56 308.367C278.233 309.036 276.024 309.724 274.625 310.26C273.77 310.501 271.632 311.082 270.804 311.305C269.957 311.502 267.793 311.877 266.911 312.055C255.473 313.735 243.829 311.734 232.81 308.617C204.108 299.997 174.853 289.842 151.255 270.852C130.187 253.346 111.774 228.202 105.28 201.254C100.211 179.371 106.856 158.551 121.876 142.169L121.867 142.161Z" fill="#B9D1B1" fill-opacity="0.4"/>
    <path d="M31.3688 135.92C27.2468 152.975 30.0243 170.847 36.7547 186.981C43.3725 203.116 50.7066 218.994 60.5527 233.648C65.4154 240.995 70.7289 248.084 76.4127 254.894C78.2885 257.167 80.3012 259.402 82.0723 261.629C89.4146 270.606 94.0921 281.101 97.6022 291.89C104.84 313.71 109.324 338.504 128.187 354.639C137.518 362.642 148.974 368.041 160.937 371.559L165.43 372.82C167.612 373.295 170.091 373.809 172.289 374.262C173.642 374.496 177.764 375.024 179.237 375.236C181.459 375.417 183.987 375.591 186.233 375.742C187.585 375.832 191.764 375.779 193.237 375.825C195.451 375.825 197.987 375.56 200.217 375.515C201.562 375.402 205.7 374.987 207.157 374.851C209.902 374.42 213.654 374.005 216.31 373.454C243.49 368.403 268.938 357.659 294.057 347.096C302.309 343.503 310.689 339.569 318.66 335.447C354.872 316.941 387.019 288.696 402.717 252.365C414.423 225.004 415.727 190.764 406.896 162.496C401.727 145.75 392.992 129.978 382.325 115.753C374.967 106.293 365.386 98.4711 355.13 91.9478C350.041 88.671 344.817 85.6736 339.809 82.495C324.754 72.7025 310.951 58.8643 294.93 50.227C268.209 35.1192 236.55 35.4276 206.328 31.8337C188.117 29.5309 170.212 25.7785 151.832 24.261C139.522 23.287 126.762 23.4908 114.911 27.2659C89.2134 34.8991 74.3436 52.1511 61.2129 73.1782C48.2914 92.6273 36.3924 113.269 31.3527 135.92L31.3688 135.92ZM33.0272 136.252C37.9704 113.715 50.127 93.5635 63.451 74.4692C69.9238 64.8806 76.7267 55.375 85.5181 47.5757C96.8133 37.3529 111.45 30.5427 126.883 27.9832C147.106 25.0839 167.861 27.9605 187.988 30.6333C211.995 34.5518 236.948 37.7675 260.561 43.5056C284.552 48.919 304.273 60.3052 323.088 74.809C327.894 78.3727 332.66 81.9439 337.7 85.3339C352.658 94.8697 368.18 104.156 378.614 118.29C382.889 124.021 386.688 130.28 390.199 136.448C395.665 146.437 400.262 157.045 403.418 167.879C410.672 193.731 410.148 221.825 401.22 247.284C392.574 271.603 375.586 292.796 355.339 309.799C339.35 323.057 320.777 333.257 301.568 341.872C275.371 353.144 248.417 363.82 220.143 369.407C215.884 370.185 211.037 370.887 206.722 371.37C204.218 371.514 200.233 371.982 197.713 371.959C194.195 372.186 189.985 371.982 186.466 371.868C184.341 371.649 181.886 371.506 179.76 371.264C178.255 371.053 174.6 370.502 173.126 370.253C171.041 369.777 168.658 369.309 166.589 368.811C165.188 368.418 161.541 367.323 160.181 366.931C155.318 365.194 150.407 363.375 145.891 360.951C116.457 346.523 110.838 317.908 101.523 290.72C97.7311 279.689 92.5947 268.779 84.8338 259.628C69.0865 242.195 55.4324 223.139 45.8037 202.096C35.4263 180.835 27.5044 159.846 33.0272 136.252Z" fill="#B9D1B1" fill-opacity="0.4"/>
    <g clip-path="url(#clip1_2285_1178)">
    <path d="M226.587 246.307C228.819 213.485 259.296 212.464 253.958 204.217C245.558 192.097 245.576 190.09 228.759 182.758C224.676 181.517 225.117 185.531 226.094 190.073C229.096 209.331 222.426 208.873 224.849 237.849C224.364 224.435 222.279 221.75 224.105 208.415C224.546 200.723 226.475 182.318 218.594 181.394C215.558 180.928 208.862 180.892 206.777 188.259C204.277 197.712 204.623 202.545 205.168 208.389C206.258 219.999 223.542 231.555 222.029 242.883C218.698 225.508 195.826 221.838 204.606 191.472C205.592 187.987 206.492 182.952 203.706 183.709C200.021 184.677 196.206 187.142 193.81 189.087C189.779 192.449 187.495 195.054 183.957 200.494C180.263 206.021 176.759 213.635 177.304 219.242C178.377 230.693 222.366 224.259 222.695 258.04C222.824 251.738 217.444 240.295 207.115 235.27C196.578 229.786 177.348 223.757 177.832 229.372C177.702 230.816 178.87 238.157 185.125 239.882C194.926 242.795 216.596 247.31 220.143 259.087C216.483 253.243 206.717 248.78 190.575 243.781C178.801 239.723 182.313 242.918 185.038 247.874C186.708 250.638 188.412 252.618 189.969 253.806C206.976 267.194 228.897 266.533 247.176 251.676C248.422 250.682 249.192 249.854 249.892 248.93C251.475 246.994 254.097 242.17 255.187 239.248C258.266 229.971 227.349 250.065 224.416 258.357C225.861 253.833 227.444 251.588 231.008 247.742C236.276 242.1 243.525 238.526 249.616 236.361C260.87 231.934 260.68 221.944 258.292 216.047C255.931 210.633 246.519 215.254 243.707 217.745C232.34 225.764 230.584 233.597 226.587 246.307Z" fill="#B9D1B1" fill-opacity="0.4"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2285_1178">
    <rect width="271" height="314" fill="white" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 271.5 0)"/>
    </clipPath>
    <clipPath id="clip1_2285_1178">
    <rect width="82.1469" height="82.3546" fill="white" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 259.504 181.128)"/>
    </clipPath>
    </defs>
  </svg>`
}
