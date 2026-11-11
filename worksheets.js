/* Smithy Maths Practice - WORKSHEET question bank (loaded after questions.js).
   Questions transcribed from the Prasad's Tutorials worksheets: Indices - 1, Indices - 2, Surds - 1, Sequences - 1, Algebraic Fractions - 2,
   Quadratics - By factorisation, Completing the square - 1, and the scanned probability (counters) exam questions.
   EVERY test question comes from this file.
   "Show that" questions are turned into "find the value" questions so they can be marked automatically.
   W(level, ref, question, answer, method, working, options) adds one fixed question to BANK['Maths'][topic][level].
   Answers: a number, an array of numbers (any order), or a string (expression or "a,b" pair). */
(()=>{
const F=(n,d)=>`<span class=fr><span>${n}</span><span>${d}</span></span>`;
const S=(b,n)=>`${b}<sup>${n}</sup>`;
const m=n=>n<0?`−${-n}`:`${n}`;
const PAIR='Type the values in order separated by a comma, for example 4, -7.';
const SURD='Use the √ button (or type sqrt). For example 3√5.';
const ALG='Type it with / and brackets, for example (2x + 1)/(x - 3).';
let T='';const L={};
const topic=t=>{T=t;BANK['Maths'][t]=BANK['Maths'][t]||[[],[],[],[]]};
['Indices and Surds','Quadratics','Sequences','Algebraic Fractions'].forEach(topic);
const W=(lv,ref,q,a,m,w,o={})=>{const f=()=>Q(q,a,m,w,{ref,...o,...(o.c?{c:shuf(o.c.slice())}:{})});f.pdf=1;f.ref=ref;BANK['Maths'][T][lv].push(f)};
/* value questions: answer is a number, display string d */
const V=(lv,ref,q,a,d,m,w,o={})=>W(lv,ref,q,a,m,w,{d,...o});

/* ===================== INDICES - 1 ===================== */
topic('Indices and Surds');
const IX='Indices 1';
V(0,`${IX} Q1a`,`Evaluate ${S(4,'−2')}`,1/16,'1/16','A negative index means one over: a<sup>−n</sup> = 1/a<sup>n</sup>.',`${S(4,'−2')} = 1/${S(4,2)} = 1/16.`);
V(0,`${IX} Q1b`,`Evaluate ${S(49,'1/2')}`,7,'7','A power of ½ means square root.','√49 = 7.');
V(0,`${IX} Q1c`,`Evaluate ${S(9,'−1')}`,1/9,'1/9','A power of −1 means the reciprocal (one over).','9<sup>−1</sup> = 1/9.');
V(1,`${IX} Q1d`,`Evaluate ${S(25,'3/2')}`,125,'125','The denominator is the root, the numerator is the power. Root first.','√25 = 5, then 5³ = 125.');
V(0,`${IX} Q1e`,`Evaluate (${F(1,5)})<sup>−1</sup>`,5,'5','A power of −1 flips the fraction.','(1/5)<sup>−1</sup> = 5/1 = 5.');
V(0,`${IX} Q1f`,`Evaluate (${F(1,7)})<sup>0</sup>`,1,'1','Anything (except 0) to the power 0 is 1.','(1/7)<sup>0</sup> = 1.');
V(1,`${IX} Q1g`,`Evaluate (${F(49,81)})<sup>1/2</sup>`,7/9,'7/9','Square root the top and the bottom separately.','√49 / √81 = 7/9.');
V(1,`${IX} Q1h`,`Evaluate (${F(125,8)})<sup>−1/3</sup>`,2/5,'2/5','Flip the fraction for the negative, then cube root the top and the bottom.','(8/125)<sup>1/3</sup> = ∛8 / ∛125 = 2/5.');
W(1,`${IX} Q2a`,`Write ${S(8,3)} × ${S(16,2)} as a power of 2.`,'2^17','Write 8 = 2³ and 16 = 2⁴, then use the index laws.',`(2³)³ × (2⁴)² = 2⁹ × 2⁸ = ${S(2,17)}.`,{d:'2^17',alt:['17'],h:'Type it like 2^9.'});
W(1,`${IX} Q2b`,`Write ${F(`16 × ${S(32,2)}`,S(8,3))} as a power of 2.`,'2^5','Write every number as a power of 2, add indices when multiplying and subtract when dividing.',`2⁴ × (2⁵)² ÷ (2³)³ = 2⁴ × 2¹⁰ ÷ 2⁹ = ${S(2,5)}.`,{d:'2^5',alt:['5'],h:'Type it like 2^9.'});
W(2,`${IX} Q2c`,`Write 16√2 as a power of 2.`,'2^(9/2)','16 = 2⁴ and √2 = 2<sup>1/2</sup>. Add the indices.',`2⁴ × 2<sup>1/2</sup> = ${S(2,'9/2')}.`,{d:'2^(9/2)',alt:['2^4.5','2^9/2','9/2','4.5'],h:'Type it like 2^(7/2).'});
const AH='Type powers with ^, for example 8a^6 or 25a^2b^4.';
W(0,`${IX} Q3a`,`Simplify (2${S('a',2)})<sup>3</sup>`,'8a^6','Cube the number and multiply the index of a by 3.','2³ = 8 and a<sup>2×3</sup> = a⁶, so 8a⁶.',{h:AH});
W(0,`${IX} Q3b`,`Simplify (5a${S('b',2)})<sup>2</sup>`,'25a^2b^4','Square every part inside the bracket.','5² = 25, a² and (b²)² = b⁴, so 25a²b⁴.',{h:AH});
W(1,`${IX} Q3c`,`Simplify √(64${S('a',4)})`,'8a^2','Square root the number and halve the index.','√64 = 8 and √(a⁴) = a², so 8a².',{h:AH});
W(1,`${IX} Q3d`,`Simplify √(25${S('a',2)}${S('b',6)})`,'5ab^3','Square root the number and halve each index.','√25 = 5, √(a²) = a, √(b⁶) = b³, so 5ab³.',{h:AH});
W(0,`${IX} Q3e`,`Simplify (2${S('a',3)})<sup>5</sup>`,'32a^15','Raise the number to the power 5 and multiply the index by 5.','2⁵ = 32 and a<sup>15</sup>, so 32a¹⁵.',{h:AH});
W(1,`${IX} Q3f`,`Simplify (3${S('m',2)}${S('n',4)})<sup>4</sup>`,'81m^8n^16','Raise the number to the power 4 and multiply each index by 4.','3⁴ = 81, m⁸ and n¹⁶, so 81m⁸n¹⁶.',{h:AH});
W(1,`${IX} Q4`,`There are estimated to be ${S(10,12)} bacteria in a dish. After an antibiotic is added, the number is reduced to one millionth of the original. How many bacteria are left?`,'10^6','One millionth = 10<sup>−6</sup>. Multiply and add the indices.',`${S(10,12)} × ${S(10,'−6')} = ${S(10,6)} = 1 000 000.`,{d:'10^6 (1 000 000)',alt:['1000000','1,000,000','1 000 000'],h:'You can type 10^6 or the full number.'});
W(2,`${IX} Q5a`,`Simplify ${F(`12${S('a',14)}${S('b',8)}`,`(3${S('a',4)}${S('b',3)}) × (2${S('a',2)}${S('b',3)})`)}`,'2a^8b^2','Simplify the bottom first (multiply numbers, add indices), then divide (divide numbers, subtract indices).','Bottom: 6a⁶b⁶. Then 12 ÷ 6 = 2, a<sup>14−6</sup> = a⁸, b<sup>8−6</sup> = b². Answer 2a⁸b².',{h:AH});
W(2,`${IX} Q5b`,`Simplify ${F(`(36${S('m',6)}${S('n',2)}) × (3${S('m',2)}${S('n',4)})`,`(3${S('m',2)}n)<sup>2</sup>`)}`,'12m^4n^4','Top: multiply numbers and add indices. Bottom: square everything. Then divide.','Top: 108m⁸n⁶. Bottom: 9m⁴n². 108 ÷ 9 = 12, m⁴, n⁴. Answer 12m⁴n⁴.',{h:AH});
W(2,`${IX} Q5c`,`Simplify ${F(`(4${S('a',2)}${S('b',3)})<sup>2</sup>`,`√(64${S('a',2)})`)}`,'2a^3b^6','Square the top; square root the bottom; then divide.','Top: 16a⁴b⁶. Bottom: 8a. 16 ÷ 8 = 2, a³, b⁶. Answer 2a³b⁶.',{h:AH});
W(1,`${IX} Q5d`,`Simplify (3${S('a','1/3')})<sup>3</sup>`,'27a','Cube the 3 and multiply the index by 3.','3³ = 27 and a<sup>1/3 × 3</sup> = a¹, so 27a.',{h:AH});
W(1,`${IX} Q5e`,`Simplify (3x)<sup>3</sup> × (2x)<sup>3</sup>`,'216x^6','Expand each bracket, then multiply numbers and add indices.','27x³ × 8x³ = 216x⁶.',{h:AH});
W(1,`${IX} Q5f`,`Simplify (4x)<sup>−1</sup> ÷ (8${S('x',2)})<sup>−1</sup>`,'2x','A power of −1 is one over. Dividing by a fraction means multiplying by its reciprocal.','1/(4x) ÷ 1/(8x²) = 8x²/(4x) = 2x.',{h:AH});
W(2,`${IX} Q6`,`Eva says that √45 is greater than ∛290. Liam does not agree. Who is correct?`,'Eva','Raise both numbers to the 6th power so both roots disappear, then compare.','(√45)⁶ = 45³ = 91 125 and (∛290)⁶ = 290² = 84 100. 91 125 > 84 100, so √45 is bigger: Eva is correct.',{c:['Eva','Liam']});
W(2,`${IX} Q7`,`The volume of a cuboid is 81 cm³. It is 9 cm long, √3 cm wide and h cm high. Find the value of h, giving your answer in index notation (as a power of 3).`,'3^(3/2)','Volume = length × width × height. Write everything as a power of 3.',`9 × √3 × h = 81 → h = 81 ÷ (9√3) = 9/√3 = 3²/3<sup>1/2</sup> = ${S(3,'3/2')}.`,{d:'3^(3/2)',alt:['3^1.5','3^3/2'],h:'Type it like 3^(5/2).'});
const sx=(lv,ref,eq,v,d,m,w)=>V(lv,ref,`Find x: ${eq}`,v,d,m,w,{h:'Fractions like 3/2 or -1/3 are fine.'});
sx(1,`${IX} Q8a`,`${S(4,'x')} = 32`,2.5,'5/2','Write both sides as powers of 2 and compare indices.','2<sup>2x</sup> = 2⁵ → 2x = 5 → x = 5/2.');
sx(1,`${IX} Q8b`,`${S(25,'x')} = 125`,1.5,'3/2','Write both sides as powers of 5.','5<sup>2x</sup> = 5³ → x = 3/2.');
sx(2,`${IX} Q8c`,`${S(64,'x')} = ${F(1,4)}`,-1/3,'−1/3','Write both sides as powers of 2 (or 4).','2<sup>6x</sup> = 2<sup>−2</sup> → x = −1/3.');
sx(2,`${IX} Q8d`,`${S(2,'4x + 1')} = ${S(4,'x + 1')}`,0.5,'1/2','Write 4 as 2², then set the indices equal.','2<sup>4x+1</sup> = 2<sup>2x+2</sup> → 4x + 1 = 2x + 2 → x = 1/2.');
sx(3,`${IX} Q8e`,`${S(9,'2x − 1')} = ${S(27,'x + 2')}`,8,'8','Write both as powers of 3, then set the indices equal.','3<sup>4x−2</sup> = 3<sup>3x+6</sup> → 4x − 2 = 3x + 6 → x = 8.');
sx(3,`${IX} Q8f`,`${S(32,'3x − 1')} = ${S(16,'4x − 3')}`,7,'7','Write both as powers of 2, then set the indices equal.','2<sup>15x−5</sup> = 2<sup>16x−12</sup> → 15x − 5 = 16x − 12 → x = 7.');
sx(1,`${IX} Q8g`,`(${F(1,2)})<sup>x</sup> = 16`,-4,'−4','1/2 = 2<sup>−1</sup> and 16 = 2⁴.','2<sup>−x</sup> = 2⁴ → x = −4.');
sx(1,`${IX} Q8h`,`${S(14,'x')} = 1`,0,'0','Any number to the power 0 is 1.','14⁰ = 1, so x = 0.');
sx(3,`${IX} Q8i`,`(${F(1,2)})<sup>x</sup> + (${F(1,5)})<sup>x</sup> = 29`,-2,'−2','Rewrite as 2<sup>−x</sup> + 5<sup>−x</sup> = 29 and look for powers of 2 and 5 that add to 29.','4 + 25 = 29, and 2² + 5² = 29, so −x = 2 → x = −2.');
W(1,`${IX} Q9`,`Sarwan has £${S(2,16)} to share equally between 8 people. How much does each person get? Leave your answer in index form.`,'2^13','Write 8 as 2³, then subtract the indices.',`${S(2,16)} ÷ ${S(2,3)} = ${S(2,13)}.`,{d:'£2^13',alt:['£2^13'],h:'Type it like 2^9.'});
W(1,`${IX} Q10`,`Which is true?`,`3m⁻¹ = 3/m`,'Only the m has the power −1, not the 3.','3m<sup>−1</sup> = 3 × 1/m = 3/m.',{c:['3m⁻¹ = 3/m','3m⁻¹ = 1/(3m)']});
V(0,`${IX} Q11a`,`Find the value of 5${S('m','−2')} when m = 2.`,1.25,'5/4','m<sup>−2</sup> = 1/m², so 5m<sup>−2</sup> = 5/m².','5/2² = 5/4.');
V(0,`${IX} Q11b`,`Find the value of 8${S('y','−1')} when y = 4.`,2,'2','y<sup>−1</sup> = 1/y.','8/4 = 2.');
V(1,`${IX} Q11c`,`Find the value of 10${S('n','−3')} when n = 5.`,0.08,'2/25','n<sup>−3</sup> = 1/n³.','10/5³ = 10/125 = 2/25.');
V(1,`${IX} Q11d`,`Find the value of 6${S('a','−2')} when a = 4.`,0.375,'3/8','a<sup>−2</sup> = 1/a².','6/4² = 6/16 = 3/8.');
const mx=(w,n,d)=>`${w}<span class=fr style="font-size:.8em"><span>${n}</span><span>${d}</span></span>`;
V(2,`${IX} Q12a`,`Evaluate (${mx(2,1,4)})<sup>−1/2</sup>`,2/3,'2/3','Change the mixed number to an improper fraction. Flip for the negative, then square root.','2¼ = 9/4. Flip: 4/9. Square root: 2/3.');
V(2,`${IX} Q12b`,`Evaluate (${mx(2,7,9)})<sup>3/2</sup>`,125/27,'125/27','Improper fraction, square root, then cube.','2 7/9 = 25/9. √ → 5/3. Cube → 125/27.');
V(2,`${IX} Q12c`,`Evaluate (${F(3,7)})<sup>−2</sup>`,49/9,'49/9','Flip for the negative, then square.','(7/3)² = 49/9.');
V(2,`${IX} Q12d`,`Evaluate (${mx(2,10,27)})<sup>−2/3</sup>`,9/16,'9/16','Improper fraction, flip, cube root, then square.','2 10/27 = 64/27. Flip: 27/64. Cube root: 3/4. Square: 9/16.');
V(3,`${IX} Q13a`,`Find x if ${F(`${S(8,'x')} × ${S(64,3)}`,S(16,7))} = 32`,5,'5','Write everything as a power of 2 and compare indices.','2<sup>3x</sup> × 2¹⁸ ÷ 2²⁸ = 2⁵ → 3x − 10 = 5 → x = 5.');
V(3,`${IX} Q13b`,`Find x if ${F(`${S(81,'x')} × ${S(9,2)}`,S(27,4))} = 1`,2,'2','Write everything as a power of 3. A result of 1 means the index is 0.','3<sup>4x</sup> × 3⁴ ÷ 3¹² = 3⁰ → 4x − 8 = 0 → x = 2.');
[['a',32,'2',1/5,'1/5','2⁵'],['b',81,'3',1/4,'1/4','3⁴'],['c',125,'5',1/3,'1/3','5³'],['d',49,'7',1/2,'1/2','7²'],['e',121,'11',1/2,'1/2','11²'],['f',27,'3',1/3,'1/3','3³'],['g',243,'3',1/5,'1/5','3⁵'],['h',256,'16',1/2,'1/2','16²']].forEach(([p,b,t,v,d,s])=>
  sx(1,`${IX} Q14${p}`,`${S(b,'x')} = ${t}`,v,d,'Which root of the left-hand number gives the right-hand number?',`${b} = ${s}, so ${t} = ${b}<sup>${d}</sup> and x = ${d}.`));
[['i',3,'1/3',-1,'−1','3'],['j',81,'1/3',-1/4,'−1/4','3⁴'],['k',125,'1/5',-1/3,'−1/3','5³'],['l',512,'1/2',-1/9,'−1/9','2⁹']].forEach(([p,b,t,v,d,s])=>
  sx(2,`${IX} Q14${p}`,`${S(b,'x')} = ${F(...t.split('/'))}`,v,d,'Find the root first, then the negative index makes it “one over”.',`${b} = ${s}, so ${t} = ${b}<sup>${d}</sup> and x = ${d}.`));
const ex=(lv,ref,eq,v,d,w)=>V(lv,ref,`Find x: ${eq}`,v,d,'Write every term as a single power, then use the index laws and set the indices equal.',w,{h:'Fractions like 10/3 are fine.'});
ex(3,`${IX} Q15a`,`${S('m',3)} × ∛m = ${S('m','x')}`,10/3,'10/3','m³ × m<sup>1/3</sup> = m<sup>10/3</sup>, so x = 10/3.');
ex(3,`${IX} Q15b`,`${S('m','x')} × ${F(1,S('m',4))} = ${F(1,S('m',5))}`,-1,'−1','m<sup>x−4</sup> = m<sup>−5</sup> → x = −1.');
ex(3,`${IX} Q15c`,`${F('√m',S('m','x'))} = ${S('m',2)}`,-1.5,'−3/2','m<sup>1/2 − x</sup> = m² → 1/2 − x = 2 → x = −3/2.');
ex(3,`${IX} Q15d`,`<sup>4</sup>√a × (${S('a','x')})<sup>2</sup> = ${S('a',3)}`,11/8,'11/8','a<sup>1/4 + 2x</sup> = a³ → 2x = 11/4 → x = 11/8.');
ex(3,`${IX} Q15e`,`${F(S('n',3),`√${S('n','x')}`)} = ${F(1,S('n',2))}`,10,'10','n<sup>3 − x/2</sup> = n<sup>−2</sup> → 3 − x/2 = −2 → x = 10.');
ex(3,`${IX} Q15f`,`${F(S('m','x − 3'),S('m',4))} = ${F(1,'√m')}`,6.5,'13/2','m<sup>x − 7</sup> = m<sup>−1/2</sup> → x = 13/2.');
sx(2,`${IX} Q16a`,`${S(4,'x/2')} = ${F(1,32)}`,-5,'−5','Write both sides as powers of 2.','4<sup>x/2</sup> = 2<sup>x</sup> and 1/32 = 2<sup>−5</sup>, so x = −5.');
sx(2,`${IX} Q16b`,`${S(49,'x')} = ${F(1,343)}`,-1.5,'−3/2','Write both sides as powers of 7.','7<sup>2x</sup> = 7<sup>−3</sup> → x = −3/2.');
sx(2,`${IX} Q16c`,`${S(1000,'x')} = 0.01`,-2/3,'−2/3','Write both sides as powers of 10.','10<sup>3x</sup> = 10<sup>−2</sup> → x = −2/3.');
sx(2,`${IX} Q16d`,`${S(2,'x + 3')} = ${S(4,'2x')}`,1,'1','Write 4 as 2².','2<sup>x+3</sup> = 2<sup>4x</sup> → x + 3 = 4x → x = 1.');
sx(2,`${IX} Q16e`,`${S(4,'x')} = (√2)<sup>6</sup>`,1.5,'3/2','Write both sides as powers of 2.','2<sup>2x</sup> = 2³ → x = 3/2.');
sx(2,`${IX} Q16f`,`${S(5,'4x/3')} = ${S(125,'2/3')}`,1.5,'3/2','Write 125 as 5³.','125<sup>2/3</sup> = 5², so 4x/3 = 2 → x = 3/2.');
[['a','2/3','9/4',-2,'−2','9/4 = (3/2)² = (2/3)<sup>−2</sup>'],['b','3/5','27/125',3,'3','27/125 = (3/5)³'],['c','2/5','125/8',-3,'−3','125/8 = (5/2)³ = (2/5)<sup>−3</sup>'],['d','10/7','49/100',-2,'−2','49/100 = (7/10)² = (10/7)<sup>−2</sup>'],
 ['e','9/4','32/243',-2.5,'−5/2','9/4 = (3/2)² and 32/243 = (2/3)⁵ = (3/2)<sup>−5</sup>, so 2x = −5'],['f','1/2','1024',-10,'−10','1024 = 2¹⁰ = (1/2)<sup>−10</sup>'],['g','8/27','81/16',-4/3,'−4/3','8/27 = (2/3)³ and 81/16 = (3/2)⁴ = (2/3)<sup>−4</sup>, so 3x = −4'],['h','3/4','16/9',-2,'−2','16/9 = (4/3)² = (3/4)<sup>−2</sup>'],['i','8/125','25/4',-2/3,'−2/3','8/125 = (2/5)³ and 25/4 = (2/5)<sup>−2</sup>, so 3x = −2']]
 .forEach(([p,b,t,v,d,w])=>sx(3,`${IX} Q17${p}`,`(${F(...b.split('/'))})<sup>x</sup> = ${t.includes('/')?F(...t.split('/')):t}`,v,d,'Write both sides as powers of the same fraction. Flipping a fraction changes the sign of the index.',`${w}. So x = ${d}.`));

/* ===================== SURDS - 1 ===================== */
topic('Indices and Surds');
const SX='Surds 1';
W(2,`${SX} Q1`,`${F('8 + √12','5 + √3')} can be written as ${F('a + √3','b')} where a and b are integers. Find a and b.`,'17,11','Multiply the top and bottom by 5 − √3 (the conjugate), then simplify.','√12 = 2√3. (8 + 2√3)(5 − √3) = 40 − 8√3 + 10√3 − 6 = 34 + 2√3. Bottom: 25 − 3 = 22. (34 + 2√3)/22 = (17 + √3)/11. So a = 17, b = 11.',{d:'a = 17, b = 11',h:PAIR});
W(3,`${SX} Q2`,`${F('√180 − 2√5','5√5 − 5')} can be written as a + ${F('√5','b')} where a and b are integers. Find a and b.`,'1,5','Simplify √180, take out common factors, then rationalise using the conjugate.','√180 = 6√5, so the top is 4√5. Bottom: 5(√5 − 1). 4√5(√5 + 1) / (5 × 4) = (20 + 4√5)/20 = 1 + √5/5. So a = 1, b = 5.',{d:'a = 1, b = 5',h:PAIR});
W(1,`${SX} Q3a`,`Rationalise the denominator of ${F(22,'√11')}. Give your answer in its simplest form.`,'2√11','Multiply the top and bottom by √11.','22√11 / 11 = 2√11.',{h:SURD});
W(2,`${SX} Q3b`,`${F('√3','2√3 − 1')} can be written as ${F('a + √3','b')} where a and b are integers. Find a and b.`,'6,11','Multiply the top and bottom by 2√3 + 1.','Top: √3(2√3 + 1) = 6 + √3. Bottom: 12 − 1 = 11. So a = 6, b = 11.',{d:'a = 6, b = 11',h:PAIR});
W(0,`${SX} Q4a`,`Express √3 + √12 in the form a√3.`,'3√3','Simplify √12 first, then add like surds.','√12 = 2√3, so √3 + 2√3 = 3√3.',{alt:['3'],h:SURD});
W(3,`${SX} Q4b`,`Express (${F(1,'√3')})<sup>7</sup> in the form ${F('√b','c')} where b and c are integers. Find b and c.`,'3,81','(√3)⁷ = 27√3. Then rationalise.','(1/√3)⁷ = 1/(27√3) = √3/(27 × 3) = √3/81. So b = 3, c = 81.',{d:'b = 3, c = 81',h:PAIR});
W(3,`${SX} Q5`,`${F('(√18 + √2)<sup>2</sup>','√8 − 2')} can be written as a(b + √2) where a and b are integers. Find a and b.`,'16,1','Simplify the surds, square the top, then rationalise the bottom.','√18 + √2 = 4√2, squared = 32. √8 − 2 = 2(√2 − 1). 32 / (2(√2 − 1)) = 16(√2 + 1)/1 = 16(1 + √2). So a = 16, b = 1.',{d:'a = 16, b = 1',h:PAIR});
W(2,`${SX} Q6`,`Simplify ${F(1,`1 + ${F(1,'√2')}`)}. Give your answer in the form a + b√2.`,'2 − √2','Multiply the top and bottom by √2 first, then rationalise.','1/(1 + 1/√2) = √2/(√2 + 1) = √2(√2 − 1)/(2 − 1) = 2 − √2.',{alt:['-√2 + 2'],h:SURD});
W(3,`${SX} Q7`,`Express √48 + √108 in the form k√6, where k is a surd. Find k.`,'5√2','Simplify both surds, add, then divide by √6.','√48 + √108 = 4√3 + 6√3 = 10√3. k = 10√3/√6 = 10/√2 = 5√2.',{alt:['√50'],h:SURD});
W(1,`${SX} Q8`,`Write √27 + √147 in the form a√b, where a and b are integers.`,'10√3','Simplify each surd so both are multiples of √3, then add.','√27 = 3√3 and √147 = 7√3, so 10√3.',{h:SURD});
W(3,`${SX} Q9`,`Simplify (7 + 2√50)(5 − 2√2). Give your answer in the form a + b√18 where a and b are integers. Find a and b.`,'-5,12','Simplify √50, expand, then rewrite the √2 term as a multiple of √18 = 3√2.','2√50 = 10√2. (7 + 10√2)(5 − 2√2) = 35 − 14√2 + 50√2 − 40 = −5 + 36√2 = −5 + 12√18. So a = −5, b = 12.',{d:'a = −5, b = 12',h:PAIR});
V(2,`${SX} Q10`,`${F('√3 + √27','√2')} can be written as √k where k is an integer. Find k.`,24,'24','Simplify the top, then combine into one square root.','√3 + 3√3 = 4√3. 4√3/√2 = √(16 × 3 / 2) = √24. k = 24.');
W(2,`${SX} Q11a`,`Expand (5 + 3√2)<sup>2</sup>. Give your answer in the form a + b√2.`,'43 + 30√2','Write it as (5 + 3√2)(5 + 3√2) and expand. (3√2)² = 18.','25 + 15√2 + 15√2 + 18 = 43 + 30√2.',{alt:['30√2 + 43'],h:SURD});
V(3,`${SX} Q11b`,`(5 + 3√2)<sup>2</sup> = p + ${F('q','√8')} where p and q are integers. Find q.`,120,'120','From part (a), the surd part is 30√2. Set 30√2 = q/√8.','q = 30√2 × √8 = 30 × 4 = 120.');
W(3,`${SX} Q12`,`Given that (5 − √x)<sup>2</sup> = y − 20√2 where x and y are positive integers, find x and y.`,'8,33','Expand the left side and compare the whole-number parts and the surd parts.','25 − 10√x + x = y − 20√2. So 10√x = 20√2 → √x = 2√2 → x = 8, and y = 25 + 8 = 33.',{d:'x = 8, y = 33',h:PAIR});
W(3,`${SX} Q13`,`(3 + √a)(4 + √a) = 17 + k√a where a and k are positive integers. Find a and k.`,'5,7','Expand and compare the whole-number parts and the surd parts.','12 + 7√a + a = 17 + k√a. So 12 + a = 17 → a = 5, and k = 7.',{d:'a = 5, k = 7',h:PAIR});
W(3,`${SX} Q14`,`(√a + √(8a))<sup>2</sup> = 54 + b√2 where a and b are positive integers. Find a and b.`,'6,24','Expand. √a × √(8a) = √(8a²) = 2a√2.','a + 4a√2 + 8a = 9a + 4a√2. 9a = 54 → a = 6, b = 4 × 6 = 24.',{d:'a = 6, b = 24',h:PAIR});
W(3,`${SX} Q15`,`(a + √b)<sup>2</sup> = 49 + 12√b, where a and b are integers and b is a prime number. Find a and b.`,'6,13','Expand and compare the surd parts and the whole-number parts.','a² + b + 2a√b. 2a = 12 → a = 6. 36 + b = 49 → b = 13 (prime).',{d:'a = 6, b = 13',h:PAIR});
W(2,`${SX} Q16`,`Simplify fully ${F('(6 − √5)(6 + √5)','√13')}`,'31√13/13','The top is a difference of two squares. Then rationalise.','36 − 5 = 31. 31/√13 = 31√13/13.',{alt:['(31√13)/13','31/13√13'],h:'Type it like 5√7/7.'});
W(2,`${SX} Q17`,`Rationalise the denominator and simplify fully ${F(33,'4 + √5')}`,'12 − 3√5','Multiply the top and bottom by 4 − √5.','33(4 − √5)/(16 − 5) = 33(4 − √5)/11 = 3(4 − √5) = 12 − 3√5.',{alt:['-3√5 + 12','3(4 − √5)'],h:SURD});
W(2,`${SX} Q18`,`Express ${F(39,'4 − √3')} in the form a + b√3, where a and b are integers.`,'12 + 3√3','Multiply the top and bottom by 4 + √3.','39(4 + √3)/(16 − 3) = 3(4 + √3) = 12 + 3√3.',{alt:['3√3 + 12','3(4 + √3)'],h:SURD});
W(3,`${SX} Q19`,`Simplify ${F('7 − √5','2 + √5')}, giving your answer in the form a + b√5.`,'−19 + 9√5','Multiply the top and bottom by 2 − √5. The bottom becomes 4 − 5 = −1.','(7 − √5)(2 − √5) = 14 − 7√5 − 2√5 + 5 = 19 − 9√5. Divide by −1: −19 + 9√5.',{alt:['9√5 − 19'],h:SURD});
W(3,`${SX} Q20`,`${F(3,'√27 − √18')} can be written as √m + √n where m and n are integers. Write it in this form.`,'√3 + √2','Simplify the surds, take out the common factor, then rationalise.','√27 − √18 = 3(√3 − √2). 3/(3(√3 − √2)) = 1/(√3 − √2) = (√3 + √2)/(3 − 2) = √3 + √2.',{alt:['√2 + √3'],h:SURD});
W(1,`${SX} Q21`,`Simplify ${F(16,'√2')} − √8`,'6√2','Rationalise 16/√2 and simplify √8, then subtract.','16/√2 = 8√2 and √8 = 2√2. 8√2 − 2√2 = 6√2.',{h:SURD});

/* ===================== SEQUENCES - 1 ===================== */
topic('Sequences');
const QX='Sequences 1';
const TWO='Give each answer separated by a comma, for example 22, 29.';
const NT='Write it in terms of n, for example 4n - 3.';
W(0,`${QX} Q1`,`Here are the first five terms of a sequence: 2, 4, 7, 11, 16. Write down the next two terms.`,[22,29],'Look at the differences: they go up by 1 each time.','Differences 2, 3, 4, 5, so next differences are 6 and 7: 16 + 6 = 22, 22 + 7 = 29.',{d:'22, 29',h:TWO});
W(1,`${QX} Q2`,`The first term of a sequence is 3. The term-to-term rule is add 5. Is 97 a term in the sequence?`,'No','Find the nth term, set it equal to 97 and see whether n is a whole number.','nth term = 5n − 2. 5n − 2 = 97 → n = 19.8, which is not a whole number, so 97 is not a term. (All terms end in 3 or 8.)',{c:['Yes','No']});
W(0,`${QX} Q3`,`Here are the first five terms of a Fibonacci sequence: 1, 2, 3, 5, 8. Write down the next two terms.`,[13,21],'Add the previous two terms each time.','5 + 8 = 13, 8 + 13 = 21.',{d:'13, 21',h:TWO});
W(0,`${QX} Q4a`,`The nth term of a sequence is 4n + 3. Find the first two terms.`,[7,11],'Substitute n = 1 and n = 2.','4(1) + 3 = 7, 4(2) + 3 = 11.',{d:'7, 11',h:TWO});
W(1,`${QX} Q4b`,`The nth term of a sequence is 4n + 3. Is 35 a term in this sequence?`,'Yes','Set 4n + 3 = 35 and solve for n.','4n = 32 → n = 8, a whole number, so 35 is the 8th term.',{c:['Yes','No']});
W(0,`${QX} Q5a`,`The nth term of a sequence is n² + 1. Find the first two terms.`,[2,5],'Substitute n = 1 and n = 2.','1² + 1 = 2, 2² + 1 = 5.',{d:'2, 5',h:TWO});
W(1,`${QX} Q5b`,`The nth term of a sequence is n² + 1. Is 35 a term in this sequence?`,'No','Set n² + 1 = 35 and see whether n is a whole number.','n² = 34. 34 is not a square number (5² = 25, 6² = 36), so 35 is not a term.',{c:['Yes','No']});
V(0,`${QX} Q6a`,`Here are the first 5 terms of a sequence: 17, 14, 11, 8, 5. Find the next term.`,2,'2','Find the difference between terms.','The terms go down by 3: 5 − 3 = 2.');
V(0,`${QX} Q6b`,`The nth term of a sequence is 10n² + 5. Work out the 5th term.`,255,'255','Substitute n = 5. Square first, then multiply by 10.','10 × 5² + 5 = 250 + 5 = 255.');
V(0,`${QX} Q7a`,`Here are the first four terms of a sequence: 7, 13, 19, 25. Write down the next term.`,31,'31','Find the difference between terms.','The terms go up by 6: 25 + 6 = 31.');
W(0,`${QX} Q7b`,`The sequence 7, 13, 19, 25 continues. How do you get the next term?`,'Add 6 to the previous term','Compare each term with the one before it.','13 − 7 = 6, 19 − 13 = 6, 25 − 19 = 6, so the rule is add 6.',{c:['Add 6 to the previous term','Multiply the previous term by 2','Add 7 to the previous term','Add 6n']});
V(0,`${QX} Q8`,`Here are the first four terms of a sequence: 2, 3, 5, 9. The rule is multiply the previous term by 2 and then subtract 1. Work out the 5th term.`,17,'17','Apply the rule to the 4th term.','9 × 2 − 1 = 17.');
V(1,`${QX} Q9`,`Here are the first 5 terms of a Fibonacci sequence: 2, 2, 4, 6, 10. Find the 8th term.`,42,'42','Keep adding the previous two terms.','6 + 10 = 16, 10 + 16 = 26, 16 + 26 = 42.');
W(0,`${QX} Q10a`,`The nth term of a sequence is n² + 3. Find the first three terms.`,[4,7,12],'Substitute n = 1, 2 and 3.','1 + 3 = 4, 4 + 3 = 7, 9 + 3 = 12.',{d:'4, 7, 12',h:'Give each term separated by a comma, for example 4, 7, 12.'});
V(0,`${QX} Q10b`,`The nth term of a sequence is n² + 3. Find the 10th term.`,103,'103','Substitute n = 10.','10² + 3 = 103.');
V(1,`${QX} Q11a`,`Here are the first five terms of a sequence: 31, 27, 23, 19, 15. Find the first negative term.`,-1,'−1','Keep subtracting 4 until you go below zero.','15, 11, 7, 3, −1. The first negative term is −1.');
W(1,`${QX} Q11b`,`The sequence 31, 27, 23, 19, 15, … continues. Is −30 a term in this sequence?`,'No','Find the nth term, set it equal to −30 and check whether n is a whole number.','nth term = 35 − 4n. 35 − 4n = −30 → n = 16.25, not a whole number, so no. (All terms are odd; −30 is even.)',{c:['Yes','No']});
W(1,`${QX} Q12a`,`Here are the first 5 terms of an arithmetic sequence: −3, 1, 5, 9, 13. Find an expression for the nth term.`,'4n-7','The difference gives the number in front of n. Then adjust to get the first term.','Difference 4 → 4n. 4(1) = 4, and the first term is −3, so subtract 7: 4n − 7.',{d:'4n − 7',h:NT});
W(1,`${QX} Q12b`,`The nth term of an arithmetic sequence is 2n − 3. Is 101 a term in this sequence?`,'Yes','Set 2n − 3 = 101 and solve.','2n = 104 → n = 52, a whole number, so 101 is the 52nd term.',{c:['Yes','No']});
[['13','9, 14, 19, 24, 29','5n+4','5n + 4','Difference 5 → 5n. 5 − 9 → add 4.'],['14','25, 22, 19, 16, 13','28-3n','28 − 3n','Difference −3 → −3n. −3 → 25: add 28.'],['15','4, 11, 18, 25','7n-3','7n − 3','Difference 7 → 7n. 7 → 4: subtract 3.'],
 ['16','35, 31, 27, 23','39-4n','39 − 4n','Difference −4 → −4n. −4 → 35: add 39.'],['17','21, 27, 33, 39, 45','6n+15','6n + 15','Difference 6 → 6n. 6 → 21: add 15.'],['18','2, 7, 12, 17, 22','5n-3','5n − 3','Difference 5 → 5n. 5 → 2: subtract 3.']]
 .forEach(([n,t,a,d,w])=>W(1,`${QX} Q${n}`,`Here are the first terms of an arithmetic sequence: ${t}. Find an expression for the nth term.`,a,'The common difference is the number in front of n. Compare that with the first term to find what to add or subtract.',`${w} nth term = ${d}.`,{d,h:NT}));
const QS='Write it in terms of n, for example 2n^2 + 3n - 1.';
const qd=(lv,p,t,a,d,w,alt=[])=>W(lv,`${QX} Q19${p}`,`Find the nth term of the quadratic sequence ${t}, …`,a,'Find the second difference and halve it to get the n² coefficient. Subtract that from the terms, then find the nth term of the linear sequence left over.',w,{d,alt,h:QS});
qd(3,'a','−8, 2, 16, 34','2n^2+4n-14','2n² + 4n − 14','Differences 10, 14, 18; second difference 4 → 2n². Terms − 2n²: −10, −6, −2, 2 → 4n − 14. nth term = 2n² + 4n − 14.');
qd(2,'b','6, 10, 16, 24','n^2+n+4','n² + n + 4','Differences 4, 6, 8; second difference 2 → n². Terms − n²: 5, 6, 7, 8 → n + 4. nth term = n² + n + 4.');
qd(3,'c','−2, −1, 1, 4','0.5n^2-0.5n-2','½n² − ½n − 2','Differences 1, 2, 3; second difference 1 → ½n². Terms − ½n²: −2.5, −3, −3.5, −4 → −½n − 2. nth term = ½n² − ½n − 2.',['(n^2-n-4)/2','1/2n^2-1/2n-2','(n²-n)/2-2']);
qd(3,'d','19, 15, 9, 1','-n^2-n+21','21 − n − n²','Differences −4, −6, −8; second difference −2 → −n². Terms + n²: 20, 19, 18, 17 → 21 − n. nth term = −n² − n + 21.');
qd(2,'e','2, 10, 24, 44','3n^2-n','3n² − n','Differences 8, 14, 20; second difference 6 → 3n². Terms − 3n²: −1, −2, −3, −4 → −n. nth term = 3n² − n.');
qd(2,'f','15, 19, 25, 33','n^2+n+13','n² + n + 13','Differences 4, 6, 8; second difference 2 → n². Terms − n²: 14, 15, 16, 17 → n + 13. nth term = n² + n + 13.');
qd(3,'g','2, 10, 22, 38','2n^2+2n-2','2n² + 2n − 2','Differences 8, 12, 16; second difference 4 → 2n². Terms − 2n²: 0, 2, 4, 6 → 2n − 2. nth term = 2n² + 2n − 2.');
W(2,`${QX} Q20`,`Write down the next two terms in the quadratic sequence 9, 13, 19, 27, …`,[37,49],'The differences increase by 2 each time.','Differences 4, 6, 8, so next 10 and 12: 27 + 10 = 37, 37 + 12 = 49.',{d:'37, 49',h:TWO});

/* ===================== ALGEBRAIC FRACTIONS - 2 ===================== */
topic('Algebraic Fractions');
const AX='Alg Fractions 2';
const mc=(lv,ref,q,a,wr,m,w)=>W(lv,ref,q,a,m,w,{c:[a,...wr]});
const ADD='Find a common denominator (the lowest common multiple of the denominators). Rewrite each fraction over it, combine the numerators, then simplify.';
const MUL='Factorise every numerator and denominator, cancel common factors, then multiply. To divide, multiply by the reciprocal of the second fraction.';
mc(2,`${AX} Q1a`,`Express ${F(1,'a + b')} + ${F('a','4(a + b)')} as a single fraction in its simplest form.`,'(a + 4)/(4(a + b))',['(a + 1)/(4(a + b))','(a + 1)/(5(a + b))','(4a + 1)/(4(a + b))'],ADD,`Common denominator 4(a + b): ${F(4,'4(a + b)')} + ${F('a','4(a + b)')} = ${F('a + 4','4(a + b)')}.`);
mc(1,`${AX} Q1b`,`Express ${F(2,'x + 1')} + ${F(3,'(x + 1)(x − 2)')} as a single fraction in its simplest form.`,'(2x − 1)/((x + 1)(x − 2))',['5/((x + 1)(x − 2))','(2x + 1)/((x + 1)(x − 2))','(2x − 7)/((x + 1)(x − 2))'],ADD,`${F('2(x − 2) + 3','(x + 1)(x − 2)')} = ${F('2x − 1','(x + 1)(x − 2)')}.`);
mc(1,`${AX} Q1c`,`Express ${F(7,'x + 3')} − ${F(4,'(x + 3)(x − 5)')} as a single fraction in its simplest form.`,'(7x − 39)/((x + 3)(x − 5))',['(7x − 31)/((x + 3)(x − 5))','3/((x + 3)(x − 5))','(7x + 39)/((x + 3)(x − 5))'],ADD,`${F('7(x − 5) − 4','(x + 3)(x − 5)')} = ${F('7x − 39','(x + 3)(x − 5)')}.`);
mc(1,`${AX} Q1d`,`Express ${F(3,'x − 2')} − ${F(5,'(x − 2)(x + 4)')} as a single fraction in its simplest form.`,'(3x + 7)/((x − 2)(x + 4))',['(3x + 17)/((x − 2)(x + 4))','(3x − 7)/((x − 2)(x + 4))','−2/((x − 2)(x + 4))'],ADD,`${F('3(x + 4) − 5','(x − 2)(x + 4)')} = ${F('3x + 7','(x − 2)(x + 4)')}.`);
mc(2,`${AX} Q1e`,`Express ${F(5,'3 − a')} + ${F(6,'(3 − a)(3 + a)')} as a single fraction in its simplest form.`,'(5a + 21)/((3 − a)(3 + a))',['(5a + 9)/((3 − a)(3 + a))','11/((3 − a)(3 + a))','(21 − 5a)/((3 − a)(3 + a))'],ADD,`${F('5(3 + a) + 6','(3 − a)(3 + a)')} = ${F('5a + 21','(3 − a)(3 + a)')}.`);
mc(2,`${AX} Q1f`,`Express ${F(3,'a − 4')} + ${F('a','a² − 16')} as a single fraction in its simplest form.`,'4(a + 3)/((a − 4)(a + 4))',['(3 + a)/(a² − 16)','4(a + 3)/(a − 4)','(4a + 4)/((a − 4)(a + 4))'],'Factorise a² − 16 = (a − 4)(a + 4) first. '+ADD,`${F('3(a + 4) + a','(a − 4)(a + 4)')} = ${F('4a + 12','(a − 4)(a + 4)')} = ${F('4(a + 3)','(a − 4)(a + 4)')}.`);
mc(2,`${AX} Q1g`,`Express ${F('p','p² − 9')} + ${F(2,'p + 3')} as a single fraction in its simplest form.`,'3(p − 2)/((p + 3)(p − 3))',['(p + 2)/(p² − 9)','3(p + 2)/((p + 3)(p − 3))','(3p − 3)/((p + 3)(p − 3))'],'Factorise p² − 9 = (p + 3)(p − 3) first. '+ADD,`${F('p + 2(p − 3)','(p + 3)(p − 3)')} = ${F('3p − 6','(p + 3)(p − 3)')} = ${F('3(p − 2)','(p + 3)(p − 3)')}.`);
mc(1,`${AX} Q1h`,`Express ${F(7,'5a − 5b')} + ${F(4,'2a − 2b')} as a single fraction in its simplest form.`,'17/(5(a − b))',['11/(7(a − b))','11/(10(a − b))','27/(10(a − b))'],'Factorise each denominator first. '+ADD,`${F(7,'5(a − b)')} + ${F(2,'a − b')} = ${F(7,'5(a − b)')} + ${F(10,'5(a − b)')} = ${F(17,'5(a − b)')}.`);
mc(2,`${AX} Q1i`,`Express ${F('c','25 − c²')} − ${F(1,'5 − c')} as a single fraction in its simplest form.`,'−5/(25 − c²)',['(c − 1)/(25 − c²)','(2c + 5)/(25 − c²)','5/(25 − c²)'],'25 − c² = (5 − c)(5 + c). '+ADD,`${F('c − (5 + c)','(5 − c)(5 + c)')} = ${F('−5','25 − c²')} (or ${F(5,'c² − 25')}).`);
W(0,`${AX} Q1j`,`Express ${F(6,'x − 3')} + ${F('x','x² − 3x')} as a single fraction in its simplest form.`,'7/(x-3)','Factorise x² − 3x = x(x − 3) and cancel the x first.',`${F('x','x(x − 3)')} = ${F(1,'x − 3')}, so ${F(6,'x − 3')} + ${F(1,'x − 3')} = ${F(7,'x − 3')}.`,{d:'7/(x − 3)',h:ALG});
V(0,`${AX} Q2a`,`Simplify ${F('a²','a² + 3a')} × ${F('a + 3','a')}`,1,'1',MUL,`${F('a²','a(a + 3)')} × ${F('a + 3','a')} = ${F('a²(a + 3)','a²(a + 3)')} = 1.`);
W(0,`${AX} Q2b`,`Simplify ${F('3x − 2','4x')} × ${F(24,'18x − 12')}`,'1/x',MUL,`18x − 12 = 6(3x − 2). ${F('3x − 2','4x')} × ${F(24,'6(3x − 2)')} = ${F(24,'24x')} = ${F(1,'x')}.`,{h:ALG});
W(1,`${AX} Q2c`,`Simplify ${F('49 − b²','b²')} × ${F('b','7 − b')}`,'(7+b)/b',MUL,`49 − b² = (7 − b)(7 + b). Cancel (7 − b) and one b: ${F('7 + b','b')}.`,{d:'(7 + b)/b',alt:['(b+7)/b'],h:ALG});
mc(2,`${AX} Q2d`,`Simplify ${F('3u² + 7u + 2',21)} × ${F('7u','u + 2')}`,'u(3u + 1)/3',['(3u + 1)/3','7u(3u + 1)/21(u + 2)','u(3u + 2)/3'],MUL,`3u² + 7u + 2 = (3u + 1)(u + 2). Cancel (u + 2) and 7: ${F('u(3u + 1)',3)}.`);
W(2,`${AX} Q2e`,`Simplify ${F('2y − 1','y²')} × ${F('y','2y² + 5y − 3')}`,'1/(y(y+3))',MUL,`2y² + 5y − 3 = (2y − 1)(y + 3). Cancel (2y − 1) and y: ${F(1,'y(y + 3)')}.`,{d:'1/(y(y + 3))',alt:['1/(y^2+3y)'],h:ALG});
W(2,`${AX} Q2f`,`Simplify ${F('2p²','p² + 8p + 7')} × ${F('p + 7','4p')}`,'p/(2(p+1))',MUL,`p² + 8p + 7 = (p + 1)(p + 7). Cancel (p + 7), then 2p²/4p = p/2: ${F('p','2(p + 1)')}.`,{d:'p/(2(p + 1))',alt:['p/(2p+2)'],h:ALG});
W(2,`${AX} Q2g`,`Simplify ${F('2x − 6',4)} × ${F('x','x² − x − 6')}`,'x/(2(x+2))',MUL,`2x − 6 = 2(x − 3) and x² − x − 6 = (x − 3)(x + 2). Cancel (x − 3) and the 2: ${F('x','2(x + 2)')}.`,{d:'x/(2(x + 2))',alt:['x/(2x+4)'],h:ALG});
W(2,`${AX} Q2h`,`Simplify ${F(3,'y² + y − 2')} × ${F('3y + 6','y')}`,'9/(y(y-1))',MUL,`y² + y − 2 = (y + 2)(y − 1) and 3y + 6 = 3(y + 2). Cancel (y + 2): ${F(9,'y(y − 1)')}.`,{d:'9/(y(y − 1))',alt:['9/(y^2-y)'],h:ALG});
W(1,`${AX} Q2i`,`Simplify ${F(3,'p² − 9')} ÷ ${F(4,'p + 3')}`,'3/(4(p-3))',MUL,`${F(3,'(p − 3)(p + 3)')} × ${F('p + 3',4)} = ${F(3,'4(p − 3)')}.`,{d:'3/(4(p − 3))',alt:['3/(4p-12)'],h:ALG});
W(1,`${AX} Q2j`,`Simplify ${F('25 − n²',5)} ÷ ${F('5 − n',2)}`,'2(5+n)/5',MUL,`${F('(5 − n)(5 + n)',5)} × ${F(2,'5 − n')} = ${F('2(5 + n)',5)}.`,{d:'2(5 + n)/5',alt:['(10+2n)/5','(2n+10)/5','2(n+5)/5'],h:ALG});
W(1,`${AX} Q2k`,`Simplify ${F('a² − 16','a²')} ÷ ${F('a + 4','5a')}`,'5(a-4)/a',MUL,`${F('(a − 4)(a + 4)','a²')} × ${F('5a','a + 4')} = ${F('5(a − 4)','a')}.`,{d:'5(a − 4)/a',alt:['(5a-20)/a'],h:ALG});
V(0,`${AX} Q2l`,`Simplify ${F('2y² − y','4y')} ÷ ${F('2y − 1',10)}`,2.5,'5/2',MUL,`${F('y(2y − 1)','4y')} × ${F(10,'2y − 1')} = ${F(10,4)} = 5/2.`);
W(3,`${AX} Q3`,`${F('3x','x + 2')} − ${F('2x + 1','x − 2')} − 1 can be written as ${F('ax + b','x² − 4')}. Find a and b. [Edexcel June 2022]`,'-11,2','Use the common denominator (x + 2)(x − 2) = x² − 4. Write the 1 as (x² − 4)/(x² − 4).','3x(x − 2) − (2x + 1)(x + 2) − (x² − 4) = 3x² − 6x − 2x² − 5x − 2 − x² + 4 = −11x + 2. So a = −11, b = 2.',{d:'a = −11, b = 2',h:PAIR});
W(3,`${AX} Q4`,`Simplify fully ${F(`6${S('x',3)}`,'9x² − 144')} ÷ ${F(`2${S('x',2)}`,'3(x − 4)')}. [based on Edexcel Nov 2021]`,'x/(x+4)',MUL,`9x² − 144 = 9(x − 4)(x + 4). ${F(`6x³`,'9(x − 4)(x + 4)')} × ${F('3(x − 4)','2x²')} = ${F('18x³','18x²(x + 4)')} = ${F('x','x + 4')}.`,{d:'x/(x + 4)',h:ALG});
V(3,`${AX} Q5`,`${F('7x − 14','x² + 4x − 12')} ÷ ${F('x − 6','x³ − 36x')} simplifies to ax. Find a. [Edexcel Nov 2019]`,7,'7',MUL,`${F('7(x − 2)','(x + 6)(x − 2)')} × ${F('x(x − 6)(x + 6)','x − 6')} = 7x. So a = 7.`);
W(3,`${AX} Q6`,`Write 6 + [(x + 5) ÷ ${F('x² + 3x − 10','x − 1')}] as a single fraction ${F('ax − b','cx − d')}.`,'(7x-13)/(x-2)','Divide first (multiply by the reciprocal and cancel), then add 6 using a common denominator.',`(x + 5) × ${F('x − 1','(x + 5)(x − 2)')} = ${F('x − 1','x − 2')}. 6 + ${F('x − 1','x − 2')} = ${F('6x − 12 + x − 1','x − 2')} = ${F('7x − 13','x − 2')}.`,{d:'(7x − 13)/(x − 2)',h:ALG});
W(3,`${AX} Q7a`,`Write ${F('4x² − 9','6x + 9')} × ${F('2x','x² − 3x')} in the form ${F('ax + b','cx + d')}. [Edexcel Nov 2018]`,'(4x-6)/(3x-9)',MUL,`${F('(2x − 3)(2x + 3)','3(2x + 3)')} × ${F('2x','x(x − 3)')} = ${F('2(2x − 3)','3(x − 3)')} = ${F('4x − 6','3x − 9')}.`,{d:'(4x − 6)/(3x − 9)',alt:['2(2x-3)/(3(x-3))','(2(2x-3))/(3(x-3))'],h:ALG});
mc(3,`${AX} Q7b`,`Express ${F(3,'x + 1')} + ${F(1,'x − 2')} − ${F(4,'x')} as a single fraction in its simplest form. [Edexcel Nov 2018]`,'(8 − x)/(x(x + 1)(x − 2))',['0','(8 + x)/(x(x + 1)(x − 2))','(8x − 8)/(x(x + 1)(x − 2))'],ADD,`3x(x − 2) + x(x + 1) − 4(x + 1)(x − 2) = 3x² − 6x + x² + x − 4x² + 4x + 8 = 8 − x. Answer ${F('8 − x','x(x + 1)(x − 2)')}.`);
W(3,`${AX} Q8`,`2 − ${F('x + 2','x − 3')} − ${F('x − 6','x + 3')} can be written as ${F('ax + b','x² − 9')}. Find a and b. [Edexcel June 2017]`,'4,-42','Use the common denominator (x − 3)(x + 3) = x² − 9. Write 2 as 2(x² − 9)/(x² − 9).','2x² − 18 − (x² + 5x + 6) − (x² − 9x + 18) = 4x − 42. So a = 4, b = −42.',{d:'a = 4, b = −42',h:PAIR});
V(2,`${AX} Q9`,`${F('3x + 6','x² − 3x − 10')} ÷ ${F('x + 5','x³ − 25x')} simplifies to ax. Find a.`,3,'3',MUL,`${F('3(x + 2)','(x − 5)(x + 2)')} × ${F('x(x − 5)(x + 5)','x + 5')} = 3x. So a = 3.`);

/* ===================== INDICES - 2 ===================== */
topic('Indices and Surds');
const I2='Indices 2';
const fr=(n,d)=>`${n<0?'−':''}${Math.abs(n)}${d==1?'':'/'+d}`;
/* ev(level, part, html, value, display, working) : evaluate questions */
const ev=(lv,p,h,v,d,w,mm)=>V(lv,`${I2} ${p}`,`Evaluate ${h}`,v,d,mm||'Deal with a negative index first (one over / flip the fraction), then the root (denominator of the index), then the power (numerator). A decimal index can be written as a fraction: 0.5 = ½, 1.5 = 3/2, 0.25 = ¼, 0.6 = 3/5, 0.8 = 4/5.',w,{h:'Give a whole number or a fraction such as 1/16.'});
[['Q1a',0,S(49,'1/2'),7,'7','√49 = 7.'],['Q1b',0,S(27,'1/3'),3,'3','∛27 = 3.'],['Q1c',0,S(16,'1/4'),2,'2','The 4th root of 16 is 2 (2⁴ = 16).'],['Q1d',0,S(8,'1/3'),2,'2','∛8 = 2.'],['Q1e',0,S(100,'1/2'),10,'10','√100 = 10.'],
 ['Q1f',1,S(9,'1.5'),27,'27','1.5 = 3/2. √9 = 3, then 3³ = 27.'],['Q1g',1,S(16,'3/4'),8,'8','4th root of 16 = 2, then 2³ = 8.'],['Q1h',1,S(125,'2/3'),25,'25','∛125 = 5, then 5² = 25.'],['Q1i',1,S(32,'4/5'),16,'16','5th root of 32 = 2, then 2⁴ = 16.'],
 ['Q1j',0,S(36,'1/2'),6,'6','√36 = 6.'],['Q1k',0,S(64,'1/2'),8,'8','√64 = 8.'],['Q1l',0,S(121,'1/2'),11,'11','√121 = 11.'],['Q1m',1,S(27,'2/3'),9,'9','∛27 = 3, then 3² = 9.'],['Q1n',1,S(81,'3/4'),27,'27','4th root of 81 = 3, then 3³ = 27.'],
 ['Q1o',1,S(1000,'2/3'),100,'100','∛1000 = 10, then 10² = 100.'],['Q1p',1,S(32,'0.6'),8,'8','0.6 = 3/5. 5th root of 32 = 2, then 2³ = 8.'],['Q1q',1,S(4,'1.5'),8,'8','1.5 = 3/2. √4 = 2, then 2³ = 8.'],['Q1r',1,S(4,'2.5'),32,'32','2.5 = 5/2. √4 = 2, then 2⁵ = 32.'],
 ['Q1s',1,S(81,'0.25'),3,'3','0.25 = 1/4. The 4th root of 81 is 3.'],['Q1t',1,S(5,'−1'),1/5,'1/5','5<sup>−1</sup> = 1/5.'],['Q1u',2,`(${F(1,4)})<sup>−2</sup>`,16,'16','Flip: 4² = 16.'],['Q1v',2,S(8,'−1/3'),1/2,'1/2','8<sup>1/3</sup> = 2, so 8<sup>−1/3</sup> = 1/2.'],
 ['Q1w',2,S(9,'−0.5'),1/3,'1/3','9<sup>0.5</sup> = 3, so 9<sup>−0.5</sup> = 1/3.'],['Q1x',2,S(16,'−0.25'),1/2,'1/2','16<sup>0.25</sup> = 2, so 16<sup>−0.25</sup> = 1/2.'],['Q1y',2,S(32,'−0.8'),1/16,'1/16','0.8 = 4/5. 5th root of 32 = 2, 2⁴ = 16, so 1/16.'],['Q1z',2,S(16,'−1.5'),1/64,'1/64','1.5 = 3/2. √16 = 4, 4³ = 64, so 1/64.'],
 ['Q2a',1,`(${F(1,4)})<sup>1/2</sup>`,1/2,'1/2','√1 / √4 = 1/2.'],['Q2b',2,`(${F(1,8)})<sup>−2/3</sup>`,4,'4','Flip: 8<sup>2/3</sup>. ∛8 = 2, 2² = 4.'],['Q2c',2,`(25)<sup>−2.5</sup>`,1/3125,'1/3125','2.5 = 5/2. √25 = 5, 5⁵ = 3125, so 1/3125.'],
 ['Q2d',2,`(${F(1,16)})<sup>−1/4</sup>`,2,'2','Flip: 16<sup>1/4</sup> = 2.'],['Q2e',1,S(7,0),1,'1','Anything to the power 0 is 1.'],['Q2f',2,`(${F(4,5)})<sup>−2</sup>`,25/16,'25/16','Flip: (5/4)² = 25/16.'],['Q2g',2,`(${F(4,7)})<sup>−2</sup>`,49/16,'49/16','Flip: (7/4)² = 49/16.'],
 ['Q2h',2,`${S(5,'−2')} × ${S(4,3)}`,64/25,'64/25','5<sup>−2</sup> = 1/25 and 4³ = 64, so 64/25.'],['Q2i',2,`${S(2,'−3')} ÷ ${S(3,'−3')}`,27/8,'27/8','1/8 ÷ 1/27 = 27/8.'],
 ['Q2j',3,`${S(3,4)} ÷ (${F(1,3)})<sup>−4</sup>`,1,'1','(1/3)<sup>−4</sup> = 3⁴ = 81, so 81 ÷ 81 = 1.'],['Q2k',3,`(${F(4,9)})<sup>−2</sup> × (${F(27,8)})<sup>−3</sup>`,32/243,'32/243','(9/4)² = 81/16 and (8/27)³ = 512/19683. 81/16 × 512/19683 = 32/243.'],
 ['Q2l',3,`${S(78,'−1')} × ${S(13,3)}`,169/6,'169/6','1/78 × 2197 = 2197/78. Divide top and bottom by 13: 169/6.']]
 .forEach(([p,lv,h,v,d,w])=>ev(lv,p,h,v,d,w));
const IF='Type it as a power, for example a^8, a^-2 or 3a^3.';
const ix=(lv,p,h,a,w,alt=[])=>W(lv,`${I2} ${p}`,`Express ${h} in index form.`,a,'Multiply indices for a power of a power; add them when multiplying; subtract them when dividing. A root is a fractional power.',w,{alt,h:IF});
ix(1,'Q3a',`(${S('a',16)})<sup>1/2</sup>`,'a^8','16 × ½ = 8, so a⁸.');
ix(1,'Q3b',`(${S('a',15)})<sup>1/3</sup>`,'a^5','15 × ⅓ = 5, so a⁵.');
ix(2,'Q3c',`(27${S('a',9)})<sup>1/3</sup>`,'3a^3','∛27 = 3 and 9 × ⅓ = 3, so 3a³.');
ix(1,'Q3d',`(${S('x',32)})<sup>1/4</sup>`,'x^8','32 × ¼ = 8, so x⁸.');
ix(1,'Q3e',`(${S('x',20)})<sup>1/4</sup>`,'x^5','20 × ¼ = 5, so x⁵.');
ix(1,'Q3f',`${S('a','−2')} ÷ ${S('a','−4')}`,'a^2','−2 − (−4) = 2, so a².');
ix(1,'Q3g',`${S('a',4)} × ${S('a','−5')}`,'a^-1','4 + (−5) = −1, so a<sup>−1</sup>.',['1/a','a^(-1)']);
ix(2,'Q3h',`(${S('a',2)})<sup>−1/2</sup>`,'a^-1','2 × (−½) = −1, so a<sup>−1</sup>.',['1/a','a^(-1)']);
ix(1,'Q3i',`(${S('a','−4')})<sup>2</sup>`,'a^-8','−4 × 2 = −8, so a<sup>−8</sup>.',['1/a^8','a^(-8)']);
ix(1,'Q3j',`${S('a','−4')} × ${S('a',4)}`,'a^0','−4 + 4 = 0, so a⁰ (which equals 1).',['1']);
ix(1,'Q3k',`(${S('a','1/2')})<sup>4</sup>`,'a^2','½ × 4 = 2, so a².');
ix(2,'Q3l',`(${S('a',16)})<sup>−1/4</sup>`,'a^-4','16 × (−¼) = −4, so a<sup>−4</sup>.',['1/a^4','a^(-4)']);
const sv=(lv,p,eq,a,d,w)=>W(lv,`${I2} ${p}`,`Solve ${eq}`,a,'Write both sides with the same base, or undo the power: a square needs a square root (±), a cube needs a cube root, and a negative or fractional power needs flipping or raising to the reciprocal power.',w,{d,h:Array.isArray(a)?'Give every answer, for example 3 or -3.':'Fractions like 1/25 are fine.'});
sv(0,'Q4a',`${S(3,'x')} = 81`,4,'x = 4','81 = 3⁴, so x = 4.');
sv(0,'Q4b',`${S(4,'x')} = 64`,3,'x = 3','64 = 4³, so x = 3.');
sv(0,'Q4c',`${S(5,'x')} = 125`,3,'x = 3','125 = 5³, so x = 3.');
sv(0,'Q4d',`${S(7,'x')} = 49`,2,'x = 2','49 = 7², so x = 2.');
sv(0,'Q4e',`${S(2,'x')} = 32`,5,'x = 5','32 = 2⁵, so x = 5.');
sv(0,'Q4f',`${S(2,'x')} = 64`,6,'x = 6','64 = 2⁶, so x = 6.');
sv(0,'Q4g',`${S('x',3)} = 27`,3,'x = 3','∛27 = 3.');
sv(0,'Q4h',`${S('x',3)} = 64`,4,'x = 4','∛64 = 4.');
sv(0,'Q4i',`${S('x',5)} = 32`,2,'x = 2','The 5th root of 32 is 2.');
sv(1,'Q4j',`5${S('x',2)} = 45`,[3,-3],'x = 3 or x = −3','x² = 9, so x = ±3.');
sv(1,'Q4k',`3${S('x',3)} = 24`,2,'x = 2','x³ = 8, so x = 2.');
sv(1,'Q4l',`4${S('x',4)} = 324`,[3,-3],'x = 3 or x = −3','x⁴ = 81, so x = ±3.');
sv(1,'Q4m',`5${S('x',3)} = 320`,4,'x = 4','x³ = 64, so x = 4.');
sv(1,'Q4n',`${S('x','1/2')} = 3`,9,'x = 9','√x = 3, so x = 9.');
sv(2,'Q4o',`${S('x','−4')} = 256`,[0.25,-0.25],'x = 1/4 or x = −1/4','1/x⁴ = 256, so x⁴ = 1/256 and x = ±1/4.');
sv(2,'Q4p',`${S('x','−1/2')} = 5`,0.04,'x = 1/25','1/√x = 5, so √x = 1/5 and x = 1/25.');
sv(1,'Q4q',`${S(2,'x')} = 1`,0,'x = 0','2⁰ = 1, so x = 0.');
sv(1,'Q4r',`${S(3,'−x')} = 1`,0,'x = 0','3⁰ = 1, so −x = 0 and x = 0.');
const sp=(lv,p,h,a,w,alt=[],hint=IF)=>W(lv,`${I2} ${p}`,`Simplify ${h}`,a,'Deal with each part separately: numbers, then each letter. Use the index laws, and remember a root is a fractional power.',w,{alt,h:hint});
sp(2,'Q5a',`(${F(`16${S('a',4)}`,S('b',4))})<sup>3/4</sup>`,'8a^3/b^3','16<sup>3/4</sup> = 8, (a⁴)<sup>3/4</sup> = a³, (b⁴)<sup>3/4</sup> = b³. Answer 8a³/b³.',['(8a^3)/(b^3)','8a^3b^-3','8(a/b)^3'],'Type it like 8a^3/b^3.');
W(3,`${I2} Q5b`,`Simplify (${F(S('a',2),`25${S('b',3)}`)})<sup>−3/2</sup>`,'125b^(9/2)/a^3','Flip for the negative, then apply the power 3/2 to every part.','(25b³/a²)<sup>3/2</sup> = 125 b<sup>9/2</sup> / a³.',{c:['125b^(9/2)/a^3','125a^3/b^(9/2)','b^(9/2)/(125a^3)','15b^(9/2)/a^3']});
sp(2,'Q5c',F(`12${S('x',3)}√x`,`4${S('x',2)}`),'3x^(3/2)','√x = x<sup>½</sup>. 12/4 = 3 and x<sup>3 + ½ − 2</sup> = x<sup>3/2</sup>.',['3x^1.5','3x^3/2','3x√x']);
W(3,`${I2} Q5d`,`Simplify ${F('√(4z)',S('z',3))}`,'2z^(-5/2)','√(4z) = 2z<sup>½</sup>. Then subtract the indices.','2z<sup>½ − 3</sup> = 2z<sup>−5/2</sup>.',{c:['2z^(-5/2)','2z^(-3/2)','4z^(-5/2)','2z^(5/2)']});
sp(2,'Q5g',`(16${S('w',20)})<sup>1/4</sup>`,'2w^5','16<sup>¼</sup> = 2 and 20 × ¼ = 5, so 2w⁵.');
sp(2,'Q5h',`(32${S('q',10)})<sup>1/5</sup>`,'2q^2','32<sup>⅕</sup> = 2 and 10 × ⅕ = 2, so 2q².');
sp(2,'Q5i',F(`(${S('x',2)})<sup>−3</sup>`,`${S('x',3)} × ${S('x','−1')}`),'x^-8','Top: x<sup>−6</sup>. Bottom: x². x<sup>−6 − 2</sup> = x<sup>−8</sup>.',['1/x^8','x^(-8)']);
sp(3,'Q5j',F(`(4${S('a','−3')})<sup>3</sup>`,`2${S('a',4)} × 4${S('a',2)}`),'8a^-15','Top: 64a<sup>−9</sup>. Bottom: 8a⁶. 64 ÷ 8 = 8 and a<sup>−9 − 6</sup> = a<sup>−15</sup>.',['8/a^15','8a^(-15)']);

/* ===================== QUADRATICS: FACTORISATION ===================== */
topic('Quadratics');
const QF='Quad Factorisation';
const ROOTS='Give both answers, for example 3 or -5. Fractions like 3/2 are fine.';
const FM='Rearrange so one side is 0, factorise, then set each bracket equal to 0.';
/* qs(level, ref, equation html, [a,b,c] of the rearranged form, roots, display, working) */
const qs=(lv,ref,eq,abc,roots,d,w,o={})=>W(lv,ref,`Solve ${eq}`,roots,o.m||FM,w,{d,h:ROOTS,abc,...o});
[['a',0,'x² + 2x − 35 = 0',[1,2,-35],[5,-7],'(x + 7)(x − 5)'],['b',0,'x² − 15x − 54 = 0',[1,-15,-54],[18,-3],'(x − 18)(x + 3)'],['c',0,'x² − x − 90 = 0',[1,-1,-90],[10,-9],'(x − 10)(x + 9)'],
 ['d',0,'x² + 15x + 54 = 0',[1,15,54],[-6,-9],'(x + 6)(x + 9)'],['e',0,'x² + 20x + 51 = 0',[1,20,51],[-3,-17],'(x + 3)(x + 17)'],['f',0,'x² − 12x + 32 = 0',[1,-12,32],[4,8],'(x − 4)(x − 8)'],
 ['g',1,'x² − 24x + 143 = 0',[1,-24,143],[11,13],'(x − 11)(x − 13)'],['h',1,'x² − 17x + 60 = 0',[1,-17,60],[5,12],'(x − 5)(x − 12)'],['i',1,'x² − 14x − 176 = 0',[1,-14,-176],[22,-8],'(x − 22)(x + 8)'],
 ['j',1,'x² − 26x + 133 = 0',[1,-26,133],[7,19],'(x − 7)(x − 19)'],['k',1,'x² + 7x − 44 = 0',[1,7,-44],[-11,4],'(x + 11)(x − 4)'],['l',1,'x² + 2x − 195 = 0',[1,2,-195],[-15,13],'(x + 15)(x − 13)'],
 ['m',2,'2x² − 5x + 3 = 0',[2,-5,3],[1.5,1],'(2x − 3)(x − 1)','3/2','1'],['n',2,'2x² − 7x − 9 = 0',[2,-7,-9],[4.5,-1],'(2x − 9)(x + 1)','9/2','−1'],['o',2,'2x² + 13x + 6 = 0',[2,13,6],[-0.5,-6],'(2x + 1)(x + 6)','−1/2','−6']]
 .forEach(([p,lv,eq,abc,r,f,d1,d2])=>{const a=d1||m(r[0]),b=d2||m(r[1]);qs(lv,`${QF} Q1${p}`,eq,abc,r,`x = ${a} or x = ${b}`,`${eq.replace(' = 0','')} = ${f} = 0, so x = ${a} or x = ${b}.`)});
[['a',1,'y² = y + 56','y² − y − 56 = 0',[1,-1,-56],[8,-7],'(y − 8)(y + 7)','8','−7','y'],
 ['b',2,'12w² = 13w − 3','12w² − 13w + 3 = 0',[12,-13,3],[0.75,1/3],'(4w − 3)(3w − 1)','3/4','1/3','w'],
 ['c',2,'11y = −4 − 6y²','6y² + 11y + 4 = 0',[6,11,4],[-4/3,-0.5],'(3y + 4)(2y + 1)','−4/3','−1/2','y'],
 ['d',1,'c(c − 1) = 2','c² − c − 2 = 0',[1,-1,-2],[2,-1],'(c − 2)(c + 1)','2','−1','c'],
 ['e',1,'q² = −2(q − 4)','q² + 2q − 8 = 0',[1,2,-8],[-4,2],'(q + 4)(q − 2)','−4','2','q'],
 ['f',1,'d(d + 2) = 3','d² + 2d − 3 = 0',[1,2,-3],[-3,1],'(d + 3)(d − 1)','−3','1','d'],
 ['g',1,'x(x − 5) = 84','x² − 5x − 84 = 0',[1,-5,-84],[12,-7],'(x − 12)(x + 7)','12','−7','x'],
 ['h',2,'y(5y + 27) = 18','5y² + 27y − 18 = 0',[5,27,-18],[0.6,-6],'(5y − 3)(y + 6)','3/5','−6','y'],
 ['i',1,'3p² = 6p(2 + p)','3p² + 12p = 0',[3,12,0],[0,-4],'3p(p + 4)','0','−4','p'],
 ['j',2,'2x(4x + 5) = 3','8x² + 10x − 3 = 0',[8,10,-3],[0.25,-1.5],'(4x − 1)(2x + 3)','1/4','−3/2','x'],
 ['k',2,'13x = 2(2x² + 5)','4x² − 13x + 10 = 0',[4,-13,10],[1.25,2],'(4x − 5)(x − 2)','5/4','2','x'],
 ['l',2,'2(10 − x²) = 3x','2x² + 3x − 20 = 0',[2,3,-20],[2.5,-4],'(2x − 5)(x + 4)','5/2','−4','x'],
 ['m',2,'4y − 3 = 3y(y − 2)','3y² − 10y + 3 = 0',[3,-10,3],[1/3,3],'(3y − 1)(y − 3)','1/3','3','y'],
 ['n',2,'−12y − 9(y + 1) = 6y²','6y² + 21y + 9 = 0',[6,21,9],[-0.5,-3],'3(2y + 1)(y + 3)','−1/2','−3','y'],
 ['o',1,'(a + 4)(a − 2) = −5','a² + 2a − 3 = 0',[1,2,-3],[-3,1],'(a + 3)(a − 1)','−3','1','a'],
 ['p',2,'(3x − 4)(x − 4) = −5','3x² − 16x + 21 = 0',[3,-16,21],[7/3,3],'(3x − 7)(x − 3)','7/3','3','x']]
 .forEach(([p,lv,eq,re,abc,r,f,a,b,v])=>qs(lv,`${QF} Q2${p}`,eq,abc,r,`${v} = ${a} or ${v} = ${b}`,`Rearrange: ${re}. Factorise: ${f} = 0, so ${v} = ${a} or ${v} = ${b}.`));
const SQ='Get the squared term on its own, then square root both sides. Remember the ± (two answers).';
[['a',0,'x² = 25',5,'5','x','x² = 25'],['b',0,'a² = 36',6,'6','a','a² = 36'],['c',0,`y² = ${F(49,4)}`,3.5,'7/2','y','y² = 49/4'],['d',0,'b² − 16 = 0',4,'4','b','b² = 16'],['e',0,'a² − 64 = 0',8,'8','a','a² = 64'],
 ['f',1,`x² − ${F(4,81)} = 0`,2/9,'2/9','x','x² = 4/81'],['g',0,'4y² = 9',1.5,'3/2','y','y² = 9/4'],['h',0,'2x² = 32',4,'4','x','x² = 16'],['i',0,'3p² − 27 = 0',3,'3','p','p² = 9'],['j',0,'5p² − 20 = 0',2,'2','p','p² = 4'],
 ['k',1,'25b² − 40 = 9',1.4,'7/5','b','25b² = 49, b² = 49/25'],['l',0,'3b² − 8 = 4',2,'2','b','3b² = 12, b² = 4']]
 .forEach(([p,lv,eq,r,d,v,w])=>qs(lv,`${QF} Q3${p}`,eq,null,[r,-r],`${v} = ${d} or ${v} = −${d}`,`${w}, so ${v} = ±${d}.`,{m:SQ}));
V(1,`${QF} Q4`,'The area of a parallelogram is 50 cm². The base is twice its height. Calculate the height in cm.',5,'5 cm','Let the height be h, so the base is 2h. Area = base × height.','2h × h = 50 → 2h² = 50 → h² = 25 → h = 5 cm (a length must be positive).');
W(2,`${QF} Q5`,'The breadth of a rectangular plot of land is 5 m less than its length. The area of the plot is 104 m². Find the length and the breadth in metres.',[13,8],'Let the length be L, so the breadth is L − 5. Form a quadratic from length × breadth = area.','L(L − 5) = 104 → L² − 5L − 104 = 0 → (L − 13)(L + 8) = 0 → L = 13 (a length must be positive). Length 13 m, breadth 8 m.',{d:'length 13 m, breadth 8 m',h:'Give both numbers, for example 13, 8.'});
const ADV='Advanced';
[['a','(3x + 2)(2x + 1) = 1','6x² + 7x + 1 = 0',[6,7,1],[-1/6,-1],'(6x + 1)(x + 1)','−1/6','−1'],
 ['b','9n² − 27n + 20 = 0','9n² − 27n + 20 = 0',[9,-27,20],[4/3,5/3],'(3n − 4)(3n − 5)','4/3','5/3','n'],
 ['c','(3x − 4)(x − 2) − 5 = 0','3x² − 10x + 3 = 0',[3,-10,3],[1/3,3],'(3x − 1)(x − 3)','1/3','3'],
 ['d','2(4x + 1)(x − 1) + 3 = 0','8x² − 6x + 1 = 0',[8,-6,1],[0.25,0.5],'(4x − 1)(2x − 1)','1/4','1/2'],
 ['e',`(3x − 2)(3x + 1) = −${F(1,2)}(21x + 6)`,'18x² + 15x + 2 = 0 (after multiplying by 2)',[18,15,2],[-1/6,-2/3],'(6x + 1)(3x + 2)','−1/6','−2/3'],
 ['f',`x − 2 = ${F(4,'x + 1')}`,'(x − 2)(x + 1) = 4 → x² − x − 6 = 0',[1,-1,-6],[3,-2],'(x − 3)(x + 2)','3','−2'],
 ['g',`3x − 1 = ${F(4,'2x + 1')}`,'(3x − 1)(2x + 1) = 4 → 6x² + x − 5 = 0',[6,1,-5],[5/6,-1],'(6x − 5)(x + 1)','5/6','−1'],
 ['h',`${F(4,9)} − ${F('d²',25)} = 0`,'d² = 100/9',[9,0,-100],[10/3,-10/3],'d = ±√(100/9)','10/3','−10/3','d'],
 ['j',`${F(1,2)}x² − ${F(11,4)}x + ${F(5,4)} = 0`,'multiply by 4: 2x² − 11x + 5 = 0',[2,-11,5],[0.5,5],'(2x − 1)(x − 5)','1/2','5'],
 ['k',`${F(3,'x + 1')} − ${F(1,2)} = ${F(2,'3x − 1')}`,'multiply by 2(x + 1)(3x − 1): 6(3x − 1) − (x + 1)(3x − 1) = 4(x + 1) → x² − 4x + 3 = 0',[1,-4,3],[1,3],'(x − 1)(x − 3)','1','3']]
 .forEach(([p,eq,re,abc,r,f,a,b,v='x'])=>qs(3,`${QF} ${ADV} Q6${p}`,eq,abc,r,`${v} = ${a} or ${v} = ${b}`,`${re}. Factorise: ${f} = 0, so ${v} = ${a} or ${v} = ${b}.`));
{const D=Math.sqrt(336),r1=Math.round((-18+D)/6*100)/100,r2=Math.round((-18-D)/6*100)/100;
 qs(3,`${QF} ${ADV} Q6i`,'(3s + 1)(s + 4) = −5(s − 1). Give your answers to 2 decimal places.',[3,18,-1],[r1,r2],`s = ${m(r1)} or s = ${m(r2)}`,`Expand: 3s² + 13s + 4 = −5s + 5 → 3s² + 18s − 1 = 0. This does not factorise, so use the formula: s = (−18 ± √336)/6, so s = ${m(r1)} or s = ${m(r2)}.`,{m:'Expand and rearrange to = 0. If it does not factorise, use the quadratic formula.',h:'Give both answers to 2 d.p., for example 0.25 or -3.75.'});}
W(3,`${QF} ${ADV} Q6l`,'Solve √2x² + 7x + 5√2 = 0','x = −√2 or x = −5√2/2','Look for factors (√2x + p)(x + q) with pq = 5√2, or use the formula: b² − 4ac = 49 − 40 = 9.','(√2x + 5)(x + √2) = 0, so x = −5/√2 = −5√2/2 or x = −√2.',{c:['x = −√2 or x = −5√2/2','x = √2 or x = 5√2/2','x = −√2 or x = −5','x = −2 or x = −5/2']});
W(3,`${QF} ${ADV} Q6m`,'Solve 3a²x² + 8abx + 4b² = 0, where a and b are constants and a ≠ 0.','x = −2b/(3a) or x = −2b/a','Treat it as a quadratic in x. Find two terms that multiply to 3a² × 4b² = 12a²b² and add to 8ab: 6ab and 2ab.','(3ax + 2b)(ax + 2b) = 0, so x = −2b/(3a) or x = −2b/a.',{c:['x = −2b/(3a) or x = −2b/a','x = 2b/(3a) or x = 2b/a','x = −3a/(2b) or x = −a/(2b)','x = −2b/(3a) or x = −b/(2a)']});
V(3,`${QF} ${ADV} Q6n`,`Solve ${F('3x','x − 1')} + ${F(1,'x − 2')} + ${F('4x − 1','(x − 1)(x − 2)')} = 0`,-2/3,'x = −2/3','Multiply every term by (x − 1)(x − 2), solve the quadratic, then reject any value that makes a denominator 0.','3x(x − 2) + (x − 1) + (4x − 1) = 0 → 3x² − x − 2 = 0 → (3x + 2)(x − 1) = 0. x = 1 makes x − 1 = 0, so it is rejected. x = −2/3.',{h:'Give the valid solution, for example -2/3.'});

/* ===================== QUADRATICS: COMPLETING THE SQUARE ===================== */
const CS='Completing sq';
const r2=(x,n)=>Math.round(x*10**n+1e-9)/10**n;
const cs=(lv,ref,eq,v,a,b,c,dp)=>{const D=Math.sqrt(b*b-4*a*c),x1=r2((-b+D)/(2*a),dp),x2=r2((-b-D)/(2*a),dp),h=b/(2*a),k=h*h-c/a,f=x=>m(+x.toFixed(4));
  const rr=[x1,x2],ds=rr.map(x=>x.toFixed(dp).replace('-','−'));
  W(lv,ref,`Solve ${eq} by completing the square. Give your answers correct to ${dp} decimal place${dp>1?'s':''}.`,rr,`${a!=1?`Divide every term by ${a} first. `:''}Halve the coefficient of ${v}, write (${v} + half)², subtract half², then rearrange and square root (±).`,
  `${a!=1?`${v}² ${sg(+(b/a).toFixed(4))}${v} ${sg(+(c/a).toFixed(4))} = 0. `:''}(${v} ${sg(+h.toFixed(4))})² = ${f(k)}, so ${v} = ${f(-h)} ± √${f(k)}. ${v} = ${ds[0]} or ${v} = ${ds[1]}.`,{d:`${v} = ${ds[0]} or ${v} = ${ds[1]}`,abc:[a,b,c],h:`Give both answers to ${dp} d.p., for example ${dp==1?'0.7 or -2.7':'0.85 or -2.35'}.`})};
cs(2,`${CS} Q1a`,'x² + 2x − 2 = 0','x',1,2,-2,1);cs(2,`${CS} Q1b`,'x² − 4x + 2 = 0','x',1,-4,2,1);cs(2,`${CS} Q1c`,'y² − 3y − 4 = 0','y',1,-3,-4,1);
cs(2,`${CS} Q1d`,'y² + 9y + 1 = 0','y',1,9,1,1);cs(2,`${CS} Q1e`,'t² − 4t − 4 = 0','t',1,-4,-4,1);cs(2,`${CS} Q1f`,'p² − 5p + 1 = 0','p',1,-5,1,1);
cs(3,`${CS} Q2a`,'2y² + 3y − 4 = 0','y',2,3,-4,2);cs(3,`${CS} Q2b`,'2t² − 2t − 3 = 0','t',2,-2,-3,2);cs(3,`${CS} Q2c`,'2p² − 3p − 1 = 0','p',2,-3,-1,2);
cs(3,`${CS} Q2d`,'3x² + 2x − 3 = 0','x',3,2,-3,2);cs(3,`${CS} Q2e`,'15x² − 30x + 10 = 0','x',15,-30,10,2);cs(3,`${CS} Q2f`,'5y² = 9y − 1','y',5,-9,1,2);
cs(3,`${CS} Q2g`,'2x² = 11x + 7','x',2,-11,-7,2);cs(3,`${CS} Q2h`,'2x = 8 − 5x²','x',5,2,-8,2);
const SQH='Type it like (x + 3)^2 - 4, or use the ² button.';
const sqf=(lv,ref,q,a,w,alt=[],h=SQH)=>W(lv,ref,q,a,'Halve the coefficient of x to find the number in the bracket, then subtract its square from the constant. If x² has a number in front, take it out as a factor first.',w,{alt,h});
sqf(1,`${CS} Q3`,'Write x² + 4x + 5 in the form (x + a)² + b.','(x + 2)² + 1','Half of 4 is 2. (x + 2)² = x² + 4x + 4, so b = 5 − 4 = 1.');
W(2,`${CS} Q4`,'For all values of x, x² − 10x + 7 = (x − p)² − q. Find p and q.','5,18','Halve −10 to get p, then compare constants.','(x − 5)² = x² − 10x + 25, so x² − 10x + 7 = (x − 5)² − 18. p = 5, q = 18.',{d:'p = 5, q = 18',h:PAIR});
W(2,`${CS} Q5`,'Solve (x − 7)² − 5 = 0. Write your answer in the form a ± √b.','7 ± √5','Add 5 to both sides, square root (±), then add 7.','(x − 7)² = 5 → x − 7 = ±√5 → x = 7 ± √5.',{c:['7 ± √5','−7 ± √5','7 ± 5','5 ± √7']});
W(3,`${CS} Q6`,'By completing the square, solve x² + 10x − 3 = 0. Give your answer in the form p ± √q.','−5 ± √28','Half of 10 is 5. Write (x + 5)², subtract 25, then rearrange and square root.','(x + 5)² − 25 − 3 = 0 → (x + 5)² = 28 → x = −5 ± √28 (= −5 ± 2√7).',{c:['−5 ± √28','5 ± √28','−5 ± √22','−10 ± √28']});
sqf(2,`${CS} Q7a`,'Write x² + 14x − 9 in the form (x + a)² + b.','(x + 7)² − 58','Half of 14 is 7. (x + 7)² = x² + 14x + 49, so b = −9 − 49 = −58.');
W(2,`${CS} Q7b`,'Write down the coordinates of the turning point of y = x² + 14x − 9.','(-7,-58)','Complete the square: y = (x + a)² + b has its turning point at (−a, b).','y = (x + 7)² − 58, so the turning point is (−7, −58).',{d:'(−7, −58)',h:'Type the coordinates like (2, -5).'});
W(3,`${CS} Q8`,'6x − 7 − x² = p − (x + q)² where p and q are integers. Find p and q.','2,-3','Take out −1 from the x terms: −(x² − 6x) − 7, then complete the square inside the bracket.','−(x² − 6x) − 7 = −[(x − 3)² − 9] − 7 = 2 − (x − 3)². So p = 2, q = −3.',{d:'p = 2, q = −3',h:PAIR});
sqf(2,`${CS} Q9a`,'Write x² − 6x − 3 in the form (x + a)² + b.','(x − 3)² − 12','Half of −6 is −3. (x − 3)² = x² − 6x + 9, so b = −3 − 9 = −12.');
W(2,`${CS} Q9b`,'Solve x² − 6x − 3 = 0. Write your answer in the form p ± √q.','3 ± √12','Use the completed square from part (a): (x − 3)² = 12.','(x − 3)² − 12 = 0 → x − 3 = ±√12 → x = 3 ± √12 (= 3 ± 2√3).',{c:['3 ± √12','−3 ± √12','3 ± √6','3 ± 12']});
sqf(3,`${CS} Q10`,'Write 2x² + 8x + 13 in the form a(x + b)² + c.','2(x + 2)² + 5','Take out 2 from the x terms: 2(x² + 4x) + 13 = 2[(x + 2)² − 4] + 13 = 2(x + 2)² + 5.',[],'Type it like 2(x + 3)^2 - 5.');
sqf(3,`${CS} Q11a`,'Write 2x² − 12x + 17 in the form a(x − b)² + c.','2(x − 3)² − 1','2(x² − 6x) + 17 = 2[(x − 3)² − 9] + 17 = 2(x − 3)² − 1.',[],'Type it like 2(x - 3)^2 + 5.');
W(3,`${CS} Q11b`,'Write down the coordinates of the turning point of y = 2x² − 12x + 17.','(3,-1)','Use the completed square from part (a).','y = 2(x − 3)² − 1, so the turning point is (3, −1).',{d:'(3, −1)',h:'Type the coordinates like (2, -5).'});
W(1,`${CS} Q12`,'x² + hx + 15 = (x + 3)² + k. Find h and k.','6,6','Expand the right-hand side and compare coefficients.','(x + 3)² + k = x² + 6x + 9 + k. So h = 6 and 9 + k = 15 → k = 6.',{d:'h = 6, k = 6',h:PAIR});
W(3,`${CS} Q13`,'2x² − 20x + 10 = p(x − q)² − r. Find p, q and r.','2,5,40','Take out 2: 2(x² − 10x) + 10, then complete the square.','2[(x − 5)² − 25] + 10 = 2(x − 5)² − 40. p = 2, q = 5, r = 40.',{d:'p = 2, q = 5, r = 40',h:'Type the values in order, separated by commas, for example 2, 5, 40.'});
W(1,`${CS} Q14a`,'x² − 8x + 21 can be written as (x − a)² + b. Find a and b.','4,5','Halve −8 to find a, then compare constants.','(x − 4)² = x² − 8x + 16, so b = 21 − 16 = 5. a = 4, b = 5.',{d:'a = 4, b = 5',h:PAIR});
W(2,`${CS} Q14b`,'The curve y = x² − 8x + 21 has a minimum point M. Write down the coordinates of M.','(4,5)','Use the completed square (x − 4)² + 5.','The minimum is when x − 4 = 0, so M = (4, 5).',{d:'(4, 5)',h:'Type the coordinates like (2, -5).'});
sqf(2,`${CS} Q15a`,'Write x² + 6x + 13 in the form (x + a)² + b.','(x + 3)² + 4','Half of 6 is 3. (x + 3)² = x² + 6x + 9, so b = 13 − 9 = 4.');
W(2,`${CS} Q15b`,'Write down the coordinates of the turning point of y = x² + 6x + 13.','(-3,4)','Use the completed square (x + 3)² + 4.','The turning point is (−3, 4).',{d:'(−3, 4)',h:'Type the coordinates like (2, -5).'});
W(2,`${CS} Q15c`,'How many solutions does x² + 6x + 13 = 0 have?','None: the minimum point (−3, 4) is above the x-axis','Use the turning point from part (b). If the lowest point of a U-shaped curve is above the x-axis, the curve never crosses it.','The minimum point (−3, 4) is above the x-axis, so the curve never meets y = 0: there are no (real) solutions.',{c:['None: the minimum point (−3, 4) is above the x-axis','One: the curve touches the x-axis at (−3, 0)','Two: the curve crosses the x-axis twice','Two: because 13 is positive']});
sqf(3,`${CS} Q16a`,'Write 3x² − 12x − 1 in the form a(x − b)² + c.','3(x − 2)² − 13','3(x² − 4x) − 1 = 3[(x − 2)² − 4] − 1 = 3(x − 2)² − 13.',[],'Type it like 3(x - 2)^2 + 5.');
V(3,`${CS} Q16b`,'Find the minimum value of y = 3x² − 12x − 1.',-13,'−13','Use the completed square 3(x − 2)² − 13. The squared part is never negative.','The smallest value of 3(x − 2)² is 0 (when x = 2), so the minimum value of y is −13.');
V(3,`${CS} Q16c`,'Find the equation of the line of symmetry of the curve y = 3x² − 12x − 1. Give the value of x.',2,'x = 2','The line of symmetry passes through the turning point.','The turning point is at x = 2, so the line of symmetry is x = 2.',{h:'Type it like x = 3.'});
sqf(2,`${CS} Q17`,'Write x² + 5x + 9 in the form (x + a)² + b.','(x + 5/2)² + 11/4','Half of 5 is 5/2. (x + 5/2)² = x² + 5x + 25/4, so b = 9 − 25/4 = 11/4.',['(x+2.5)^2+2.75','(x+5/2)^2+2.75','(x+2.5)^2+11/4'],'Type it like (x + 5/2)^2 + 11/4 (decimals are fine).');
W(3,`${CS} Q18`,'x² + px + 4 = (x + q)² − 5. Find p and q (give the positive values).','6,3','Expand the right-hand side and compare coefficients.','(x + q)² − 5 = x² + 2qx + q² − 5. So q² − 5 = 4 → q² = 9 → q = 3 (or −3), and p = 2q = 6 (or −6).',{d:'p = 6, q = 3 (or p = −6, q = −3)',alt:['-6,-3'],h:PAIR});
V(3,`${CS} Q19`,'x² + 4x + p = (x + 2)² + 3p. Find the value of p.',-2,'p = −2','Expand the right-hand side and compare the constant terms.','(x + 2)² + 3p = x² + 4x + 4 + 3p. So p = 4 + 3p → −2p = 4 → p = −2.',{h:'Type the value, for example -3.'});
W(2,`${CS} Q20a`,'f(x) = x² − 4x − 5. The minimum point of y = f(x) is M. Find the coordinates of M.','(2,-9)','Complete the square.','x² − 4x − 5 = (x − 2)² − 9, so M = (2, −9).',{d:'(2, −9)',h:'Type the coordinates like (2, -5).'});
qs(2,`${CS} Q20b`,'f(x) = x² − 4x − 5 = 0 to find the x-coordinates of P and Q, where the curve crosses the x-axis.',[1,-4,-5],[-1,5],'x = −1 or x = 5','x² − 4x − 5 = (x − 5)(x + 1) = 0, so P = (−1, 0) and Q = (5, 0).',{m:'The curve crosses the x-axis where f(x) = 0. Factorise.'});
V(1,`${CS} Q20c`,'f(x) = x² − 4x − 5. The curve crosses the y-axis at R. Find the y-coordinate of R.',-5,'−5','The curve crosses the y-axis where x = 0.','f(0) = −5, so R = (0, −5).');

/* ===================== QUADRATICS: PROBABILITY (scanned exam questions) ===================== */
const PB='Probability scan';
const PM='Write the probability using the counters (multiply the two probabilities; without replacement the second has one fewer counter). Set it equal to the given value, then clear fractions and solve the quadratic (or linear) equation. Reject answers that are impossible.';
V(3,`${PB} Q1`,`There are some red counters and some blue counters in a bag. The ratio of red to blue is 3 : 1. Two counters are removed at random. The probability that both are blue is ${F(1,20)}. How many counters were in the bag before any were removed?`,16,'16',PM,'Red 3x, blue x, total 4x. P(B,B) = x/(4x) × (x − 1)/(4x − 1) = (x − 1)/(4(4x − 1)) = 1/20 → 20(x − 1) = 4(4x − 1) → 20x − 20 = 16x − 4 → x = 4. Total = 4x = 16.');
V(3,`${PB} Q2`,`There are some red counters and some blue counters in a bag. The ratio of red to blue is 4 : 1. Two counters are removed at random. The probability that both are red is ${F(22,35)}. How many blue counters are in the bag?`,3,'3',PM,'Red 4x, blue x, total 5x. P(R,R) = 4x/(5x) × (4x − 1)/(5x − 1) = 22/35 → 140(4x − 1) = 110(5x − 1) → 560x − 140 = 550x − 110 → x = 3 blue counters.');
V(3,`${PB} Q3`,`There are 5 red counters and y blue counters in a bag. Imogen takes a counter at random, puts it back, then takes another. The probability that both counters are red is ${F(1,9)}. How many blue counters are in the bag?`,10,'10',PM,'With replacement: (5/(5 + y))² = 1/9 → 5/(5 + y) = 1/3 → 5 + y = 15 → y = 10.');
V(3,`${PB} Q4`,`There are 4 red counters and x blue counters in a bag. 2 counters are removed at random. The probability that both are blue is ${F(1,3)}. Work out the value of x.`,6,'6',PM,'x/(x + 4) × (x − 1)/(x + 3) = 1/3 → 3x² − 3x = x² + 7x + 12 → 2x² − 10x − 12 = 0 → x² − 5x − 6 = 0 → (x − 6)(x + 1) = 0 → x = 6 (x cannot be negative).');
V(3,`${PB} Q5`,`There are 5 red counters and x blue counters in a bag. 2 counters are removed at random. The probability that both are red is ${F(5,33)}. Work out the value of x.`,7,'7',PM,'5/(5 + x) × 4/(4 + x) = 5/33 → 660 = 5(x² + 9x + 20) → x² + 9x − 112 = 0 → (x + 16)(x − 7) = 0 → x = 7.');
V(3,`${PB} Q6`,`There are n counters in a bag; 4 are red and the rest are blue. Ross takes a counter at random and does not replace it, then takes another. The probability that he takes two blue counters is ${F(1,3)}. This gives n² − 13n + 30 = 0. Find the value of n.`,10,'10',PM,'(n − 4)/n × (n − 5)/(n − 1) = 1/3 → 3(n² − 9n + 20) = n² − n → n² − 13n + 30 = 0 → (n − 10)(n − 3) = 0. n = 3 is impossible (there are 4 red counters), so n = 10.');
V(3,`${PB} Q7`,`There are n counters in a bag; 8 are red and the rest are blue. Adam takes a counter at random and does not replace it, then takes another. The probability that he takes two blue counters is ${F(1,5)}. This gives n² − 21n + 90 = 0. Find the value of n.`,15,'15',PM,'(n − 8)/n × (n − 9)/(n − 1) = 1/5 → 5(n² − 17n + 72) = n² − n → n² − 21n + 90 = 0 → (n − 15)(n − 6) = 0. n = 6 is impossible (there are 8 red counters), so n = 15.');

})();
