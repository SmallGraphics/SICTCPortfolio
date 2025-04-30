let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let l1 = false;
let l2 = false;
let l3 = false;

img1.style.display = "none";
img2.style.display = "none";
img3.style.display = "none";
img4.style.display = "none";
option1.innerHTML = "Singleplayer";
option2.innerHTML = "Multiplayer";

if (l1 === false) {
    option1.addEventListener("click", function() {
        l1 = true;
        document.querySelector("#tags").innerHTML = "Singleplayer";
        document.querySelector("#link").innerHTML = "All singleplayer games";
        document.querySelector("#link").href = "https://www.google.com/search?q=singleplayer+games&rlz=1C1RXQR_enUS1109US1113&oq=singleplayer+gam&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgwIAxAAGBQYhwIYgAQyCQgEEAAYChiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8";
        img1.style.display = "inline";
        img2.style.display = "inline";
        img3.style.display = "inline";
        img4.style.display = "inline";
    
        img1.src = "./images/gameIcons/Half-Life_Series.png";
        img2.src = "./images/gameIcons/GTA5.webp";
        img3.src = "./images/gameIcons/rdr2.png";
        img4.src = "./images/gameIcons/ER.png";
    
        option1.innerHTML = "2D";
        option2.innerHTML = "3D";
        if (l2 === false) {
            option1.addEventListener("click", function() {
                l2 = true;
                document.querySelector("#tags").innerHTML = "Singleplayer, 2D";
                document.querySelector("#link").innerHTML = "All 2D games";
                document.querySelector("#link").href = "https://www.google.com/search?q=2d+games&rlz=1C1RXQR_enUS1109US1113&oq=2D+gam&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDAgBEAAYQxiABBiKBTIHCAIQABiABDIHCAMQABiABDIMCAQQABgUGIcCGIAEMgcIBRAAGIAEMgwIBhAAGEMYgAQYigUyDAgHEAAYQxiABBiKBTIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8";
                img1.src = "./images/gameIcons/Celeste.png";
                img2.src = "./images/gameIcons/Terraria.jfif";
                img3.src = "./images/gameIcons/SV.png";
                img4.src = "./images/gameIcons/hKnight.png";

                option1.innerHTML = "Sandbox";
                option2.innerHTML = "Story-driven";
                if (l3 === false) {
                    option1.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Singleplayer, 2D, Sandbox";
                        document.querySelector("#link").innerHTML = "All sandbox games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=sandbox+games&rlz=1C1RXQR_enUS1109US1113&oq=sandbox+ga&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDQgBEAAYkQIYgAQYigUyDAgCEAAYFBiHAhiABDINCAMQABiRAhiABBiKBTIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyDAgGEAAYQxiABBiKBTIHCAcQABiABKgCALACAQ&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/ppg.ico";
                        img2.src = "./images/gameIcons/Terraria.jfif";
                        img3.style.display = "none";
                        img4.style.display = "none";
                        img2.style.marginRight = "0px";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option2.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                    option2.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Singleplayer, 2D, Story-driven";
                        document.querySelector("#link").innerHTML = "All story-driven games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=story-driven+games&rlz=1C1RXQR_enUS1109US1113&oq=story-driven+g&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhgeqAIAsAIA&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/SV.png";
                        img2.src = "./images/gameIcons/Celeste.png";
                        img3.src = "./images/gameIcons/hKnight.png";
                        img4.src = "./images/gameIcons/Terraria.jfif";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option2.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                };
            });
            option2.addEventListener("click", function() {
                l2 = true;
                document.querySelector("#tags").innerHTML = "Singleplayer, 3D";
                document.querySelector("#link").innerHTML = "All 3D games";
                document.querySelector("#link").href = "https://www.google.com/search?q=3d+games&rlz=1C1RXQR_enUS1109US1113&oq=3D+game&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyBggBEEUYOTINCAIQABiRAhiABBiKBTINCAMQABiRAhiABBiKBTIQCAQQLhiRAhixAxiABBiKBTIMCAUQABhDGIAEGIoFMgwIBhAAGBQYhwIYgAQyDAgHEAAYQxiABBiKBTIMCAgQABhDGIAEGIoFMgcICRAAGIAEqAIAsAIA&sourceid=chrome&ie=UTF-8";
                img1.src = "./images/gameIcons/GTA5.webp";
                img2.src = "./images/gameIcons/Half-Life_Series.png";
                img3.src = "./images/gameIcons/ER.png";
                img4.src = "./images/gameIcons/rdr2.png";

                option1.innerHTML = "First-person";
                option2.innerHTML = "Third-person";
                if (l3 === false) {
                    option1.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = document.querySelector("#tags").innerHTML = "Singleplayer, 3D, First-person";
                        document.querySelector("#link").innerHTML = "All first-person games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=first-person+video+games&rlz=1C1RXQR_enUS1109US1113&oq=first&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyDggCEEUYJxg7GIAEGIoFMgYIAxBFGDkyBggEEEUYOzIGCAUQRRg7MgwIBhAAGEMYgAQYigUyBggHEEUYPNIBCDEyMzNqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/ER.png";
                        img2.src = "./images/gameIcons/Half-Life_Series.png";
                        img3.src = "./images/gameIcons/DE.png";
                        img4.src = "./images/gameIcons/CoD-WW2.png";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option1.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                    option2.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Singleplayer, 3D, Third-person";
                        document.querySelector("#link").innerHTML = "All third-person games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=third-person+games&rlz=1C1RXQR_enUS1109US1113&oq=third-person+games&gs_lcrp=EgZjaHJvbWUqDQgAEAAYkQIYgAQYigUyDQgAEAAYkQIYgAQYigUyDAgBEAAYFBiHAhiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEIMjgwMmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/rdr2.png";
                        img2.src = "./images/gameIcons/GTA5.webp";
                        img3.src = "./images/gameIcons/SD.png";
                        img4.src = "./images/gameIcons/GTA4.ico";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option1.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                };
            });
        };
    });
    option2.addEventListener("click", function() {
        l1 = true;
        document.querySelector("#tags").innerHTML = "Multiplayer"
        document.querySelector("#link").innerHTML = "All multiplayer games";
        document.querySelector("#link").href = "https://www.google.com/search?q=multiplayer+games&rlz=1C1RXQR_enUS1109US1113&oq=mu&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOTIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyDAgGEAAYQxiABBiKBTIGCAcQRRg90gEHNjYwajBqOagCALACAQ&sourceid=chrome&ie=UTF-8";
        img1.style.display = "inline";
        img2.style.display = "inline";
        img3.style.display = "inline";
        img4.style.display = "inline";
    
        img1.src = "./images/gameIcons/MC.png";
        img2.src = "./images/gameIcons/FN.jpg";
        img3.src = "./images/gameIcons/GTA5.webp";
        img4.src = "./images/gameIcons/Amogus.png";
    
        option1.innerHTML = "2D";
        option2.innerHTML = "3D";
        if (l2 === false) {
            option1.addEventListener("click", function() {
                l2 = true;
                document.querySelector("#tags").innerHTML = "Multiplayer, 2D";
                document.querySelector("#link").innerHTML = "All 2D games";
                document.querySelector("#link").href = "https://www.google.com/search?q=2d+games&rlz=1C1RXQR_enUS1109US1113&oq=2D+game&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTIHCAQQABiABDIHCAUQABiABDIGCAYQRRg8MgYIBxBFGDyoAgCwAgA&sourceid=chrome&ie=UTF-8";
                
                img1.src = "./images/gameIcons/Amogus.png";
                img2.src = "./images/gameIcons/Terraria.jfif";
                img3.src = "./images/gameIcons/CC.jpg";
                img4.src = "./images/gameIcons/SV.png";
                
                option1.innerHTML = "Competitive";
                option2.innerHTML = "Co-op";
                if (l3 === false) {
                    option1.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Multiplayer, 2D, Competitive";
                        document.querySelector("#link").innerHTML = "All competitive games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=competitive+games&rlz=1C1RXQR_enUS1109US1113&oq=competitive+gam&gs_lcrp=EgZjaHJvbWUqDAgAEAAYFBiHAhiABDIMCAAQABgUGIcCGIAEMg0IARAAGJECGIAEGIoFMg0IAhAAGJECGIAEGIoFMgwIAxAAGBQYhwIYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPKgCALACAA&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/Rounds.png";
                        img2.src = "./images/gameIcons/Amogus.png";
                        img3.src = "./images/gameIcons/SH.png";
                        img4.src = "./images/gameIcons/DG.png";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option1.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                    option2.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Multiplayer, 2D, Co-op";
                        document.querySelector("#link").innerHTML = "All co-op games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=co-op+games&rlz=1C1RXQR_enUS1109US1113&oq=co-op+ga&gs_lcrp=EgZjaHJvbWUqDQgAEAAYkQIYgAQYigUyDQgAEAAYkQIYgAQYigUyBwgBEAAYgAQyDQgCEAAYkQIYgAQYigUyBwgDEAAYgAQyBwgEEAAYgAQyDAgFEAAYFBiHAhiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/Terraria.jfif";
                        img2.src = "./images/gameIcons/CC.jpg";
                        img3.src = "./images/gameIcons/SV.png";
                        img4.src = "./images/gameIcons/OC2.png";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option1.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                };
            });
            option2.addEventListener("click", function() {
                l2 = true;
                document.querySelector("#tags").innerHTML = "Multiplayer, 3D";
                document.querySelector("#link").innerHTML = "All 3D games";
                document.querySelector("#link").href = "https://www.google.com/search?q=3d+games&rlz=1C1RXQR_enUS1109US1113&oq=3D+ga&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgwIAhAAGBQYhwIYgAQyDAgDEAAYQxiABBiKBTIMCAQQABhDGIAEGIoFMgoIBRAuGLEDGIAEMgcIBhAAGIAEMgwIBxAAGEMYgAQYigUyBwgIEAAYgAQyBwgJEC4YgATSAQgxNjU1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8";
                img1.src = "./images/gameIcons/GTA5.webp";
                img2.src = "./images/gameIcons/CS.jpg";
                img3.src = "./images/gameIcons/MC.png";
                img4.src = "./images/gameIcons/FN.jpg";

                option1.innerHTML = "First-person";
                option2.innerHTML = "Third-person";
                if (l3 === false) {
                    option1.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Multiplayer, 3D, First-person";
                        document.querySelector("#link").innerHTML = "All first-person games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=first-person+video+games&rlz=1C1RXQR_enUS1109US1113&oq=first&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyDggCEEUYJxg7GIAEGIoFMgYIAxBFGDkyBggEEEUYOzIGCAUQRRg7MgwIBhAAGEMYgAQYigUyBggHEEUYPNIBCDEyMzNqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/CS.jpg";
                        img2.src = "./images/gameIcons/gmod.png";
                        img3.src = "./images/gameIcons/BattleBit.png";
                        img4.src = "./images/gameIcons/R6.png";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option1.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                    option2.addEventListener("click", function() {
                        l3 = true;
                        document.querySelector("#tags").innerHTML = "Multiplayer, 3D, Third-person";
                        document.querySelector("#link").innerHTML = "All third-person games";
                        document.querySelector("#link").href = "https://www.google.com/search?q=third-person+games&rlz=1C1RXQR_enUS1109US1113&oq=third-person+games&gs_lcrp=EgZjaHJvbWUqDQgAEAAYkQIYgAQYigUyDQgAEAAYkQIYgAQYigUyDAgBEAAYFBiHAhiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEIMjgwMmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8";
                        img1.src = "./images/gameIcons/FN.jpg";
                        img2.src = "./images/gameIcons/Apex.png";
                        img3.src = "./images/gameIcons/GTA5.webp";
                        img4.src = "./images/gameIcons/Pubg.png";
                        document.querySelector("#or").style.display = "none";
                        option1.style.display = "none";
                        option1.style.display = "none";
                        document.querySelector(".prompt").innerHTML = "<br><br><br>Finished!<br><br>Check your results below.";
                    });
                };
            });
        };
    });
};