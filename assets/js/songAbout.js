function LoadSong() {
    if (document.URL.includes("song.html")) {
        ShowSong();
    }
}

function ShowSong() {
    var sid = GetSID();
    var title = GetTitle(sid);
    $("#songTitle").text(title);
    SetData(sid)
}

function GetTitle(sid) {
    var asid = sid.split("-");
    var title = "";
    asid.forEach(e => {
        var l = e[0];
        var s = e.replace(l, l.toUpperCase());
        title += s + " ";
    });
    title.trimEnd();
    return title;
}

function GetSID() {
    var url = document.baseURI;
    if (url.includes("?")) {
        var splitUri = url.split("?");
        if (splitUri[1].includes("sid")) {
            return splitUri[1].replace("sid=", "");
        }
    }
}

function SetData(_sid) {
    songs.forEach(e => {
        if (e.sid == _sid) {
            $("#cover").attr("src", e.cover);
            $("#desc").text(e.desc);
            $("#bg").text(e.background);
            $("#mood").text(e.mood);
            $("#title").text(GetTitle(_sid));
            $("#availability").text(e.availability);

            for (let i = 0; i < e.platforms.length; i++) {
                var _n = e.platforms[i].Name.replace(" ", "-");
                if (e.platforms[i].Available) {
                    $("#p_" + _n).prop("disabled", false);
                    $("#p_" + _n).on("click", function () {
                        window.open(e.platforms[i].Name);
                    });
                }
                else {
                    $("#p_" + _n).prop("disabled", true);
                }
            }
        }
    })
}

const songs = [
    {
        "sid": "absolutely-weird",
        "cover": "https://drive.google.com/uc?export=download&id=1_fN-HZBdXmt_xDCSQO3BST7yFEWBTdZ1",
        "desc": "",
        "background": "",
        "mood": ""
    },
    {
        "sid": "nonsense",
        "cover": "https://drive.google.com/uc?export=download&id=1_fN-HZBdXmt_xDCSQO3BST7yFEWBTdZ1",
        "desc": "",
        "background": "",
        "mood": "This song is quirky!"
    },
    {
        "sid": "scary-monsters",
        "cover": "https://drive.google.com/uc?export=download&id=1ASg1fDK4PLz6VNL9Db4J8yUO_qTjylZG",
        "desc": "The track was made up using an alternative, rock, acoustic soul and indie style. The song's kept relatively deep and the chord pattern is somewhat weird.",
        "background": "This song was made for Halloween. The title refers to Halloween because it was an approaching upcoming event when we created it.",
        "mood": "The first part of the song tries to give the listener the feeling of a silent and dark environment. Progressing with adding the creepy feeling of being observed. All in all, the mood of the song is kept rather dark and creepy due to its background.",
        "availability": "This song is available on YouTube and SoundCloud right now.",
        "platforms": [
            {
                "Name": "YouTube",
                "Available": true,
                "Link": "https://youtu.be/JnA3rwGD28M"
            },
            {
                "Name": "Spotify",
                "Available": false,
                "Link": ""
            },
            {
                "Name": "Apple Music",
                "Available": false,
                "Link": ""
            },
            {
                "Name": "Amazon Music",
                "Available": false,
                "Link": ""
            },
            {
                "Name": "Deezer",
                "Available": false,
                "Link": ""
            },
            {
                "Name": "SoundCloud",
                "Available": true,
                "Link": "https://soundcloud.com/shatteredtexture/scary-monsters-nhd"
            }
        ]
    }
]