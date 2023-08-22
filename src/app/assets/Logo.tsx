import React from "react";

type LogoType = {
  color: string
}

const Logo = ({color}: LogoType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="160"
      fill="none"
      viewBox="0 0 70 160"
    >
      <g fill={color}>
        <path d="M46.505 121.69v15.404l-35.344 2.143H4.783v1.608h6.378l35.345 2.143v15.405L0 160v-8.037l35.344-1.072h5.98v-1.607h-5.98L0 147.141v-14.199l35.344-2.144h5.98v-1.607h-5.98L0 128.119v-8.037l46.505 1.608zM0 114.034V84.431h8.371v20.762h10.63V85.234h8.37v19.959h10.764V83.627h8.37v30.407H0zM38.135 75.435v-4.42H8.37v4.42H0V54.874c0-2.233.31-4.197.93-5.894.62-1.741 1.462-3.193 2.525-4.354a9.728 9.728 0 013.853-2.679c1.462-.625 3.056-.937 4.783-.937h.798c2.657 0 4.783.759 6.378 2.277 1.594 1.473 2.701 3.349 3.321 5.626h1.196c.62-2.277 1.75-4.153 3.389-5.626 1.594-1.518 3.72-2.277 6.377-2.277h.798c1.727 0 3.344.312 4.85.937 1.461.58 2.745 1.474 3.853 2.68 1.063 1.16 1.904 2.611 2.524 4.353.62 1.697.93 3.661.93 5.894v20.561h-8.37zm0-13.26v-6.43c0-1.876-.4-3.394-1.196-4.555-.798-1.16-2.126-1.741-3.987-1.741h-.398c-1.86 0-3.19.58-3.986 1.741-.798 1.161-1.196 2.68-1.196 4.555v6.43h10.763zm-19.134 0v-6.43c0-1.876-.377-3.394-1.13-4.555-.797-1.16-2.126-1.741-3.986-1.741h-.398c-1.86 0-3.167.58-3.92 1.741-.797 1.161-1.196 2.68-1.196 4.555v6.43h10.63zM38.135 34.426v-4.42H8.37v4.42H0V13.864c0-2.232.31-4.197.93-5.894.62-1.741 1.462-3.192 2.525-4.353A9.727 9.727 0 017.308.937C8.77.314 10.364 0 12.091 0h.798c2.657 0 4.783.759 6.378 2.277 1.594 1.474 2.701 3.349 3.321 5.626h1.196c.62-2.277 1.75-4.152 3.389-5.626C28.767.76 30.892 0 33.55 0h.798c1.727 0 3.344.313 4.85.938 1.461.58 2.745 1.473 3.853 2.679 1.063 1.16 1.904 2.612 2.524 4.353.62 1.697.93 3.662.93 5.894v20.562h-8.37zm0-13.262v-6.43c0-1.875-.4-3.393-1.196-4.554-.798-1.16-2.126-1.741-3.987-1.741h-.398c-1.86 0-3.19.58-3.986 1.741-.798 1.161-1.196 2.68-1.196 4.555v6.43h10.763zm-19.134 0v-6.43c0-1.875-.377-3.393-1.13-4.554-.797-1.16-2.126-1.741-3.986-1.741h-.398c-1.86 0-3.167.58-3.92 1.741-.797 1.161-1.196 2.68-1.196 4.555v6.43h10.63zM61.156 152.334c-.392 0-.737.081-1.036.244-.3.151-.547.36-.743.627a2.982 2.982 0 00-.45.923 3.826 3.826 0 00-.155 1.097c0 .336.046.656.138.957.081.302.202.575.363.819.161.232.363.418.605.557.23.139.5.209.812.209h.103c.334 0 .622-.07.864-.209.23-.139.432-.342.605-.609.16-.279.299-.622.414-1.028.104-.406.196-.882.276-1.428.196-1.277.57-2.217 1.123-2.821.541-.603 1.273-.905 2.194-.905h.207c.518 0 .996.093 1.434.278.426.174.794.441 1.105.801.311.349.553.784.726 1.306.173.523.259 1.126.259 1.811 0 .778-.11 1.469-.328 2.073a4.448 4.448 0 01-.933 1.497c-.403.395-.87.697-1.4.906a4.85 4.85 0 01-1.761.313h-.518v-1.463h.414c1.06 0 1.854-.29 2.384-.87.53-.592.795-1.411.795-2.456 0-.905-.196-1.584-.588-2.037-.403-.464-.932-.697-1.589-.697h-.103c-.634 0-1.117.238-1.451.714-.334.465-.576 1.225-.726 2.282a9.43 9.43 0 01-.363 1.671 4.58 4.58 0 01-.656 1.254 2.846 2.846 0 01-.985.801c-.38.186-.829.279-1.347.279h-.207c-.472 0-.904-.099-1.296-.296a3.153 3.153 0 01-1.019-.819 3.79 3.79 0 01-.656-1.271 5.299 5.299 0 01-.242-1.637c0-.685.098-1.294.294-1.828.195-.546.46-1.004.794-1.376.323-.371.708-.65 1.157-.836a3.33 3.33 0 011.382-.296h.726v1.463h-.622zM64.783 146.93h4.975v1.463H57.667v-4.353c0-.627.092-1.173.276-1.637.173-.465.409-.848.708-1.15.3-.313.651-.545 1.054-.696a3.203 3.203 0 011.244-.244h.518c.438 0 .858.081 1.26.244.404.151.76.383 1.072.696.3.314.541.703.725 1.167.173.465.26 1.004.26 1.62v2.89zm-1.347 0v-2.716c0-1.625-.69-2.438-2.073-2.438h-.31c-.611 0-1.1.203-1.469.609-.38.395-.57 1.005-.57 1.829v2.716h4.422zM66.753 131.27v5.224l3.005.888v1.568l-12.091-3.692v-2.752l12.091-3.691v1.567l-3.005.888zm-8.464 2.717l7.116 2.107v-4.423l-7.116 2.107v.209zM68.653 123.15c0-.499-.08-.923-.242-1.271a2.448 2.448 0 00-.674-.871c-.288-.232-.61-.4-.967-.505a3.832 3.832 0 00-1.157-.174h-.208v-1.463h.207c.61 0 1.187.093 1.728.279.53.186.996.458 1.399.818.392.36.703.807.933 1.341.219.534.328 1.149.328 1.846 0 1.347-.42 2.397-1.261 3.152-.84.754-2.067 1.132-3.68 1.132h-2.694c-1.566 0-2.78-.378-3.645-1.132-.863-.755-1.295-1.805-1.295-3.152 0-.697.115-1.312.345-1.846.22-.534.53-.981.933-1.341.392-.36.858-.632 1.4-.818.529-.186 1.1-.279 1.71-.279h.207v1.463h-.208a4.207 4.207 0 00-1.14.191c-.368.105-.69.273-.967.505a2.24 2.24 0 00-.674.854c-.172.348-.259.772-.259 1.271 0 .94.34 1.648 1.02 2.124.679.465 1.571.697 2.677.697h2.487c1.186 0 2.102-.232 2.747-.697.633-.476.95-1.184.95-2.124zM57.667 116.249v-7.384h1.347v5.921h4.008v-5.816h1.347v5.816h4.042v-6.025h1.347v7.488H57.667zM57.667 95.516v-8.568h1.347v3.553h10.744v1.462H59.014v3.553h-1.347zM57.667 84.261v-7.383h1.347v5.92h4.008v-5.816h1.347v5.816h4.042v-6.025h1.347v7.488H57.667zM57.667 73.72v-1.462H68.41v-6.374h1.347v7.837H57.667zM57.667 62.936v-7.383h1.347v5.92h4.008v-5.816h1.347v5.816h4.042v-6.025h1.347v7.488H57.667zM61.156 45.709c-.392 0-.737.08-1.036.243-.3.151-.547.36-.743.627a2.989 2.989 0 00-.45.923 3.828 3.828 0 00-.155 1.097c0 .337.046.656.138.958.081.302.202.575.363.819.161.232.363.417.605.557.23.139.5.209.812.209h.103c.334 0 .622-.07.864-.21.23-.139.432-.342.605-.609.16-.278.299-.62.414-1.027.104-.407.196-.883.276-1.428.196-1.277.57-2.218 1.123-2.821.541-.604 1.273-.906 2.194-.906h.207c.518 0 .996.093 1.434.279a2.89 2.89 0 011.105.801c.311.348.553.784.726 1.306.173.523.259 1.126.259 1.811 0 .778-.11 1.469-.328 2.072a4.453 4.453 0 01-.933 1.498c-.403.395-.87.696-1.4.905a4.85 4.85 0 01-1.761.314h-.518v-1.463h.414c1.06 0 1.854-.29 2.384-.87.53-.593.795-1.411.795-2.456 0-.906-.196-1.585-.588-2.037-.403-.465-.932-.697-1.589-.697h-.103c-.634 0-1.117.238-1.451.714-.334.464-.576 1.225-.726 2.281a9.437 9.437 0 01-.363 1.672 4.588 4.588 0 01-.656 1.254 2.84 2.84 0 01-.985.8c-.38.187-.829.28-1.347.28h-.207c-.472 0-.904-.1-1.296-.297a3.154 3.154 0 01-1.019-.818 3.795 3.795 0 01-.656-1.271 5.298 5.298 0 01-.242-1.637c0-.685.098-1.295.294-1.829a4.1 4.1 0 01.794-1.375c.323-.372.708-.65 1.157-.836a3.323 3.323 0 011.382-.296h.726v1.463h-.622zM68.653 37.85c0-.5-.08-.923-.242-1.272a2.443 2.443 0 00-.674-.87c-.288-.232-.61-.4-.967-.505a3.829 3.829 0 00-1.157-.174h-.208v-1.463h.207c.61 0 1.187.093 1.728.278.53.186.996.46 1.399.819.392.36.703.807.933 1.34.219.535.328 1.15.328 1.847 0 1.346-.42 2.397-1.261 3.152-.84.754-2.067 1.131-3.68 1.131h-2.694c-1.566 0-2.78-.377-3.645-1.131-.863-.755-1.295-1.806-1.295-3.152 0-.697.115-1.312.345-1.846.22-.534.53-.981.933-1.341.392-.36.858-.633 1.4-.819.529-.185 1.1-.278 1.71-.278h.207v1.463h-.208a4.193 4.193 0 00-1.14.191c-.368.105-.69.273-.967.505a2.24 2.24 0 00-.674.853c-.172.349-.259.772-.259 1.272 0 .94.34 1.648 1.02 2.124.679.465 1.571.697 2.677.697h2.487c1.186 0 2.102-.233 2.747-.697.633-.476.95-1.184.95-2.124zM62.365 31.54c-1.566 0-2.78-.377-3.645-1.131-.863-.755-1.295-1.805-1.295-3.152 0-1.347.432-2.398 1.295-3.152.864-.755 2.079-1.132 3.645-1.132h2.695c1.612 0 2.838.377 3.679 1.132.84.755 1.261 1.805 1.261 3.152 0 1.346-.42 2.397-1.261 3.152-.84.754-2.067 1.132-3.68 1.132h-2.694zm6.288-4.283c0-.94-.317-1.643-.95-2.107-.645-.476-1.56-.714-2.747-.714H62.47c-1.106 0-1.998.238-2.678.714-.679.464-1.019 1.166-1.019 2.107 0 .94.34 1.648 1.02 2.124.679.465 1.571.697 2.677.697h2.487c1.186 0 2.102-.232 2.747-.697.633-.476.95-1.184.95-2.124zM64.783 18.98h4.975v1.463H57.667v-4.354c0-.627.092-1.172.276-1.637.173-.464.409-.847.708-1.149.3-.313.651-.546 1.054-.697a3.212 3.212 0 011.244-.243h.518c.438 0 .858.081 1.26.244.404.15.76.383 1.072.696.3.313.541.702.725 1.167.173.464.26 1.004.26 1.62v2.89zm-1.347 0v-2.717c0-1.625-.69-2.438-2.073-2.438h-.31c-.611 0-1.1.204-1.469.61-.38.395-.57 1.004-.57 1.828v2.717h4.422zM57.667 9.623V2.24h1.347v5.92h4.008V2.345h1.347v5.817h4.042V2.136h1.347v7.487H57.667z"></path>
      </g>
    </svg>
  );
}

export default Logo;