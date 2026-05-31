function plan(){var ram=+document.getElementById('ram').value,core=+document.getElementById('core').value,gpu=+document.getElementById('gpu').value,use=document.getElementById('use').value;
var open={8:'3-4',16:'6-8',32:'10-12',64:'15+'}[ram];var perCore=use==='multi'?2:Math.max(4,Math.floor(core/2));
var perMem=use==='multi'?'2048MB':Math.min(8192,ram*1024*0.5)+'MB';var fps=use==='multi'?'lock 30':'lock 60 (120 on high-refresh)';
var render=gpu?'DirectX/Vulkan (discrete)':'OpenGL (integrated)';var warn=gpu?'':'No discrete GPU: prefer single instance.';
document.getElementById('out').style.display='block';
document.getElementById('out').innerHTML='<div class=rec>Suggested: '+(use==='multi'?open+' instances':'1 (quality first)')+'</div><p>Per instance: CPU '+perCore+' cores · RAM '+perMem+' · '+fps+' · '+render+'</p><p><small>Always enable VT (+50-100%); total RAM <=50% physical; use SSD; '+warn+'</small></p>';}