async function downloadReel() {
    const url = document.getElementById('reelUrl').value;
    const loadingText = document.getElementById('loading');
    const downloadLink = document.getElementById('downloadLink');

    if (!url) return alert("Please enter a valid Instagram URL");

    // Show loading
    loadingText.style.display = "block";
    downloadLink.style.display = "none";

    try {
        const response = await fetch("https://bitcraft-instagram.onrender.com/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        const data = await response.json();
        loadingText.style.display = "none";

        if (data.download_url) {
            downloadLink.href = data.download_url;
            downloadLink.style.display = "inline-block";
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        loadingText.style.display = "none";
        alert("Something went wrong! Please try again.");
    }
}