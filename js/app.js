window.onload = function() {

   	var cookiearr = document.cookie.split(';');

   	/*cookie checker*/
   	for (var i = 0; i < cookiearr.length; i++) {
   		if (cookiearr[i].trim() == "firecapeclick=true") {
   			$('.firecape').css('opacity', '1');
   		} 
   		if (cookiearr[i].trim() == "questcapeclick=true") {
   			$('.questcape').css('opacity', '1');
   		}
   		if (cookiearr[i].trim() == "achievementcapeclick=true") {
   			$('.achievementcape').css('opacity', '1');
   		}
      if (cookiearr[i].trim() == "musiccapeclick=true") {
        $('.musiccape').css('opacity', '1');
      }
   		if (cookiearr[i].trim() == "maxcapeclick=true") {
   			$('.maxcape').css('opacity', '1');
   		}
      if (cookiearr[i].trim() == "dragonfullhelmclick=true") {
        $('.dragonfullhelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonchainbodyclick=true") {
        $('.dragonchainbody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonplatelegsclick=true") {
        $('.dragonplatelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonplateskirtclick=true") {
        $('.dragonplateskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonsqshieldclick=true") {
        $('.dragonsqshield').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragon2hswordclick=true") {
        $('.dragon2hsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonspearclick=true") {
        $('.dragonspear').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonwarhammerclick=true") {
        $('.dragonwarhammer').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragondefenderclick=true") {
        $('.dragondefender').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonpickaxeclick=true") {
        $('.dragonpickaxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonaxeclick=true") {
        $('.dragonaxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "berserkerringclick=true") {
        $('.berserkerring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "seersringclick=true") {
        $('.seersring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "archersringclick=true") {
        $('.archersring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "warriorringclick=true") {
        $('.warriorring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "seercullclick=true") {
        $('.seercull').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "mudbattlestaffclick=true") {
        $('.mudbattlestaff').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "treasonousringclick=true") {
        $('.treasonousring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tyrannicalringclick=true") {
        $('.tyrannicalring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ringofthegodsclick=true") {
        $('.ringofthegods').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidrangeclick=true") {
        $('.voidrange').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidmeleeclick=true") {
        $('.voidmelee').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidmageclick=true") {
        $('.voidmage').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidtopclick=true") {
        $('.voidtop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidelitetopclick=true") {
        $('.voidelitetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidmaceclick=true") {
        $('.voidmace').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidrobeclick=true") {
        $('.voidrobe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voideliterobeclick=true") {
        $('.voideliterobe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidknightglovesclick=true") {
        $('.voidknightgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=true") {
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=purple") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_purple.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=blue") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_blue.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=orange") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_orange.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=red") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_red.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=green") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_green.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=true") {
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=purple") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_purple.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=blue") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_blue.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=orange") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_orange.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=red") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_red.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=green") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_green.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=true") {
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=purple") {
        $('.gracefultop').attr("src", "images/Graceful_top_purple.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=blue") {
        $('.gracefultop').attr("src", "images/Graceful_top_blue.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=orange") {
        $('.gracefultop').attr("src", "images/Graceful_top_orange.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=red") {
        $('.gracefultop').attr("src", "images/Graceful_top_red.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=green") {
        $('.gracefultop').attr("src", "images/Graceful_top_green.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=true") {
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=purple") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_purple.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=blue") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_blue.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=orange") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_orange.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=red") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_red.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=green") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_green.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=true") {
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=purple") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_purple.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=blue") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_blue.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=orange") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_orange.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=red") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_red.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=green") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_green.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=true") {
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=purple") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_purple.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=blue") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_blue.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=orange") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_orange.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=red") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_red.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=green") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_green.png");
        $('.gracefulboots').css('opacity', '1');
      }
   	}
}

var main = function() {

  /*sets a cookie to expire in a year*/
  var d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000*365));
  var expires = "expires="+d.toUTCString();

	$('.firecape').click(function(){
		transparency($(this), expires);
	});

	$('.questcape').click(function(){
		transparency($(this), expires);
	});

	$('.achievementcape').click(function(){
		transparency($(this), expires);
	});

  $('.musiccape').click(function(){
    transparency($(this), expires);
  });

	$('.maxcape').click(function(){
		transparency($(this), expires);
	});

  $('.dragonfullhelm').click(function(){
    transparency($(this), expires);
  });

  $('.dragonchainbody').click(function(){
    transparency($(this), expires);
  });

  $('.dragonplatelegs').click(function(){
    transparency($(this), expires);
  });

  $('.dragonplateskirt').click(function(){
    transparency($(this), expires);
  });

  $('.dragonsqshield').click(function(){
    transparency($(this), expires);
  });

  $('.dragon2hsword').click(function(){
    transparency($(this), expires);
  });

  $('.dragonspear').click(function(){
    transparency($(this), expires);
  });

  $('.dragonwarhammer').click(function(){
    transparency($(this), expires);
  });

  $('.dragondefender').click(function(){
    transparency($(this), expires);
  });

  $('.dragonpickaxe').click(function(){
    transparency($(this), expires);
  });

  $('.dragonaxe').click(function(){
    transparency($(this), expires);
  });

  $('.berserkerring').click(function(){
    transparency($(this), expires);
  });

  $('.seersring').click(function(){
    transparency($(this), expires);
  });

  $('.archersring').click(function(){
    transparency($(this), expires);
  });

  $('.warriorring').click(function(){
    transparency($(this), expires);
  });

  $('.seercull').click(function(){
    transparency($(this), expires);
  });

  $('.mudbattlestaff').click(function(){
    transparency($(this), expires);
  });

  $('.treasonousring').click(function(){
    transparency($(this), expires);
  });

  $('.tyrannicalring').click(function(){
    transparency($(this), expires);
  });

  $('.ringofthegods').click(function(){
    transparency($(this), expires);
  });

  $('.voidrange').click(function(){
    transparency($(this), expires);
  });

  $('.voidmelee').click(function(){
    transparency($(this), expires);
  });

  $('.voidmage').click(function(){
    transparency($(this), expires);
  });

  $('.voidtop').click(function(){
    transparency($(this), expires);
  });

  $('.voidelitetop').click(function(){
    transparency($(this), expires);
  });

  $('.voidmace').click(function(){
    transparency($(this), expires);
  });

  $('.voidrobe').click(function(){
    transparency($(this), expires);
  });

  $('.voideliterobe').click(function(){
    transparency($(this), expires);
  });

  $('.voidknightgloves').click(function() {
    transparency($(this), expires);
  });

  /*This is the first function to include changing images for recolours*/

  $('.gracefulhood').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_hood.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_hood.png");
          document.cookie = "gracefulhoodclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulhoodclick=true;" + expires + ";";
    }
  });

  $('.gracefulcape').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_cape.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_cape.png");
          document.cookie = "gracefulcapeclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulcapeclick=true;" + expires + ";";
    }
  });

  $('.gracefultop').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_top.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_top.png");
          document.cookie = "gracefultopclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefultopclick=true;" + expires + ";";
    }
  });

  $('.gracefulgloves').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_gloves.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_gloves.png");
          document.cookie = "gracefulglovesclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulglovesclick=true;" + expires + ";";
    }
  });

  $('.gracefullegs').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_legs.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_legs.png");
          document.cookie = "gracefullegsclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefullegsclick=true;" + expires + ";";
    }
  });

$('.gracefulboots').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_boots.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_boots.png");
          document.cookie = "gracefulbootsclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulbootsclick=true;" + expires + ";";
    }
  });

}

function transparency(currentitem, expires) {
    if (currentitem.css('opacity') == '1') {
        currentitem.animate({'opacity':0.4}, 175);
        document.cookie = currentitem.attr('class') + "click=false;" + expires + ";";
    } else {
        currentitem.animate({'opacity':1}, 175);
        document.cookie = currentitem.attr('class') + "click=true;" + expires + ";";
    }
}

/*Waits for the document to load before starting the js*/

$(document).ready(main);