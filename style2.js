        var p = 0;
        var speed = 200;
        var moving = true;
        var previousState;

        function moveit() {
            p += 0.05;

            if(!moving)
                return;

            var r = 300;
            var xcenter = document.getElementById("logo").getBoundingClientRect().left;
            var ycenter = document.getElementById("logo").getBoundingClientRect().top*2;


            var newLeft = Math.floor(xcenter + (r* Math.cos(p)));
            var newTop = Math.floor(ycenter + (r * Math.sin(p)))/2;
            var newLeft1 = Math.floor(xcenter + -(r* Math.cos(p)));
            var newTop1 = Math.floor(ycenter + -(r * Math.sin(p)))/2;
            var newLeft2 = Math.floor(xcenter + (r* Math.sin(p)));
            var newTop2 = Math.floor(ycenter + -(r * Math.cos(p)))/2;
            var newLeft3 = Math.floor(xcenter + -(r* Math.sin(p)));
            var newTop3 = Math.floor(ycenter + (r * Math.cos(p)))/2;

            $('#friends').animate({
                    top: newTop,
                    left: newLeft,
                }, speed, function() {
                    moveit()
                        });
            $('#friends2').animate({
                top: newTop1,
                left: newLeft1,
            },speed, function() {
            });

            $('#friends3').animate({
                                   top: newTop2,
                                   left: newLeft2,
                                   },speed, function() {
                                   });

            $('#friends4').animate({
                                   top: newTop3,
                                   left: newLeft3,
                                   },speed, function() {
                                   });
         }

        function load(page) {
            if(!page)
                return;
            var res = page.split("/");
            
            if (location.hash!="" && location.hash!="#")
            {
                console.log(previousState);
                //console.log(res[0]);
                if(res.length == 1 || previousState != res[0])
                {
                    previousState = res[0];
                    $.ajax("pages/"+res[0]+".html").done(render).fail(error);
                }
                else
                {
                    previousState = res[0];
                    $.ajax("pages/"+res[1]+".html").done(subrender).fail(error);
                }
                $('.friends').fadeOut(300);
                $('#logo').fadeOut(300);
            }
        }

        $(function(){
            $(window).hashchange( function(){
                load(location.hash.split('#')[1]);
            });
            $(window).hashchange();
        });

        function render(data) {                
            $("#main").hide().fadeIn(500).html(data);
            stopit();

            console.log(moving);
            
            if($("#main2").length == 1)
                load(location.hash.split('#')[1]);
        }

        function subrender(data) {
            $("#main2").hide().fadeIn(500).html(data);
        }

        function error() {

        }

        function falldown(id) {
            //$('.friends:not(#'+id+')').animate({top: 1000}, 500, function() {});
            //$("#"+id).animate({width: "400px", height: "400px"}, 1000);
            
        }

        function floatup (id) {
         //$('#'+id+'me').animate({marginTop: 10, marginLeft: 100, padding: 0, position:    "relative", top: 0, left:0}, 500);
            //$('#logo').fadeOut(300);
        }

        function startit() {
            moving = true;
            moveit();
        }

        function stopit() {
            moving = false;
            $('.friends img').stop(true, false);
        }

        $('.friends').click(function() {
            falldown($(this).attr("id"));
            floatup($(this).attr("id"));
        });

        $('.friends img').hover(function() {
            stopit();
        });

        $('.friends img').on("mouseout", function() {
                            startit();
                            });

        $(document).ready(function() {
            if (location.hash == "" || location.hash =="#")  
            {
                          $('#logo').delay(800).animate({opacity : 1},  600 );
                          $('#frienddiv').delay(1800).animate({opacity : 1},  2000 );
            }
            moveit();
        });