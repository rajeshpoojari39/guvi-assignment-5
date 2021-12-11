class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    this.movies = [
      {
        title: "Heathers",
        studio: "Eon Productions",
        rating: "R",
      },
      {
        title: "Europa Report",
        studio: "Eon Productions",
        rating: "PG",
      },
      {
        title: "Fellowship of the Ring",
        studio: "Eon Productions",
        rating: "PG13",
      },
      {
        title: "Silver Linings Playbook",
        studio: "Eon Productions",
        rating: "PG",
      },
    ];
  }
  print() {
    console.log(
      `Movie Name - ${this.title}, Studio - ${this.studio}, Rating - ${this.rating}`
    );
  }

  getPG() {
    var pg = this.movies.filter((movie) => movie.rating === "PG");
    console.log(pg);
  }
}

var Movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
var Movie2 = new Movie("Dark Knight", "DC Comics");

Movie1.print();
Movie2.print();
Movie1.getPG();
