# Recommendation Cards prototype

Clickable prototype of the **Weekly Recommendations** cards and their **Insight drawer** on the Attribution page of Freshpaint's Insights product. Kyle designed this feature at Freshpaint, and the prototype is a portfolio piece. All data is mock data.

- **Live:** https://kblackman.github.io/recommendation-cards/
- **Repo:** https://github.com/kblackman/recommendation-cards (public)
- **Origin:** exported from Figma Make on 2026-11-11. This repo is now the source of truth; don't sync back from Make, because its history differs.

## Run, build, deploy

```bash
npm install
npm run dev      # local dev server (Vite)
npm run build    # outputs dist/
```

Pushing to `main` deploys automatically: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages in about a minute. Commit and push only when Kyle asks.

- Use **npm**, not pnpm. pnpm 11 blocks the esbuild and Tailwind build scripts.
- `vite.config.ts` sets `base: '/recommendation-cards/'` for Pages. Keep it, or the live site's assets 404.
- Keep the React and Tailwind Vite plugins. Make's comment says they're both required.

## Where things live

- `src/app/App.tsx`: page shell (sidebar, Attribution header, Overview/Journeys tabs) and the top-level state for the drawer and card state.
- `src/app/components/RecommendationsSection.tsx`: the Weekly Recommendations section. Card data is defined here.
- `src/app/components/RecommendationCard.tsx`: a single card.
- `src/app/components/InsightDrawer.tsx`: the drilldown drawer a card opens (largest file).
- `src/app/components/DevUtility.tsx`: floating debug panel. It switches page state (`cards | promo | events | waiting | empty | error`) and other variants for demos.
- Other components: `ManageConversionsDrawer`, `JourneysView`, `ShareModal`, `AiConsentModalWrapper`, `CategoryBadge`, `DataChip`, `Note`, `AlertInline`, `Button`, `CardStatePlaceholders`.
- `src/imports/`: Figma-generated components and PNGs pasted in from Figma. Treat these as generated output: prefer wrapping or replacing them over hand-editing them. Several are old variants (for example `InsightDrawer-1…4`) and may be unused.
- `src/app/components/ui/`: stock shadcn/ui components, mostly unused.
- `src/styles/tokens.ts`: design-system color tokens from Figma variables. Use these instead of new hex values.

## Conventions (from `src/app/conventions.ts`)

- Icons come only from `lucide-react`. No new inline SVGs, other icon libraries or emoji. Some older files still use inline SVGs.
- Metric values in the drawer's Supporting Data use the default dark text (`#1e2125`), never sentiment red or green.

## Related

The design exploration for the drawer is the Claude design canvas "Supporting Data Drawer: Conversion Events" (https://claude.ai/artifact/Mk6ASbycoxK15iyVWQegm3). It holds options A–E, card hover states, header cadence options and Details tab treatments F and G.
