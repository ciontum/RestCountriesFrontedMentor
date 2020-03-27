export const pointPopulation=(number)=>{
    number=JSON.stringify(number);
    let ct=0;
    let aux=number;
    if(number.length<=3)
    return number;
    for(let i=number.length-1;i>0;i--)
    {
      ct++;
      if(ct===3)
      {
      aux=aux.slice(0,i) +"."+ aux.slice(i);
      ct=0;
      }
  
    }
    return aux;
}