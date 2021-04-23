'user strict';
class Portfolio {
    constructor() {
            this.profileCart = document.getElementById("profileCart");
            this.homePage = document.getElementById("homePage");
            this.profilePage = document.getElementById("profilePage");
            this.resumePage = document.getElementById("resumePage");
            this.infoPage = document.getElementById("infoPage");
            this.contactPage = document.getElementById("contactPage");

            this.typoAnimate = document.getElementById("typoAnimate");
            //console.log(this);
        }
        /* leftNavbarShowHide() {
            if (this.hiddenLeftNavbar.style.display === "none") {
                this.hiddenLeftNavbar.style.display = 'block';
            } else {
                this.hiddenLeftNavbar.style.display = 'none';
            }
        } */
    ShowTab(props) {
        props.classList.replace("d-none", "d-block");
    }
    HideTab(props) {
        props.classList.replace("d-block", "d-none");
    }
    ShowNavbar() {
        if (this.profileCart.style.display === "none") {
            this.profileCart.style.display = "block";
        } else {
            this.profileCart.style.display = "none";
        }
    }
    ShowHomePage() {
        this.ShowTab(this.homePage);
        // other pages hide
        this.HideTab(this.profilePage);
        this.HideTab(this.resumePage);
        this.HideTab(this.infoPage);
        this.HideTab(this.contactPage);
        console.log("Home page showed and all other page hidden.");
    }
    ShowProfilePage() {
        this.ShowTab(this.profilePage);
        // other pages hide
        this.HideTab(this.homePage);
        this.HideTab(this.resumePage);
        this.HideTab(this.infoPage);
        this.HideTab(this.contactPage);
        console.log("Home page showed and all other page hidden.");
    }
    ShowResumePage() {
        this.ShowTab(this.resumePage);
        // other pages hide
        this.HideTab(this.homePage);
        this.HideTab(this.profilePage);
        this.HideTab(this.infoPage);
        this.HideTab(this.contactPage);
        console.log("Home page showed and all other page hidden.");
    }
    ShowInfoPage() {
        this.ShowTab(this.infoPage);
        // other pages hide
        this.HideTab(this.homePage);
        this.HideTab(this.profilePage);
        this.HideTab(this.resumePage);
        this.HideTab(this.contactPage);
        console.log("Home page showed and all other page hidden.");
    }
    ShowContactPage() {
        this.ShowTab(this.contactPage);
        // other pages hide
        this.HideTab(this.homePage);
        this.HideTab(this.profilePage);
        this.HideTab(this.resumePage);
        this.HideTab(this.infoPage);
        console.log("Contact page showed and all other page hidden.");
    }
    StopTypo() {
        if (this.typoAnimate.className === "typo-animate") {
            this.typoAnimate.classList.replace("typo-animate", "typo-animate-stop");
            console.log("Test");
        } else {
            this.typoAnimate.classList.replace("typo-animate-stop", "typo-animate");
        }
    }
}

function addListeners() {
    const portFolioObj = new Portfolio();
    const bTn = {
        menuBarBtn: document.getElementById("menuIcon"),
        homeBtn: document.getElementById("homePageBtn"),
        profileBtn: document.getElementById("profileBtn"),
        resumeBtn: document.getElementById("resumeBtn"),
        infoBtn: document.getElementById("infoBtn"),
        contactBtn: document.getElementById("contactPageBtn")
    }
    bTn.menuBarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.ShowNavbar();
    })
    bTn.homeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.ShowHomePage();
    });
    bTn.profileBtn.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.ShowProfilePage();
    });
    bTn.resumeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.ShowResumePage();
    });
    bTn.infoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.ShowInfoPage();
    });
    bTn.contactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.ShowContactPage();
    });

    const typoClick = document.getElementById("typoAnimate");
    typoClick.addEventListener("click", (e) => {
        e.preventDefault();
        portFolioObj.StopTypo();
    });

}
class DirectScript extends Portfolio {
    constructor() {
        super();
    }
    AutoHomePage() {
        const portFolioObj = new Portfolio();
        portFolioObj.ShowHomePage();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    addListeners();
    const DirScriptObj = new DirectScript();
    DirScriptObj.AutoHomePage(); //call direct srcipt on load
});