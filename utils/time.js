export  function getTime(time){
    let hours = 0;
      
    while (time >= 60) {
        time -= 60;
        hours++; 
      }

   let format = (hours > 0 ? hours + 'h' : '')+ ' '
            + ( time > 0 ? time + 'min' : '');
       
    return format;
}