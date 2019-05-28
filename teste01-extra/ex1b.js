function getRunningDuration(totalSeconds) {
    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;

    if (hours === 0 && minutes === 0) {
        return seconds + "s"
    } else if (hours === 0 && minutes > 0) {
        return minutes + "m:" + seconds + "s"
    } else {
        return hours + "h:" + minutes + "m:" + seconds + "s"
    }

}

console.log(getRunningDuration(4981))
console.log(getRunningDuration(320))
