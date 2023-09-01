/* let urls = [
    "https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    "https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_three_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_four_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    "https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
]
 */
var sources = [
    {
        "url": "https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC One",
        "priority": 1
    },
    {
        "url": "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_scotland_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC One Scotland",
        "priority": 1
    },
    {
        "url": "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_northern_ireland_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC One Northern Ireland",
        "priority": 1
    },
    {
        "url": "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_one_wales_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC One Wales",
        "priority": 1
    },
    {
        "url": "https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC News",
        "priority": 1
    },
    {
        "url": "http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_parliament/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8",
        "name": "BBC Parliament",
        "priority": 1
    },
    {
        "url": "http://103.199.161.254/Content/bbcworld/Live/Channel(BBCworld)/index.m3u8",
        "name": "BBC World News",
        "priority": 2
    },
    {
        "url": "http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_alba/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8",
        "name": "BBC ALBA",
        "priority": 2
    },
    {
        "url": "http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_scotland_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8",
        "name": "BBC Scotland",
        "priority": 2
    },
    {
        "url": "https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_two_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC Two",
        "priority": 2
    },
    {
        "url": "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_three_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC Three",
        "priority": 2
    },
    {
        "url": "https://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_four_hd/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC Four",
        "priority": 2
    },
    {
        "url": "http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:cbbc_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8",
        "name": "CBBC",
        "priority": 2
    },
    {
        "url": "http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:cbeebies_hd/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8",
        "name": "Cbeebies",
        "priority": 2
    },
    {
        "url": "https://vs-hls-pushb-uk.live.fastly.md.bbci.co.uk/x=3/i=urn:bbc:pips:service:red_button_one/t=3840/v=pv14/b=5070016/main.m3u8",
        "name": "BBC Red Button 1",
        "priority": 2
    },
    {
        "url": "http://vs-hls-pushb-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:s4cpbs/mobile_wifi_main_sd_abr_v2_akamai_hls_live_http.m3u8",
        "name": "S4C",
        "priority": 2
    },
    {
        "url": "https://vs-hls-pushb-ww-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_arabic_tv/t=3840/v=pv5/b=437056/main.m3u8",
        "name": "BBC News Arabic",
        "priority": 2
    },
    {
        "url": "https://vs-hls-pushb-ww-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_persian_tv/t=3840/v=pv5/b=437056/main.m3u8",
        "name": "BBC News Persian",
        "priority": 2
    },
    {
        "url": "https://bcovlive-a.akamaihd.net/c9bf201b06694453bb29282f97191f58/us-east-1/6240731308001/playlist.m3u8",
        "name": "BBC America",
        "priority": 2
    }
]

var counter = 0;
var column_count = 4;
document.body.style = "--count: " + column_count;

var hidden = [];
if (localStorage.getItem("hidden") != null) {
    hidden = JSON.parse(localStorage.getItem("hidden"));
}
function hide_recalc() {
    var column = 0;
    var row = 1;
    var nodes = document.body.querySelectorAll(".container");
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (hidden.includes(node.getAttribute("name"))) {
            node.classList.add("channel-hidden")
        } else {
            node.classList.remove("channel-hidden")
            console.log("adding to column");
            column++;
            if (column > column_count) {
                column = 1;
                row++;
            }
            node.style = "--column: " + column + "; --row:" + row + ";"
        }
    }
}
function hide_toggle(name) {
    if (hidden.includes(name)) {
        hidden = hidden.filter(e => e !== name);
    } else {
        hidden.push(name);
    }
    localStorage.setItem("hidden", JSON.stringify(hidden));
    hide_recalc();
}

for (let source of sources) {
    var column = 0;
    var row = 1;
    setTimeout(() => {
        let url = source.url;
        let container = document.createElement("div");

        container.classList.add("container");
        container.setAttribute("name", source.name);
        if (source.name == "BBC World News") {
            container.classList.add("bbc-world-news");
        }
        let video = document.createElement("video");
        container.appendChild(video);

        video.classList.add("video-js");
        //video.setAttribute("controls", "no");
        video.setAttribute("muted", "yes");
        video.setAttribute("preload", "true");
        video.setAttribute("autoplay", "true");
        video.id = "vid" + counter;

        let header = document.createElement("h1");
        header.innerText = source.name;
        container.appendChild(header);

        let sourceEl = document.createElement("source");
        sourceEl.src = url;
        //sourceEl.type = "application/x-mpegURL";

        video.appendChild(sourceEl);

        document.body.appendChild(container);
        hide_recalc();
        let muted = true;

        let vp = videojs("vid" + counter).player();
        vp.pause();
        setTimeout(() => {
            vp.pause();
        }, 100);

        setTimeout(() => {
            vp.play();
        }, 300);
        container.addEventListener("click", function () {
            if (!window.event.ctrlKey) {
                muted = !muted;
                if (muted) {
                    vp.muted(true);
                    container.classList.remove("unmuted");
                } else {
                    vp.muted(false);
                    container.classList.add("unmuted");
                }
            } else {
                if (container.classList.contains("fullscreen")) {
                    container.classList.add("z-index-up");
                    setTimeout(() => {
                        container.classList.remove("z-index-up");
                    }, 250);
                }
                container.classList.toggle("fullscreen");
            }
        })

        counter++;
    }, (source.priority - 1) * 900);


}

var se_open = false;
function loadStreamEditor() {
    document.getElementById("stream-list");
    function makeItem(name) {
        var item = document.createElement("div");
        item.innerHTML = name;
        item.classList.add("stream-list-item");
        if(hidden.includes(name)) {
            item.classList.add("is-hidden");
        }
        item.addEventListener("click", function() {
            hide_toggle(name);
            item.classList.toggle("is-hidden");
        })
        return item;
    }
    for(var stream of sources) {
        document.getElementById("stream-list").appendChild(makeItem(stream.name));
    }
}
loadStreamEditor();
function toggleStreamEditor(button) {
    se_open = !se_open;
    if(se_open) {
        button.classList.add("sidebar-button-active");
        document.getElementById("stream_editor_slideout").classList.remove("sidebar-slideout-closed");
        document.body.classList.add("slideout-opened");
    } else {
        button.classList.remove("sidebar-button-active");
        document.getElementById("stream_editor_slideout").classList.add("sidebar-slideout-closed");
        document.body.classList.remove("slideout-opened");
    }
}