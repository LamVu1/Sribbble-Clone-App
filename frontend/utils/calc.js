// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

export const calcTime=(time)=>{
    
    const t = new Date(time.replace(' ', 'T'));    
    let sep = t.toDateString().split(' ')
    sep[sep.length-1] = ', '+sep[sep.length-1];
    sep[2] = sep[2]+sep[3];
    return(sep.slice(0,3).join(' '))
}