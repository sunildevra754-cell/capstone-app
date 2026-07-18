# Accessibility Notes: My Components vs shadcn/ui (Base UI)

## Modal / Dialog

### What I implemented
- role="dialog", aria-modal="true", aria-labelledby
- Manual focus trap by querying focusable elements and cycling Tab/Shift+Tab
- Escape to close, focus returns to the trigger element on close

### What shadcn/ui (Base UI) handles that I missed
1. **Body scroll lock** — Base UI's dialog prevents the page behind the 
   modal from scrolling while it's open. My version doesn't lock scroll, 
   so a keyboard or screen reader user can still scroll the background 
   content while the dialog is technically "trapping" focus.
2. **aria-describedby for supporting text** — Base UI wires up a 
   description element (not just a title) via aria-describedby, so 
   screen readers announce both the dialog's purpose and any extra 
   context. My modal only labels the title, not a description.
3. **Portal rendering** — Base UI renders the dialog in a portal at the 
   end of the document body, avoiding z-index and overflow clipping 
   issues from parent containers. My modal renders inline, which can 
   break in nested overflow:hidden containers.

## Tabs

### What I implemented
- role="tablist"/"tab"/"tabpanel", aria-selected, aria-controls
- Arrow key navigation (Left/Right/Home/End), roving tabindex

### What shadcn/ui (Base UI) handles that I missed
1. **Orientation handling** — Base UI's tabs support both horizontal 
   and vertical orientation, switching Arrow key behavior (Left/Right 
   vs Up/Down) automatically based on an orientation prop. My version 
   hardcodes horizontal-only behavior.
2. **data-state attributes** — Base UI exposes data-state="active"/
   "inactive" on tab and panel elements, giving a standard styling hook 
   that doesn't rely on JavaScript-driven className logic like my 
   version does.

## Conclusion
Building these components by hand made the ARIA Authoring Practices 
concrete instead of abstract — I now know exactly what a "correct" 
dialog or tab list requires (focus trap, roving tabindex, correct 
roles). This means when reviewing AI-generated accessible components 
going forward, I know specifically what to check for — scroll lock, 
description wiring, portal rendering, orientation support — rather 
than trusting that generated code "looks right."