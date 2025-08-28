export function balance(total) {
  return /* html */ `
    <div class="home__balance">
        <p class="home__balance-title">My balance</p>
        <span class="home__balance-total"><span>$</span><span>${total}</span></span>
        <p class="home__balance-title">Monthly profit</p>
        <div class="home__balance-profit">
            <div class="home__balance-profit-left">
                <span class="home__balance-profit-left--sign">+</span>
                <span class="home__balance-profit-left--total"><span>$</span><span>1,264</span></span>
            </div>
            <div class="home__balance-profit-right">
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 0.5L10.2631 8H0.73686L5.5 0.5Z" fill="currentColor"/>
                </svg>
                <div class="home__balance-profit-right--pnl">
                <span class="home__balance-profit-right--pnl-sign">+</span>
                <span class="home__balance-profit-right--pnl-percent">28</span><span>%</span></div>
            </div>
        </div>
    </div>
    <div class="home__manageButtons">
        <div class="home__manageButtons-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.20258 8.70024H20.7974M2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875C3.55805 6.13983 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84875C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43056 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513Z" stroke="white" stroke-width="1.5"/>
                <path d="M7 12L11 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <p class="home__manageButtons-btn--text">Deposit</p>
        </div>
        <div class="home__manageButtons-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.88539 8.84875C3.55805 6.13983 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84875C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43056 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875Z" stroke="white" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 7C12.3826 7 12.6926 7.29199 12.6926 7.65217V8.18573H12.7692C14.0567 8.18573 15 9.24015 15 10.4189C15 10.7791 14.69 11.0711 14.3077 11.0711C13.9253 11.0711 13.6154 10.7791 13.6154 10.4189C13.6154 9.85137 13.1811 9.49008 12.7692 9.49008H12.6926V11.5432L13.6273 11.8634C14.4767 12.1544 15 12.9457 15 13.7838C15 14.8506 14.1451 15.8142 12.9666 15.8142H12.6926V16.3478C12.6926 16.708 12.3826 17 12.0002 17C11.6179 17 11.3079 16.708 11.3079 16.3478V15.8142H11.2308C9.94328 15.8142 9 14.7598 9 13.581C9 13.2208 9.30996 12.9288 9.69231 12.9288C10.0747 12.9288 10.3846 13.2208 10.3846 13.581C10.3846 14.1486 10.8189 14.5098 11.2308 14.5098H11.3079V12.4568L10.3727 12.1365C9.5233 11.8455 9 11.0542 9 10.2161C9 9.14934 9.85491 8.18573 11.0334 8.18573H11.3079V7.65217C11.3079 7.29199 11.6179 7 12.0002 7ZM11.3079 9.49008H11.0334C10.7306 9.49008 10.3846 9.76055 10.3846 10.2161C10.3846 10.5645 10.6001 10.8265 10.8459 10.9107L11.3079 11.0689V9.49008ZM12.6926 12.9312V14.5098H12.9666C13.2694 14.5098 13.6154 14.2394 13.6154 13.7838C13.6154 13.4355 13.3999 13.1735 13.1541 13.0893L12.6926 12.9312Z" fill="currentColor"/>
            </svg>
            <p class="home__manageButtons-btn--text">Withdraw</p>
        </div>
        <div class="home__manageButtons-btn">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.35853 9.01594L1.14654 13.046C0.380553 15.593 2.86709 17.8673 5.112 16.6729L14.431 11.715C16.5212 10.6029 16.5235 7.4241 14.4348 6.30862L5.11093 1.32915C2.86721 0.13088 0.377132 2.40233 1.14065 4.95083L2.35853 9.01594ZM2.35853 9.01594H5.32953" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <p class="home__manageButtons-btn--text">Transfer</p>
        </div>
        <div class="home__manageButtons-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.42056 8.71942C3.11133 6.07055 5.22187 4.04402 7.87215 3.48483L8.37858 3.37798C10.7672 2.87401 13.2328 2.87401 15.6214 3.37798L16.1278 3.48483C18.7781 4.04402 20.8887 6.07055 21.5794 8.71943C22.1402 10.8697 22.1402 13.1303 21.5794 15.2806C20.8887 17.9295 18.7781 19.956 16.1278 20.5152L15.6214 20.622C13.2328 21.126 10.7672 21.126 8.37858 20.622L7.87215 20.5152C5.22187 19.956 3.11133 17.9295 2.42056 15.2806C1.85981 13.1303 1.85981 10.8697 2.42056 8.71942Z" stroke="white" stroke-width="1.5"/>
                <path d="M6 12H8L10 15L14 9L16 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="home__manageButtons-btn--text">Exchange</p>
        </div>
    </div>
    `
}
