const API = {}

API.time = function(s) {
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    var days = parseInt(Math.floor(hrs / 24));
    hrs = parseInt(hrs % 24);
    
    var meses = parseInt(Math.floor(days / 30));
    days = parseInt(days % 30);
    
    return (meses > 0 ? pad(meses) + ' meses, ' : "") + (days > 0 ? pad(days) + ' dias, ' : "") + (hrs > 0 ? pad(hrs) + ' horas, ' : "") + (mins > 0 ? pad(mins) + ' minutos e ' : "") + (pad(secs) + ' segundos')

}

API.time2 = function(s) {
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    var days = parseInt(Math.floor(hrs / 24));
    hrs = parseInt(hrs % 24);
    
    var meses = parseInt(Math.floor(days / 30));
    days = parseInt(days % 30);
    
    return (meses > 0 ? pad(meses) + 'm, ' : "") + (days > 0 ? pad(days) + 'd, ' : "") + (hrs > 0 ? pad(hrs) + 'h, ' : "") + (mins > 0 ? pad(mins) + 'm ' : "") + (pad(secs) + 's' )
}

API.status = function(status) {
    return (status.replace('offline', '<:off:757819465915170836>').replace('idle', '<:idle:757819466037067776>').replace('dnd', '<:nopertube:757819465655386263>').replace('online', '<:online:757819465609117747>'))
}

API.badges = function(badges) {
    return (badges.join(' ').replace('HOUSE_BALANCE', '<:balance:746939323143946320>').replace('HOUSE_BRILLIANCE', '<:Brilliance:746939322904870973>').replace('HOUSE_BRAVERY', '<:Bravery:746939322996883516>').replace('BUGHUNTER_LEVEL_1', '<:Hunter:750415765424963634>').replace('BUGHUNTER_LEVEL_2', '<:hunterv2:750415765496135700>').replace('VERIFIED_DEVELOPER', '<:developer:746940343252942956>').replace('DISCORD_PARTNER', '<:parceiro:750415765366112457>').replace('VERIFIED_BOT', '<:bot:750415765311717476>').replace('EARLY_SUPPORTER', '<:early:750416436458946773>').replace('HYPESQUAD_EVENTS', '<:hypesquad:750415765026635929>').replace('TEAM_USER', '<:funcionario:750415765655519403>').replace('SYSTEM', '<:funcionario:750415765655519403>') || 'Não possui')
}

API.bytes = function(size) {
    return (byteSize(size))
}

API.moment = function(numero, formato) {
    return (moment(numero).format(formato))
}

API.emojis = {
    "ativado": {
        "id": "<:switchon:764574248562982972>",
        "nome": "ativado"
    },
    "desativado": {
        "id": "<:switchoff:764574248445804574>",
        "nome": "desativado"
    },
    "play": {
        "id": "<:play:764567204641112165>",
        "nome": "play"
    },
    "pause": {
        "id": "<:pause:764567204775460875>",
        "nome": "pause"
    }
}

API.eval = ["422002630106152970", "672652538880720896", "704468807229505637"]


module.exports = API