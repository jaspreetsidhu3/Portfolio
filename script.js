const navLinks=document.getElementsByClassName('nav-item');
const bodyContent=document.getElementById('body-content');
const navBarsValues = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click',function(){
    //change nav styling
    let currentActive = document.getElementsByClassName("active");
    currentActive[0].className = currentActive[0].className.replace(" active", "");
    this.className += " active";

    //change body-content
    switch (this.innerText) {
        case navBarsValues[0]:
            home();
            break;
        case navBarsValues[1]:
            experience();
            break;
        case navBarsValues[2]:
            projects();
            break;
        case navBarsValues[3]:
            skills()
            break;
        case navBarsValues[4]:
            contact()
            break;
        default:
            console.log("invalid nav path")

    }
    });
}

function home(){
bodyContent.innerHTML=`
<div class="home bg-dark" id="header" style="margin-top: auto;font-family: Montserrat" >
    		<div class="col-md-12">
                <br><br>
				<center><h1 id="resp" class="name text-md-center embed-responsive">Hi! I'm Jaspreet Singh</h1></center>
    			<br>
    		</div>
            <div class="container">
            <p id="update" class="text-center text-light">Passionate Software Quality Assurance Student with a Strong .NET Development Background 
                    seeking opportunities to apply my skills, collaborate with dynamic teams, and further enhance my 
                    expertise in ensuring top-notch software quality</p>
            </div>
            

            <div class="align-items-center pb-3 mt-5" id="social">
    			<center>
    			<img src="icon/i.png" class="socialIcon" height="25px" width="25px" onclick="linkedin()">
    			&nbsp&nbsp&nbsp
    			<img src="icon/g.png" class="socialIcon" height="25px" width="25px" onclick="git()">
    			&nbsp&nbsp&nbsp
                
    			<img src="icon/m3.svg" class="socialIcon" height="25px" width="25px" onclick="mail()">
    			&nbsp&nbsp&nbsp
    			
                <img src="icon/f.png" class="socialIcon" height="25px" width="25px" onclick="fb()">
                </center>
            </div>
            <br><br>
    	</div>
        </div>`;
}
function experience(){
bodyContent.innerHTML=` <div class="bg-dark text-white" style="height:92.5vh">
    <div class="container">
        <div class="row p-2">
            <div class="col-md-12">
                <h2 class="text-white mt-5">Experience</h2>
            </div>
        </div>
        <div class="ml-4 mt-2">
            <h4 class="text-white">Work Experience</h4>
            <div class="row">
                <div class="ml-4">
                    <h4>Engineer</h4>
                    <p>Nagarro Software PVT LTD - India</p>
                    <p>2021-2022</p>
                </div>
            </div>
        </div>
        <hr class="bg-light">
        <div class="ml-4 mt-5">
            <h3 class="text-white">Education</h3>
            <div class="row">
                <div class="ml-4">
                    <h4>Software Quality Assurance and Test Engineering</h4>
                    <h6>Graduate Certificate</h6>
                    <p>Conestoga College, Waterloo, Canada</p>
                    <p>
                    2023-2024
                    </p>
            </div>
            </div>
            <div class="row">
                <div class="ml-4">
                    <h4>Computer Science and Engineering</h4>
                    <h6>Bachelors of Technology</h6>
                    <p>Rayat Bahra University, Punjab, India</p>
                    <p>
                    2017-2021
                    </p>
            </div>
        </div>
    </div>
</div>  
`;
}
function projects(){
bodyContent.innerHTML=`<div class="Project bg-dark text-white">
<div class="container p-2">
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center text-white mt-5" style="color: black">Selected Projects</h3>
        </div>
    </div>
    <div class="row align-items-center m-auto" id="block">
        <div class="container pl-5 pr-5">
            <div class="col-md-12 pl-2 pr-2">
            </div>
        </div>
    </div>
</div>
<!---  Projects showcase   -->
<div class="container">
    <div class="row mt-3">
        <div class="col-lg-7">
            <div class="border-0" id="cardview">
                <img class="card-img" id="cardimg"
                    src="https://github.com/jaspreetsidhu3/Bit-News-APK/raw/main/screenshots/Group%202%20(1).png">
            </div>
        </div>
        <div class="col-lg-5">
            <h3 class="card-title text-center">Bit News</h3>
            <p class="card-text">Implemented by using: Android(Java), Firebase, Volley, Glide,
                RapidAPI</p>
            <p class="card-text">Description: Bit News delivers the latest headlines in a concise and
                easy-to-read
                format, so you can stay informed without reading long articles. Search for news from top sources
                such as BBC, ABC News, Bloomberg, Insider, Buzzfeed, CBS, CNN, Engadget, ESPN, FOX, Google News,
                and News24. Moreover, regional and national news is delivered based on the user's location.</p>
                <div class="d-flex justify-content-center">
                <button class="btn btn-warning" onClick="installBitNews()">Install APK</button>
                </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-7">
            <div class="border-0" id="cardview">
                <img class="card-img" id="cardimg" src="img/screenshots.png">
            </div>
        </div>
        <div class="col-lg-5">
            <h3 class="card-title text-center">MelGel</h3>
            <p class="card-text">Implemented by using: Android (Java), Firebase authentication, Room database</p>
            <p class="card-text">Description: Android application where users can share 
            social media profiles to others users via QR Code </p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-warning" onClick="melgelClick">GitHub (private repo)</button>
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-7">
            <div class="border-0" id="cardview">
                <img class="card-img" id="cardimg" src="img/extensions.png">
            </div>
        </div>
        <div class="col-lg-5">
            <h3 class="card-title text-center">Codler Edge Extensions</h3>
            <p class="card-text">Implemented by using: HTML + CSS + Javascript + Bootstrap</p>
            <p class="card-text">Description: Edge extensions can be used to add new features to browsers, 
            change the way edge browsers look and behaves, or provide additional functionality to websites. 
            About, 5000+ users are using these extensions. And few of extensions are in trending list at Microsoft edge store.</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-warning" onClick="knowMoreCodler()">Know more!</button>
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-7">
            <div class="border-0" id="cardview">
                <img class="card-img" id="cardimg" src="https://github.com/jaspreetsidhu3/Knight-Game/raw/main/Group%202209.png">
            </div>
        </div>
        <div class="col-lg-5">
            <h3 class="card-title text-center">Knight Game Search</h3>
            <p class="card-text">Implemented by using: Angular 12</p>
            <p class="card-text">Description: A game search bar where users can search 8,00,000+ Games.</p>
                <div class="d-flex justify-content-center">
                <button class="btn btn-warning" onClick="knightRedirect()">Visit now</button>
                </div>
                <br>
                <div class="d-flex justify-content-center">
                <button class="btn btn-warning" onClick="knightSourceCode()">Source code</button>
                </div>
        </div>
    </div>

    <button onclick="git()" class="btn btn-outline-dark">Check more on Github!</button>
</div>
</div>`;
}
function skills(){
bodyContent.innerHTML=`<div class="bg-dark">
<div class="container">
    <div class="row p-2">
        <div class="col-md-12">
            <h3 class="text-center text-white mt-5">Skills</h3>
        </div>
    </div>
    <div class="row p-3">
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/color/240/000000/c-sharp-logo.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">C#</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                60%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/color/240/000000/net-framework.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">.NET</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                70%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/color/240/000000/angularjs.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Angular</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                60%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top h-75" src="https://img.icons8.com/color/120/000000/html-5.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">HTML</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                80%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top h-75" src="https://img.icons8.com/color/120/000000/css3.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">CSS</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                80%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">JavaScript</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                60%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/color/240/000000/oracle-logo.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Oracle DB</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                50%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/ios-filled/240/000000/mysql-logo.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">mySql</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                60%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/color/120/000000/java-coffee-cup-logo.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Java</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                70%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/fluent/120/000000/android-os.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Android</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                50%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Firebase</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                65%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Git</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                70%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    <!-- Card -->
    <div class="col-md-2">
        <div class="card shadow mt-3" style="width: 10rem; height:15em;">
            <img class="card-img-top" src="https://img.icons8.com/color/120/000000/jira.png" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title text-center">Jira</h5>
            <p></p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                70%
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Card ends-->
    </div>
</div>
</div>
`;
}
function contact(){
bodyContent.innerHTML=` <div class="Contact bg-dark" style="height:92.5vh">
<div class="container">
    <div class="row p-5">
        <div class="col-md-12">
            <h3 class="text-center text-white mt-3">Contact Me</h3>
        </div>
        <div class="col-md-12">
            <div class="d-flex justify-content-center p-5" id="social">

                <img src="icon/i.png" class="socialIcon m-3" height="40px" width="40px" onclick="linkedin()">

                <img src="icon/g.png" class="socialIcon m-3" height="40px" width="40px" onclick="git()">

                <img src="icon/m3.svg" class="socialIcon m-3" height="40px" width="40px" onclick="mail()">

                <img src="icon/f.png" class="socialIcon m-3" height="40px" width="40px" onclick="fb()">

            </div>
        </div>
    </div>
</div>

</div>`;
}

function fb(){
    window.open('https://www.facebook.com/profile.php?id=100008118284935');
}
function git(){
    window.open('https://github.com/jaspreetsidhu3');
}
function linkedin() {
    window.open('https://www.linkedin.com/in/jaspreetsidhu13/');
}
function mail(){
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jaspreetsidhu3may@gmail.com');
}
function installBitNews(){
    window.open('https://github.com/jaspreetsidhu3/Bit-News-APK');
}
function knightSourceCode(){
    window.open('https://github.com/jaspreetsidhu3/Knight-Game');
}
function knightRedirect(){
    window.open('https://jaspreetsidhu3.github.io/Knight-Game/');
}
function knowMoreCodler(){
    window.open("https://microsoftedge.microsoft.com/addons/search?developer=Codler");
}
function melgelClick(){
    window.open("https://github.com/jaspreetsidhu3/MelGel");
}
home();