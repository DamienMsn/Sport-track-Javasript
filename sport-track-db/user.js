module.exports = class User {

    constructor() { }
    
    init(n, p, date, sexe, taille, poids, email, mdp) {
        this.idUtilisateur = -1;
        this.nom = n;
        this.prenom = p;
        this.date_naissance = date;
        this.sexe = sexe;
        this.taille = taille;
        this.poids = poids;
        this.email = email;
        this.mdp = mdp;
    }
    getId() {
        return this.idUtilisateur;
    }
    getNom() {
        return this.nom;
    }
    getPrenom() {
        return this.prenom;
    }
    getDate_naissance() {
        return this.date_naissance;
    }
    getSexe() {
        return this.sexe;
    }
    getTaille() {
        return this.taille;
    }
    getPoids() {
        return this.poids;
    }
    getEmail() {
        return this.email;
    }
    getMDP() {
        return this.mdp;
    }
    setId(i) {
        this.idUtilisateur = i;
    }
    setNom(n) {
        this.nom = n;
    }
    setPrenom(p) {
        this.prenom = p;
    }
    setDate_naissance(d) {
        this.date_naissance = d;
    }
    setSexe(s) {
        this.sexe = s;
    }
    setTaille(t) {
        this.taille = t;
    }
    setPoids(p) {
        this.poids = p;
    }
    setEmail(e) {
        this.email = e;
    }
    setMDP(m) {
        this.mdp = m;
    }
    toString() {
        return this.idUtilisateur + " " + this.nom + " " + this.prenom + " " + this.date_naissance + " " + this.sexe + " " + this.taille + " " + this.poids + " " + this.email + " " + this.mdp;
    }
}
