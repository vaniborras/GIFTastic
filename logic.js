$('button').on('click', function(){
    var x = $(this).data("search")

    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=2jLkKJheS2pvdIpPos4L1V9yaal1xl2J&limit=10";
    console.log(queryURL);

    $.ajax({url: queryURL, method:'GET'})
        .done(function(response){

            var results = response.data;
            for ( i=0; i<results.length; i++){
                // $('#GIFArea').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
                // $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+"</p>");
            var resultsDiv = $('<div/>');
            var p = $('</p>');
            var cnnImage = $('<img/>');
            p.text(results[i].rating);
            cnnImage.addClass('cnnImg');
            cnnImage.attr('src', results[i].images.original.url);
            cnnImage.attr('data-still', results[i].images.original_still.url);
            cnnImage.attr('data-animate',results[i].images.original.url)
            .attr('data-state', 'still');
            resultsDiv.append(p);
            resultsDiv.append(cnnImage);
            resultsDiv.prependTo($('#GIFArea'));
            }

            $('cnnImg').on('click', function(){
                var state = $(this).attr('data-state');

                if (state == 'still'){
                    $(this).attr('src', $(this).data('animate'));
                    $(this).attr('date-state', 'animate');
                } else {
                    $(this).attr('src',$(this).data('still'));
                    $(this).attr('data-state', 'still');
                }

            
            })
        })
       
        })

        var cnnGifs = ["CNN", "Anderson Cooper", "Jake Tapper", "Don Lemon"];
        function alertCnnName() {
            var cnnName = $(this).attr("data-name");
    
            alert(cnnName);
          }
          function renderButtons() {
            $("#buttons-view").empty();
            
            for (var i = 0; i < cnnGifs.length; i++) {
                var a = $("<button>");

                a.addClass("movie");

                a.attr("data-name", movies[i]);

                a.text(movies[i]);
                
                $("#buttons-view").append(a);
                
            }
            $("#add-gif").on("click", function(event) {

                event.preventDefault();
                // This line grabs the input from the textbox
                var movie = $("#gif-input").val().trim();
        
                // Adding the movie from the textbox to our array
                movies.push(movie);
        
                // Calling renderButtons which handles the processing of our movie array
                renderButtons();
        
              });
        
              // Function for displaying the movie info
              // We're adding a click event listener to all elements with the class "movie"
              // We're adding the event listener to the document because it will work for dynamically generated elements
              $(".movies").on("click", alertMovieName)// will only add listeners to elements that are on the page at that time
              //$(document).on("click", ".movie", alertMovieName);
        
              // Calling the renderButtons function to display the intial buttons
              renderButtons();
            }
