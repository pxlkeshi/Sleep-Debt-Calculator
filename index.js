const getSleepHours=(day) => {
  if (day==='sunday'){
    return 10
  }else if (day==='monday'){
    return 8
  }else if (day==='tuesday'){
    return 8
  }else if (day==='wednesday'){
    return 8
  }else if (day==='thursday'){
    return 8
  }else if (day==='friday'){
    return 8
  }else if (day==='saturday'){
    return 8
  }else{
    return 'Please enter a valid day'
  }  
}
const getActualSleepHours=() => getSleepHours('sunday')+ getSleepHours('monday')+ getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday');
const getIdealSleepHours=()=>{
  const idealHours=8
  return idealHours*7
}
const calculateSleepDebt=()=> {
  let actual=getActualSleepHours()
  let ideal=getIdealSleepHours()
  if(actual>=ideal){
    console.log(`You're getting enough sleep`)
  }else if (actual< ideal){
    console.log(`You're not getting enough sleep`)
  }
}
calculateSleepDebt()

