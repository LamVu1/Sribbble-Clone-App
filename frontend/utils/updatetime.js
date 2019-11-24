// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

export const updateTime=(time)=>{
    
    const t = new Date(time.replace(' ', 'T'));    
    var seconds = Math.floor((new Date() - t) / 1000);
    if(seconds>300){
        return true
    }    
    return false
}