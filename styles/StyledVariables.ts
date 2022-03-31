import { css } from "styled-components";

const StyledVariables = css`
  :root {
    /* TYPOGRAPHY */
    /* font-sizes */
    --fs-700: 1.625rem;
    --fs-600: 1.375rem;
    --fs-550: 1.125rem;
    --fs-500: 1rem;
    --fs-400: 0.9375rem;
    --fs-350: 0.875rem;
    --fs-300: 0.8125rem;
    --fs-200: 0.6875rem;

    /*line-height*/
    --lh-700: 2.375rem;
    --lh-600: 2.0625rem;
    --lh-500: 1.5rem;
    --lh-400: 1.5625rem;
    --lh-300: 1.25rem;

    /* COLORS */
    --clr-blue-500: 212 100% 50%;
    --clr-white-50: 0 0% 100%;
    --clr-slate-100: 227 100% 98%;
    --clr-slate-200: 222 44% 70%;
    --clr-slate-300: 217 20% 51%;
    --clr-slate-400: 217 35% 45%;
    --clr-slate-450: 227 46% 51%;
    --clr-slate-500: 217 21% 21%;
    --clr-slate-600: 222 41% 20%;
    --clr-slate-800: 220 40% 13%;
    --clr-red-400: 0 91% 62%;

    --clr-accent: hsl(var(--clr-blue-500));
    --clr-error: hsl(var(--clr-red-400));

    /* Text Color */
    --clr-text-accent: hsl(var(--clr-blue-500));
    --clr-text-heading: hsl(var(--clr-slate-800));
    --clr-text-body: hsl(var(--clr-slate-400));

    /* Background Color */
    --clr-bg: hsl(var(--clr-slate-100));
    --clr-card-bg: hsl(var(--clr-white-50));
    --clr-card--shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

    /* Header */
    --clr-dark-mode-toggle: hsl(var(--clr-slate-400));
    --clr-dark-mode-toggle-hover: hsl(var(--clr-slate-800));

    /* Search Bar */
    --clr-search-bar-bg: hsl(var(--clr-white-50));

    /* User Details */
    --clr-user-detail-stats-bg: hsl(var(--clr-slate-100));

    /* Links */
    --clr-user-detail-footer-link-disabled: hsl(var(--clr-slate-400) / 0.5);
  }

  /* ------- Dark mode ------- */
  .dark-mode {
    /* Text Color */
    --clr-text-heading: hsl(var(--clr-white-50));
    --clr-text-body: hsl(var(--clr-white-50));

    /* Background Color */
    --clr-bg: hsl(var(--clr-slate-800));
    --clr-card-bg: hsl(var(--clr-slate-600));
    --clr-card--shadow: none;

    /* Header */
    --clr-dark-mode-toggle: hsl(var(--clr-white-50));
    --clr-dark-mode-toggle-hover: hsl(var(--clr-slate-200));

    /* Search Bar */
    --clr-search-bar-bg: hsl(var(--clr-slate-600));

    /* User Details */
    --clr-user-detail-stats-bg: hsl(var(--clr-slate-800));

    /* Links */
    --clr-user-detail-footer-link-disabled: hsl(var(--clr-white-50) / 0.5);
  }
`;
export default StyledVariables;
