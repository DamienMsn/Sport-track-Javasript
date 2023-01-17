module.exports = class Data {
    constructor() { }
    
    init(temps, card, lat, long, alt, uneAct) {
        this.idData = -1;
        this.temps = temps;
        this.cardio_frequence = card;
        this.latitude = lat;
        this.longitude = long;
        this.altitude = alt;
        this.uneAct = uneAct;
    }
    getId() {
        return this.idData;
    }
    getTemps() {
        return this.temps;
    }
    getLatitude() {
        return this.latitude;
    }
    getLongitude() {
        return this.longitude;
    }
    getAltitude() {
        return this.altitude;
    }
    getUneAct() {
        return this.uneAct;
    }
    getCard() {
        return this.cardio_frequence;
    }
    setId(i) {
        this.idData = i;
    }
    setTemps(t) {
        this.temps = t;
    }
    setLatitude(la) {
        this.latitude = la;
    }
    setLongitude(lo) {
        this.longitude = lo;
    }
    setAltitude(al) {
        this.altitude = al;
    }
    setUneAct(unA) {
        this.uneAct = unA;
    }
    setCard(c) {
        this.cardio_frequence = c;
    }
    __toString() {
        return this.idData + " " + this.temps + " " + this.cardio_frequence + " " + this.latitude + " " + this.longitude + " " + this.altitude + " " + this.uneAct;
    }
}
