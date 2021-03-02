export default function getWipeDates(date, view) {
    //WIPES FORÇADOS
    //Primeira quinta de cada mês
    const calendarDate = date;
    const forcedWipeDates = ["4/03", "8/04"];
    const mapWipeDates = ["5/03", "19/03", "2/04", "16/04", "30/04"];
    const fullWipeDates = ["12/03", "26/03", "9/04", "23/04"];

    let kindOfWipe = null;
    forcedWipeDates.forEach((wipe) => {
        let isWipe = setWipes(wipe, calendarDate, "forcedWipe");
        if (isWipe) kindOfWipe = isWipe;
    });

    mapWipeDates.forEach((wipe) => {
        let isWipe = setWipes(wipe, calendarDate, "mapWipe");
        if (isWipe) kindOfWipe = isWipe;
    });

    fullWipeDates.forEach((wipe) => {
        let isWipe = setWipes(wipe, calendarDate, "fullwipe");
        if (isWipe) kindOfWipe = isWipe;
    });

    return kindOfWipe;
}

function setWipes(wipeDate, calendarDate, text) {
    const day = calendarDate.getDate();
    const month = calendarDate.getMonth() + 1;

    const dateSplitted = wipeDate.split("/");
    const wipeDay = parseInt(dateSplitted[0], 10);
    const wipeMonth = parseInt(dateSplitted[1], 10);

    if (wipeDay === day && wipeMonth === month) {
        return text;
    } else return null;
}
