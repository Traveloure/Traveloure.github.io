
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
:root{
    --text-color-1:#000;
    --text-color-2:#000;
    --text-color-3:#00000083;
    --text-color-4:#fff;
    --bg-color-1: rgba(150, 204, 204, 0.521);
    --bg-color-2:#eee;
    --bg-color-3: rgb(150, 204, 204);
    --bg-color-4: rgba(3, 94, 251, 0.315);
    --bg-color-5: rgb(121, 209, 209);
    --bg-color-6: #fff;
    --bg-color-7: rgb(29, 58, 58);
    --box-shadow: 0 .5rem 1.5rem rgba(0 00 0, 0.1);

}
.card-icon > img {
    margin: 0px auto 0px auto;    
}
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    transition: all .2s linear;
}



html {
    font-size: 62.5%;
    scroll-padding-top: 60px;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

html::-webkit-scrollbar{
    width: .8rem;
}

html::-webkit-scrollbar-track{
    background: transparent;
}


body {
    height: 300rem;
    background: var(--bg-color-6);
}

body.active{
    --text-color-1: #fff;
    --text-color-2: #000;
    --text-color-3:#fff;
    --text-color-4:#000;
    --bg-color-1: rgba(29, 58, 58, 0.849);
    --bg-color-2:#eee;
    --bg-color-3: rgb(43, 66, 66);
    --bg-color-4: rgba(3, 25, 63, 0.568);
    --bg-color-5: rgba(29, 58, 58, 0.849);
    --bg-color-6: rgb(29, 58, 58);
    --bg-color-7: #fff;

    --box-shadow: 0 .5rem 1.5rem rgba(0 0 0 .1);
}

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--bg-color-1);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7%;
}

/*BUTTON*/
.btn {
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-6);
    color: var(--text-color-1);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
}

.btn:hover {
    transform: scale(1.1);
}

section {
    padding: 100px 100px;
}

.heading{
    opacity: 0.8;
    font-size: 4rem;
    color: var(--text-color-1);
    text-align: center;
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 3rem;
}

/*LOGO*/
header .logo {
    max-width: 150px;
    height: auto;
    margin-right: auto;
}

/* NAVIGATION */

header .navbar ul{
    list-style: none;
}

header .navbar a:hover {
    color: #87CEEB;
}

.navbar ul li {
    display: inline-block;
    position: relative;
}

.navbar ul li a{
    display: block;
    padding: 20px 25px;
    color: var(--text-color-1);
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
}



/* SEARCH BAR */

header .search-container {
    background: var(--bg-color-2);
    display: flex;
    align-items: center;
    height: 45px;
    width: 35rem;
}

header .search-container input{
    height: 100%;
    width: 100%;
    background: none;
    padding: 10px;
    text-transform: none;
    color: var(--text-color-2);
}

header .search-container label {
    font-size: 20px;
    margin-right: 1.5rem;
    cursor: pointer;
}

header .search-container label:hover {
    color: #87CEEB;
}

#search-btn {
    display: none;
}

/* Search bar autocomplete feature */
#autocomplete-list {
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 35rem;

    /* display: none; */
}

#autocomplete-list div {
    cursor: pointer;
    padding: 10px;
}

#autocomplete-list div:hover {
    background-color: #E9E9E9;
}

.video-background {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
}

.video-wrapper {
    position: absolute;
    padding-bottom: 56.25%;
    min-height: 300px;
    width: 100%;
    height: 100%;
}

.video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/*ICONS*/

header .icons i {
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    font-size: 20px;
    color: var(--text-color-1);
    margin-right: .5rem;
    cursor: pointer;
    margin-left: .5rem;
    text-align: center;
}

header .icons i:hover {
    color: #87CEEB;
}

/*MENU BAR*/

#menu-bar {
    color: var(--text-color-1);
    font-size: 3rem;
    padding: .5rem 1.2rem;
    cursor: pointer;
    display: none;
}

#menu-bar:hover {
    color: #87CEEB;
}

/*HOME PAGE*/

.front {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    position: relative;
    overflow: hidden;
}

.front .content {
    text-align: center;
}


.front .content h3 {
    font-size: 9vw;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 7px 10px 5px #353636, 15px 1px 2px rgba(56, 55, 55, 0.637);
}

.front .video-container video{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.categories {
    
    margin-top: -4%; 
    margin-bottom: -1%; 
}

.navbar-name {
    text-align: center;
}

.navbar-name span {
    color: var(--text-color-1);
    font-weight: 1000;
    font-size: 5rem; 
    margin-top: 100%;
}

/*slider1 start*/

.slider1{
    margin-top: 10%;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #188fbe;
}

.slider1::before{
    z-index: 777;
    content: "";
    position: absolute;
    background: var(--bg-color-4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slider1 .slcontain1{
    z-index: 888;
    color: #fff;
    width: 70%;
    margin-top: 20px;
    display: none;
}

.slider1 .slcontain1.active{
    display: block;
}

.slider1 .slcontain1 h1{
    font-size: 5cqb;
    font-weight:  600;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 50px;
    margin-bottom: 45px;
}

.slider1 .slcontain1 h1 span{
    font-size: 1.2em;
    font-weight: 900;
}

.slider1 .slcontain1 p{
    text-align: justify;
    font-size: 1.8em;
    margin-bottom: 10%;
}

.slider1 .slcontain1 a{
    background: var(--bg-color-6);
    padding: 15px 35px;
    color: var(--text-color-1);
    font-size: 1.5em;
    font-weight: 500;
    text-decoration: none;
}

.slider1 img{
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slnav1{
    z-index: 888;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(80px);
    margin-bottom: 12px;
}

.slnav1 .nav-btn1{
    width: 12px;
    height: 12px;
    background: var(--bg-color-2);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: 0.3s ease;
}

.slnav1 .nav-btn1.active{
    background: var(--bg-color-5);
}

.slnav1 .nav-btn1:not(:last-child){
    margin-right: 20px;
}

.slnav1 .nav-btn1:hover{
    transform: scale(1.2);
}

.image-sl1{
    position:absolute;
    width: 100%;
    clip-path: circle(0% at 0 50%);
}

.image-sl1.active{
    clip-path: circle(150% at 0 50%);
    transition:  2s ease;
    transition-property: clip-path;
}

/*slider1 end*/

/*slider2 start*/


.slider2{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #188fbe;

}

.slider2::before{
    z-index: 777;
    content: "";
    position: absolute;
    background: var(--bg-color-4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slider2 .slcontain2{
    z-index: 888;
    color: #fff;
    width: 70%;
    margin-top: 45px;
    display: none;
}

.slider2 .slcontain2.active{
    display: block;
}

.slider2 .slcontain2 h1{
    font-size: 5cqb;
    font-weight:  600;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 50px;
    margin-bottom: 20px;
}

.slider2 .slcontain2 h1 span{
    font-size: 1.2em;
    font-weight: 900;
}

.slider2 .slcontain2 p{
    text-align: justify;
    font-size: 1.8em;
    margin-bottom: 10%;
}

.slider2 .slcontain2 a{
    background: var(--bg-color-6);
    padding: 15px 35px;
    color: var(--text-color-1);
    font-size: 1.5em;
    font-weight: 500;
    text-decoration: none;
}

.slider2 img{
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slnav2{
    z-index: 888;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(80px);
    margin-bottom: 12px;
}

.slnav2 .nav-btn2{
    width: 12px;
    height: 12px;
    background: var(--bg-color-2);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: 0.3s ease;
}

.slnav2 .nav-btn2.active{
    background: var(--bg-color-5);
}

.slnav2 .nav-btn2:not(:last-child){
    margin-right: 20px;
}

.slnav2 .nav-btn2:hover{
    transform: scale(1.2);
}

.image-sl2{
    position:absolute;
    width: 100%;
    clip-path: circle(0% at 0 50%);
}

.image-sl2.active{
    clip-path: circle(150% at 0 50%);
    transition: 2s ease;
    transition-property: clip-path;
}
  /*end slider2*/


  /*start slider3*/

.slider3{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #188fbe;
}

.slider3::before{
    z-index: 777;
    content: "";
    position: absolute;
    background: var(--bg-color-4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slider3 .slcontain3{
    z-index: 888;
    color: #fff;
    width: 70%;
    margin-top: 45px;
    display: none;
}

.slider3 .slcontain3.active{
    display: block;
}

.slider3 .slcontain3 h1{
    font-size: 5cqb;
    font-weight:  600;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 50px;
    margin-bottom: 20px;
}

.slider3 .slcontain3 h1 span{
    font-size: 1.2em;
    font-weight: 900;
}

.slider3 .slcontain3 p{
    text-align: justify;
    font-size: 1.8em;
    margin-bottom: 10%;
}

.slider3 .slcontain3 a{
    background: var(--bg-color-6);
    padding: 15px 35px;
    color: var(--text-color-1);
    font-size: 1.5em;
    font-weight: 500;
    text-decoration: none;
}

.slider3 img{
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slnav3{
    z-index: 888;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(80px);
    margin-bottom: 12px;
}

.slnav3 .nav-btn3{
    width: 12px;
    height: 12px;
    background: var(--bg-color-2);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: 0.3s ease;
}

.slnav3 .nav-btn3.active{
    background: var(--bg-color-5);
}

.slnav3 .nav-btn3:not(:last-child){
    margin-right: 20px;
}

.slnav3 .nav-btn3:hover{
    transform: scale(1.2);
}

.image-sl3{
   position:absolute;
    width: 100%;
    clip-path: circle(0% at 0 50%);
}

.image-sl3.active{
    clip-path: circle(150% at 0 50%);
    transition: 2s ease;
    transition-property: clip-path;
}
/*slide 3 end*/

/*slider4 start*/


.slider4{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #188fbe;
}

.slider4:before{
    z-index: 777;
    content: "";
    position: absolute;
    background: var(--bg-color-4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slider4 .slcontain4{
    z-index: 888;
    color: #fff;
    width: 70%;
    margin-top: 45px;
    display: none;
}

.slider4 .slcontain4.active{
    display: block;
}

.slider4 .slcontain4 h1{
    font-size: 5cqb;
    font-weight:  600;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 50px;
    margin-bottom: 20px;
}

.slider4 .slcontain4 h1 span{
    font-size: 1.2em;
    font-weight: 900;
}

.slider4 .slcontain4 p{
    text-align: justify;
    font-size: 1.8em;
    margin-bottom: 10%;
}

.slider4 .slcontain4 a{
    background: var(--bg-color-6);
    padding: 15px 35px;
    color: var(--text-color-1);
    font-size: 1.5em;
    font-weight: 500;
    text-decoration: none;
}

.slider4 img{
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slnav4{
    z-index: 888;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(80px);
    margin-bottom: 12px;
}

.slnav4 .nav-btn4{
    width: 12px;
    height: 12px;
    background: var(--bg-color-2);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: 0.3s ease;
}

.slnav4 .nav-btn4.active{
    background: var(--bg-color-5);
}

.slnav4 .nav-btn4:not(:last-child){
    margin-right: 20px;
}

.slnav4 .nav-btn4:hover{
    transform: scale(1.2);
}

.image-sl4{
    position:absolute;
    width: 100%;
    clip-path: circle(0% at 0 50%);
}

.image-sl4.active{
    clip-path: circle(150% at 0 50%);
    transition: 2s ease;
    transition-property: clip-path;
}
  /*end slider4*/


  /*start know more about*/
  

.about-section {
    background: var(--bg-color-1);
    padding: 100px 0;
    text-align: center;
}

.about-section h2 {
    color: var(--text-color-1);
    font-size: 20px;
    margin-bottom: 20px;
}

.about-section p {
    margin: 40px;
    text-align: justify;
    font-size: 18px;
    color: var(--text-color-1);
}
  /*end know more about*/


/*PP ATTRACTION start*/

.PP_Attract{
    background: var(--bg-color-6);
}

.PP_Attract .box-container1{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
}

.PP_Attract .box-container1 .box1{
    border: .1rem solid var(--text-color-3);
    box-shadow: 0 .5rem 1rem rgba(0 0 0 .1);
    background: var(--bg-color-6);
    border-radius: 1%;
}


.PP_Attract .box-container1 .box1 .image1{
    height: 25rem;
    overflow: hidden;
}

.PP_Attract .box-container1 .box1 .image1 img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: .2s linear;
}


.PP_Attract .box-container1 .box1 .PP_att_con{
    padding: 2rem;
    text-align: center;
}

.PP_Attract .box-container1 .box1 .PP_att_con h3{
    font-size: 2.5rem;
    color: var(--text-color-1);
}

.PP_Attract .box-container1 .box1 .PP_att_con p{
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2;
    padding: 1rem 0;
    color: var(--text-color-1);
}

.title_head{
    text-align:center;
    font-size: 30px;
    color: var(--text-color-1);
    margin-bottom: 5%;
}

.PPattract_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    box-shadow: var(--box-shadow);
}

.PPattract_btn:hover {
    transform: scale(1.1);
    color: #188fbe;
}


/*PP ATTRACTION end*/


/*Coron ATTRACTION start*/

.CP_Attract{
    background: var(--bg-color-6);
}

.CP_Attract .box-container2{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
}

.CP_Attract .box-container2 .box2{
    border: .1rem solid var(--text-color-3);
    box-shadow: 0 .5rem 1rem rgba(0 0 0 .1);
    background: var(--bg-color-6);
    border-radius: 1%;
}


.CP_Attract .box-container2 .box2 .image2{
    height: 25rem;
    overflow: hidden;
}


.CP_Attract .box-container2 .box2 .image2 img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: .2s linear;
}


.CP_Attract .box-container2 .box2 .CP_att_con{
    padding: 2rem;
    text-align: center;
}

.CP_Attract .box-container2 .box2 .CP_att_con h3{
    font-size: 2.5rem;
    color: var(--text-color-1);
}

.CP_Attract .box-container2 .box2 .CP_att_con p{
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2;
    padding: 1rem 0;
    color: var(--text-color-1);
}

.title_head2{
    text-align:center;
    font-size: 30px;
    color: var(--text-color-1);
    margin-bottom: 5%;
}

.CPattract_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
}

.CPattract_btn:hover {
    transform: scale(1.1);
    color: #188fbe;
}

/*Coron ATTRACTION end*/

/*Busuanga ATTRACTION start*/

.BP_Attract{
    background: var(--bg-color-6);
}

.BP_Attract .box-container3{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
}

.BP_Attract .box-container3 .box3{
    border: .1rem solid var(--text-color-3);
    box-shadow: 0 .5rem 1rem rgba(0 0 0 .1);
    background: var(--bg-color-6);
    border-radius: 1%;
}


.BP_Attract .box-container3 .box3 .image3{
    height: 25rem;
    overflow: hidden;
}


.BP_Attract .box-container3 .box3 .image3 img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: .2s linear;
}


.BP_Attract .box-container3 .box3 .BP_att_con{
    padding: 2rem;
    text-align: center;
}

.BP_Attract .box-container3 .box3 .BP_att_con h3{
    font-size: 2.5rem;
    color: var(--text-color-1);
}

.BP_Attract .box-container3 .box3 .BP_att_con p{
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2;
    padding: 1rem 0;
    color: var(--text-color-1);
}

.title_head3{
    text-align:center;
    font-size: 30px;
    color: var(--text-color-1);
    margin-bottom: 5%;
}

.BPattract_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
}

.BPattract_btn:hover {
    transform: scale(1.1);
    color:#188fbe;
}

/*Busuanga ATTRACTION end*/

/*El Nido ATTRACTION start*/

.EP_Attract{
    background: var(--bg-color-6);
}

.EP_Attract .box-container4{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
}

.EP_Attract .box-container4 .box4{
    border: .1rem solid var(--text-color-3);
    box-shadow: 0 .5rem 1rem rgba(0 0 0 .1);
    background: var(--bg-color-6);
    border-radius: 1%;
}


.EP_Attract .box-container4 .box4 .image4{
    height: 25rem;
    overflow: hidden;
}


.EP_Attract .box-container4 .box4 .image4 img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: .2s linear;
}


.EP_Attract .box-container4 .box4 .EP_att_con{
    padding: 2rem;
    text-align: center;
}

.EP_Attract .box-container4 .box4 .EP_att_con h3{
    font-size: 2.5rem;
    color: var(--text-color-1);
}

.EP_Attract .box-container4 .box4 .EP_att_con p{
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2;
    padding: 1rem 0;
    color: var(--text-color-1);
}

.title_head4{
    text-align:center;
    font-size: 30px;
    color: var(--text-color-1);
    margin-bottom: 5%;
}

.EPattract_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
}

.EPattract_btn:hover {
    transform: scale(1.1);
    color:#188fbe;
}

/*El Nido ATTRACTION end*/

/*Puerto HOTAIR start*/
.PP_hotair1 h2{
    margin-bottom: 10px;
    text-align: center;
    font-size: 25px;
    color: var(--text-color-1);
    text-decoration: underline whitesmoke;
}

.PP_hotair1 .slide{
    background: var(--bg-color-1);
    border: .1rem solid rgba(0 0 0 0.2);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    margin-bottom: 4rem;
}

.PP_hotair1 .slide .image1{
    height: 25rem;
    width: 100;
    padding: 1.5rem;
    overflow: hidden;
    position: relative;
}

.PP_hotair1 .slide .image1 img{
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    object-fit: cover; 
}

.PP_hotair1 .slide .image1 .fa-hotel{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.PP_hotair1 .slide .image1 .fa-bed{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.PP_hotair1 .PPhotair_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    box-shadow: var(--box-shadow);
}

.PP_hotair1 .PPhotair_btn:hover{
    transform: scale(1.1);
    color:#188fbe;
}

.PP_hotair1 .slide .content{
    padding: 2rem;
    padding-top: 0;

}

.PP_hotair1 .slide .content h3{
    font-size: 2.5rem;
    color: var(--text-color-1);

}

.PP_hotair1 .slide .content p{
    font-size: 1.6rem;
    color: var(--text-color-1);
    padding: .5rem 0;
    line-height: 1.5;
}

.PP_hotair1 .slide .content .stars{
    padding: 1rem 0;
}

.PP_hotair1 .slide .content .stars i{
    font-size: 1.7rem;
    color: var(--text-color-1);
}

/*Puerto HOTAIR end*/

/*Puerto HOTAIR start*/
.CP_hotair1 h2{
    margin-bottom: 10px;
    text-align: center;
    font-size: 25px;
    color: var(--text-color-1);
    text-decoration: underline whitesmoke;
}

.CP_hotair1 .slide{
    background: var(--bg-color-1);
    border: .1rem solid rgba(0 0 0 0.2);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    margin-bottom: 4rem;
}

.CP_hotair1 .slide .image1{
    height: 25rem;
    width: 100;
    padding: 1.5rem;
    overflow: hidden;
    position: relative;
}

.CP_hotair1 .slide .image1 img{
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    object-fit: cover; 
}

.CP_hotair1 .slide .image1 .fa-hotel{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.CP_hotair1 .slide .image1 .fa-bed{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.CP_hotair1 .CPhotair_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    box-shadow: var(--box-shadow);
}

.CP_hotair1 .CPhotair_btn:hover{
    transform: scale(1.1);
    color:#188fbe;
}

.CP_hotair1 .slide .content{
    padding: 2rem;
    padding-top: 0;

}

.CP_hotair1 .slide .content h3{
    font-size: 2.5rem;
    color: var(--text-color-1);

}

.CP_hotair1 .slide .content p{
    font-size: 1.6rem;
    color: var(--text-color-1);
    padding: .5rem 0;
    line-height: 1.5;
}

.CP_hotair1 .slide .content .stars{
    padding: 1rem 0;
}

.CP_hotair1 .slide .content .stars i{
    font-size: 1.7rem;
    color: var(--text-color-1);
}

/*Puerto HOTAIR end*/

/*Busuanga HOTAIR start*/
.BP_hotair1 h2{
    margin-bottom: 10px;
    text-align: center;
    font-size: 25px;
    color: var(--text-color-1);
    text-decoration: underline whitesmoke;
}

.BP_hotair1 .slide{
    background: var(--bg-color-1);
    border: .1rem solid rgba(0 0 0 0.2);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    margin-bottom: 4rem;
}

.BP_hotair1 .slide .image1{
    height: 25rem;
    width: 100;
    padding: 1.5rem;
    overflow: hidden;
    position: relative;
}

.BP_hotair1 .slide .image1 img{
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    object-fit: cover; 
}

.BP_hotair1 .slide .image1 .fa-hotel{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.BP_hotair1 .slide .image1 .fa-bed{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.BP_hotair1 .BPhotair_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    box-shadow: var(--box-shadow);
}

.BP_hotair1 .BPhotair_btn:hover{
    transform: scale(1.1);
    color:#188fbe;
}

.BP_hotair1 .slide .content{
    padding: 2rem;
    padding-top: 0;

}

.BP_hotair1 .slide .content h3{
    font-size: 2.5rem;
    color: var(--text-color-1);

}

.BP_hotair1 .slide .content p{
    font-size: 1.6rem;
    color: var(--text-color-1);
    padding: .5rem 0;
    line-height: 1.5;
}

.BP_hotair1 .slide .content .stars{
    padding: 1rem 0;
}

.BP_hotair1 .slide .content .stars i{
    font-size: 1.7rem;
    color: var(--text-color-1);
}

/*Puerto HOTAIR end*/

/*Puerto HOTAIR start*/
.EP_hotair1 h2{
    margin-bottom: 10px;
    text-align: center;
    font-size: 25px;
    color: var(--text-color-1);
    text-decoration: underline whitesmoke;
}

.EP_hotair1 .slide{
    background: var(--bg-color-1);
    border: .1rem solid rgba(0 0 0 0.2);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    margin-bottom: 4rem;
}

.EP_hotair1 .slide .image1{
    height: 25rem;
    width: 100;
    padding: 1.5rem;
    overflow: hidden;
    position: relative;
}

.EP_hotair1 .slide .image1 img{
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    object-fit: cover; 
}

.EP_hotair1 .slide .image1 .fa-hotel{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.EP_hotair1 .slide .image1 .fa-bed{
    position: absolute;
    top: 2.5rem; right: 2.5rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    background: var(--bg-color-1);
    color: var(--text-color-1);
    border-radius: 50%;
}

.EP_hotair1 .EPhotair_btn{
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    box-shadow: var(--box-shadow);
}

.EP_hotair1 .EPhotair_btn:hover{
    transform: scale(1.1);
    color:#188fbe;
}

.EP_hotair1 .slide .content{
    padding: 2rem;
    padding-top: 0;

}

.EP_hotair1 .slide .content h3{
    font-size: 2.5rem;
    color: var(--text-color-1);

}

.EP_hotair1 .slide .content p{
    font-size: 1.6rem;
    color: var(--text-color-1);
    padding: .5rem 0;
    line-height: 1.5;
}

.EP_hotair1 .slide .content .stars{
    padding: 1rem 0;
}

.EP_hotair1 .slide .content .stars i{
    font-size: 1.7rem;
    color: var(--text-color-1);
}

/*El Nido HOTAIR end*/

/*Palawan Transpo*/
.service {background-color: var(--alice-blue); 
}

.section-subtitle, .section-title, .section-text { text-align: center; margin: 20px; } 

.service .section-title { margin-block-end: 20px; } 

.service .section-text {margin-block-end: 50px; }
ul{
    list-style-type: none;
}
.service-list {
    display: grid;
    gap: 30px;
    text-align: justify;
    grid-template-columns: 1fr 1fr;
}

.service-card {
    background-color: var(--white);
    padding: 30px;
    border: 20px solid var(--cultured-3);
    transition: var(--transition);
}



/*Vehicle starts*/
.wrapper {
    background: var(--bg-color-1);
}

.inner-wrapper {
    width: 100%; 
    margin: 0 auto;
    color: #FFF;
    padding: 40px;
    font-size: 15px;
    text-align: justify;
}

.inner-wrapper h1 {
    padding: 20px;
    text-align: center;
    font-size: 300;
}

.about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
}

.col-6 img{
    width: 50%;
            height: auto;
            object-fit: cover;
}

.desc {
    padding: 0 50px; 
    text-align: left; 
}


.desc h1 {
    padding: 20px;
}

.desc ul {
    padding-left: 20px; 
}

.desc ul li {
    text-align: left;
    font-size: 10px; 
}

.vehicle_btn {
    text-align: left; 
}

.vehicle_btn a {
    display: inline-block;
    margin-top: 10px;
    background: var(--bg-color-7);
    color: var(--text-color-4);
    padding: 10px 30px;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 17px;
    box-shadow: var(--box-shadow);
}

.btn a:hover {
    background: var(--bg-color-1);
}




/*Puerto fd start*/
.section__container {
    max-width: var(--max-width);
    margin: auto;
    padding: 5rem 1rem;
  }
  
  .section__header {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text-color-1);
    text-align: center;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    width: 100%;
    display: flex;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
  }
  
  .icon {
    color: var(--text-color-1);
    font-size: 55px;
  }
  
  .popular__grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .popular__card {
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .popular__content {
    padding: 1rem;
  }
  
  .popular__card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .popular__card__header h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color-1);
  }
  
  .popular__content p {
    color: var(--text-color-1);
  }
/*Puerto fd end*/

/*Coron fd start*/
.section__container {
    max-width: var(--max-width);
    margin: auto;
    padding: 5rem 1rem;
  }
  
  .section__header {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text-color-1);
    text-align: center;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    width: 100%;
    display: flex;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
  }
  
  .icon {
    color: var(--text-color-1);
    font-size: 50px;
  }
  
  .popular__grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .popular__card {
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .popular__content {
    padding: 1rem;
  }
  
  .popular__card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .popular__card__header h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color-1);
  }
  
  .popular__content p {
    color: var(--text-color-1);
  }
/*Coron fd end*/

/*Busuanga fd start*/

.section__header {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text-dark);
    text-align: center;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    width: 100%;
    display: flex;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
  }
  
  .icon {
    color: var(--text-color-1);
    font-size: 50px;
  }
  
  .popular__grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .popular__card {
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .popular__content {
    padding: 1rem;
  }
  
  .popular__card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .popular__card__header h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color-1);
  }
  
  .popular__content p {
    color: var(--text-color-1);
  }
/*Busuanga fd end*/


/*elnido fd start*/
.section__container {
    max-width: var(--max-width);
    margin: auto;
    padding: 5rem 1rem;
  }
  
  .section__header {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text-color-1);
    text-align: center;
  }
  
  
  img {
    width: 100%;
    display: flex;
  }

  
  .icon {
    color: var(--text-color-1);
    font-size: 50px;
  }
  
  .popular__grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .popular__card {
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .popular__content {
    padding: 1rem;
  }
  
  .popular__card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .popular__card__header h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color-1);
  }
  
  .popular__content p {
    color: var(--text-color-1);
  }
/*Elnido fd end*/

/*About Us start*/
.about{
    width: 100;
    padding: 78px 0px;
    background: var(--bg-color-1);
}
.about img{
height: auto;
width: 420px;
}
.about-text{
width: 550px;
}
.main{
width: 1130px;
max-width: 95%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-around;
}
.about-text h1{
color: var(--text-color-1);
font-size: 80px;
text-transform: capitalize;
margin-bottom: 20px;
}
.about-text p{
text-align: justify;
color: var(--text-color-1);
letter-spacing: 1px;
line-height: 28px;
font-size: 18px;
margin-bottom: 45px;
}


/*Contact page start*/
.contact-container{
    font-size: 14px;
    width: 80%;
    margin: 50px auto;
    background-color: var(--bg-color-1);
}

.contact-box{
    background: #FFF;
    display: flex;
}

.contact-left{
    flex-basis: 60%;
    padding: 40px 60px;
}

.contact-right{
    flex-basis: 40%;
    padding: 40px;
    background: var(--bg-color-1);
    color: var(--text-color-1);
}

.contact-container h1{
    margin-bottom: 10px;
    text-align: center;
}

.contact-container p{
    text-align: center;
    margin-bottom: 40px;
}

.input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}


.input-row .input-group{
    flex-basis: 45%;
}

input{
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
}

textarea{
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
}

label{
    margin-bottom: 6px;
    display: block;
    color: var(--text-color-1);
}

button{
    background: var(--bg-color-1);
    width: 100px;
    border: none;
    outline: none;
    color: var(--text-color-1);
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181, 0.3);
}

.contact-left h3{
    color: var(--text-color-1);
    font-weight: 600;
    margin-bottom: 30px;
}

.contact-right h3{
    font-weight: 600;
    margin-bottom: 30px;
}

tr td:first-child{
    padding-right: 30px;
}

tr td{
    padding-top: 20px;
}
/*Contact page end*/




/*footer start*/

.inner-footer{
    margin: 0;
    padding: 10px;
    background: var(--bg-color-1);
}

.social-links{
    display: flex;
}

.social-links ul{
    padding: 10px;
    display: flex;
    width: 400px;
    height: 70px;
    margin: auto;
}

.social-items{
    list-style: none;
}

.social-items a{
    padding: 10px 20px;
    font-size: 25px;
    color: var(--text-color-1);
    transition: all .25s;
    background: var(--bg-color-1);
    margin: 12px;
    border-radius: 90%;
}

.social-items a i{
    color: #000;
    opacity: 0.9;
}

.social-items a i:hover{
    color: #6cccc6;
    transition: 0.5s;
}

.quick-links{
    display: flex;
    width: 400px;
    height: 50px;
    margin: auto;
}

.quick-links ul{
    display: flex;
}

.quick-links ul li{
    padding: 0px 15px;
    font-size: 15px;
}

.quick-links a{
    color: var(--text-color-1)
}


.quick-items{
    list-style: none;
}

.quick-items a{
    text-decoration: none;
    color: var(--text-color-1);
    transition: all .25s;
}


.quick-items a:hover{
    color: #3f3f3f;
}


.outer-footer{
    padding: 15px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: #3f3f3f;
}
/*footer end*/



/* media */

@media (max-width:1300px){
html {
    font-size: 50%;
}
}   

@media (max-width:1200px){
    html {
        font-size: 30%;
    }

    section {
        padding: 50px 20px;
    }

    .video-background {
        width: 300%;
        height: 300%;
    }   
 
}


@media (max-width:991px){

    html{
        font-size: 45%;
    }

    .logo {
        width: 100px;
        margin: 10px auto;
    }


    #menu-bar {
        display: initial;
    }

    header .navbar{
        position: absolute;
        top:115%;
        left: 1%;
        background: var(--bg-color-1);
        border-radius: .5rem;
        box-shadow: var(--box-shadow);
        width: 20rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }

    header .navbar.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    header .navbar ul li a{
        text-align: center;
        display: block;
        margin: 1.5rem;
        padding: 18px;
        font-size: 15px;
        color: var(--text-color-1);
        border-radius: .5rem;
        background: var(--bg-color-3);
    
    }


    #search-btn{
        display: inline-block;
    }

    header .search-container{
        position: absolute;
        top: 115%;
        right: 2rem;
        width: 90%;
        box-shadow: var(--box-shadow);
        transform:scale(0);
        transform-origin: top right;
    }

    header .search-container.active{
        transform:scale(1);
    }

    .video-background {
        width: 300%;
        height: 300%;
    }   

    .footer-content {
        width: 33.3%; 
        max-width: none; 
        margin: 0; 
        text-align: left; 


}

.inner-wrapper,
    .about {
        width: 90%; /* Adjusted width for smaller screens */
    }

@media (max-width:450px){
    html{
        font-size: 50%;
    }

    .navbar-name span{
        font-size: 2.5rem;
    }

    .video-background {
        width: 400%;
        height: 300%;
    }   
 
}

}


