import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
async function walk(dir){const out=[];for(const name of await readdir(dir)){const p=path.join(dir,name);if((await stat(p)).isDirectory())out.push(...await walk(p));else out.push(p);}return out;}
const files=await walk(root);let checks=0;
for(const file of files.filter(f=>f.endsWith('.html'))){const html=await readFile(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: one h1`);const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`${file}: unique IDs`);assert(!/paululele|l\.nguyen\.paul|UA-112060364|My Personal Mission|Lorem ipsum/.test(html),'No template content');for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:|data:)/.test(url))continue;const [pathname,hash]=url.split('#');let target=pathname.startsWith('/portfolio/')?path.resolve(root,pathname.slice('/portfolio/'.length)):path.resolve(path.dirname(file),pathname||path.basename(file));if((await stat(target)).isDirectory())target=path.join(target,'index.html');assert(files.includes(target),`${file}: missing ${url}`);if(hash){const targetHTML=await readFile(target,'utf8');assert(targetHTML.includes(`id="${hash}"`),`${file}: missing anchor ${url}`);}checks++;}}
const home=await readFile(path.join(root,'index.html'),'utf8');assert.equal((home.match(/class="course"/g)||[]).length,11);assert.equal((home.match(/class="project /g)||[]).length,3);assert(home.includes('leungchikiu025@gmail.com'));assert(home.includes('Create email draft'));assert(home.includes('type="email"'));
assert(files.includes(path.join(root,'.nojekyll')),'Static GitHub Pages marker exists');
for(const [,row] of home.matchAll(/<tr>(<td>[\s\S]*?)<\/tr>/g)){assert.equal((row.match(/<td>/g)||[]).length,3,'Skills rows have three opening cells');assert.equal((row.match(/<\/td>/g)||[]).length,3,'Skills rows have three closing cells');}
const shadow=JSON.parse(await readFile(path.join(root,'assets/portfolio/shadow-frames/frames.json'),'utf8'));
for(let frame=0;frame<shadow.count;frame++)assert(files.includes(path.join(root,`assets/portfolio/shadow-frames/${frame}.webp`)));
for(const f of files.filter(f=>f.endsWith('.ipynb'))){const n=JSON.parse(await readFile(f,'utf8'));assert(n.nbformat===4);assert(n.cells.every(c=>c.cell_type!=='code'||c.outputs.length===0));}
console.log(`Passed ${checks} internal link/asset checks, page structure checks, and notebook validation.`);
