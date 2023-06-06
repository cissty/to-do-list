function createSideBar() {
    const stickSideBar = document.getElementById('stick-but');
    const stickSvg = document.querySelector('.stick');
    const sideBar = document.querySelector('.side-bar');
    const userInfo = document.querySelector('.user-info');
    const tasks = document.querySelector('.tasks');

  let isBlue = false;

 

  stickSideBar.addEventListener('click', ()=>{
      
      if (isBlue) {
          stickSvg.style.color = ''; 
          isTrue();
  
        } else {
          stickSvg.style.color = 'blue';
          isTrue();
  
        }
        isBlue = !isBlue; // Toggle the color state
        console.log(isBlue)
  
  });
  
  sideBar.addEventListener('mouseenter', function() {
      userInfo.style.display = 'flex';
      tasks.style.display = 'flex';
      sideBar.style.backgroundColor = '#fff';
      sideBar.style.transition = 'width 0.5s ease-in-out, background-color 0.3s ease-in-out';
    });
  
    sideBar.addEventListener('mouseleave', function() {
      if (isBlue === true){
          userInfo.style.display = 'flex';
          tasks.style.display = 'flex';
          sideBar.style.backgroundColor = '#fff';
      }else{
      userInfo.style.display = 'none';
          tasks.style.display = 'none';
          sideBar.style.backgroundColor = 'transparent'
          sideBar.style.transition = 'width 0.5s ease-in-out, background-color 0.3s ease-in-out';
  
      }
    });
  
    function isTrue(){
      if (isBlue === true){
          userInfo.style.display = 'flex';
          tasks.style.display = 'flex';
      }
    }

    return createSideBar
  }

const currentDate = new Date();

// Get the day, date, and month
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const day = days[currentDate.getDay()];
const date = currentDate.getDate();
const month = currentDate.toLocaleString("en-US", { month: "long" });

// Update the date section
const dateDay = document.querySelector(".date-day");
const dateNum = document.querySelector(".date-num");
const dateMon = document.querySelector(".date-mon");

dateDay.textContent = day;
dateNum.textContent = '\u00A0\u00A0' + date;
dateMon.textContent = month;

const dayTime = document.querySelector('.day-time');
const currentTime = new Date();
const currentHour = currentTime.getHours();

let greeting;

if (currentHour < 12) {
  greeting = 'Good Morning';
} else if (currentHour < 18) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good Evening';
}
dayTime.textContent = `${greeting}, Samuuuuuuuuuuur`;

const textArea = document.getElementById('myTextArea');
const uploadButton = document.getElementById('up-arrow');
const taskContainer = document.querySelector('.task-container');
const dateContainer = document.querySelector('.date-date');

uploadButton.addEventListener('click', addTask);
textArea.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); 
    addTask();
  }
});

function addTask() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '12');
  circle.setAttribute('cy', '12');
  circle.setAttribute('r', '10');
  circle.setAttribute('fill', 'white');
  circle.setAttribute('stroke', 'black');
  circle.setAttribute('stroke-width', '2');

  circle.addEventListener('click', () => {
    addedTask.classList.toggle('done');
  });

  const button1 = document.createElement('button');
  button1.id = 'stick-but';

  const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg1.classList.add('stick');
  svg1.setAttribute('width', '24');
  svg1.setAttribute('height', '24');
  svg1.setAttribute('viewBox', '0 0 24 24');

  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('fill', 'currentColor');
  path1.setAttribute('d', 'M21.407 10.779a.8.8 0 01-1.131 1.131l-.19-.19-4.87 4.468-1.21 3.538a1 1 0 01-1.653.383l-3.391-3.39-3.677 3.677a.8.8 0 01-1.131-1.132l3.676-3.677-3.1-3.1a1 1 0 01.39-1.655l3.552-1.189 4.446-4.892-.196-.195a.799.799 0 111.131-1.131l7.354 7.354zm-2.454-.192L14.25 5.884l-4.675 5.144-3.029 1.012 6.258 6.258 1.03-3.013 5.119-4.698z');

  svg1.appendChild(path1);
  button1.appendChild(svg1);

  const button2 = document.createElement('button');
  button2.id = 'stick-but';

  const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg2.setAttribute('width', '24');
  svg2.setAttribute('height', '24');
  svg2.setAttribute('viewBox', '0 0 24 24');
  svg2.setAttribute('fill', 'none');

  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M16.4 6.8l-9.6 9.6M6.8 6.8l9.6 9.6');
  path2.setAttribute('stroke', 'currentColor');
  path2.setAttribute('stroke-width', '1.6');
  path2.setAttribute('stroke-linecap', 'round');
  path2.setAttribute('stroke-linejoin', 'round');

  svg2.appendChild(path2);
  button2.appendChild(svg2);

  svg.appendChild(circle);
  const inputText = textArea.value.trim();

  if (inputText === '') {
    return;
  }

  const addedTask = document.createElement('div');
  addedTask.classList.add('added-task');

  const listItem = document.createElement('p');
  listItem.classList.add('copy-p');
  listItem.textContent = inputText;

  listItem.addEventListener('click', () => {
    if (!addedTask.classList.contains('done')) {
      listItem.contentEditable = true;
      listItem.focus();
    }
  });

  listItem.addEventListener('blur', () => {
    listItem.contentEditable = false;
  });

  addedTask.appendChild(svg);
  addedTask.appendChild(listItem);

  taskContainer.appendChild(addedTask);
  addedTask.appendChild(button1);
  addedTask.appendChild(button2);

  textArea.value = '';

  button2.addEventListener('click', () => {
    addedTask.remove();
  });

  button1.addEventListener('click', () => {
    taskContainer.insertBefore(addedTask, dateContainer.nextSibling);
    button1.classList.toggle('pinned');
  });
}
  export {createSideBar}; 