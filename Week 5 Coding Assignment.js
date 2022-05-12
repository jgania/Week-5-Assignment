
class Movie {
    constructor(name){
        this.name = name;
            }
    describe(){
        return `${this.name} is a ${this.genere} movie`;
    }
}

class Review {
    constructor(rating){
        this.rating = rating;
        this.movies = []
    }

    addMovie(movie){
        if (movie instanceof Movie){
            this.movies.push(movie);
        } else {
            throw new Error(`You can only add an instance of Movie. Argument is not a movie: ${movie}`);
        }
    }
    describe(){
        return `${this.rating} has been given to ${this.movies.length} movies`;
    }
}

class Menu {
    constructor(){
        this.ratings = [];
        this.selectedReview = null
    }
    start(){
        let selection = this.showMenuOptions();
        while (selection != 0){
            switch (selection){
                case "1":
                    this.createReview();
                    break;
                case "2":
                    this.viewReview();
                    break;
                case "3":
                    this.deleteReview();
                    break;
                case "4":
                    this.displayRatings();
                    break;
                default:
                    selection = 0
            }
            selection = this.showMenuOptions();
        }
        alert("Goodbye");
    }

    showMenuOptions(){
        return prompt(`
            0: Exit
            1: Create Review
            2: View Review
            3: Delete Review
            4: Display All Reviews
        `);
    }

    displayRatings(){
        let ratingString = ""
        for (let i = 0; i < this.ratings.length; i++){
            ratingString += i + ") " + this.ratings[i].rating + "\n";
        }
        alert(ratingString);
    }
    createReview(){
        let rating = prompt("Enter rating for new review");
        this.ratings.push(new Review(rating));
    }
}


