/* Smithy Maths Practice - WORKSHEET question bank (loaded after questions.js).
   Questions transcribed from the Prasad's Tutorials worksheets: Indices - 1, Surds - 1, Sequences - 1, Algebraic Fractions - 2.
   "Show that" questions are turned into "find the value" questions so they can be marked automatically.
   W(level, ref, question, answer, method, working, options) adds one fixed question to BANK['Maths'][topic][level].
   Answers: a number, an array of numbers (any order), or a string (expression or "a,b" pair). */
(()=>{
const F=(n,d)=>`<span class=fr><span>${n}</span><span>${d}</span></span>`;
const S=(b,n)=>`${b}<sup>${n}</sup>`;
const PAIR='Type the values in order separated by a comma, for example 4, -7.';
const SURD='Use the √ button (or type sqrt). For example 3√5.';
const ALG='Type it with / and brackets, for example (2x + 1)/(x - 3).';
let T='';const L={};
const topic=t=>{T=t;BANK['Maths'][t]=BANK['Maths'][t]||[[],[],[],[]]};
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
})();
