let date = new Date();
const clock = document.getElementById("clock")
const dateElem = document.getElementById("date")
dateElem.innerText = date.getFullYear()+'';

function toDigits(number)
{
    if (number/10 < 1)
        return '0' + number;
    else
        return number;
}
setInterval(setClock, 1);
function setClock()
{
    let minute = document.getElementById("minute");
    let hour = document.getElementById("hour");
    let second = document.getElementById("second");
    let second_second = document.getElementById("second_second");

    let date = new Date();
    let milliseconds = date.getMilliseconds() / 1000;
    let seconds = (date.getSeconds() + milliseconds) / 60;
    let minutes = (seconds +  date.getMinutes()) / 60;
    let hours = (minutes + date.getHours()) / 12;

    setRotation(second, seconds);
    setRotation(minute, minutes - 6);
    setRotation(hour, hours);
    setRotation(second_second, 180 + seconds);
}

function setRotation(element, ratio) {
    ratio = ratio * 360;
    element.style.setProperty("--rotation", ratio);
}

async function getGitHubRepos() {
    const username = "mateuszoleksy";
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const repoContainer = document.getElementById("repo-container");

    let count = 0;

    repos.forEach(repo => {
        const repoCard = `
<div class="col-12">
  <div class="card mb-3 bg-black text-white rounded-5">
    <div class="card-body">
      <h5 class="card-title"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
      <p class="card-text">${repo.description || "Brak opisu"}</p>
      <span class="badge bg-primary">⭐ ${repo.stargazers_count}</span>
    </div>
  </div>
</div>`;
        count++;
        if (count < 8)
            repoContainer.innerHTML += repoCard;
    });
}

let elemBtnBool = 0; //when dark mode
function switchButton(e)
{
    document.getElementById("socials").classList.toggle("light-mode-bg");
    document.getElementById("about").classList.toggle("light-mode-text");
    document.getElementById("main_div").classList.toggle("light-mode");
    document.getElementById("btn_switch").classList.toggle("light-mode-text");
    document.getElementById("socials").classList.toggle("light-mode-bg");
    document.getElementById("clock").classList.toggle("light-mode-bg");
    document.getElementById("title").classList.toggle("light-mode-text");
    elemBtnBool = ~elemBtnBool;
    if (elemBtnBool) {
        document.getElementById("icon_switch").classList.remove("icon-toggle-on");
        document.getElementById("icon_switch").classList.add("icon-toggle-off");
    } else {
        document.getElementById("icon_switch").classList.remove("icon-toggle-off");
        document.getElementById("icon_switch").classList.add("icon-toggle-on");
    }
    setTimeout(() => {document.getElementById("btn_switch").classList.remove("clicked")}, 200);
}
let quotes = [
    {
        "author": "Richard Feynman",
        "text": "I was an ordinary person who studied hard. There are no miracle people. It happens they get interested in this thing and they learn all this stuff, but they’re just people."
    },
    {
        "author": "Steve Jobs",
        "text": "The people who are crazy enough to think they can change the world are the ones that do."
    }

]
let quotesCount = 1;

function changeQuote()
{
    document.getElementById("quotes").classList.remove('run_animation');
    document.getElementById("quote-author").innerText = quotes[quotesCount].author;
    document.getElementById("quote-text").innerHTML = '<span class="icon-star"></span>' + quotes[quotesCount].text;
    document.getElementById("quotes").classList.add('run_animation');
    quotesCount++;
    if (quotesCount === quotes.length)
        quotesCount = 0;
}

document.getElementById("quotes").addEventListener('animationend', () => {
    document.getElementById("quotes").classList.remove('run_animation');
    document.getElementById("quotes").removeEventListener("animationend", () => {});
});

getGitHubRepos();
setInterval(changeQuote, 10000);