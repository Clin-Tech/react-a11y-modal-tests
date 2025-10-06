# Accessible Modal (React + Tailwind) — with Tests

A tiny, production-style component with tests and docs. Use this repo as a public example of testing + documentation.

## Why
Shows an a11y-first component with **behavior tests** (Vitest + React Testing Library).

## Run
```bash
npm i
npm run dev    # open http://localhost:5173
npm run test   # run component tests
npm run coverage
```

## Accessibility
- `role="dialog"`, `aria-modal`, labelled via `aria-labelledby`.
- Escape key and backdrop click close the dialog.

## Tech
- React + Vite + Tailwind
- Vitest + RTL + jsdom

## Next
- Add focus trap and portal for advanced a11y.
- Add Playwright e2e smoke if needed.
