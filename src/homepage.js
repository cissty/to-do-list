function getUserName (name){
    const nameButton = document.getElementById('getStartedLink')

    nameButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of navigating to the "main.html" page
        const name = document.getElementById("name").value;
        // Use the 'name' variable to edit the DOM or perform any other actions
        console.log("Name entered: " + name);
        // Proceed to the "main.html" page
        window.location.href = "main.html";
        console.log(name)
    });
}
export default getUserName