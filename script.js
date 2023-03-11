// function setColor(btn, color){
//     var count=1;
//     var property = document.getElementById(btn);
//     if (count == 0){
//         property.style.backgroundColor = "#FFFFFF"
//         count=1;        
//     }
//     else{
//         property.style.backgroundColor = "#7FFF00"
//         count=0;
//     }

// }


var buttonIndex = 0;
var buttonIndexOld = 0;


function compute(id) {

    // var buttons = $("button");
    // // var index = 0;
    // 
    // var btn = $("btn");

    

    switch (id) {
        case "btn1":
            index = 0;
            buttonIndex = 1;
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
            buttonIndex = 2;
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
            buttonIndex = 3;
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
            buttonIndex = 4;
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
            buttonIndex = 5;
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
            buttonIndex = 6;
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
            buttonIndex = 7;
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
            buttonIndex = 8;
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
            buttonIndex = 9;
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
            buttonIndex = 10;
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
            buttonIndex = buttonIndex - 1;
            index = index - 2;
            
            buttonIndexOld = buttonIndex + 1;
            document.getElementById("btn" + buttonIndex).style.backgroundColor= "green";
            // document.getElementById("btn" + buttonIndex).style.color= "white";
            document.getElementById("btn" + buttonIndexOld).style.backgroundColor= "white";
            // document.getElementById("btn" + buttonIndexOld).style.color= "black";

            if (index > 2 ) {
                document.getElementById("btnBack").style.color= "black", border = "1px solid black";
                document.getElementById("btnBack").style.border = "2px solid black";
            }
            
    
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
                buttonIndex = buttonIndex + 1;
                buttonIndexOld = buttonIndex - 1;
                document.getElementById("btn" + buttonIndex).style.backgroundColor= "green";
                // document.getElementById("btn" + buttonIndex).style.color= "white";
                document.getElementById("btn" + buttonIndexOld).style.backgroundColor= "white";

                
            if (index < 18 ) {
                document.getElementById("btnForward").style.color= "black", border = "1px solid black";
                document.getElementById("btnForward").style.border = "2px solid black";
            }
            
                
                
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