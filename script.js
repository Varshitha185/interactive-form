function sample() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // get existing data OR empty array
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    // add new entry
    submissions.push({ name, email, message });

    // save back
    localStorage.setItem("submissions", JSON.stringify(submissions));

    // go to view page
    window.location.href = "view.html";
}
