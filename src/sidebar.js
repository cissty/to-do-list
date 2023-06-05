function createSideBar() {
    const stickSideBar = document.getElementById('stick-but');
    const stickSvg = document.querySelector('.stick');
    const sideBar = document.querySelector('.side-bar');
    const userInfo = document.querySelector('.user-info');
    const tasks = document.querySelector('.tasks');

  let isBlue = false;

  if (!stickSideBar || !stickSvg || !sideBar || !userInfo || !tasks) {
    console.error('One or more required elements not found.');
    return;
  }

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
  
  
  export default createSideBar; 