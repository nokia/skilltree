var rp= require('request-promise');

function querySkillFromWiki (skillnamefield) {
var skillname = document.getElementById(skillnamefield);
var options={
  methode: 'GET',
  uri:'https://en.wikipedia.org/w/api.php?action=opensearch&search='&skillname&'&limit=20&namespace=0&format=json',
  json:true
};

rp(options)
.then(function(parseBody){

  var data=[];
  for(i=0 ;i<parseBody.items.length;i++){
    data.push([parseBody.items[i].timestamp,parseBody.items[i].views]);
  }
  console.log(data);
})

.catch(function (err){
});
}
