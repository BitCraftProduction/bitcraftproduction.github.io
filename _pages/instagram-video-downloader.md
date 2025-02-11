---
layout: page
title: "Instagram Video Downloader"
description: "Download Instagram Reels and Videos Easily"
---

<main>
    <div class="container">
        <h1>Instagram Reel Downloader</h1>
        <h2>Paste Instagram Reel/Video URL</h2>
        
        <input type="text" id="reelUrl" placeholder="Enter Instagram URL">
        
        <button onclick="downloadReel()">Download</button>
        
        <p id="loading" style="display: none;">Loading...</p>
        
        <a id="downloadLink" href="#" style="display: none;" target="_blank">Download Video</a>
    </div>
</main>

<script src="/assets/js/instagram-video-downloader.js"></script>
<link rel="stylesheet" href="/assets/scss/instagram-video-downloader.css">