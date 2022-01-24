 1. To import font go to google fonts and take the font with import link and how to implement
 2. Navbar:
     Create navbar (we usually separate into 3 with three containers)
     Use display flex to make it horizontal
     To remove bulletins from list use list-style-type:none; on ul tag
     always have this first :
             *{
                 box-sizing: border-box;
                  margin: 0;
                 padding: 0;

             }
             changing cursor to pointer : cursor: pointer;

              npm i three commands in react font awesome website

 import {fontAwesome} from '@fortawesome/react-fontawesome'




 import ReactDOM from 'react-dom'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 const element = <FontAwesomeIcon icon={faCoffee} />

 ReactDOM.render(element, document.body)

 how to add border 
        border-style: solid;
        border-radius: 20px;

how to add image as background:
    background-image: url("black.jpg");
    background-size: cover ;
    background-repeat: no-repeat;

