
const steps=[
{title:"Welcome",html:`<div class="card"><h2>Welcome</h2>
<label><input type="radio" name="mode"> Help me choose</label>
<label><input type="radio" name="mode"> I know what I want</label></div>`},
{title:"Purpose",html:`<div class="card"><h2>Purpose</h2>
<label><input type="radio" name="p">Gaming</label>
<label><input type="radio" name="p">Office</label>
<label><input type="radio" name="p">Content Creation</label>
<label><input type="radio" name="p">Mixed Use</label>
<label><input type="radio" name="p">Other</label></div>`},
{title:"Budget",html:`<div class="card"><h2>Budget</h2>
<input type="range" min="300" max="5000" value="1000" id="budget" oninput="b.value=this.value">
$<input id="b" value="1000" size="6"></div>`},
{title:"Existing Parts",html:`<div class="card"><h2>Already Have?</h2>
${["CPU","Cooler","Motherboard","GPU","RAM","SSD","HDD","PSU","Case"].map(x=>`<label><input type=checkbox>${x}</label>`).join("")}
</div>`},
{title:"Configure",html:`<div class="card"><h2>Configure</h2>
${["CPU","CPU Cooler","Motherboard","GPU","RAM","SSD","HDD","PSU","Case","Operating System"].map(x=>`<label>${x}<br><select><option>Select...</option></select></label>`).join("")}
</div>`},
{title:"Review",html:`<div class="card"><h2>Review</h2><p>Summary placeholder.</p></div>`},
{title:"Contact",html:`<div class="card"><h2>Contact</h2><label>Name<input></label><label>Email<input type=email></label><label>Notes<textarea></textarea></label></div>`}
];
let i=0;
function render(){step.innerHTML="<h2>"+steps[i].title+"</h2>"+steps[i].html;bar.style.width=((i+1)/steps.length*100)+"%";back.disabled=i==0;next.textContent=i==steps.length-1?"Submit":"Next";}
back.onclick=()=>{if(i>0){i--;render();}}
next.onclick=()=>{if(i<steps.length-1){i++;render();}else alert("Submission placeholder");}
render();
