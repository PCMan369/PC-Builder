async function loadData(){
const cats=['cpus','gpus','motherboards','ram','storage','psus','cases','coolers','os'];
const db={};
for(const c of cats){db[c]=await fetch('data/'+c+'.json').then(r=>r.json());}
return db;
}
loadData().then(db=>console.log('Loaded database',db));