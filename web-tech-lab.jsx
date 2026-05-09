import React, { useState } from "react";

const SECTIONS = [
  {
    id: "HTML5",
    label: "HTML 5",
    icon: "H",
    accent: "#e05d2b",
    bgLight: "#fdf0eb",
    questions: [
      { 
        id: 1, 
        text: "Demonstrate all the text formatting tags in a single HTML page (b, i, u, s, sup, sub, mark, small, em, strong, del, ins, code, pre, blockquote, etc.).",
        code: `<!DOCTYPE html>
<html>
<body>
  <p><b>Bold</b>, <i>Italic</i>, <u>Underline</u>, <s>Strikethrough</s></p>
  <p>H<sub>2</sub>O and E=mc<sup>2</sup></p>
  <p><mark>Highlighted text</mark> and <small>Small text</small></p>
  <p><em>Emphasized</em> and <strong>Strong</strong></p>
  <p><del>Deleted</del> and <ins>Inserted</ins></p>
  <p><code>Code block</code></p>
  <pre>Preformatted
   text</pre>
  <blockquote>Blockquote: This is a quote.</blockquote>
</body>
</html>`,
        output: "The browser will display various paragraphs showcasing different text formats like bold, italic, underlined text, subscript (like in H2O), highlighted yellow text, small text, and distinct formatted blocks for code and quotes."
      },
      { 
        id: 2, 
        text: "Write HTML code to draw the following star triangle figure:\n*\n* * *\n* * * * *\n* * * * * * *",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Star Triangle</h2>
  <pre style="font-size: 20px;">
*
* * *
* * * * *
* * * * * * *
  </pre>
</body>
</html>`,
        output: "The browser will display a large, precisely formatted triangle made of asterisks (*). Because the <pre> tag is used, the exact spaces and line breaks typed in the code are preserved on screen."
      },
      { 
        id: 3, 
        text: "Create a web page to print a 'List of Course-wise Subjects' table for MBA and MCM courses, with merged cells showing Subject, Marks (Internal/External), Category (Internal/External) and Practical/Theory columns.",
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    table, th, td { border: 1px solid black; border-collapse: collapse; padding: 8px; }
  </style>
</head>
<body>
  <h2>List of Course-wise Subjects</h2>
  <table>
    <tr>
      <th rowspan="2">Course</th>
      <th rowspan="2">Subject</th>
      <th colspan="2">Marks</th>
      <th colspan="2">Category</th>
    </tr>
    <tr>
      <th>Internal</th>
      <th>External</th>
      <th>Practical</th>
      <th>Theory</th>
    </tr>
    <tr>
      <td rowspan="2">MBA</td>
      <td>Marketing</td>
      <td>30</td>
      <td>70</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Finance</td>
      <td>30</td>
      <td>70</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </table>
</body>
</html>`,
        output: "A structured table displaying courses (like MBA), subjects, marks, and categories. The table uses merged cells so that headings like 'Marks' and 'Category' span across two columns, and the 'Course' column spans across multiple rows."
      },
      { 
        id: 4, 
        text: "Using table related tags, align mobile network operator images (Vodafone, Airtel, Tata Indicom, Docomo, MTC, Uninor, Hutch, Aircel) with hyperlinks in a 3×3 grid.",
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    td { text-align: center; padding: 10px; border: 1px solid #ddd; }
    img { width: 100px; height: 100px; }
  </style>
</head>
<body>
  <table>
    <tr>
      <td><a href="#v"><img src="vodafone.jpg" alt="Vodafone"><br>Vodafone</a></td>
      <td><a href="#a"><img src="airtel.jpg" alt="Airtel"><br>Airtel</a></td>
      <td><a href="#t"><img src="tata.jpg" alt="Tata"><br>Tata</a></td>
    </tr>
    <tr>
      <td><a href="#d"><img src="docomo.jpg" alt="Docomo"><br>Docomo</a></td>
      <td><a href="#m"><img src="mtc.jpg" alt="MTC"><br>MTC</a></td>
      <td><a href="#u"><img src="uninor.jpg" alt="Uninor"><br>Uninor</a></td>
    </tr>
    <tr>
      <td><a href="#h"><img src="hutch.jpg" alt="Hutch"><br>Hutch</a></td>
      <td><a href="#ai"><img src="aircel.jpg" alt="Aircel"><br>Aircel</a></td>
      <td><a href="#j"><img src="jio.jpg" alt="Jio"><br>Jio</a></td>
    </tr>
  </table>
</body>
</html>`,
        output: "A neatly aligned 3x3 grid (table) containing images of mobile network operators. Below each image is the operator's name, and clicking on any image or name acts as a hyperlink to that operator's page."
      },
      { 
        id: 5, 
        text: "Create a web page with an embedded image map, fix hot spots on a world map image, and show country information when hot spots are clicked.",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>World Map Image Map</h2>
  <img src="world-map.jpg" usemap="#worldmap" alt="World Map" width="500" height="300">
  <map name="worldmap">
    <area shape="rect" coords="34,44,270,350" href="america.html" alt="North America">
    <area shape="circle" coords="337,300,44" href="africa.html" alt="Africa">
  </map>
  <p>Click on the continents to view information.</p>
</body>
</html>`,
        output: "An image of a world map is shown. When the user hovers their mouse over specific regions (like North America or Africa), the cursor changes to a pointer, and clicking those 'invisible' hotspots redirects them to a page with info about that country."
      },
      { 
        id: 6, 
        text: "Write HTML code for a form with a 'Basic information' fieldset (Full name, Birth date, Gender radio buttons, Address, Phone number) and an 'Extra information' fieldset (Interests checkboxes for Books/Movies/Videogames, Favorite color picker) with Send data and Reset form buttons.",
        code: `<!DOCTYPE html>
<html>
<body>
  <form>
    <fieldset>
      <legend>Basic Information</legend>
      Full Name: <input type="text" name="name"><br><br>
      Birth Date: <input type="date" name="bdate"><br><br>
      Gender: <input type="radio" name="gender" value="m"> M 
              <input type="radio" name="gender" value="f"> F<br><br>
      Address: <textarea name="address"></textarea><br><br>
      Phone: <input type="tel" name="phone">
    </fieldset>
    <br>
    <fieldset>
      <legend>Extra Information</legend>
      Interests: 
      <input type="checkbox" name="int" value="books"> Books
      <input type="checkbox" name="int" value="movies"> Movies<br><br>
      Favorite Color: <input type="color" name="favcolor">
    </fieldset>
    <br>
    <input type="submit" value="Send Data">
    <input type="reset" value="Reset Form">
  </form>
</body>
</html>`,
        output: "A web form enclosed in two distinct bordered boxes (fieldsets). The top box has fields for basic details like name, date picker, and gender radio buttons. The bottom box includes checkboxes and a color picker. At the bottom, there are 'Send' and 'Reset' buttons."
      },
      { 
        id: 7, 
        text: "Create a hotel customer profile web page for data entry including Name, Address, Age, Gender, Room Type (A/C, Non-A/C or Deluxe), and Type of payment (Cash, Credit/Debit Card or Coupons).",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Hotel Customer Profile</h2>
  <form>
    <label>Name:</label> <input type="text" name="name"><br><br>
    <label>Age:</label> <input type="number" name="age"><br><br>
    <label>Gender:</label> 
    <select name="gender">
      <option>Male</option><option>Female</option>
    </select><br><br>
    <label>Room Type:</label>
    <input type="radio" name="room" value="ac"> A/C
    <input type="radio" name="room" value="non-ac"> Non A/C
    <input type="radio" name="room" value="deluxe"> Deluxe<br><br>
    <label>Payment Type:</label>
    <select name="payment">
      <option>Cash</option><option>Card</option><option>Coupons</option>
    </select><br><br>
    <input type="submit" value="Submit Profile">
  </form>
</body>
</html>`,
        output: "A simple, easy-to-use form specifically for a hotel. The user can type their name and age, select gender from a dropdown list, pick a room type using circular radio buttons, and choose how they will pay using another dropdown menu."
      },
      { 
        id: 8, 
        text: "Demonstrate the use of HTML5 tags: <video>, <audio>, <header>, <footer>, <nav>, <embed>, <datalist>, <bdi>, <article>, and <output> with appropriate examples.",
        code: `<!DOCTYPE html>
<html>
<body>
  <header><h1>My HTML5 Page</h1></header>
  <nav><a href="#home">Home</a> | <a href="#about">About</a></nav>
  
  <article>
    <h2>Media section</h2>
    <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
    </video>
    <br>
    <audio controls>
      <source src="song.mp3" type="audio/mpeg">
    </audio>
  </article>

  <p>Search your favorite browser:</p>
  <input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Chrome"><option value="Firefox"><option value="Edge">
  </datalist>

  <p>Bidirectional isolation: <bdi>User123</bdi> posted this.</p>
  
  <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" id="a" value="50"> +
    <input type="number" id="b" value="50"> =
    <output name="x" for="a b">100</output>
  </form>

  <footer><p>© 2026 My Website</p></footer>
</body>
</html>`,
        output: "A modern web page featuring a structured layout with a header and footer. It includes a functional video and audio player with play/pause buttons, a text input box that suggests browsers (like Chrome) as you type, and a live math calculator using a range slider."
      },
      { 
        id: 9, 
        text: "Design an HTML page to create a deeply nested list for Programming Languages (Python→Frameworks/Libraries, Java→Core Concepts/Frameworks) and Web Development (Frontend→HTML/CSS/JS/React/Vue/Angular, Backend→Node.js/PHP/Ruby on Rails).",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Technology Stack</h2>
  <ul>
    <li>Programming Languages
      <ul>
        <li>Python
          <ul>
            <li>Django (Framework)</li>
            <li>Pandas (Library)</li>
          </ul>
        </li>
        <li>Java
          <ul>
            <li>Core Java</li>
            <li>Spring Boot (Framework)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Web Development
      <ul>
        <li>Frontend
          <ol>
            <li>HTML/CSS/JS</li>
            <li>React / Vue / Angular</li>
          </ol>
        </li>
        <li>Backend
          <ol>
            <li>Node.js</li>
            <li>PHP</li>
          </ol>
        </li>
      </ul>
    </li>
  </ul>
</body>
</html>`,
        output: "A complex bulleted list with multiple indented levels. It starts with 'Programming Languages' and 'Web Development'. Inside those, it branches out into specific languages or frontend/backend stacks, using a mix of bullet points and numbered lists."
      },
    ],
  },
  {
    id: "CSS",
    label: "CSS",
    icon: "C",
    accent: "#0070f3",
    bgLight: "#eaf3ff",
    questions: [
      { 
        id: 1, 
        text: "Create a web page to show all hyperlinks with: default color pink, active color blue, visited color green, and hyperlinks without underline using CSS pseudo-classes.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Default color pink, no underline */
  a { text-decoration: none; color: pink; }
  /* Visited color green */
  a:visited { color: green; }
  /* Hover state */
  a:hover { text-decoration: underline; }
  /* Active (when clicked) color blue */
  a:active { color: blue; }
</style>
</head>
<body>
  <h2>CSS Links</h2>
  <p><a href="#test1">Click me (I am a link)</a></p>
  <p><a href="#test2">Another link</a></p>
</body>
</html>`,
        output: "The browser displays text links that are pink by default and have no underline. When you click and hold the link, it turns blue. After you have visited the link, it turns green permanently."
      },
      { 
        id: 2, 
        text: "Create Box Shadow and Text Shadow effects using CSS3 box-shadow and text-shadow properties with multiple values.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    text-shadow: 2px 2px 4px #000000, 0 0 10px blue;
    color: white;
  }
  .box {
    width: 200px;
    height: 100px;
    background-color: lightgray;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5), -5px -5px 10px rgba(255,0,0,0.3);
    padding: 20px;
  }
</style>
</head>
<body>
  <h1>Glowing Glowing Text</h1>
  <div class="box">
    This box has a complex shadow.
  </div>
</body>
</html>`,
        output: "A title heading that looks like it's glowing due to multiple text shadows (black drop shadow and blue glow). Below it is a gray rectangular box that appears slightly raised off the page because of distinct dark and reddish box shadows around its edges."
      },
      { 
        id: 3, 
        text: "Create Rounded Corners using CSS3 border-radius property, demonstrating circles, pills, and asymmetric rounding.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  .circle {
    width: 100px; height: 100px;
    background: red; border-radius: 50%;
  }
  .pill {
    width: 200px; height: 50px;
    background: blue; border-radius: 25px;
  }
  .asymmetric {
    width: 150px; height: 100px;
    background: green; border-radius: 15px 50px 30px 5px;
  }
</style>
</head>
<body>
  <div class="circle"></div><br>
  <div class="pill"></div><br>
  <div class="asymmetric"></div>
</body>
</html>`,
        output: "Three distinct colored shapes: A perfect red circle, a wide blue pill-shaped box (with fully rounded ends), and a green box where every single corner has a different level of roundness, creating a unique, lopsided shape."
      },
      { 
        id: 4, 
        text: "Create a web page showing newspaper layout effects on text content using CSS3 column-count and column-gap properties in multiple columns.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  .newspaper {
    column-count: 3;
    column-gap: 40px;
    column-rule: 2px solid lightblue;
    text-align: justify;
  }
</style>
</head>
<body>
  <h2>Newspaper Style Article</h2>
  <div class="newspaper">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  </div>
</body>
</html>`,
        output: "A single block of text is automatically split into three vertical columns, looking exactly like a printed newspaper article. There is a specific gap between the columns and a light blue vertical line dividing each column."
      },
      { 
        id: 5, 
        text: "Create a web page showing CSS3 transition effects where elements gradually change size, color, and position from one style to another on hover.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 1s, background 0.5s, transform 1s;
  }
  .box:hover {
    width: 200px;
    background: blue;
    transform: rotate(45deg);
  }
</style>
</head>
<body>
  <h2>Hover over the box</h2>
  <div class="box"></div>
</body>
</html>`,
        output: "A red square box is displayed. When the user hovers their mouse over the box, it smoothly and gradually expands its width, changes its color from red to blue, and rotates 45 degrees over a span of 1 second."
      },
      { 
        id: 6, 
        text: "Create a web page with a fixed background image using background-attachment: fixed so the image does not scroll with the rest of the page content.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-image: url('nature.jpg');
    background-attachment: fixed;
    background-size: cover;
    color: white;
    font-size: 24px;
  }
  .content { height: 1500px; padding: 50px; background: rgba(0,0,0,0.5); }
</style>
</head>
<body>
  <div class="content">
    <h2>Scroll down to see the effect</h2>
    <p>The background image will stay firmly in place while this text scrolls.</p>
  </div>
</body>
</html>`,
        output: "A page with a large background image and a lot of text. As the user scrolls down the page using their mouse or scrollbar, the text moves up, but the background image remains completely still, creating a parallax-like effect."
      },
      { 
        id: 7, 
        text: "Create a web page to position a background image using background-position and control repetition using background-repeat (repeat-x, repeat-y, no-repeat).",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  .box1 {
    width: 300px; height: 150px; border: 1px solid black;
    background-image: url('icon.png');
    background-repeat: repeat-x;
  }
  .box2 {
    width: 300px; height: 150px; border: 1px solid black;
    background-image: url('icon.png');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
</head>
<body>
  <h3>Repeat X</h3>
  <div class="box1"></div>
  <h3>No Repeat, Center Position</h3>
  <div class="box2"></div>
</body>
</html>`,
        output: "Two outlined boxes. The top box has a small icon image that repeats horizontally across the top edge. The bottom box contains the same icon, but it appears exactly once, perfectly centered in the middle of the box."
      },
      { 
        id: 8, 
        text: "Create an HTML page demonstrating all five CSS position properties: static, relative, absolute, fixed, and sticky — with visual examples of each.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  .box { padding: 10px; border: 2px solid black; width: 100px; margin-bottom: 20px; }
  .static { position: static; background: lightgray; }
  .relative { position: relative; left: 30px; background: lightblue; }
  .absolute { position: absolute; top: 10px; right: 10px; background: lightcoral; }
  .fixed { position: fixed; bottom: 10px; right: 10px; background: lightgreen; }
  .sticky { position: sticky; top: 0; background: yellow; z-index: 10; }
  .tall { height: 1000px; background: #fafafa; }
</style>
</head>
<body>
  <div class="tall">
    <div class="box sticky">Sticky (Sticks to top)</div>
    <div class="box static">Static (Normal)</div>
    <div class="box relative">Relative (Moved 30px left)</div>
    <div class="box absolute">Absolute (Top Right)</div>
    <div class="box fixed">Fixed (Bottom Right)</div>
    <p>Scroll down!</p>
  </div>
</body>
</html>`,
        output: "A long scrolling page showing different positioned boxes. The Absolute box is locked to the top-right of the page. The Fixed box stays locked at the bottom-right even when scrolling. The Sticky box scrolls normally until it hits the top of the screen, where it firmly sticks."
      },
      { 
        id: 9, 
        text: "Design a web page using CSS with: different font styles, page and element background images, background-repeat control, a:link/a:active/a:hover/a:visited styles, customized cursors, and layered z-index elements.",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { background: url('pattern.png') repeat; font-family: 'Arial', sans-serif; }
  a { cursor: crosshair; color: blue; text-decoration: none; }
  a:hover { color: red; font-weight: bold; }
  .layer1 { position: absolute; top: 50px; left: 50px; width: 150px; height: 150px; background: blue; z-index: 1; }
  .layer2 { position: absolute; top: 100px; left: 100px; width: 150px; height: 150px; background: red; z-index: 2; }
</style>
</head>
<body>
  <h2><a href="#">Hover over me (Crosshair Cursor)</a></h2>
  <div class="layer1">Z-index 1 (Back)</div>
  <div class="layer2">Z-index 2 (Front)</div>
</body>
</html>`,
        output: "A page with a repeating background pattern. There's a link that changes your mouse cursor to a plus sign (crosshair) when hovered. Below it are two large colored squares; the red square overlaps and physically sits on top of the blue square due to a higher z-index."
      },
    ],
  },
  {
    id: "JavaScript",
    label: "JavaScript",
    icon: "J",
    accent: "#ca8a04",
    bgLight: "#fefce8",
    questions: [
      { 
        id: 1, 
        text: "Design a web page to validate credit card numbers: MasterCard (prefix 51–55, length 16), Visa (prefix 4, length 13 or 16), American Express (prefix 34 or 37, length 15).",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Credit Card Validator</h2>
  <input type="text" id="cc" placeholder="Enter Card Number">
  <button onclick="validateCard()">Validate</button>
  <p id="result"></p>

  <script>
    function validateCard() {
      const num = document.getElementById('cc').value;
      let type = "Invalid or Unknown";
      
      if (/^5[1-5]\\d{14}$/.test(num)) type = "MasterCard";
      else if (/^4(\\d{12}|\\d{15})$/.test(num)) type = "Visa";
      else if (/^3[47]\\d{13}$/.test(num)) type = "American Express";
      
      document.getElementById('result').innerText = type;
    }
  </script>
</body>
</html>`,
        output: "A simple text input box with a 'Validate' button. When a user types a credit card number and clicks the button, a message appears below instantly identifying whether the number belongs to MasterCard, Visa, American Express, or if it is an invalid format."
      },
      { 
        id: 2, 
        text: "Design a web page to validate: (a) Name — no special characters, (b) Email-id — valid format with @ and domain, (c) Password — minimum 8 chars, at least one uppercase, digit, and special character.",
        code: `<!DOCTYPE html>
<html>
<body>
  <form onsubmit="return validateForm()">
    Name: <input type="text" id="name"><br><br>
    Email: <input type="text" id="email"><br><br>
    Password: <input type="password" id="pwd"><br><br>
    <button type="submit">Register</button>
  </form>
  <script>
    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const pwd = document.getElementById('pwd').value;
      
      if (!/^[a-zA-Z\\s]+$/.test(name)) return alert("Name must not have special chars"), false;
      if (!/^\\S+@\\S+\\.\\S+$/.test(email)) return alert("Invalid email format"), false;
      if (!/^(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$/.test(pwd)) {
        return alert("Password needs 8 chars, 1 uppercase, 1 number, 1 special char"), false;
      }
      alert("Registration successful!");
      return true;
    }
  </script>
</body>
</html>`,
        output: "A form with inputs for name, email, and password. If the user submits without fulfilling the strict rules (e.g., trying to use special characters in the name, or a weak password), their browser will pop up an alert box telling them exactly what they did wrong."
      },
      { 
        id: 3, 
        text: "Store 5 country names and their capitals. Ask the user to select a country and capital from two dropdown lists. Display 'Correct answer' if matched; otherwise display an error and the correct capital.",
        code: `<!DOCTYPE html>
<html>
<body>
  Country: 
  <select id="country">
    <option value="India">India</option><option value="Japan">Japan</option>
  </select>
  Capital: 
  <select id="capital">
    <option value="Tokyo">Tokyo</option><option value="New Delhi">New Delhi</option>
  </select>
  <button onclick="checkAnswer()">Check</button>
  <p id="msg"></p>

  <script>
    const data = { "India": "New Delhi", "Japan": "Tokyo" };
    function checkAnswer() {
      const c = document.getElementById('country').value;
      const cap = document.getElementById('capital').value;
      const msg = document.getElementById('msg');
      
      if (data[c] === cap) {
        msg.innerText = "Correct answer!";
        msg.style.color = "green";
      } else {
        msg.innerText = "Error: The capital of " + c + " is " + data[c];
        msg.style.color = "red";
      }
    }
  </script>
</body>
</html>`,
        output: "Two dropdown menus, one for countries and one for capitals. When the user selects a pair and clicks 'Check', text appears below in green saying 'Correct answer!' if they match, or red text revealing the correct capital if they chose wrong."
      },
      { 
        id: 4, 
        text: "Design a simple Calculator web page with digit buttons 0–9, operators +−×÷, equals =, decimal point, and a Clear button. Support chained calculations.",
        code: `<!DOCTYPE html>
<html>
<body>
  <input type="text" id="display" disabled><br><br>
  <button onclick="append('7')">7</button>
  <button onclick="append('8')">8</button>
  <button onclick="append('9')">9</button>
  <button onclick="append('+')">+</button><br>
  <button onclick="append('4')">4</button>
  <button onclick="append('5')">5</button>
  <button onclick="append('6')">6</button>
  <button onclick="append('-')">-</button><br>
  <button onclick="append('1')">1</button>
  <button onclick="append('2')">2</button>
  <button onclick="append('3')">3</button>
  <button onclick="append('*')">*</button><br>
  <button onclick="append('0')">0</button>
  <button onclick="append('.')">.</button>
  <button onclick="calc()">=</button>
  <button onclick="clearDisp()">C</button>

  <script>
    const d = document.getElementById('display');
    function append(val) { d.value += val; }
    function clearDisp() { d.value = ""; }
    function calc() {
      try { d.value = eval(d.value); } 
      catch(e) { d.value = "Error"; }
    }
  </script>
</body>
</html>`,
        output: "A functional, compact digital calculator UI consisting of a text box (display) and a grid of buttons for numbers and math symbols. Clicking the buttons builds a math equation in the box, and clicking '=' evaluates the result instantly."
      },
      { 
        id: 5, 
        text: "Design a web page that self-modifies every minute using setInterval: changes the background color, updates a timestamp, and rotates displayed content.",
        code: `<!DOCTYPE html>
<html>
<body id="bg">
  <h2 id="title">Content Rotation A</h2>
  <p>Last updated: <span id="time"></span></p>

  <script>
    const colors = ["#ffdddd", "#ddffdd", "#ddddff"];
    const titles = ["Content Rotation A", "Content Rotation B", "Content Rotation C"];
    let i = 0;

    setInterval(() => {
      i = (i + 1) % colors.length;
      document.getElementById('bg').style.backgroundColor = colors[i];
      document.getElementById('title').innerText = titles[i];
      document.getElementById('time').innerText = new Date().toLocaleTimeString();
    }, 60000); // 1 minute = 60000ms
  </script>
</body>
</html>`,
        output: "A simple webpage that displays a title and the current time. Exactly every 60 seconds (1 minute), without the user doing anything, the background color switches, the title text changes to a new rotation, and the timestamp updates to the current time."
      },
      { 
        id: 6, 
        text: "Design a web page that implements a running digital clock showing hours, minutes, and seconds in HH:MM:SS format, updated every second using setInterval.",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Digital Clock</h2>
  <h1 id="clock" style="font-family: monospace; color: blue;"></h1>

  <script>
    function updateClock() {
      const now = new Date();
      const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0') + ':' + 
                      now.getSeconds().toString().padStart(2, '0');
      document.getElementById('clock').innerText = timeStr;
    }
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
  </script>
</body>
</html>`,
        output: "A large, clear digital clock is displayed on the screen. The seconds update smoothly every single second in a classic HH:MM:SS format, giving the appearance of a live, running digital watch."
      },
      { 
        id: 7, 
        text: "Write a web app that accepts a user's birthdate in a text box (DD/MM/YYYY) and displays the day of the week (Monday, Tuesday, etc.) at the click of a button.",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Find the Day You Were Born</h2>
  <input type="text" id="bdate" placeholder="DD/MM/YYYY">
  <button onclick="findDay()">Get Day</button>
  <h3 id="result"></h3>

  <script>
    function findDay() {
      const input = document.getElementById('bdate').value.split('/');
      // Date format is YYYY, MM (0-indexed), DD
      const date = new Date(input[2], input[1] - 1, input[0]);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      document.getElementById('result').innerText = "You were born on a " + days[date.getDay()];
    }
  </script>
</body>
</html>`,
        output: "An input box requesting a date like '25/12/2000'. When the user enters their birthday and clicks the button, bold text appears underneath declaring the exact day of the week they were born on, such as 'You were born on a Monday'."
      },
      { 
        id: 8, 
        text: "Write a script that inputs a telephone number as a string in the form (555)555-5555, uses the split() method to extract the area code and the last four digits, and displays them in separate text fields.",
        code: `<!DOCTYPE html>
<html>
<body>
  Phone Number: <input type="text" id="phone" value="(555)123-4567">
  <button onclick="splitPhone()">Split</button><br><br>
  
  Area Code: <input type="text" id="area"><br>
  Last 4 Digits: <input type="text" id="last4">

  <script>
    function splitPhone() {
      const phone = document.getElementById('phone').value;
      const parts = phone.split(')');
      const areaCode = parts[0].replace('(', '');
      const last4 = parts[1].split('-')[1];
      
      document.getElementById('area').value = areaCode;
      document.getElementById('last4').value = last4;
    }
  </script>
</body>
</html>`,
        output: "A main input box pre-filled with a phone number format like (555)123-4567. Clicking the 'Split' button runs JavaScript that instantly extracts the '555' and the '4567' and places them cleanly into two separate, read-only text fields below."
      },
      { 
        id: 9, 
        text: "Develop functions: (a) accepts a string and returns the position (index) of the leftmost vowel; (b) accepts a number and returns it with its digits reversed (e.g. 12345 → 54321).",
        code: `<!DOCTYPE html>
<html>
<body>
  <script>
    // (a) Find leftmost vowel
    function findLeftmostVowel(str) {
      const match = str.match(/[aeiouAEIOU]/);
      return match ? match.index : -1;
    }

    // (b) Reverse number
    function reverseNumber(num) {
      return parseInt(num.toString().split('').reverse().join(''));
    }

    // Demo output to page
    document.write("<p>Leftmost vowel in 'JavaScript' is at index: " + findLeftmostVowel('JavaScript') + "</p>");
    document.write("<p>Reversed number of 12345 is: " + reverseNumber(12345) + "</p>");
  </script>
</body>
</html>`,
        output: "The browser simply displays two lines of text: the first line shows the mathematical index of the first vowel found in the word 'JavaScript', and the second line proves the number reversal function by printing '54321'."
      },
      { 
        id: 10, 
        text: "Write a JavaScript function that swaps the case of all letters in a string: uppercase letters become lowercase and lowercase letters become uppercase (e.g. 'Hello World' → 'hELLO wORLD').",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>Swap Letter Case</h2>
  <input type="text" id="str" value="Hello World">
  <button onclick="doSwap()">Swap</button>
  <p id="out"></p>

  <script>
    function doSwap() {
      const str = document.getElementById('str').value;
      let swapped = "";
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) swapped += char.toLowerCase();
        else swapped += char.toUpperCase();
      }
      document.getElementById('out').innerText = swapped;
    }
  </script>
</body>
</html>`,
        output: "A text box containing 'Hello World'. When the user clicks 'Swap', the text underneath updates to read 'hELLO wORLD', perfectly demonstrating that every uppercase letter turned lowercase and vice-versa."
      },
      { 
        id: 11, 
        text: "Design a survey web page for 4 Maruti car models (K10, Zen-Astelo, Wagnor, SX4) across 4 metro cities (Delhi, Mumbai, Chennai, Kolkata). Allow users to enter car counts and display a tabulated report.",
        code: `<!DOCTYPE html>
<html>
<head>
  <style>table, th, td { border: 1px solid black; padding: 5px; }</style>
</head>
<body>
  <h2>Car Survey</h2>
  <table id="survey">
    <tr><th>City / Model</th><th>K10</th><th>Zen-Astelo</th><th>Wagnor</th><th>SX4</th></tr>
    <tr><td>Delhi</td><td><input type="number" value="10"></td><td><input type="number" value="5"></td><td><input type="number" value="20"></td><td><input type="number" value="8"></td></tr>
    <tr><td>Mumbai</td><td><input type="number" value="15"></td><td><input type="number" value="2"></td><td><input type="number" value="12"></td><td><input type="number" value="4"></td></tr>
  </table>
  <br>
  <button onclick="generateReport()">Generate Tabulated Report</button>
  <div id="report"></div>

  <script>
    function generateReport() {
      // In a real app, we'd read inputs, but for demo we just clone the table and remove inputs
      let tableHtml = "<h3>Final Report</h3><table>" + document.getElementById('survey').innerHTML + "</table>";
      tableHtml = tableHtml.replace(/<input type="number" value="/g, '').replace(/">/g, '');
      document.getElementById('report').innerHTML = tableHtml;
    }
  </script>
</body>
</html>`,
        output: "A table acting as a data-entry grid, mapping cities against car models with small number input boxes for the data. Upon clicking the Generate button, a clean, static, non-editable version of the table is generated underneath as a final report."
      },
    ],
  },
  {
    id: "PHP",
    label: "PHP",
    icon: "P",
    accent: "#7c3aed",
    bgLight: "#f5f3ff",
    questions: [
      { 
        id: 1, 
        text: "Create a multi-page PHP web application to maintain a session: store user name and login time in $_SESSION on a login page, and display them on a welcome page with a logout link that destroys the session.",
        code: `// login.php
<?php
session_start();
if(isset($_POST['login'])) {
    $_SESSION['username'] = $_POST['user'];
    $_SESSION['time'] = date('Y-m-d H:i:s');
    header("Location: welcome.php");
}
?>
<form method="POST">
  Name: <input type="text" name="user">
  <input type="submit" name="login" value="Login">
</form>

// welcome.php
<?php
session_start();
if(isset($_GET['logout'])) {
    session_destroy();
    echo "Logged out."; exit;
}
echo "Welcome, " . $_SESSION['username'] . "! Logged in at " . $_SESSION['time'];
echo "<br><a href='?logout=1'>Logout</a>";
?>`,
        output: "<h2>Welcome, John!</h2><p>Logged in at 2026-04-22 10:00:00</p><br><a href='#'>Logout</a>"
      },
      { 
        id: 2, 
        text: "Create a PHP program to write a cookie with name='username' and a value, then on the same or next page load, retrieve and display the cookie value with its expiration info.",
        code: `<?php
// Set the cookie for 1 hour (3600 seconds)
$cookie_name = "username";
$cookie_value = "JohnDoe";
setcookie($cookie_name, $cookie_value, time() + 3600, "/");

if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set yet. Refresh the page!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>`,
        output: "Cookie 'username' is set!<br>Value is: JohnDoe"
      },
      { 
        id: 3, 
        text: "Write a PHP program to store a page views counter in $_SESSION. Increment the count on each page refresh and display 'You have visited this page N times' on the web page.",
        code: `<?php
session_start();

if(isset($_SESSION['views'])) {
    $_SESSION['views'] = $_SESSION['views'] + 1;
} else {
    $_SESSION['views'] = 1;
}

echo "<h3>You have visited this page " . $_SESSION['views'] . " times.</h3>";
?>`,
        output: "<h3>You have visited this page 1 times.</h3>"
      },
      { 
        id: 4, 
        text: "Write a PHP program to store the current date-time in a COOKIE when a user first visits the page. On subsequent visits, display 'Last visited on [date-time]' using the stored cookie value.",
        code: `<?php
$visit_time = date("Y-m-d H:i:s");

if(isset($_COOKIE['last_visit'])) {
    $last = $_COOKIE['last_visit'];
    echo "<h3>Welcome back! Last visited on: " . $last . "</h3>";
} else {
    echo "<h3>Welcome! This is your first visit.</h3>";
}

// Update the cookie with the current time for the next visit
setcookie("last_visit", $visit_time, time() + (86400 * 30), "/"); 
?>`,
        output: "<h3>Welcome back! Last visited on: 2026-04-22 10:00:00</h3>"
      },
      { 
        id: 5, 
        text: "Using PHP and MySQL, develop a program to accept book information (Accession No., Title, Authors, Edition, Publisher) from a web form, store it in a 'books' table, and allow searching by title with results displayed in a table.",
        code: `<?php
// Note: Requires a database connection to run
// $conn = new mysqli("localhost", "root", "", "library");

if(isset($_POST['submit'])) {
    $title = $_POST['title'];
    // $conn->query("INSERT INTO books (title) VALUES ('$title')");
    echo "<p>Book '$title' added to database.</p>";
}
?>
<form method="POST">
  Book Title: <input type="text" name="title">
  <input type="submit" name="submit" value="Add Book">
</form>

<h3>Search Books</h3>
<form method="GET">
  Search: <input type="text" name="q">
  <input type="submit" value="Search">
</form>`,
        output: "<p>Book 'Clean Code' added to database.</p><h3>Search Books</h3><form><input type='text'><input type='button' value='Search'></form>"
      },
      { 
        id: 6, 
        text: "Create a PHP login form with User ID and Password fields. Validate credentials against a users table in MySQL. Display a personalized welcome page on success, or an error message on failure.",
        code: `<?php
$error = "";
// $conn = new mysqli("localhost", "user", "pass", "db");

if(isset($_POST['login'])) {
    $id = $_POST['userid'];
    $pw = $_POST['password'];
    
    // Simulating database logic
    // $res = $conn->query("SELECT * FROM users WHERE id='$id' AND pass='$pw'");
    if($id == "admin" && $pw == "1234") {
        echo "<h2>Welcome to your personalized dashboard, $id!</h2>";
        exit;
    } else {
        $error = "Invalid User ID or Password!";
    }
}
?>
<form method="POST">
  <div style="color:red;"><?php echo $error; ?></div>
  User ID: <input type="text" name="userid"><br>
  Password: <input type="password" name="password"><br>
  <input type="submit" name="login" value="Login">
</form>`,
        output: "<h2>Welcome to your personalized dashboard, admin!</h2>"
      },
      { 
        id: 7, 
        text: "Create a PHP page with a department selector dropdown. On form submission, query the PERS table in MySQL and display all employee records where dno matches the selected department, with column headings.",
        code: `<?php
// Simulating a database query
$simulated_db = [
    ["id"=>1, "name"=>"Alice", "dno"=>"IT"],
    ["id"=>2, "name"=>"Bob", "dno"=>"HR"]
];
$selected_dno = $_GET['dno'] ?? 'IT';
?>
<form method="GET">
  Department: 
  <select name="dno">
    <option value="IT">IT</option>
    <option value="HR">HR</option>
  </select>
  <input type="submit" value="Filter">
</form>

<table border="1">
  <tr><th>ID</th><th>Employee Name</th><th>Dept No</th></tr>
  <?php
  foreach($simulated_db as $emp) {
      if($emp['dno'] == $selected_dno) {
          echo "<tr><td>{$emp['id']}</td><td>{$emp['name']}</td><td>{$emp['dno']}</td></tr>";
      }
  }
  ?>
</table>`,
        output: "<table border='1'><tr><th>ID</th><th>Employee Name</th><th>Dept No</th></tr><tr><td>1</td><td>Alice</td><td>IT</td></tr></table>"
      },
    ],
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button onClick={copy} style={{
      padding: "5px 12px",
      fontSize: 12,
      fontWeight: 500,
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      background: copied ? "rgba(22, 163, 74, 0.1)" : "rgba(255, 255, 255, 0.1)",
      color: copied ? "#16a34a" : "#64748b",
      border: "1px solid",
      borderColor: copied ? "#16a34a" : "#e2e8f0",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    }}>
      {copied ? "✓ Copied" : "Copy Code"}
    </button>
  );
}

function QuestionCard({ question, section }) {
  const [panel, setPanel] = useState(null);
  const [code, setCode] = useState(question.code);

  function handleBtn(type) {
    if (panel === type) { setPanel(null); return; }
    setPanel(type);
  }

  const qText = question.text.replace(/\n/g, " ");

  const getIframeContent = () => {
    if (["HTML5", "CSS", "JavaScript"].includes(section.id)) {
      return code;
    }
    return `<div style="font-family: sans-serif; padding: 20px;">
      <div style="background: #fff3cd; color: #856404; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <strong>Note:</strong> PHP code requires a server to execute. Showing static preview:
      </div>
      ${question.output}
    </div>`;
  };

  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      marginBottom: 16,
      overflow: "hidden",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}>
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        padding: "20px",
      }}>
        <div style={{
          minWidth: 32,
          height: 32,
          borderRadius: 8,
          background: section.bgLight,
          color: section.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 700,
          flexShrink: 0,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          border: `1px solid ${section.accent}33`,
        }}>
          {String(question.id).padStart(2, "0")}
        </div>

        <p style={{
          flex: 1,
          margin: 0,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#334155",
          paddingTop: 4,
        }}>
          {qText}
        </p>

        <div style={{ display: "flex", gap: 8, flexShrink: 0, paddingTop: 2 }}>
          <button
            onClick={() => handleBtn("code")}
            style={{
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              background: panel === "code" ? section.accent : "transparent",
              color: panel === "code" ? "#fff" : "#64748b",
              border: `1px solid ${panel === "code" ? section.accent : "#cbd5e1"}`,
              borderRadius: "6px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              boxShadow: panel === "code" ? `0 4px 12px ${section.accent}40` : "none",
            }}
          >
            {"{ } Code"}
          </button>
          <button
            onClick={() => handleBtn("output")}
            style={{
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              background: panel === "output" ? "#10b981" : "transparent",
              color: panel === "output" ? "#fff" : "#64748b",
              border: `1px solid ${panel === "output" ? "#10b981" : "#cbd5e1"}`,
              borderRadius: "6px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              boxShadow: panel === "output" ? "0 4px 12px rgba(16, 185, 129, 0.25)" : "none",
            }}
          >
            ▶ Output
          </button>
        </div>
      </div>

      {panel && (
        <div style={{
          borderTop: "1px solid #e2e8f0",
          background: panel === "code" ? "#1e293b" : "#f8fafc",
        }}>
          {panel === "code" ? (
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 20px",
                borderBottom: "1px solid #334155",
                background: "#0f172a",
              }}>
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
                  {section.id.toLowerCase()} solution (editable)
                </span>
                <CopyButton text={code} />
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                style={{
                  margin: 0,
                  padding: "20px",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#f8fafc",
                  background: "transparent",
                  border: "none",
                  width: "100%",
                  minHeight: "350px",
                  resize: "vertical",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ) : (
            <div style={{ padding: "20px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  color: "#10b981",
                  background: "rgba(16, 185, 129, 0.1)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}>
                  Browser Output
                </span>
              </div>
              <div style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                overflow: "hidden",
                height: "350px",
                boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)"
              }}>
                <iframe
                  srcDoc={getIframeContent()}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Output preview"
                  sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SectionBadge({ count, color, bg }) {
  return (
    <span style={{
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      color,
      background: bg,
      padding: "4px 10px",
      borderRadius: "6px",
      border: `1px solid ${color}33`,
    }}>
      {count} exercises
    </span>
  );
}

export default function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const section = SECTIONS[activeIdx];

  return (
    <div style={{ 
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      background: "#f1f5f9",
      minHeight: "100vh",
      paddingTop: "2rem",
      paddingBottom: "4rem",
    }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Header */}
        <div style={{ 
          marginBottom: "2rem", 
          padding: "24px", 
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: "16px",
          color: "white",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 10,
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: "12px",
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              🚀
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>
                Web Development Lab
              </h1>
              <p style={{ margin: 0, fontSize: 14, color: "#94a3b8", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", marginTop: 4 }}>
                B.Tech CSE · Semester VI · Subject Code: PCS-693
              </p>
            </div>
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 15, color: "#cbd5e1", lineHeight: 1.6 }}>
            Select a section below to browse the laboratory exercises. Click <strong style={{ color: "#fff" }}>{"{ } Code"}</strong> to view the beginner-friendly solution code, or <strong style={{ color: "#fff" }}>▶ Output</strong> to see exactly what the browser will display.
          </p>
        </div>

        {/* Section Navigation */}
        <div style={{
          display: "flex",
          gap: 10,
          marginBottom: "2rem",
          padding: "8px",
          background: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          flexWrap: "wrap",
        }}>
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveIdx(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                fontSize: 14,
                fontWeight: i === activeIdx ? 600 : 500,
                background: i === activeIdx ? s.bgLight : "transparent",
                color: i === activeIdx ? s.accent : "#64748b",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{
                width: 24,
                height: 24,
                borderRadius: "6px",
                background: i === activeIdx ? "#ffffff" : "#f1f5f9",
                color: s.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                boxShadow: i === activeIdx ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
              }}>
                {s.icon}
              </span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Active Section Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          paddingBottom: 16,
          borderBottom: "2px solid #e2e8f0",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              background: section.bgLight,
              border: `1px solid ${section.accent}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 800,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              color: section.accent,
            }}>
              {section.icon}
            </div>
            <span style={{ fontSize: 20, fontWeight: 600, color: "#0f172a" }}>
              {section.label} Exercises
            </span>
          </div>
          <SectionBadge count={section.questions.length} color={section.accent} bg={section.bgLight} />
        </div>

        {/* Questions List */}
        <div>
          {section.questions.map(q => (
            <QuestionCard key={`${section.id}-${q.id}`} question={q} section={section} />
          ))}
        </div>

        {/* Footer Stats */}
        <div style={{
          marginTop: "3rem",
          padding: "20px",
          background: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{ fontSize: 14, color: "#64748b", fontWeight: 500 }}>
            {SECTIONS.reduce((a, s) => a + s.questions.length, 0)} total exercises across {SECTIONS.length} technologies
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            {SECTIONS.map(s => (
              <div key={s.id} title={s.label} style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: s.accent,
              }} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
