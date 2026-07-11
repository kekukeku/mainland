# 第一次去大陸旅遊：臺灣人的一頁式生存聖經

Mobile-first、可快速掃讀的一頁式繁體中文網站，協助第一次前往中國大陸自由行的臺灣旅客完成行前準備：證件、網路、支付、住宿、交通與緊急備援。

## 技術棧

- Vite + React + TypeScript
- 全域 CSS（`src/styles/tokens.css` 設計 token、`src/styles/global.css`）
- 無後端、無帳號、無追蹤 cookie；Checklist 狀態存於 `localStorage`
- 靜態部署（GitHub Pages）

## 開發

```bash
npm install
npm run dev        # 本機開發
npm run build      # 型別檢查 + 打包（輸出 dist/）
npm run preview    # 預覽打包結果
npm run lint       # ESLint
npm run typecheck  # tsc 型別檢查
```

## 專案結構

```text
src/
  components/   # 各區塊 UI 元件
  content/      # 內容資料層（guide.ts / sources.ts）
  styles/       # tokens.css / global.css
  hooks.ts      # localStorage、scroll progress、scroll spy、in-view
  App.tsx
  main.tsx
public/
  favicon.svg
  og-image.png  # 由 og-image.svg 產生，正式上線可替換為手繪版本
```

## 內容維護

- 所有政策、費率、聯絡資訊集中於 `src/content/guide.ts` 與 `src/content/sources.ts`，勿散落於 JSX。
- 每次更新時效資訊，請同步更新 `sources.ts` 內的 `LAST_CHECKED` 與各來源 `checkedAt`。
- 涉及入境、金流、電信、行動電源、交通與緊急聯絡的內容，上線前務必以官方來源二次查核。

## 部署（GitHub Pages）

`vite.config.ts` 的 `base` 設為 `/mainland/`（專案站台）。若改為自訂網域或根目錄部署，請改為 `/`。
`.github/workflows/deploy.yml` 會在 push 到預設分支時自動打包並發佈到 GitHub Pages。

## 免責聲明

本站內容為旅遊資訊整理，不構成法律、金融或入境保證。實際規定以主管機關與各服務商最新公告為準。
