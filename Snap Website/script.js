const featuresDropdown = document.getElementsByClassName("featuresDropdown")[0];
const companyDropdown = document.getElementsByClassName("companyDropdown")[0];
const dropdown = document.getElementsByClassName("dropdown")[0];

featuresDropdown.addEventListener("mouseover", () => {
    const featureDiv = document.createElement('div');
    featureDiv.classList.add("feature-dropdown");
    featureDiv.innerHTML = `
        <p><span><img src="./images/icon-todo.svg" alt=""></span>&nbsp;&nbsp;&nbsp;Todo List</p>
        <p><span><img src="./images/icon-calendar.svg" alt=""></span>&nbsp;&nbsp;&nbsp;Calendar</p>
        <p><span><img src="./images/icon-reminders.svg" alt=""></span>&nbsp;&nbsp;&nbsp;Reminders</p>
        <p><span><img src="./images/icon-planning.svg" alt=""></span>&nbsp;&nbsp;&nbsp;Planning</p>
    `;
    dropdown.innerHTML = '';  // Clear any previous dropdown content
    dropdown.appendChild(featureDiv);
    dropdown.style.display = 'block';  // Show the dropdown
});

companyDropdown.addEventListener("mouseover", () => {
    const companyDiv = document.createElement('div');
    companyDiv.classList.add("company-dropdown");
    companyDiv.innerHTML = `
        <p>History</p>
        <p>Our Team</p>
        <p>Blog</p>
    `;
    dropdown.innerHTML = '';  // Clear any previous dropdown content
    dropdown.appendChild(companyDiv);
    dropdown.style.display = 'block';  // Show the dropdown
});

// To handle mouseout to hide dropdowns
featuresDropdown.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!dropdown.matches(':hover') && !featuresDropdown.matches(':hover')) {
            dropdown.style.display = 'none';
        }
    }, 100);  // Timeout to ensure the mouseover event on the dropdown itself is registered
});

companyDropdown.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!dropdown.matches(':hover') && !companyDropdown.matches(':hover')) {
            dropdown.style.display = 'none';
        }
    }, 100);  // Timeout to ensure the mouseover event on the dropdown itself is registered
});

dropdown.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!dropdown.matches(':hover') && !featuresDropdown.matches(':hover') && !companyDropdown.matches(':hover')) {
            dropdown.style.display = 'none';
        }
    }, 100);  // Timeout to ensure the mouseover event on the dropdown itself is registered
});

dropdown.addEventListener("mouseover", () => {
    dropdown.style.display = 'block';  // Keep the dropdown visible while hovering over it
});
