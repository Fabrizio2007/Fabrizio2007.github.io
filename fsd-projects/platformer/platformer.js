$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
    createPlatform(300, 10, 250, 620, "green");
    createPlatform(700, 700, 50, 20, "blue"); 
    createPlatform(700, 700, 100, 100, "red");  
    createPlatform(800, 600, 300, 30, "orange");
    createPlatform(1000, 500, 300, 20, "purple");
  
    // TODO 3 - Create Collectables
    createCollectable("diamond", 500, 860); 
    createCollectable("steve", 700, 580);   
    createCollectable("database", 800, 430);
    
    // TODO 4 - Create Cannons
    createCannon("left", 500, 1200);
    createCannon("right", 600, 1500);
    createCannon("top", 700, 1000);
    createCannon("left", 800, 1300);
    createCannon("right", 1000, 1600);
    createCannon("top", 1000, 1400);
    
    

    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
