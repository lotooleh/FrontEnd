let newTag = document.createElement('ol');
document.body.innerHTML = '<ol id = playlist>';
let lione = document.createElement('li');
lione.innerHTML = '<p>author: "LED ZEPPELIN",</p><p>song:"STAIRWAY TO HEAVEN"</p>';
playlist.prepend(lione);
let litwo = document.createElement('li');
litwo.innerHTML = '<p>author: "QUEEN",</p><p>song:"BOHEMIAN RHAPSODY"</p>';
playlist.append(litwo);
let lithree = document.createElement('li');
lithree.innerHTML = '<p>author: "LYNYRD SKYNYRD",</p><p>song:"FREE BIRD"</p>';
playlist.append(lithree);
let lifour = document.createElement('li');
lifour.innerHTML = '<p>author: "DEEP PURPLE",</p><p>song:"SMOKE ON THE WATER"</p>';
playlist.append(lifour);
let lifive = document.createElement('li');
lifive.innerHTML = '<p>author: "JIMI HENDRIX",</p><p>song:"ALL ALONG THE WATCHTOWER"</p>';
playlist.append(lifive);
let lisix = document.createElement('li');
lisix.innerHTML = '<p>author: "AC/DC",</p><p>song:"BACK IN BLACK"</p>';
playlist.append(lisix);
let liseven = document.createElement('li');
liseven.innerHTML = '<p>author: "QUEEN",</p><p>song:"WE WILL ROCK YOU"</p>';
playlist.append(liseven);
let lieight = document.createElement('li');
lieight.innerHTML = '<p>author: "METALLICA",</p><p>song:"ENTER SANDMAN"</p>';
playlist.append(lieight);