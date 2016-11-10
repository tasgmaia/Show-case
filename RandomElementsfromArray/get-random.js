
function get(music, count) 
{
  	var mix = music.slice(0), i = music.length, min = i - count, temp, index;
  	while (i-- > min) 
  	{
	      index = Math.floor((i + 1) * Math.random());
	      temp = mix[index];
	      mix[index] = mix[i];
	      mix[i] = temp;
  	}
	return mix.slice(min);
}

document.getElementById("choose").onclick = function() {
	document.getElementById("results").innerHTML = 
	get(
		[' Senhor e Rei',
		 ' Rei Salvador',
		 ' Me ama',
		 ' Nada Temerei',
		 ' Descansarei',
		 ' Te Louvarei',
		 ' Nasci pra te Adorar',
		 ' Jesus',
		 ' Confiarei'
		 ], 
		6);
}