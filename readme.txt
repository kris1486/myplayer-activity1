i want to create a music player that:
- shows the details of the current song playing
- the control and navigatoion buttons
- when i click the play and pause button 
    > the audio will play/pause
    > the button will change to play/pause
    > the seekbar will move and the time duration
- when i click the previous or next button 
    > the audio will change
    > the details of the song will change
    > the seekbar will also start again from 0
    > the background color will change
- when i click the volume controls the volume will increase/decrease
    > will have an option for mute

A. first i will do the design in html and css to have a guide on the structure before doing the javascript functions.
FOR HTML AND CSS
1. i will create a monochrome gradient background theme 
2. then the music player box. 
3. then the content of the music player 
  -details of the music/song currently playing
    - album cover, 
    - song title, 
    - artist/singer.
    - audio (will not show in the browser)
4. then the control and navigation buttons
    - seek bar
        - duration 
            - current-time
            - total duration
        - seek slider
    - previous, play/pause, next buttons
    - volume control
        - volume up
        - volume slider
        - volume down

FOR THE javascript functions and implementations**mostly with the help of research-this is my weak point so far
1. create an object first for all the elements that will be needed from the html.
2. then the functions
    - change of visual for play and pause buttons
    - audio details
    - seekbar current time value
    - change in tract (previous and next)
    - volume change
