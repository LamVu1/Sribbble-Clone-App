// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

export const calcTime=(time)=>{
    
    const t = new Date(time.replace(' ', 'T'));    

    var seconds = Math.floor((new Date() - t) / 1000);
    
    var interval = Math.floor(seconds / 31536000);
    
    if (interval > 1) {
        return interval + " years";
    }

    if (interval ===1) {
        return interval + " year";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }

    if (interval === 1) {
        return interval + " month";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    if (interval === 1) {
        return interval + " day";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }

    if (interval === 1) {
        return interval + " hour";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    if (interval === 1) {
        return interval + " minute";
    }
    return Math.floor(seconds) + " seconds";

}