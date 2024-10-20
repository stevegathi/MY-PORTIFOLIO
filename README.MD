## WEB DEVELOPMENT 
WEB DEVELOPMENT 

- Frontend development :: building the user facing part of the website 
 
   Key Concepts 
  - HTML : Hyper Text Markup Language  :  - create the webpage structure and layout 
                                                                     - uses html elements to create content   

  - CSS : Cascading stylesheets : - styling of HTML elements 
                                                   - frameworks to speed up the design process i.e. bootstrap , tailwind css

  - JS : JavaScript :  - adding interactiveness and dynamic features through the Document Object Model
  - Responsive Design - ensure the website looks good on various screen sizes (desktops , tablets and mobiles phones)
                                   - Techniques , - bootstrap   - css media queries



- backend development :: deals with the server side of a website :: scripting files , databases (MySQL)
                                        - the application is the code that contains the logic of the website or web app
                                        - Database : used to store and manage the data 
                                         - Python / Django 
                                         - PHP / Laravel , Javascript / Node , Ruby / Ruby on rails , Java 

Front End -> <-Web Services <-> Backend 


- Terminal :: management of files , directories and processes. 
- Version Control Systems : systems used in programming to track changes in code. 
                                            and also facilitate collaboration amongst multiple developers 

    GIT : a VCS , provided to access on platforms GITHUB / BITBUCKET / GITLAB


TERMINAL : COMMON COMMANDS FOR DIRECTORY MANAGEMENT IN WEB DEVELOPMENT / GIT BASH / Terminal

project :  Emobilis Web Development Page : info on the program , course outline , about 

- decision on the project structure 
  - RootDirectory -> index.html , CSS/   PUBLIC/  ASSETS/  JS/


1. Print Working Document : pwd 
2.  list : ls
3. change directory :  cd  'directory name' : navigate in
                                   cd  ..  : navigate out
4. clear : to clear out commands on terminal 
5. mkdir : make directory  :: mkdir 'emobilis web'
                                             mkdir emobilisWeb

6. touch : create a file  : touch filename


7. cp : copy ,
8. mv: move 
9. cat : allow create files 

10. rm -rf directoryname


## GITHUB PROCESS 

### Prerequiste 
a. Terminal knowledge
b. github account 
c. ## configure the github on terminal 

### Configuration steps 
0. git init
1. git config user.email 'x@example.com'  {here use the email you registered to github with}
2. git config user.name 'josephbill'  {github account username}

 
#### when the project is new 
1. git init
2. git remote add origin https://github.com/josephbill/emobilisWebPage.git {get your url origin from github}
3. git remote -v  {to check if above origin was added}
4. git status : {red : rep. files that are not yet added to be committed} {green rep. files that are ready to be committed}
5. git add .
   git add filename/foldername
6. git commit -m "add commit message"
7. git push origin branchname(master/main)

#### when the project is not new 

4. git status : {red : rep. files that are not yet added to be committed} {green rep. files that are ready to be committed}
5. git add .
   git add filename/foldername
6. git commit -m "add commit message"
7. git push origin branchname(master/main)


## HTML 
1. HTML elements : an html element will defined with a start tag , some content and then an end tag 
   <>  content </>
   </> :: enclosing tag. 
2. Nature of the element :: <body>   </body> 
   - Block level element :: occupies entire width of the canvas  
   - Inline element  :: occupies only necessary width required by the elements 
3. HTML Attributes :: more info. about the element <meta data abt the element>
   every single html element can have an attribute 


## CSS 
- cascading stylesheets

Key Concepts 
1. How to write CSS .... 
    - inline css : css directly written on the element : style attribute
    - internal css : css script written inside the html document : style element 
    - external css : css script is an external linked to the html document
    - Syntax 
    identifier/selector : { 
                           property: value;
                           }
2. How to select element to style 
     - inline css :  the element is the selection
     - id attribute : unique identifier for our elements 
     - class attribute : grouping identifier for our elements 
     - tag elements : identifying the element to style using its html element name


### CSS GRID 
                                            1. Navbar navbar
2.Courses List                         3. video playing about emobilis                  4.Some content
5.ShortCoures List                     6. Course application form                       7.Some content 
                                             8. Footer footer 


1. Parent container 