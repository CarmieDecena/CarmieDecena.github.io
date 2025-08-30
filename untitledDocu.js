
var i = 0;
var text = 'I am Harvey Ramos, a Grade 12 ICT student from Don Bosco Anselmo Rural High School, \nand a few weeks ago, I saw someone die right in front of me. \nWe had a nature retreat at Camp Katarungan. There a forest lay, beside a river that stretched for miles. \nWe hiked, swam, and played. We rode boats across the river and even caught some fish along the way. \nEverything was supposed to be so memorable, so fun … But I couldn’t enjoy it with Dan around.'
var speed = 50;

document.getElementById("contButton").style.display = 'none';

function typeWritter(){
    if (i < text.length){
        let char = text.charAt(i);
        if (char === '\n'){
            document.getElementById("typedStory").innerHTML += '<br>';
        } else {
            document.getElementById("typedStory").innerHTML += char;
        }
        i++;
        setTimeout(typeWritter, speed);
    } else {
        document.getElementById("contButton").style.display = 'block';
        document.getElementById("contButton").disabled = false;
    }
}

function charChecker(){
    if (textContent[lineNumber] == storyLines[lineNumber]) {
        lineNumber++;
        addEditableLine();
    } else {
        alert("Incorrect text. Please try again.");
    }
}

// story lines the player will type, edit and put story line
const storyLines = [
    "(-----------------, will code soon)",
    "For years, he made fun of everything I did",
    "The way I looked, the way I spoke. Fuck, maybe even the way I breathed.",
    "He always found something to laugh at, some way to humiliate me in front of everyone.",
    "I thought I’d be safe, away from school. But of course, he just had to be there too.",
    "He called me names and stole my hiking gear. He even pushed me into the river once.",
    "I tried to ignore him. I tried to keep calm, but at some point I couldn’t take it anymore. I snapped.",
    "One night, when I was checking over my boat, I saw something wrong with Dan’s …",
    "Their engine seemed pretty worn, and when I tried to use the gearshift, it wouldn’t budge into reverse.",
    "It was dangerous. I knew it. It could’ve gotten someone seriously hurt.",
    "I could’ve said something. I could’ve warned him. But why would I? Why would I help him?",
    "That brute. That monster. That spawn of Hell. What exactly did I owe him?",
    "I left that night without a second thought, knowing full well Dan would get himself hurt eventually.",
    "Color me surprised when he went full speed the next day and toppled over when he couldn’t slow down.",
    "He drowned in that river, making headlines at school for weeks.",
    "But I didn’t cry. I didn’t feel guilt. I didn’t kill him.",
    "He did that all on his own."    
];


let lineNumber = 0;
let errorCount = 0;

// get elem
const documentArea = document.getElementById("editableLines");

document.getElementById("contButton").onclick = function() {
    document.getElementById("contButton").style.display = 'none';
    addEditableLine();
}

// new line
function addEditableLine() {
    const wrapper = document.createElement("div");
    wrapper.className = "typing-container";

    const guide = document.createElement("div");
    guide.className = "guideText";
    guide.textContent = storyLines[lineNumber];

    const line = document.createElement("div");
    line.id = "line-" + lineNumber;
    line.setAttribute("contenteditable", "true");
    line.className = "editableLine";

    wrapper.appendChild(guide);
    wrapper.appendChild(line);
    document.getElementById("editableLines").appendChild(wrapper);

    line.focus();

    line.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            const typedText = line.textContent.trim();
            const expectedText = storyLines[lineNumber];

            if (typedText === expectedText) {
                lockLine(line);
                guide.classList.add("hidden");
                lineNumber++;

            if (lineNumber < storyLines.length) {
                addEditableLine();

            } else {
                const finalDiv = document.getElementById("finalMessage");
                setTimeout(() => {
                    finalDiv.textContent = "I hope they don't find out.";
                    finalDiv.classList.add("visible");
                }, 1000);
            }
            } else {
                errorCount++;
                line.classList.add("errorLine");

                // Shake animation resets
                setTimeout(() => {
                    line.classList.remove("errorLine");
                }, 300);

                openCharErrorPopup(); // Make sure this is defined!
            }
        }
    });

    // Optionally, show guide text again if line is empty on blur
    line.addEventListener('blur', function() {
        if (line.textContent.trim().length > 0){
            guide.classList.add("hidden");
        } else {
            guide.classList.remove("hidden");
        }
    });
}



// make a line READ-ONLY LOCKS THE LINE
function lockLine(line) {
    line.setAttribute("contenteditable", "false");
    line.classList.remove("editableLine");
    line.classList.add("lockedLine");
}

setTimeout(() => {
    finalDiv.textContent = "I hope they don't find out.";
    finalDiv.classList.add("visible");
});