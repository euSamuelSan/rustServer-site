export default function getWipeDates(date, view) {
    const calendarDate = date;

    //WIPES FORÇADOS
    //Primeira quinta de cada mês
    //Inserir as datas no formato DD/MM/AAAA
    const wipeDates = [
        "4/03/2021", //FORÇADO
        "12/03/2021", //MAPA
        "19/03/2021", //FULL
        "26/03/2021", //MAPA
        "2/04/2021", //FULL
        "8/04/2021", //FORÇADO
        "16/04/2021", //MAPA
        "23/04/2021", //FULL
        "30/04/2021", //MAPA
    ];

    let kindOfWipe = null;
    wipeDates.forEach((wipe) => {
        let isWipe = setWipes(wipe, calendarDate, "mapWipe");
        if (isWipe) kindOfWipe = isWipe;
    });
    return kindOfWipe;
}

function setWipes(wipeDate, calendarDate, text) {
    const day = calendarDate.getDate();
    const month = calendarDate.getMonth() + 1;
    const year = calendarDate.getFullYear();

    const dateSplitted = wipeDate.split("/");
    const wipeDay = parseInt(dateSplitted[0], 10);
    const wipeMonth = parseInt(dateSplitted[1], 10);
    const wipeYear = parseInt(dateSplitted[2], 10);

    if (wipeDay === day && wipeMonth === month && wipeYear === year) {
        return text;
    } else return null;
}
