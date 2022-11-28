# Note-Taker-Express

## Description:
  This express app was created for the purpose of taking a running list of notes for any person that wants to keep track of anything in their life. The app takes in two inputs for one note: 1. the title of the note and 2. the body of the note. To save the new note, the user must click the floppy disk icon (square icon with a rectangle and circle in it for anyone born after 2004) and the new note will populate on the left hand side in the order in which it was saved. Users can click on any single saved note to bring it back to the right-hand side and populate what would be the blank note field. To add a new note from this screen, users must simply press the white '+' (plus) symbol and the notes input field becomes blank so the user can type into it again.

  At present, the delete function is not working properly. I worked on it extensively with an AskBCS assistant and we got it to work flawlessly on his computer, but, strangely, not on mine. On my end, it deletes multiple notes at a time, while on the assistant's end, you could delete the note you selected to be deleted. He was astounded at the difference and so the code to make the delete method work has been left in for others to test. 

  The assignment's User Story and Acceptance Criteria can be found in their own sections below.
  
  ## Table of Contents:
  - [Description](#description)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshots](#screenshots)
  - [Deployment Links](#deployment-links)
  ## User Story:
  ```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
  ## Acceptance Criteria:
  ```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
  ## Screenshots: 
  Past the initialization screen, you can input text into the title and body boxes of your note.
  ![image](https://user-images.githubusercontent.com/112277445/204336943-e4e9627c-316b-4764-9909-088b24637a08.png)
  Once you are finished with your note, click save and your note will be saved to the left hand side.
  ![image](https://user-images.githubusercontent.com/112277445/204340176-0b6bf001-3f54-4fd5-be9e-eac0a78aaca0.png)
  You can click any one of your saved notes to bring it back to the front and have it populate the input boxes so you can read it again.
  ![image](https://user-images.githubusercontent.com/112277445/204340531-f84db3d4-195e-4924-ae0f-ebd010cab2dd.png)
  ## Deployment Links:
  Here is a link to my GitHub [repo!](https://github.com/roldanmoncada/Note-Taker-Express)
  
  And here is the Heroku [link!]()