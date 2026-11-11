# Smithy Maths Practice

A GCSE Higher maths practice portal that runs on GitHub Pages. Students type or choose answers, earn Puppies 🐶 and track their progress on a dashboard (saved in the browser).

**Live site:** https://stalinnetcode.github.io/Smithy_Maths_Practice-/

## Topics

| Topic | Covers |
|---|---|
| Indices and Surds | index laws, negative and fractional indices, simplifying surds, rationalising denominators, expanding surd brackets |
| Quadratics | expanding, factorising, solving (factorising, formula), completing the square, turning points, discriminant, inequalities, simultaneous with a line, area problems |
| Sequences | linear nth term, term checks, Fibonacci-type, geometric, quadratic nth term, surd sequences |
| Algebraic Fractions | simplifying, adding and subtracting, cancelling factorised quadratics, solving equations with fractions |

## Question bank

Tests use the **worksheet questions** by default (167 questions with answers and full working), taken from the PDFs in `worksheets/`:

| Worksheet | Portal topic | Easy / Moderate / Difficult / Very Difficult |
|---|---|---|
| Indices - 1 + Surds - 1 | Indices and Surds | 11 / 31 / 30 / 32 |
| Sequences - 1 | Sequences | 11 / 14 / 4 / 4 |
| Algebraic Fractions - 2 | Algebraic Fractions | 4 / 8 / 11 / 7 |
| (none yet) | Quadratics | generated questions only |

"Show that" questions are turned into "find a and b" (or "simplify") questions so they can be marked automatically. Students can switch to **Generated practice** (new numbers every time) or **Both**.

Every topic has four levels (Easy, Moderate, Difficult, Very Difficult). Each level has 10 repeatable test sets of 10 questions, plus a Mixed option. Each question has an **Explain** hint and a full **Correction** with working.

## Answer input

- Surds: `3√5` (or `3sqrt5`); use the on-screen √ button.
- Powers: `x^2` or `x²`; brackets like `(x + 3)(x - 5)`.
- Two answers: `3 or -5`.
- Fractions: `3/4`.

## Files

- `index.html` is the portal (screens, marking, dashboard).
- `worksheets.js` is the worksheet question bank (one line per question, with the worksheet reference).
- `questions.js` is the generated question bank.
- `worksheets/` holds the source PDFs.
- To add a worksheet question, copy a `W(...)` or `V(...)` line in `worksheets.js`.
- `questions.js` (generated): Each template generates fresh numbers; add templates to a level's list to add questions.

## Turning on GitHub Pages

Settings > Pages > Source: Deploy from a branch > Branch: `main`, folder `/ (root)` > Save.
