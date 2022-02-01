# GBVS-FrameTool #

Link to live site here: https://kenthiroi.github.io/GBVS-FrameTool/

A frame data tool for the fighting game Granblue Fantasy Versus (http://granbluefantasyvs.com/).

If you're unfamiliar with frame data in fighting games, check out this video: https://www.youtube.com/watch?v=_R0hbe8HZj0

## Background ##
Inspired by Frame Assistant Tool (FAT: https://fullmeter.com/fatonline/), GBVS Frame Tool is a data visualization of move properties of each move from each character. The goal behind this project is to give users an easier/better experience when looking up important information like frame data in a fighting game. 

## Functionality & MVPs ##
In GBVS-FrameTool, users will be able to:
* Look up frame data for each move
* Calculate frame traps for each character
* Possible features to be added (Ordered top to bottom):
  * Add GIF Animation of each move, will show when focused in on a single move (popup window)
  * List combos for each character

In addition, this project will include:
* A guide/glossary on what each part of the frame data table is
* A production README

## Wireframes ##
![alt text](https://i.imgur.com/NtvO1bk.png)
* Sandwich bar will let user navigate through all the tools available in GBVS Frame-Tool
* Each move will be clickable, popping up a separate window and show more detail of the move, as well as GIF Animation
* Header nav will display currently selected character
* Footer will display LinkedIn, Github and link to the Granblue community discord. Will also be in the about section.

## Technologies, Libraries, APIs ##
This project will be implemented with the following technologies:
* Plain old javascript

## Implementation Timeline ##
* Friday Afternoon & Weekend: Setup project, get all the necessary assets ready, as well as setting up the inbrowser backend to read through the character data (check gran.js in /data) and render onto the movelist table.
* Monday: Kill bugs, create additional framedata files for other characters to check functionality/ability to update.
* Tuesday: Dedicate to brushing up visual/adding animations to give life to the webpage.
* Wednesday: Implement up to 4 characters into the table and if there is time, add gif animation functionality to popup move window.
* Thursday Morning: Deploy to Github pages.
