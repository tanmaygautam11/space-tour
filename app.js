
// ************************************************ NAVBAR SECTION ***********************************

$(".navbar-toggler-icon").click(function(){
    const visibility = $(".primary-navigation").attr('data-visible');
    if(visibility === "false"){
        $(".primary-navigation").attr("data-visible", true)
        $(".navbar-toggler-icon").attr("aria-expanded", true)
    }  else if(visibility === "true"){
        $(".primary-navigation").attr("data-visible", false)
        $(".navbar-toggler-icon").attr("aria-expanded", false)
    }
});

// ************************************************* DESTINATION *************************************

// ************ CONSTANTS ***************

const moonText = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
const marsText = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!"
const europaText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
const titanText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."


// ************************************************* MOON EVENT LISTENER *************************************

$(".moon").click(moon);
function moon(){
    $(".moon").addClass("active");
    $(".mars, .europa, .titan").removeClass("active");
    $("#moon-img").attr("src","./assets/destination/image-moon.png");
    $(".planet-name").text("MOON");
    $(".moon-p").text(moonText);
    $(".dis-value").text("384,400 KM");
    $(".time-value").text("3 DAYS");
}

// ************************************************* MARS EVENT LISTENER *************************************

$(".mars").click(mars);
function mars(){
    $(".moon, .europa, .titan").removeClass("active");
    $(".mars").addClass("active");
    $("#moon-img").attr("src","./assets/destination/image-mars.png");
    $(".planet-name").text("MARS");
    $(".moon-p").text(marsText);
    $(".dis-value").text("225 MIL. KM");
    $(".time-value").text("9 MONTHS");
}

// ************************************************* EUROPA EVENT LISTENER *************************************

$(".europa").click(europa);
function europa(){
    $(".moon, .mars, .titan").removeClass("active");
    $(".europa").addClass("active");
    $("#moon-img").attr("src","./assets/destination/image-europa.png");
    $(".planet-name").text("EUROPA");
    $(".moon-p").text(europaText);
    $(".dis-value").text("628 MIL. KM");
    $(".time-value").text("3 YEARS");
}

// ************************************************* TITAN EVENT LISTENER *************************************

$(".titan").click(titan);
function titan(){
    $(".moon, .europa, .mars").removeClass("active");
    $(".titan").addClass("active");
    $("#moon-img").attr("src","./assets/destination/image-titan.png");
    $(".planet-name").text("TITAN");
    $(".moon-p").text(titanText);
    $(".dis-value").text("1.6 BIL. KM");
    $(".time-value").text("7 YEARS");
}

// ************************************************* CREW *************************************

// ************ CONSTANTS ***************

const commanderText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
const missionText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
const pilotText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
const engineerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
var x = window.matchMedia("(max-width: 645px)")
var mobile = window.matchMedia("(max-width: 575px)")


// ************************************************* COMMANDER EVENT LISTENER *************************************

$(".commander").click(commander);
function commander(){
    $(".commander").addClass("active-2");
    $(".mission, .pilot, .engineer").removeClass("active-2");
    $(".crew-img").attr("src","./assets/crew/image-douglas-hurley.png");
    $(".crew-img").attr("style","width: 60vh;")
    $(".crew-staff").text("COMMANDER");
    $(".crew-p").text(commanderText);
    $(".crew-member").text("DOUGLAS HURLEY");
}

// ************************************************* SPECIALIST EVENT LISTENER *************************************

$(".mission").click(mission);
function mission(){
    $(".mission").addClass("active-2");
    $(".commander, .pilot, .engineer").removeClass("active-2");
    $(".crew-img").attr("src","./assets/crew/image-mark-shuttleworth.png");
    $(".crew-img").attr("style","width: 60vh;")
    $(".crew-staff").text("MISSION SPECIALIST");
    $(".crew-p").text(missionText);
    $(".crew-member").text("MARK SHUTTLEWORTH");
}

// ************************************************* PILOT EVENT LISTENER *************************************

$(".pilot").click(pilot);
function pilot(){
    $(".pilot").addClass("active-2");
    $(".commander, .mission, .engineer").removeClass("active-2");
    $(".crew-img").attr("src","./assets/crew/image-victor-glover.png");
    $(".crew-img").attr("style","width: 70vh;")
    $(".crew-staff").text("PILOT");
    $(".crew-p").text(pilotText);
    $(".crew-member").text("VICTOR GLOVER");
}

// ************************************************* ENGINEER EVENT LISTENER *************************************

$(".engineer").click(engineer);
function engineer(){
    $(".engineer").addClass("active-2");
    $(".commander, .pilot, .mission").removeClass("active-2");
    $(".crew-img").attr("src","./assets/crew/image-anousheh-ansari.png");
    $(".crew-img").attr("style","width: 75vh;")

    $(".crew-staff").text("FLIGHT ENGINEER");
    $(".crew-p").text(engineerText);
    $(".crew-member").text("ANOUSHEH ANSARI");
    function responsive(x) {
        if (x.matches) {
            $(".crew-img").attr("style","width: 67vh;")
        } else {
            $(".crew-img").attr("style","width: 75vh;")
        }
      }
    responsive(x)
    x.addEventListener(responsive)
}

// ************************************************* TECHNOLOGY *************************************

// ************ CONSTANTS ***************

const vehicleText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
const portText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
const capsuleText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
var techImg = "portrait";

// ************************************************* SPACE VEHIVLE EVENT LISTENER *************************************

$(".vehicle").click(vehicle);
function vehicle(){
    $(".vehicle").addClass("active-t");
    $(".port, .capsule").removeClass("active-t");
    $(".tech-img").attr("src", "./assets/technology/image-launch-vehicle-" + techImg + ".jpg");
    $(".tech-p").text(vehicleText);
    $(".tech-name").text("LAUNCH VEHICLE");
    
}

// ************************************************* SPACEPORT EVENT LISTENER *************************************

$(".port").click(port);
function port(){
    $(".port").addClass("active-t");
    $(".vehicle, .capsule").removeClass("active-t");
    $(".tech-img").attr("src","./assets/technology/image-spaceport-" + techImg + ".jpg");
    $(".tech-p").text(portText);
    $(".tech-name").text("SPACEPORT");
    
}

// ************************************************* SPACE CAPSULE EVENT LISTENER *************************************

$(".capsule").click(capsule);
function capsule(){
    $(".capsule").addClass("active-t");
    $(".vehicle, .port").removeClass("active-t");
    $(".tech-img").attr("src","./assets/technology/image-space-capsule-" + techImg + ".jpg");
    $(".tech-p").text(capsuleText);
    $(".tech-name").text("SPACE CAPSULE");
    
}

// ****************************************** TECHNOLOGY IMAGE MEDIA QUERY *************************************

if (window.matchMedia('(max-width: 1000px)').matches)
{
    techImg = "landscape";
} else if(window.matchMedia('(min-width:1000')){
    techImg = "portrait";
}