export const styles = /* css */ `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    all: initial;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
  }

  /* ── Container ── */

  .sb-container {
    position: fixed;
    inset-inline: 0;
    bottom: 32px;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    animation: sb-enter 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
  }

  @keyframes sb-enter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .sb-wrapper {
    pointer-events: auto;
    position: relative;
  }

  /* ── Main pill ── */

  .sb-pill {
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 9999px;
    padding: 6px 8px;
    transition: background-color 0.4s ease;
  }

  /* ── Buttons ── */

  .sb-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 9999px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.15s ease;
    padding: 0;
    line-height: 0;
  }

  .sb-btn:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .sb-btn:active {
    background: rgba(255, 255, 255, 0.12);
  }

  .sb-btn--settings-active {
    color: rgba(255, 255, 255, 0.85);
  }

  .sb-settings-icon {
    display: inline-flex;
    transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .sb-settings-icon--open {
    transform: rotate(45deg);
  }

  /* ── Counter ── */

  .sb-counter {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.35);
    padding: 0 4px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    user-select: none;
  }

  /* ── Divider ── */

  .sb-divider {
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background: rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  /* ── Variant name ── */

  .sb-variant-name {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .sb-variant-label {
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #ffffff;
    padding: 0 8px;
    white-space: nowrap;
    user-select: none;
    animation: sb-fade-in 0.2s ease-out both;
  }

  @keyframes sb-fade-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ── Copy button ── */

  .sb-copy {
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 9999px;
    padding: 6px 14px;
    border: none;
    background: rgba(255, 255, 255, 0.95);
    color: #1c1c1e;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.01em;
    cursor: pointer;
    line-height: 1;
    white-space: nowrap;
    transition: background-color 0.15s ease;
  }

  .sb-copy:hover {
    background: #ffffff;
  }

  .sb-copy:active {
    background: rgba(255, 255, 255, 0.85);
  }

  .sb-copy svg {
    flex-shrink: 0;
  }

  .sb-copy-inner {
    display: flex;
    align-items: center;
    gap: 6px;
    animation: sb-copy-in 0.15s ease both;
  }

  @keyframes sb-copy-in {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* ── Settings popover ── */

  .sb-popover {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    border-radius: 16px;
    padding: 16px;
    min-width: min(320px, calc(100vw - 48px));
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);
    animation: sb-pop-in 0.22s cubic-bezier(0.23, 1, 0.32, 1) both;
  }

  .sb-popover--exit {
    animation: sb-pop-out 0.18s ease-in both;
  }

  @keyframes sb-pop-in {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(8px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }
  }

  @keyframes sb-pop-out {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(8px) scale(0.96);
    }
  }

  .sb-popover-title {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 12px;
    user-select: none;
  }

  .sb-swatch-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }

  .sb-swatch {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: transform 0.15s ease;
  }

  .sb-swatch:hover {
    transform: scale(1.1);
  }

  .sb-swatch:active {
    transform: scale(0.95);
  }

  .sb-swatch-dot {
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    border: 2px solid rgba(255, 255, 255, 0.12);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .sb-swatch-dot--active {
    border-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.25);
  }

  .sb-placement-block {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sb-placement-label {
    display: block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 8px;
    user-select: none;
  }

  .sb-placement-field {
    width: 100%;
    min-height: 64px;
    resize: vertical;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    line-height: 1.4;
    padding: 8px 10px;
    font-family: inherit;
    outline: none;
  }

  .sb-placement-field::placeholder {
    color: rgba(255, 255, 255, 0.28);
  }

  .sb-placement-field:focus {
    border-color: rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.08);
  }
`
