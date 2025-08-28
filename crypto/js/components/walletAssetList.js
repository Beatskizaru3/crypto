import { walletAsset } from './walletAsset.js'

export function walletAssetList(userAssets) {
  console.log('array for wallet', userAssets)
  const list = userAssets
    .map((item, index) => walletAsset(item, index))
    .join('')

  return /* html */ `
    <div class="wallet__coins">
        ${list}
    </div>
    `
}
