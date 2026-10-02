const preQuestions = [
["ข้อ 1","ข้อใดเป็นการสื่อสารออนไลน์ที่เหมาะสม?",["ใช้คำหยาบกับเพื่อน","แสดงความคิดเห็นอย่างสุภาพ","ล้อเลียนเพื่อน","ส่งข้อความรบกวนเพื่อนตลอดเวลา"],1],
["ข้อ 2","ก่อนส่งข้อความออนไลน์ เราควรทำอย่างไร?",["ส่งทันที","ตรวจสอบข้อความก่อนส่ง","ส่งให้หลายคนก่อน","ใช้คำที่รุนแรงเพื่อให้คนสนใจ"],1],
["ข้อ 3","หากเพื่อนมีความคิดเห็นแตกต่างจากเรา ควรทำอย่างไร?",["โกรธเพื่อน","ใช้คำหยาบ","เคารพความคิดเห็นของเพื่อน","ล้อเลียนเพื่อน"],2],
["ข้อ 4","ข้อใดเป็นข้อมูลส่วนบุคคลที่ควรเก็บเป็นความลับ?",["สีที่ชอบ","อาหารที่ชอบ","รหัสผ่าน","งานอดิเรก"],2],
["ข้อ 5","หากคนแปลกหน้าขอที่อยู่บ้านของเรา ควรทำอย่างไร?",["บอกทันที","ส่งรูปบ้านให้","ไม่ให้ข้อมูลและบอกผู้ใหญ่ที่ไว้ใจ","ขอที่อยู่ของเขากลับ"],2],
["ข้อ 6","ก่อนแชร์ข่าวหรือข้อมูลบนสื่อสังคมออนไลน์ควรทำอย่างไร?",["แชร์ทันที","ตรวจสอบข้อมูลก่อน","ส่งต่อให้เพื่อนก่อน","แชร์เฉพาะข่าวที่น่าสนใจ"],1],
["ข้อ 7","ข้อใดเป็นการใช้สื่อสังคมออนไลน์อย่างเหมาะสม?",["ใช้จนไม่ทำการบ้าน","ใช้สื่ออย่างพอดีและมีความรับผิดชอบ","โพสต์ข้อมูลส่วนตัวของเพื่อน","แสดงความคิดเห็นด้วยคำหยาบ"],1],
["ข้อ 8","หากได้รับข้อความที่ทำให้รู้สึกไม่ปลอดภัย ควรทำอย่างไร?",["ตอบโต้ทันที","ส่งต่อให้เพื่อน","บอกผู้ปกครองหรือครู","เปิดเผยข้อมูลของตนเอง"],2],
["ข้อ 9","ข้อใดเป็นสิ่งที่ควรคิดก่อนโพสต์?",["ใครจะกดไลก์บ้าง","ข้อมูลนั้นเหมาะสมและปลอดภัยหรือไม่","จะทำให้มีผู้ติดตามเพิ่มขึ้นหรือไม่","จะทำให้โพสต์ดังหรือไม่"],1],
["ข้อ 10","การสื่อสารที่ดีควรเป็นอย่างไร?",["สุภาพ ปลอดภัย และมีความรับผิดชอบ","รวดเร็วที่สุด","ใช้คำรุนแรง","แชร์ข้อมูลให้มากที่สุด"],0]
];

const postQuestions = [
["ข้อ 1","ข้อใดแสดงถึงมารยาทที่ดีในการสื่อสารออนไลน์?",["ใช้คำสุภาพ","ใช้คำหยาบ","ล้อเลียนผู้อื่น","ส่งข้อความรบกวนผู้อื่น"],0],
["ข้อ 2","เมื่อได้รับความคิดเห็นที่แตกต่าง เราควรทำอย่างไร?",["โกรธและด่ากลับ","ไม่ยอมรับความคิดเห็น","เคารพความคิดเห็นของผู้อื่น","นำความคิดเห็นไปล้อเลียน"],2],
["ข้อ 3","ก่อนแชร์ข้อมูลควรทำสิ่งใด?",["แชร์ทันที","ตรวจสอบความถูกต้องของข้อมูล","ส่งให้เพื่อนก่อน","ดูว่ามีคนกดไลก์มากหรือไม่"],1],
["ข้อ 4","ข้อใดไม่ควรเปิดเผยให้คนแปลกหน้าทางออนไลน์?",["งานอดิเรก","สีที่ชอบ","รหัสผ่าน","อาหารที่ชอบ"],2],
["ข้อ 5","หากมีคนแปลกหน้าขอเบอร์โทรศัพท์ ควรทำอย่างไร?",["ให้ทันที","ไม่ให้และบอกผู้ใหญ่ที่ไว้ใจ","ขอเบอร์ของเขาแทน","โพสต์เบอร์ลงสื่อออนไลน์"],1],
["ข้อ 6","ข้อใดเป็นการใช้สื่อสังคมออนไลน์อย่างเหมาะสม?",["ใช้จนไม่ทำการบ้าน","ใช้อย่างพอดีและมีความรับผิดชอบ","แชร์ข้อมูลของผู้อื่นโดยไม่ขออนุญาต","แสดงความคิดเห็นด้วยคำหยาบ"],1],
["ข้อ 7","หากได้รับข้อความที่ทำให้รู้สึกไม่ปลอดภัย ควรทำอย่างไร?",["ตอบโต้","ส่งต่อ","บอกผู้ปกครองหรือครู","ให้ข้อมูลส่วนตัว"],2],
["ข้อ 8","ก่อนโพสต์รูปของเพื่อน เราควรทำอย่างไร?",["โพสต์ทันที","ขออนุญาตเพื่อนก่อน","ส่งให้คนอื่นดูก่อน","ใส่ข้อความล้อเลียน"],1],
["ข้อ 9","ข้อใดเป็นหลักการสื่อสารออนไลน์ที่ปลอดภัย?",["คิดก่อนคลิก คิดก่อนโพสต์ คิดก่อนแชร์","แชร์ทุกสิ่งที่พบ","เปิดเผยข้อมูลให้เพื่อนทุกคน","ตอบคนแปลกหน้าทุกคน"],0],
["ข้อ 10","นักเรียนที่มีมารยาทในการสื่อสารควรมีลักษณะอย่างไร?",["สุภาพ เคารพผู้อื่น และรับผิดชอบ","พูดอะไรก็ได้ตามใจ","แชร์ข้อมูลโดยไม่ตรวจสอบ","ใช้สื่อโดยไม่คำนึงถึงผู้อื่น"],0]
];

const lessons = {
1:{title:"📱 บทที่ 1 มารยาทในการสื่อสารออนไลน์",image:"infographic-lesson1.png",items:["การใช้คำสุภาพ","การคิดก่อนพิมพ์","การเคารพความคิดเห็นของผู้อื่น","การไม่ใช้คำหยาบ","การไม่ล้อเลียนหรือกลั่นแกล้งผู้อื่น"],tip:"การสื่อสารออนไลน์ควรคิดก่อนพิมพ์และคำนึงถึงความรู้สึกของผู้อื่นเสมอ"},
2:{title:"🌐 บทที่ 2 การใช้สื่อสังคมออนไลน์อย่างเหมาะสม",image:"infographic-lesson2.png",items:["ใช้สื่ออย่างเหมาะสมกับวัย","ใช้เวลาอย่างพอดี","ตรวจสอบข้อมูลก่อนแชร์","ไม่เผยแพร่ข้อมูลที่ไม่เหมาะสม","เคารพสิทธิของผู้อื่น"],tip:"ข้อมูลที่น่าสนใจไม่จำเป็นต้องเป็นข้อมูลที่ถูกต้องเสมอ จึงควรตรวจสอบก่อนแชร์"},
3:{title:"🔐 บทที่ 3 การรักษาข้อมูลส่วนบุคคลในการสื่อสาร",image:"infographic-lesson3.png",items:["ชื่อ–นามสกุล","ที่อยู่","เบอร์โทรศัพท์","รหัสผ่าน","รูปภาพส่วนตัว","ข้อมูลครอบครัว"],tip:"รหัสผ่าน ที่อยู่ และข้อมูลส่วนตัวไม่ควรส่งให้คนแปลกหน้าบนโลกออนไลน์"},
4:{title:"🛡️ บทที่ 4 การสื่อสารอย่างปลอดภัยและมีความรับผิดชอบ",image:"infographic-lesson4.png",items:["คิดก่อนคลิก","คิดก่อนโพสต์","คิดก่อนแชร์","คิดก่อนส่ง","ไม่เปิดเผยข้อมูลส่วนตัว","ขอความช่วยเหลือเมื่อพบสิ่งไม่ปลอดภัย"],tip:"หากพบสิ่งที่ทำให้รู้สึกไม่ปลอดภัย ให้หยุดการสนทนาและบอกผู้ปกครองหรือครูที่ไว้ใจ"}
};

const games = [
{title:"🎮 ส่งได้ไหม?",desc:"เลือกข้อความที่เหมาะสมในการสื่อสารออนไลน์",questions:[
["“ขอบคุณสำหรับคำแนะนำนะ เราจะลองนำไปปรับใช้ดู 😊”",0,["🟢 ส่งได้","🔴 ไม่ควรส่ง"]],["“เธอโง่มาก ทำไมทำแค่นี้ไม่ได้!”",1,["🟢 ส่งได้","🔴 ไม่ควรส่ง"]],["“เราไม่เห็นด้วย แต่ขอคุยกันด้วยเหตุผลนะ”",0,["🟢 ส่งได้","🔴 ไม่ควรส่ง"]]]},
{title:"🔎 นักสืบข่าวจริง",desc:"เลือกสิ่งที่ควรตรวจสอบก่อนแชร์",questions:[
["มีข้อความบอกว่า “ข่าวนี้จริงแน่นอน! แชร์ต่อเลย” โดยไม่มีแหล่งที่มา",1,["🔎 ข้อมูลน่าเชื่อถือ","⚠️ ควรตรวจสอบก่อนแชร์"]],["ข่าวมีแหล่งที่มาชัดเจนและตรวจสอบได้",0,["🔎 ข้อมูลน่าเชื่อถือ","⚠️ ควรตรวจสอบก่อนแชร์"]],["ภาพไวรัลไม่มีวันที่หรือแหล่งข่าว",1,["🔎 ข้อมูลน่าเชื่อถือ","⚠️ ควรตรวจสอบก่อนแชร์"]]]},
{title:"🔐 ข้อมูลนี้ปลอดภัยไหม?",desc:"แยกข้อมูลที่ควรปกป้องออกจากข้อมูลทั่วไป",questions:[
["รหัสผ่าน",1,["🟢 บอกได้อย่างเหมาะสม","🔴 ไม่ควรเปิดเผย"]],["อาหารที่ชอบ",0,["🟢 บอกได้อย่างเหมาะสม","🔴 ไม่ควรเปิดเผย"]],["ที่อยู่บ้าน",1,["🟢 บอกได้อย่างเหมาะสม","🔴 ไม่ควรเปิดเผย"]],["งานอดิเรก",0,["🟢 บอกได้อย่างเหมาะสม","🔴 ไม่ควรเปิดเผย"]]]},
{title:"🛡️ ฮีโร่นักสื่อสาร",desc:"ผ่าน 5 ด่านเพื่อรับเหรียญฮีโร่นักสื่อสาร",questions:[
["เพื่อนเห็นต่างจากเรา ควรทำอย่างไร?",0,["เคารพและพูดคุยอย่างสุภาพ","ด่ากลับ"]],["เจอข่าวที่ไม่รู้ว่าเป็นจริงหรือไม่?",0,["ตรวจสอบก่อนแชร์","แชร์ทันที"]],["คนแปลกหน้าขอรหัสผ่าน?",1,["ส่งให้เพื่อขอความช่วยเหลือ","ไม่ให้และบอกผู้ใหญ่ที่ไว้ใจ"]],["เพื่อนส่งรูปคนอื่นมาให้แชร์?",1,["แชร์ต่อ","ไม่ส่งต่อและคำนึงถึงสิทธิของเจ้าของรูป"]],["พบข้อความที่ทำให้รู้สึกไม่ปลอดภัย?",0,["หยุดการสนทนาและบอกผู้ใหญ่","ตอบโต้ทันที"]]]}
];

let gameIndex=0, gameQ=0, gameScore=0;

function go(id){
  location.hash=id;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
  document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===id));
  document.getElementById("mainNav").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="results") updateResults();
}
function route(){go(location.hash.replace("#","")||"home")}
window.addEventListener("hashchange",route);
document.querySelector(".menu-toggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));

function renderQuiz(containerId, questions, storageKey, title){
  const box=document.getElementById(containerId);
  box.innerHTML=`<div class="quiz"><div id="${storageKey}Questions"></div><div class="quiz-actions"><button class="btn primary" onclick="submitQuiz('${storageKey}')">ตรวจคำตอบ ✓</button><span id="${storageKey}Result" class="result-inline"></span></div></div>`;
  const qbox=document.getElementById(storageKey+"Questions");
  qbox.innerHTML=questions.map((q,i)=>`<div class="question"><h3>${q[0]}. ${q[1]}</h3>${q[2].map((o,j)=>`<label class="option"><input type="radio" name="${storageKey}${i}" value="${j}"> ${String.fromCharCode(97+j)}. ${o}</label>`).join("")}</div>`).join("");
}
function submitQuiz(key){
  const qs=key==="pre"?preQuestions:postQuestions;
  let score=0, answered=0;
  qs.forEach((q,i)=>{const a=document.querySelector(`input[name="${key}${i}"]:checked`); if(a){answered++; if(+a.value===q[3])score++;}});
  if(answered<qs.length){alert("กรุณาตอบให้ครบทั้ง 10 ข้อก่อนตรวจคำตอบ");return}
  localStorage.setItem(key+"Score",score);
  document.getElementById(key+"Result").textContent=`ได้ ${score}/10 คะแนน 🎉`;
  if(key==="post") updateResults();
}
function showLesson(n){
  document.querySelectorAll(".tab").forEach((t,i)=>t.classList.toggle("active",i===n-1));
  const l=lessons[n];
  document.getElementById("lessonContent").innerHTML=`<div class="lesson-card"><h3>${l.title}</h3><div class="infographic-wrap"><img class="lesson-infographic" src="${l.image}" alt="อินโฟกราฟิกประกอบบทเรียน ${n}"></div><p>เนื้อหาหลัก</p><ul>${l.items.map(x=>`<li>${x}</li>`).join("")}</ul><div class="tip">💡 <b>จำง่าย ๆ:</b> ${l.tip}</div><p style="margin-top:20px"><button class="btn primary" onclick="go('activities')">🎮 ไปเล่นเกม</button></p></div>`;
}
function renderGameMenu(){
  document.getElementById("gameMenu").innerHTML=games.map((g,i)=>`<button class="game-card" onclick="startGame(${i})"><span style="font-size:32px">${g.title.slice(0,2)}</span><h3>${g.title}</h3><p>${g.desc}</p><span class="badge">${localStorage.getItem("game"+i)==="done"?"🏅 เล่นแล้ว":"▶ เริ่มเกม"}</span></button>`).join("");
}
function startGame(i){
  gameIndex=i;gameQ=0;gameScore=0;renderGame();
  document.getElementById("gameArea").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderGame(){
  const g=games[gameIndex], q=g.questions[gameQ];
  document.getElementById("gameArea").innerHTML=`<div class="game-panel"><h3>${g.title} <span style="float:right">ด่าน ${gameQ+1}/${g.questions.length}</span></h3><div class="game-question">${q[0]}</div><div class="game-options">${q[2].map((o,i)=>`<button class="game-option" onclick="answerGame(${i})">${o}</button>`).join("")}</div><div id="gameFeedback" class="feedback"></div></div>`;
}
function answerGame(choice){
  const g=games[gameIndex], q=g.questions[gameQ], fb=document.getElementById("gameFeedback");
  document.querySelectorAll(".game-option").forEach(b=>b.disabled=true);
  if(choice===q[1]){gameScore++;fb.className="feedback ok";fb.textContent="✅ ถูกต้อง! เก่งมาก +1 คะแนน";}
  else{fb.className="feedback no";fb.textContent="💡 ยังไม่ถูก ลองทบทวนบทเรียนแล้วสังเกตเหตุผลของคำตอบนะ";}
  setTimeout(()=>{
    gameQ++;
    if(gameQ<g.questions.length) renderGame();
    else {
      localStorage.setItem("game"+gameIndex,"done");
      localStorage.setItem("gameScore"+gameIndex,gameScore);
      document.getElementById("gameArea").innerHTML=`<div class="game-panel"><h3>🎉 จบเกม ${g.title}</h3><p>คะแนนเกมนี้ <b>${gameScore}/${g.questions.length}</b></p><p>${gameScore===g.questions.length?"🏆 ยอดเยี่ยม! ผ่านครบทุกข้อ":"👍 ทำได้ดี! กลับไปทบทวนบทเรียนแล้วลองใหม่ได้"}</p><button class="btn primary" onclick="renderGameMenu();document.getElementById('gameArea').innerHTML=''">เลือกเกมอื่น</button></div>`;
      renderGameMenu(); updateResults();
    }
  },650);
}
function saveWorksheet(){
  localStorage.setItem("worksheet",JSON.stringify({w1:document.getElementById("w1").value,w2:document.getElementById("w2").value,w3:document.getElementById("w3").value}));
  document.getElementById("worksheetSaved").textContent="บันทึกแล้ว ✓";
}
function loadWorksheet(){
  const x=JSON.parse(localStorage.getItem("worksheet")||"null");
  if(x){["w1","w2","w3"].forEach(k=>document.getElementById(k).value=x[k]||"")}
}
function updateResults(){
  document.getElementById("preScore").textContent=localStorage.getItem("preScore")??"-";
  document.getElementById("postScore").textContent=localStorage.getItem("postScore")??"-";
  const b=[];
  games.forEach((g,i)=>{if(localStorage.getItem("game"+i)==="done")b.push(`<span class="badge-earned">🏅 ${g.title.replace(/^.. /,"")}</span>`)});
  if(localStorage.getItem("postScore")!==null)b.push(`<span class="badge-earned">🏆 ทำแบบทดสอบหลังเรียนแล้ว</span>`);
  document.getElementById("badges").innerHTML=b.length?b.join(""):"<span style='color:#71838d'>ยังไม่มีเหรียญ ลองทำเกมและแบบทดสอบกันนะ!</span>";
}
function resetProgress(){
  if(confirm("ต้องการล้างคะแนนและเริ่มใหม่หรือไม่?")){
    Object.keys(localStorage).filter(k=>k.startsWith("pre")||k.startsWith("post")||k.startsWith("game")||k==="worksheet").forEach(k=>localStorage.removeItem(k));
    updateResults();renderGameMenu();alert("ล้างข้อมูลเรียบร้อยแล้ว");
  }
}
renderQuiz("pretestBox",preQuestions,"pre","แบบทดสอบก่อนเรียน");
renderQuiz("posttestBox",postQuestions,"post","แบบทดสอบหลังเรียน");
showLesson(1);renderGameMenu();loadWorksheet();updateResults();route();
