
let k=10;
for(let i=1; i<=k; i++){
  let s="";
  if(i%2==0){
     for(let j=1; j<=k; j++){
       if(j%2==0){
        s=s+' ';
        }
        else{
          s=s+'#';
        }
      }
    }
  else{
    for(let j=1; j<=k; j++){
      if(j%2==1){
        s=s+' ';
      }
      else{
      s=s+'#';
      }
    }
  }

    console.log(s);
}
