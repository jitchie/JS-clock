export function updateClock(time){
    updateSeconds(time);
    updateMinutes(time);
    updateHour(time);  
  }

  function updateSeconds(time){
    const seconds = time.seconds;
    const degree = ((seconds / 60) * 360 ) + 90
    const hand = document.querySelector('.second-hand');
    hand.style.transform = `rotate(${degree}deg)`;  
  }

  function updateMinutes(time){
    const minutes = time.minutes;
    console.log(minutes)
    const degree = ((minutes / 60) * 360) + 90
    const hand = document.querySelector('.min-hand');
    hand.style.transform = `rotate(${degree}deg)`;  
  }
  function updateHour(time){
    let  hour  = time.hour;
    const degree =((hour / 12) * 360) + 90
    const hand = document.querySelector('.hour-hand');
    hand.style.transform = `rotate(${degree}deg)`;  
  }
