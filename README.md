# Smithy Maths Practice

A GCSE Higher maths practice portal that runs on GitHub Pages. Students type or choose answers, earn Puppies 🐶 and track their progress on a dashboard (saved in the browser).

**Live site:** https://smithymathspractice.sklss.co.uk/

## Topics

| Topic | Covers |
|---|---|
| Indices and Surds | index laws, negative and fractional indices, simplifying surds, rationalising denominators, expanding surd brackets |
| Quadratics | expanding, factorising, solving (factorising, formula), completing the square, turning points, discriminant, inequalities, simultaneous with a line, area problems |
| Sequences | linear nth term, term checks, Fibonacci-type, geometric, quadratic nth term, surd sequences |
| Algebraic Fractions | simplifying, adding and subtracting, cancelling factorised quadratics, solving equations with fractions |

## Question bank

**Every test question comes from the worksheets** in `worksheets/` (351 questions, each with its answer, method and full working). There are no generated questions.

| Worksheets | Portal topic | Easy / Moderate / Difficult / Very Difficult |
|---|---|---|
| Indices - 1, Indices - 2, Surds - 1 | Indices and Surds | 28 / 61 / 53 / 38 |
| Quadratics - By factorisation, Completing the square - 1, Probability counters (scan) | Quadratics | 16 / 20 / 32 / 40 |
| Sequences - 1 | Sequences | 11 / 14 / 4 / 4 |
| Algebraic Fractions - 2 | Algebraic Fractions | 4 / 8 / 11 / 7 |

A test is up to 10 different questions from the chosen topic and level, in a different order each set. "Show that" questions are turned into "find the value(s)" questions so they can be marked automatically. Each question shows its worksheet reference (for example "Completing sq Q9b").

Every topic has four levels (Easy, Moderate, Difficult, Very Difficult). Each level has 10 repeatable test sets of 10 questions, plus a Mixed option. Each question has an **Explain** hint and a full **Correction** with working.

## Accounts, Puppies and admin

- **Students** sign in with their name and a 4–8 digit PIN. First time: they choose a PIN and type it again to create the account. Results and Puppies are saved online (Supabase project `smithy-maths-practice`, London) and appear on every device. A result taken offline is kept in the browser and uploaded at the next sign-in.
- **Wrong PINs:** 5 wrong PINs lock that name for 5 minutes.
- **Admin page:** `/admin.html` (https://smithymathspractice.sklss.co.uk/admin.html). Shows every student, their tests and each question/answer. Add a student (with a temporary PIN they must change), set a temporary PIN, delete a student, and **redeem Puppies** for rewards (the student sees their balance on their dashboard).
- **Admin password:** set once with the one-time setup code; 5 wrong passwords lock the admin for 15 minutes.
- **Security:** PINs and the admin password are stored only as bcrypt hashes. The tables cannot be read with the public key; the page can only call the `portal_sync`, `portal_admin`, `portal_admin_setup` and `portal_admin_user` database functions.

## Answering, whiteboard and AI

- **One attempt per question:** students type (or pick) an answer and press **Submit answer**. It is marked once: correct answers earn Puppies (1 / 2 / 4 / 5 by level); wrong answers earn none and the correction with full working appears straight away.
- **Explain** shows the method hint at any time. **✨ Explain with AI** appears once the question is answered: the AI tutor writes a step-by-step explanation, including what probably went wrong with the student's answer.
- **Whiteboard:** a drawing pad on the right of each question for working out (pens, eraser, undo, clear). It can be hidden, and stacks under the question on phones. Drawings are not saved.

### AI backend (free by default)

`supabase/functions/explain-ai` runs as a Supabase Edge Function. The browser never sees an AI key: the function checks the student's name and PIN with the database (`portal_ai_check`), allows **40 explanations per student per 24 hours**, then asks the AI. The student's name is never sent to the AI.

Secrets (Supabase dashboard → Edge Functions → Secrets). Keys are tried in this order; set only the free ones and nothing is ever charged:

| Secret | Cost | Where |
|---|---|---|
| `GEMINI_API_KEY` | Free tier | aistudio.google.com → Get API key |
| `GROQ_API_KEY` | Free tier | console.groq.com → API Keys |
| `ANTHROPIC_API_KEY` | Paid per use (optional backup) | console.anthropic.com |

Optional: `AI_DAILY_LIMIT` (default 40). Opening https://ouagqetmnjlzhiyhhgan.supabase.co/functions/v1/explain-ai in a browser shows which keys are set.

## Answer input

- Surds: `3√5` (or `3sqrt5`); use the on-screen √ button.
- Powers: `x^2` or `x²`; brackets like `(x + 3)(x - 5)`.
- Two answers: `3 or -5`.
- Fractions: `3/4`.

## Files

- `index.html` is the portal (screens, marking, dashboard).
- `worksheets.js` is the worksheet question bank (one line per question, with the worksheet reference).
- `worksheets/` holds the source PDFs.
- To add a worksheet question, copy a `W(...)` or `V(...)` line in `worksheets.js`.

## Turning on GitHub Pages

Settings > Pages > Source: Deploy from a branch > Branch: `main`, folder `/ (root)` > Save.

## Custom domain

The `CNAME` file points GitHub Pages at **smithymathspractice.sklss.co.uk**.

- DNS: a `CNAME` record for `smithymathspractice` (in the `sklss.co.uk` zone) pointing to `stalinnetcode.github.io`.
- GitHub: Settings > Pages > Custom domain = `smithymathspractice.sklss.co.uk`, then tick **Enforce HTTPS** once the certificate is issued.
