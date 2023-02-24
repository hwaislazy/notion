		var state=0;
		$(window).load(function(){
             $(".loader").hide();
             $(".player").show();
        });
		$(document).ready(function(){
			$(".power").click(function(){
  				$(".record").toggleClass('on');
  				$(".stick").toggleClass('play');
  				if(state==0){
  					setTimeout(function(){
  					 $(".mysong")[0].play();
  					},1000);
  					state=1;
  				}
  				else{
  					$(".mysong")[0].pause();
  					state=0;
  				}
  				$(".slider").change(function(){
  					$(".mysong")[0].volume=this.value;
  				});
  			});
  			
		});