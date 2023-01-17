module.exports = class Activity {
    constructor() { }

    init(date, descri, duree, distParc, freqMin, freqMax, freqMoy, idUtili) {
        this.idAct = -1;
        this.date = date;
        this.description = descri;
        this.duree = duree;
        this.distance_parcourue = distParc;
        this.cardio_freq_min = freqMin;
        this.cardio_freq_max = freqMax;
        this.cardio_freq_moy = freqMoy;
        this.unUtilisateur = idUtili;
    }
    getIdAct() {
        return this.idAct;
    }
    getDate() {
        return this.date;
    }
    getDescription() {
        return this.description;
    }
    getDuree() {
        return this.duree;
    }
    getDistParcourue() {
        return this.distance_parcourue;
    }
    getFreqMin() {
        return this.cardio_freq_min;
    }
    getFreqMax() {
        return this.cardio_freq_max;
    }
    getFreqMoy() {
        return this.cardio_freq_moy;
    }
    getUnUtilisateur() {
        return this.unUtilisateur;
    }
    setIdAct(i) {
        this.idAct = i;
    }
    setDate(d) {
        this.date = d;
    }
    setDescription(d) {
        this.description = d;
    }
    setDuree(d) {
        this.duree = d;
    }
    setDistParcourue(dp) {
        this.distance_parcourue = dp;
    }
    setFreqMin(f) {
        this.cardio_freq_min = f;
    }
    setFreqMax(f) {
        this.cardio_freq_max = f;
    }
    setFreqMoy(f) {
        this.cardio_freq_moy = f;
    }
    setUnUtilisateur(unU) {
        this.unUtilisateur = unU;
    }
    __toString() {
        return this.idAct + " " + this.date + " " + this.description + " " + this.duree + " " + this.distance_parcourue + " " + this.cardio_freq_min + " " + this.cardio_freq_max + " " + this.cardio_freq_moy + " " + this.unUtilisateur;
    }
}
    