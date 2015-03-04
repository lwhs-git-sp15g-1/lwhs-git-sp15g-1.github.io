
function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>Do not go gentle into that good night</p>",
"<p onClick=nextLine(2)>old age should burn and rave at close of day</p>",
"<p onClick=nextLine(3)>Rage rage against the dying of the light</p>",
"<p onClick=nextLine(4)>Though old men at their end know dark is right</p>",
"<p onClick=nextLine(5)>Because their words have forked no lightning</p>",
"<p onClick=nextLine(6)>they do not go gentle into that good night</p>",
"<p onClick=nextLine(7)>Good men, last wave by, crying how bright</p>",
"<p onClick=nextLine(8)>Their frail deeds might have danced in a green bay</p>",
"<p onClick=nextLine(9)>Rage, Rage against the dying of the light</p>",
"<p onClick=nextLine(10)>Wild men who caught and sang the sun in flight</p>",
"<p onClick=nextLine(11)>Learn too late, they grieved it on its way</p>",
"<p onClick=nextLine(12)>Do not go gentle into that good night</p>",
"<p onClick=nextLine(13)>Grave men, near death, who see with blinding sight</p>",
"<p onClick=nextLine(14)>Blind eyes can blaze like meteors and be gay</p>",
"<p onClick=nextLine(15)>Rage, Rage against the dying of the light</p>",
"<p onClick=nextLine(16)>And you my father, there on that sad height</p>",
"<p onClick=nextLine(17)>curse, bless me now with your fierce tears I pray</p>",
"<p onClick=nextLine(18)>Do no go gentle into that good night</p>",
"<p onClick=nextLine(19)>Rage, Rage against the dying of the light</p>",
"<p onClick=nextLine(1)>Do not go gentle into that good night</p>"
);

	document.getElementById("line").innerHTML=poem[line];
}

