module.exports = class CalculDistance{
    constructor(){
    }
    
    calculDistance2Point(lat1, lon1, lat2, lon2){
        var R = 6371; // km
        var long1 = lon1*Math.PI/180;
        var long2 = lon2*Math.PI/180;
        var lat1 = lat1*Math.PI/180;
        var lat2 = lat2*Math.PI/180;

        var d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1)) * R;
        return d;
    }
    
    
    calculDistanceTrajet(trajet){
        var d = 0;
    
        for (var i = 0; i < trajet.data.length - 1; i++) {
    
            var lat1 = (trajet.data[i].latitude);
            var lat2 = (trajet.data[i+1].latitude);
            var long1 = (trajet.data[i].longitude);
            var long2 = (trajet.data[i+1].longitude);
    
            d += this.calculDistance2Point(lat1, long1, lat2, long2);
        }
    
        return d;
    }
}