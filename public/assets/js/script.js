// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".sub").on("click", function(event) {
      var id = $(this).data("id");
      var newDev = {
       devoured: 1 
      }

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, { 
      type: "PUT",
      data: newDev
      }).then(
        function() {
          console.log("changed sleep to", newDev);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var addBurger = {
        burger_name: $("#new").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
      }).then(
        function() {
          console.log("new burger created");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  