# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: ... your name ...

## Overview.

an app that allows you to store an item and a list of sites its available with the price noted next to it

. . . . . List of user features  . . . .

- stores a list of items
- can track up to 3 sites the item is available from
- can delete an item
- can edit an item

## Setup.

. . . . Having cloned the repo, state the steps required to install and run the app . . . . .
1. Ensure you are in the correct directory(contains scr folder)
2. Run npm install
3. run npm start

## Data Model Design.
. . . . . A diagram of app's data model (see example below) . . . . . 

![Data Model Diagram]( https://i.ibb.co/8g0dk51/Blank-Diagram.png)

Dashed lines represent linking to another section of the site. Each item Edit page is unic using a parameterized url so any added item will have an edit page.

## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![app Screen shot]( https://i.ibb.co/HHYhRFt/app-pic.jpg)

>> Shows a card for each item in the datastore. This item list can be filtered by name after you enter in the search box and press the button. You can go to the add view by pressing add item. Id edit is selected on an item you are sent to that items edit view. if del is pressed that item is removed

![add page](https://i.ibb.co/KGwwxkZ/add-page.jpg)

>> you can add data for a new item (name, img url, up to 3 options). the only option that needs to be imputed to create a new item is the item name. when add is pressed a new item is added, and you are returned to the main view. If you cancel is pressed you are just returned to the main view. 

![edit page](https://i.ibb.co/m9CZpYP/Capture.jpg)

>> this view functions and looks like add view but instead has the info of the selected item and when to save is pressed it over rights the changed date of the item.


## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /additem (public)-  lets you add a new item
- /edit/:id (public) – lets you edit a existing item

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![]( https://i.ibb.co/Xzp7vdT/Capture.jpg)


