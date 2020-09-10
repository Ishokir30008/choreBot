<!DOCTYPE html>
<html>
  <head>
    <title>Chore Door!</title>
    <link href="./style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type="text/css">
  </head>

  <body>
    <!--This a single-page website that plays a fully-functional game.-->
   
    <div class = "header">
      <img src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg">
    </div>

<!--Instructions for the game-->
    <div class = 'title-row'>
      <img src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg">
      <p class = "instructions-title">Instructions</p>
      <img src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg">
    </div>

    <table class = "instructions-row">
      <tr>
        <td class = "instructions-number">1</td>
        <td class = "instructions-text">Hiding behind one of these doors is the ChoreBot.</td>
      </tr>
      <tr>
        <td class="instructions-number">2</td>
        <td class="instructions-text">Your mission is to open all of the doors without running into the ChoreBot.</td>
      </tr>
      <tr>
        <td class="instructions-number">3</td>
        <td class="instructions-text">If you manage to avoid the ChoreBot until you open the very last door, you win!</td>
     </tr>
     <tr>
       <td class="instructions-number">4</td>
       <td class="instructions-text">See if you can score a winning streak!</td>
     </tr>
    </table>
 
  <!--Doors which will hide the dreaded ChoreBot -->
    <div class = "door-row">
      <img id  = "door1" class = "door-frame" src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg">

      <img id = "door2" class = "door-frame" src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg">

      <img id = "door3" class = "door-frame" src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg">
    </div>
    <!--JavaScript logic that interacts with the HTML-->
    <script type = "text/javascript" src = "script.js"></script>

    <!--A button that will respond to the status of the game -->
    <div id = "start" class = "start-row">Good luck!</div>
  </body>
</html>
