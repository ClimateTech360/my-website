// Make sure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // This function will load the appropriate content into the dynamic-content section
    function loadContent(section) {
        let content = document.getElementById("dynamic-content");

        if (section === "about") {
            content.innerHTML = `
                <h2>About Me</h2>
                <p>Hello! I'm Patrick Obondo, a passionate software developer specializing in Python, JavaScript, and SQL.</p>
                <p>I build scalable applications, solve complex problems, and continuously learn new technologies.</p>
            `;
        } else if (section === "projects") {
            content.innerHTML = `
                <h2>Projects</h2>
                <ul>
                    <li><strong>Portfolio Website:</strong> A personal website showcasing my projects.</li>
                    <li><strong>Weather App:</strong> A real-time weather forecasting app.</li>
                </ul>
            `;
        } else if (section === "skills") {
            content.innerHTML = `
                <h2>Skills</h2>
                <p>JavaScript, Python, SQL, and more.</p>
            `;
        } else if (section === "resume") {
            content.innerHTML = `
                <h2>Resume</h2>
                <p>Download my <a href="Resume.txt" target="_blank">Resume</a>.</p>
            `;
        } else if (section === "contact") {
            content.innerHTML = `
                <h2>Contact</h2>
                <p>Email: patrick@example.com</p>
                <p>LinkedIn: <a href="#">LinkedIn Profile</a></p>
            `;
        } else if (section === "blogs") {
            content.innerHTML = `
                <h2>Blogs</h2>
                <p>Coming soon!</p>
            `;
        }
    }


    window.loadContent = loadContent;
});
document.addEventListener("DOMContentLoaded", function () {
    function loadContent(section) {
        let content = document.getElementById("dynamic-content");

        if (section === "about") {
            content.innerHTML = `
                <h2>About Me</h2>
                <p>Hello, I'm Patrick Obondo, a passionate software developer specializing in Python, JavaScript, and SQL.</p>
                <p>I build scalable applications, solve complex problems, and continuously learn new technologies.</p>
            `;
            content.style.backgroundColor = "#abebc6";
        } else if (section === "projects") {
            content.innerHTML = `
            <h2>Projects</h2>
            <div class="project-box">
                <h3>Portfolio Website</h3>
                <p>A personal website showcasing my projects.</p>
            </div>
            <div class="project-box">
                <h3>Weather App</h3>
                <p>A real-time weather forecasting app.</p>
            </div>
            <div class="project-box">
                <h3>ClimaNurture Initiative</h3>
                <p>A YouTube-based climate literacy initiative educating the public on climate change.</p>
            </div>
            <div class="project-box">
                <h3>Climate Hub</h3>
                <p>An online platform providing resources on climate change, policies, and green technologies.</p>
            </div>
        `;
            content.style.backgroundColor = "#abebc6";
        } else if (section === "skills") {
            content.innerHTML = `
                <h2>Skills</h2>
                <div class="skills-container">
                    <div class="skill-box">
                        <h3>JavaScript</h3>
                        <p>I use JavaScript to create interactive and dynamic websites.</p>
                    </div>
                    <div class="skill-box">
                        <h3>Python</h3>
                        <p>Python is used for backend development and scripting.</p>
                    </div>
                    <div class="skill-box">
                        <h3>SQL</h3>
                        <p>SQL is essential for managing data in relational databases.</p>
                    </div>
                </div>
            `;
            content.style.backgroundColor = "#abebc6";
        } else if (section === "resume") {
            content.innerHTML = `
                <h2>Resume</h2>
                <p>Here's a summary of my qualifications:</p>
                <iframe src="resume.pdf" width="100%" height="600px"></iframe>
            `;
            content.style.backgroundColor = "#abebc6";
        } else if (section === "contact") {
            content.innerHTML = `
                <h2>Contact</h2>
                <p>Email: patrick.obondo98@gmail.com</p>
                <p>LinkedIn: <a href="#">https://www.linkedin.com/in/patrick-obondo/</a></p>
                <p>GitHub: <a href="https://github.com/ClimateTech360" target="_blank">GitHub Profile</a></p>
            `;
            content.style.backgroundColor = "#abebc6";
        }
    }

    window.loadContent = loadContent;
});