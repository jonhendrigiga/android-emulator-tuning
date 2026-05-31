function plan(){var ram=+document.getElementById('ram').value,core=+document.getElementById('core').value,gpu=+document.getElementById('gpu').value,use=document.getElementById('use').value;
var open={8:'3–4',16:'6–8',32:'10–12',64:'15+'}[ram];
var perCore=use==='multi'?2:Math.max(4,Math.floor(core/2));
var perMem=use==='multi'?'2048MB':Math.min(8192,ram*1024*0.5)+'MB';
var fps=use==='multi'?'锁 30':'锁 60（高刷屏可 120）';
var render=gpu? 'DirectX 或 Vulkan（独显，低 CPU）':'OpenGL（核显更稳）';
var warn=gpu?'':'⚠️ 无独显多开易卡，建议单开或加显卡。';
document.getElementById('out').style.display='block';
document.getElementById('out').innerHTML='<div class=rec>建议多开：'+(use==='multi'?open+' 开':'1 开(画质优先)')+'</div>'+
'<p>每实例：CPU '+perCore+' 核 · 内存 '+perMem+' · 帧率 '+fps+' · 渲染 '+render+'</p>'+
'<p><small>必做：先开 VT(提 50–100%)；总内存分配 ≤ 物理 50%；装 SSD；关 Hyper-V/内核隔离防"VT 被占用"。'+warn+'</small></p>';}
