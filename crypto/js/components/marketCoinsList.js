import { marketCoinsAsset } from './marketCoinsAsset.js'

export function marketCoinsList(coinsList) {
  const list = coinsList
    .map((item, index) => marketCoinsAsset(item, index))
    .join('')

  return /* html */ `
    <div class="market__coins">
        ${list}
    </div>
    `
}
