const supabase = createClient(
    "https://gpprfxmjjjowyuqgvwzr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcHJmeG1qampvd3l1cWd2d3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NDU0NTQsImV4cCI6MjA0NjQyMTQ1NH0.e_RwbQVTsd4ggnH79bcX8gWL8o61pZ_wan5ypQjB77Q"
);

// Sign Out
async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Sign Out Error:", error.message);
        alert("Error signing out: " + error.message);
    } else {
        alert("Sign-out successful!");
        checkSession(); // Optional: check if a user is signed in
    }
}

// Check if a user is signed in
function checkSession() {
    let userid = null;
    supabase.auth.getSession().then(({ data, error }) => {
        if (data.session) {
            console.log("User signed in:", data.session.user.email);
            userid = data.session.user.id;
        } else if (error) {
            console.error("Session Check Error:", error.message);
        } else {
            console.log("No user signed in.");
        }
    });
    return userid;
}
