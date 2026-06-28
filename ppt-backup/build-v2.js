// PPT v2 — match HTML design precisely
const fs = require('fs'), path = require('path');
const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/jason/.claude/skills/pptx/scripts/html2pptx');

const SD = path.join(__dirname, 'slides');
const C = { bg:'#FAFAF8', grey:'#F0F0EE', ink:'#0A0A0A', dim:'#444', faint:'#737373', accent:'#FFD500', line:'#E0E0E0', white:'#FFFFFF' };

const H = css => `<!DOCTYPE html><html><head><style>*{box-sizing:border-box;margin:0;padding:0}body{width:720pt;height:405pt;margin:0;padding:0;background:${C.bg};font-family:Arial,sans-serif;color:${C.ink};display:flex}${css}</style></head><body>`;
const END = '</body></html>';

// ─── SLIDE TEMPLATES ───
function coverSlide() {
  return H(`
.cover{display:flex;flex:1;position:relative}
.txt{flex:1;padding:36pt 0 32pt 44pt;display:flex;flex-direction:column;justify-content:center;gap:14pt}
.cat{font-size:9pt;letter-spacing:2pt;color:${C.accent};font-weight:bold}
h1{font-family:Georgia,serif;font-weight:bold;font-size:37pt;line-height:1.06;color:${C.ink};margin:0}
.lead{font-size:15pt;color:${C.dim};margin:0}
.bar{width:56pt;height:3pt;background:${C.accent}}
.pres{font-size:12pt;color:${C.dim}}
.pres strong{font-family:Georgia,serif;font-size:14pt;color:${C.ink}}
.img-wrap{width:220pt;display:flex;align-items:flex-end;justify-content:flex-end;padding:32pt 44pt 32pt 0}
.img-wrap img{width:100%;max-height:260pt;object-fit:cover;border-left:3pt solid ${C.accent}}
`)+`<div class="cover"><div class="txt"><p class="cat">2025 学年年度报告</p><h1>Action！<br>七年级组的<br>「杀青」报告</h1><p class="lead">一学年的课堂、活动、陪伴与托举，都在每一个认真发光的日子里。</p><div class="bar"></div><p class="pres">汇报人：<strong>赵宗莉</strong></p></div><div class="img-wrap"><img src="../images/image1.jpg" alt=""></div></div>` +END;
}

function teamSlide() {
  return H(`body{background:${C.grey}}
.w{flex:1;padding:30pt 44pt 24pt;display:flex;flex-direction:column;justify-content:center;gap:14pt}
.meta{font-size:8pt;letter-spacing:2pt;color:${C.faint}}
h2{font-family:Georgia,serif;font-weight:bold;font-size:26pt;line-height:1.1;color:${C.ink};margin:0}
.lead{font-size:14pt;color:${C.dim};margin:0}
.g{display:grid;grid-template-columns:1fr 1fr;gap:10pt;margin-top:4pt}
.card{background:${C.white};padding:16pt 20pt;border-left:3pt solid ${C.accent}}
.card h3{font-family:Georgia,serif;font-size:16pt;color:${C.ink};margin:0 0 5pt}
.card p{font-size:12pt;color:${C.dim};margin:0}
`)+`<div class="w"><p class="meta">SCENE 01</p><h2>七年级 组员介绍</h2><p class="lead">每一位老师，都是这部年度电影里的主角。</p><div class="g"><div class="card"><h3>语文组</h3><p>李颖 · 李晓璇 · 林斯瑶 · 郭颖</p></div><div class="card"><h3>数学组</h3><p>黎继奎 · 宋治圣 · 张娟 · 姜正富</p></div><div class="card"><h3>英语组</h3><p>马鸿 · 林诚彬 · 万敏珍 · 廖雨澄</p></div><div class="card"><h3>综合学科</h3><p>田卓凡 · 凌俐雯 · 王业培 · 赵宗莉</p></div></div></div>` +END;
}

function sectionSlide(dept, sub) {
  return H(`body{background:${C.accent};color:${C.ink}}
.w{flex:1;padding:36pt 50pt;display:flex;flex-direction:column;justify-content:center}
.meta{font-size:8pt;letter-spacing:2pt;opacity:.6}
h2{font-family:Georgia,serif;font-weight:bold;font-size:40pt;line-height:1.06;margin:14pt 0 10pt;color:${C.ink}}
.lead{font-size:16pt;opacity:.75;margin:0}
.btn-wrap{display:inline-block;margin-top:24pt;border:2pt solid ${C.ink};padding:10pt 22pt}
.btn-wrap p{font-size:10pt;letter-spacing:2pt;font-weight:bold;margin:0}
`)+`<div class="w"><p class="meta">SCENE 01</p><h2>${dept}</h2><p class="lead">${sub}</p><div class="btn-wrap"><p>ACTION!</p></div></div>` +END;
}

function teacherSlide(name, role, desc, skills, imgFile, dept, num) {
  const tags = skills.map(s => `<span style="background:${C.accent};color:${C.ink};padding:3pt 10pt;font-size:8pt;letter-spacing:1pt;">${s}</span>`).join('');
  return H(`
.col{display:flex;flex:1}
.photo{width:210pt;overflow:hidden;display:flex;align-items:center;background:${C.grey}}
.photo img{width:100%;object-fit:cover;display:block}
.bar{width:3pt;background:${C.accent};flex-shrink:0}
.txt{flex:1;padding:22pt 16pt 20pt 34pt;display:flex;flex-direction:column;justify-content:center;gap:8pt}
.meta{font-size:7pt;letter-spacing:2pt;color:${C.faint}}
.role-wrap{padding-bottom:6pt;border-bottom:3pt solid ${C.accent};margin-bottom:2pt}
.role-wrap p{font-weight:bold;font-size:20pt;line-height:1.15;color:${C.ink};margin:0}
.desc{font-size:10.5pt;line-height:1.55;color:${C.dim};margin:0}
.tags{display:flex;flex-wrap:wrap}
.cast{font-size:7pt;letter-spacing:1pt;color:${C.faint}}
`)+`<div class="col"><div class="photo"><img src="../images/${imgFile}" alt="${name}"></div><div class="bar"></div><div class="txt"><p class="meta">SCENE 01 · ${dept}</p><div class="role-wrap"><p>${role}</p></div><p class="desc">${desc}</p><div class="tags">${tags}</div><p class="cast">CAST NO. ${num}</p></div></div>` +END;
}

function activitiesSlide() {
  const cats = [
    ['⚽ 运动竞技', ['01 足球挑战赛','04 初中部运动会','07 探险少年','16 篮球挑战赛']],
    ['🎭 艺术表达', ['05 古诗词大会','06 冬季音乐会','12 英语戏剧之夜','13 京剧院入校园','18 登塔观山海']],
    ['🌍 社会实践', ['03 秋季实践活动','08 公益义卖善淘','10 东方绿洲实训','11 睡衣日','15 广富林遗址']],
    ['🔬 学科拓展', ['02 数学集市','09 电影博物馆','14 七年级科技展','17 上博东馆','19 夏季音乐会']],
  ];
  const cols = cats.map(([t,is]) => `<div><h4 style="font-family:Georgia,serif;font-size:14pt;color:${C.ink};margin:0 0 8pt;">${t}</h4>${is.map(i=>`<div style="padding:5pt 0;border-bottom:1px solid ${C.line};"><p style="font-size:10pt;color:${C.dim};margin:0;"><span style="background:rgba(255,213,0,.2);padding:1pt 4pt;">${i.slice(0,2)}</span>&nbsp;${i.slice(3)}</p></div>`).join('')}</div>`).join('');

  return H(`body{background:${C.grey}}
.w{flex:1;padding:22pt 38pt 18pt;display:flex;flex-direction:column;gap:10pt}
.meta{font-size:8pt;letter-spacing:2pt;color:${C.faint}}
h2{font-family:Georgia,serif;font-weight:bold;font-size:24pt;line-height:1.1;color:${C.ink};margin:0}
.lead{font-size:13pt;color:${C.dim};margin:0}
.g{display:grid;grid-template-columns:repeat(4,1fr);gap:14pt;flex:1}
`)+`<div class="w"><p class="meta">SCENE 02</p><h2>学年活动总结</h2><p class="lead">从秋天到夏天，一路奔跑、探索、表达、发光。</p><div class="g">${cols}</div></div>` +END;
}

function helloSlide() {
  return H(`
.w{flex:1;padding:24pt 44pt 20pt;display:flex;flex-direction:column;align-items:center;gap:10pt}
.meta{font-size:8pt;letter-spacing:2pt;color:${C.faint}}
h2{font-family:Georgia,serif;font-weight:bold;font-size:26pt;line-height:1.12;color:${C.ink};margin:0;text-align:center}
.s{display:grid;grid-template-columns:1fr 1fr;gap:18pt;flex:1;align-items:center;width:100%}
.s img{width:100%;max-height:220pt;object-fit:contain}
.cap{font-size:10pt;color:${C.dim};text-align:center;margin:0}
`)+`<div class="w"><p class="meta">SCENE 03</p><h2>你好，闪闪发光的少年</h2><div class="s"><img src="../images/image19.jpeg" alt=""><div style="background:#0A0A0A;border-radius:0;display:flex;align-items:center;justify-content:center;aspect-ratio:16/9;min-height:180pt;"><p style="color:#fff;font-size:12pt;text-align:center;">▶ 年度影像回顾</p></div></div><p class="cap">G7「杀青」了！一学年的奔跑与成长，都收藏在这部年度影片里。</p></div>` +END;
}

function closingSlide() {
  return H(`body{background:${C.accent};color:${C.ink}}
.w{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:10pt;padding:28pt 44pt}
.meta{font-size:8pt;letter-spacing:2pt;opacity:.6}
h2{font-family:Georgia,serif;font-weight:bold;font-size:40pt;line-height:1.08;margin:0;color:${C.ink}}
.lead{font-size:15pt;line-height:1.5;margin:0;color:${C.ink}}
.gold{font-size:11pt;opacity:.6;margin:0;color:${C.ink}}
.bar{width:50pt;height:2pt;background:${C.ink};opacity:.2}
.cat{font-size:10pt;letter-spacing:2pt;font-weight:bold;color:${C.ink}}
`)+`<div class="w"><p class="meta">THE END</p><h2>暑假快乐</h2><p class="lead">感谢每一位老师<br>感谢每一个闪闪发光的少年</p><p class="gold">这一年，谢谢每一位认真发光的大人。</p><div class="bar"></div><p class="cat">TO BE CONTINUED...</p></div>` +END;
}

// ─── BUILD ───
const slides = [];

function add(name, html) {
  slides.push([name.includes('.html') ? name : name + '.html', html]);
}

add('01-cover', coverSlide());
add('02-team', teamSlide());
add('03-cn-section', sectionSlide('语文组','把文字讲成风景，把课堂过成故事。'));

// Teacher data: [name, role, desc, skills[], img, dept, num]
const T = [
  ['李颖','课堂创意设计师','别人备课循规蹈矩，她带着东南亚见闻花式设计课堂，貌美又满腹巧思，文采创意双在线。',['创意课堂','文采在线','巧思'],'image2.png','语文组','01'],
  ['李晓璇','复旦系温柔学霸','温柔外壳下的中文系硬核学霸、复旦底蕴藏一身，说话温柔，讲作文一针见血。',['作文诊断','复旦底蕴','温柔'],'image3.png','语文组','02'],
  ['林斯瑶','江南才情代表','典型江南小家碧玉模样，眉眼温婉灵气十足，身为语文老师才情满腹，提笔成文，谈吐皆风雅。',['提笔成文','谈吐风雅','灵气'],'image4.png','语文组','03'],
  ['郭颖','温柔暖心大姐姐','气质佳、文采绝，满腹文学底蕴。心底热忱通透，同事遇上难处，她总能搭把手、支个招，事事贴心周全。',['文学底蕴','贴心周全','引路良师'],'image5.png','语文组','04'],
];
let n = 4;
T.forEach(t => add(`${String(n++).padStart(2,'0')}-${t[0]}`, teacherSlide(...t)));

add('08-math-section', sectionSlide('数学组','把逻辑讲清楚，也把团队撑起来。'));
const M = [
  ['黎继奎','优势过剩型选手','优势过剩：脸好、歌好、数学还好，让别人无路可走。',['数学好','歌好','人格外好'],'image6.png','数学组','05'],
  ['宋治圣','AI × 数学技术救火顾问','幽默只是标配，硬核才是底牌：数学教研统筹在行，AI 运用得心应手，大小技术问题找他准没错。',['数学教研','AI 运用','技术救火'],'image7.png','数学组','06'],
  ['张娟','严谨较真的高分导演','别嫌她要求苛刻，正是这份严谨较真，把班风学风抓得扎扎实实，任教经验老道，教学章法成熟。',['严谨','班风学风','均分亮眼'],'image8.png','数学组','07'],
  ['姜正富','数学教学大局守护者','身兼八年级年级组长与数学教师，待人温润谦和，行事却坚守本心、公正无私，为教学平稳推进保驾护航。',['公正无私','教学大局','保驾护航'],'image9.png','数学组','08'],
];
M.forEach(t => add(`${String(n++).padStart(2,'0')}-${t[0]}`, teacherSlide(...t)));

add('13-eng-section', sectionSlide('英语组','语言之外，是稳定、担当与热爱。'));
const E = [
  ['马鸿','沉稳可靠的统筹者','长着一双灵动大眼睛，气质沉稳，处事不惊，英语口语发音堪称范本；干活任劳任怨，当组长事事统筹安排。',['口语范本','统筹安排','靠谱'],'image10.png','英语组','09'],
  ['林诚彬','腰托上阵的笑点担当','腰可以受伤，英语课堂笑点不能断，腰托是他专属上课装备。',['课堂笑点','坚守课堂','幽默'],'image11.png','英语组','10'],
  ['万敏珍','全方位通关人生副本','管得好全组老师，镇得住课堂学生，哄得好一儿一女，湖南干练姐姐全方位通关人生副本。',['干练','控场','全能'],'image12.png','英语组','11'],
  ['廖雨澄','情绪稳定型进阶选手','瓷都出产高颜值女孩，情绪稳到从不急躁，人缘拉满，班主任业务还一路开挂飞速进阶。',['情绪稳定','班主任进阶','人缘拉满'],'image13.png','英语组','12'],
];
E.forEach(t => add(`${String(n++).padStart(2,'0')}-${t[0]}`, teacherSlide(...t)));

add('18-int-section', sectionSlide('综合学科','不同学科，同一部年度大片。'));
const I = [
  ['田卓凡','阳光少年气质的体育担当','自带阳光少年气质，外形亮眼朝气蓬勃，既是海归视野开阔，又是本校闭环校友典范，体育课被他上得元气十足。',['体育元气','海归视野','校友典范'],'image14.png','综合学科','13'],
  ['凌俐雯','协和生物双重身份彩蛋','带着海外前沿生物学眼界回到母校，既是协和往届学子，也是传道授业在岗教师，双重身份格外有梗。',['生物前沿','往届学子','传道授业'],'image15.png','综合学科','14'],
  ['王业培','博古通今的历史讲述者','沉静内敛是外在气质，博古通今是硬核实力，深耕历史课堂，娓娓拆解朝代更迭，满腹才情，尽显大家风范。',['历史课堂','博古通今','大家风范'],'image16.png','综合学科','15'],
  ['赵宗莉','顶级牛马与班主任担当','担任10个班级的道法老师+班主任，小弟数量马上赶上孙主任，号称"万源协和顶级牛马"，感谢领导厚爱。',['道法','班主任','担当'],'image17.png','综合学科','16'],
];
I.forEach(t => add(`${String(n++).padStart(2,'0')}-${t[0]}`, teacherSlide(...t)));

add('23-周宵亮', teacherSlide('周宵亮','全年级万能救火员','颜值拉满，脑子转得比经纬网还快。带班、管年级样样拿捏，难沟通家长、棘手学生，她总能冲在最前沿。就算半夜求助，也会细心帮忙改消息、支妙招——有她，万事不愁。',['万能救火','年级管理','排忧解难'],'image18.png','KEY SUPPORT','17'));
add('24-activities', activitiesSlide());
add('25-hello', helloSlide());
add('26-closing', closingSlide());

// Write slides
for (const [name, html] of slides) {
  fs.writeFileSync(path.join(SD, name), html);
}
console.log(`Generated ${slides.length} slides`);

// Convert
(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = '赵宗莉';
  pptx.title = 'Action！七年级组的杀青报告';

  const files = fs.readdirSync(SD).sort();
  for (const f of files) {
    if (!f.endsWith('.html')) continue;
    try {
      await html2pptx(path.join(SD, f), pptx);
      console.log(`  ✓ ${f}`);
    } catch(e) {
      console.error(`  ✗ ${f}: ${e.message}`);
    }
  }

  const outPath = path.join(__dirname, '赵宗莉-七年级组年度总结-杀青报告-2025-备用.pptx');
  await pptx.writeFile({ fileName: outPath });

  // Add video using python
  console.log(`\nPPTX saved (${(fs.statSync(outPath).size/1024/1024).toFixed(0)}MB)`);
  console.log('Now embedding video...');

  const { execSync } = require('child_process');
  execSync(`python3 -c "
from pptx import Presentation
from pptx.util import Inches
prs = Presentation('${outPath}')
slide = prs.slides[24]
# Remove placeholder
for s in list(slide.shapes):
    if s.has_text_frame and '年度影像回顾' in s.text_frame.text:
        sp = s._element; sp.getparent().remove(sp)
        break
# Add video on right side
slide.shapes.add_movie('${path.join(__dirname,"..","七年级期末教师总结-v6-html","media","year-review.mp4")}', Inches(5.2), Inches(1.8), Inches(5.5), Inches(3.1), mime_type='video/mp4')
prs.save('${outPath}')
print(f'Video embedded → {(__import__(\"os\").stat(\"${outPath}\").st_size/1024/1024):.0f}MB')
"`, {stdio:'inherit'});

  console.log('\n✅ PPT v2 完成');
})().catch(e => { console.error(e.message); process.exit(1); });
