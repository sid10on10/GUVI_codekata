class Movie{
    constructor(name, studio, rating = "PG13"){
        this.name = name, this.studio = studio, this.rating = rating;
    } 
    getPg(){
        if(this.rating = 'PG13') return 'Yes';
        return 'No';
    }
}

let movie1 = new Movie("Casino Royale", "Eon Production", "PG13");
console.log(movie1.getPg());