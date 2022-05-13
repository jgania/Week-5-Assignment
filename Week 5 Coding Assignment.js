class Rating {
    constructor(rating) {
        this.rating = rating;
    }
}

class Movie {
    constructor(name) {
        this.name = name;
        this.ratings = [];
    }
    addRating(rating) {
        if (rating instanceof Rating) {
            this.ratings.push(rating);
        } else{
            throw new Error (`You can only add an instance of Rating. Argument is not a rating: ${rating}`);
        }
    }
    describe() {
        return `${this.movie} has ${this.ratings.length} ratings`;
    }
}

class Menu {
    constructor() {
        this.movies = [];
        this.selectedMovie = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0; ) {
            switch (selection) {
                case "1": 
                    this.createMovie();
                    break;
                case "2":
                    this.viewMovie();
                    break;
                case "3":
                    this.deleteMovie();
                    break;
                case "4":
                    this.displayMovies();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye");
    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create Movie
        2) View Movie
        3) Delete Movie
        4) Display All Movies
        `)
    }
    showMovieMenuOptions(teamInfo) {
        return prompt(`
        0) Return
        1) Create Rating
        2) Delete Rating

        ${teamInfo}
        `);
    }

    displayMovies() {
        let moviestring = ""
        for (let i=0; i < this.movies.length; i++) {
            moviestring += i + ") " + this.movies(i).name + "\n":
        }
        alert(moviestring);
    }

    createMovie() {
        let name = prompt("Enter name for new Movie");
        this.movies.push(new Movie(name));
    }

    viewMovie() {
        let index = prompt("Enter the index of the movie you wish to view:");
        if (index > -1 && index < this.movies.length) {
            this.selectedMovie = this.movies[index];
            let description = "Movie Name: " + this.selectedMovie.name + "\n";
            for (let i = 0; i < this.selectedMovie.ratings.length; i++) {
                description += i + ") " + this.selectedMovie.ratings[i].rating + "\n";
            }
            let selection = this.showMovieMenuOptions(description);
            switch(selection) {
                case "1":
                    this.createRating();
                    break;
                case "2": 
                    this.deleteRating();
                    break;
            }
        }
    }
}

let Menu = new Menu();
Menu.start();
