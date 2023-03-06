function setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#7FFF00"
        count=0;
    }

}








function compute(id) {

    // var buttons = $("button");
    // var index = 0;

    

    switch (id) {
        case "btn1":
            index = 0;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");
           

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(0, 2);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                            <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                            <h3>${movie.title}</h3>
                                       
                            </div>`
                        )

                    })
                }
            })
            break;

        case "btn2":
            index = 2;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(2, 4);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                                        <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                        <h3>${movie.title}</h3>
                                       
                                    </div>`
                        )

                    })
                }
            })
            break;
        case "btn3":
            index = 4;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(4, 6);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                                            <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                            <h3>${movie.title}</h3>
                                           
                                        </div>`
                        )

                    })
                }
            })
            break;
        case "btn4":
            index = 6;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(6, 8);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                                            <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                            <h3>${movie.title}</h3>
                                           
                                        </div>`
                        )

                    })
                }
            })
            break;
        case "btn5":
            index = 8;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(8, 10);
                    eight_movies.forEach(function (movie) {
                       

                        $("main").append(
                            `<div class="movie">
                                                <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                                <h3>${movie.title}</h3>
                                               
                                            </div>`
                        )

                    })
                }
            })
            break;
        case "btn6":
            index = 10;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(10, 12);
                    eight_movies.forEach(function (movie) {
                       

                        $("main").append(
                            `<div class="movie">
                                                    <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                                    <h3>${movie.title}</h3>
                                                   
                                                </div>`
                        )

                    })
                }
            })
            break;
        case "btn7":
            index = 12;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(12, 14);
                    eight_movies.forEach(function (movie) {
                       

                        $("main").append(
                            `<div class="movie">
                                                        <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                                        <h3>${movie.title}</h3>
                                                       
                                                    </div>`
                        )

                    })
                }
            })
            break;
        case "btn8":
            index = 14;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(14, 16);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                                                            <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                                            <h3>${movie.title}</h3>
                                                           
                                                        </div>`
                        )

                    })
                }
            })
            break;
        case "btn9":
            index = 16;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(16, 18);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                                                                <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}"></a>
                                                                <h3>${movie.title}</h3>
                                                               
                                                            </div>`
                        )

                    })
                }
            })
            break;
        case "btn10":
            index = 18;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(18, 20);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                            <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}" ></a>
                            <h3>${movie.title}</h3>                                
                            </div>`
                            
                        )

                    })
                }
            })
            break;
                case "btnBack":
            index = index - 2;
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                success: function (res) {
                    $("main").html("");

                    // slice to get the first 2 list_movies
                    eight_movies = res.data.movies.slice(index, index + 2);
                    eight_movies.forEach(function (movie) {
                        

                        $("main").append(
                            `<div class="movie">
                            <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}" ></a>
                            <h3>${movie.title}</h3>                                
                            </div>`
                            
                        )

                    })
                }
            })
            break;
            case "btnForward":
                index = index + 2;
                $.ajax({
                    url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",
                    success: function (res) {
                        $("main").html("");
    
                        // slice to get the first 2 list_movies
                        eight_movies = res.data.movies.slice(index, index + 2);
                        eight_movies.forEach(function (movie) {
                            
    
                            $("main").append(
                                `<div class="movie">
                                <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}" ></a>
                                <h3>${movie.title}</h3>                                
                                </div>`
                                
                            )
    
                        })
                    }
                })
                break;


    }



};

const setup = () => {
    $("button").click(function () {
        compute(this.id);
    });

}


$(document).ready(setup)