var i=0;
        var j=0;
        function pop(){
            if(i==0 && j==0){
                document.getElementById("google").style.transform='translateX(-150px)';
                document.getElementById("facebook").style.transform='translate(-100px,-100px)';
                document.getElementById("instagram").style.transform='translateY(-150px)';
                document.getElementById("twitter").style.transform='translate(100px,-100px)';
                document.getElementById("whatsapp").style.transform='translateX(150px)';
                document.getElementById("telegram").style.transform='translate(100px,100px)';
                document.getElementById("youtube").style.transform='translateY(150px)';
                document.getElementById("linkedin").style.transform='translate(-100px,100px)';
                i=1;
                j=0;
            }

            else if(i==1 && j==0){
                document.getElementById("google").style.transform='translate(0px)';
                document.getElementById("facebook").style.transform='translate(0px)';
                document.getElementById("instagram").style.transform='translate(0px)';
                document.getElementById("twitter").style.transform='translate(0px)';
                document.getElementById("whatsapp").style.transform='translate(0px)';
                document.getElementById("telegram").style.transform='translate(0px)';
                document.getElementById("youtube").style.transform='translate(0px)';
                document.getElementById("linkedin").style.transform='translate(0px)';
                i=0;
                j=1;
            }

            else if(i==0 && j==1){
                document.getElementById("google").style.transform='translateX(-100px)';
                document.getElementById("facebook").style.transform='translate(-100px,-100px)';
                document.getElementById("instagram").style.transform='translateY(-100px)';
                document.getElementById("twitter").style.transform='translate(100px,-100px)';
                document.getElementById("whatsapp").style.transform='translateX(100px)';
                document.getElementById("telegram").style.transform='translate(100px,100px)';
                document.getElementById("youtube").style.transform='translateY(100px)';
                document.getElementById("linkedin").style.transform='translate(-100px,100px)';
                i=1;
                j=1;
            }
            else{
                document.getElementById("google").style.transform='translate(0px)';
                document.getElementById("facebook").style.transform='translate(0px)';
                document.getElementById("instagram").style.transform='translate(0px)';
                document.getElementById("twitter").style.transform='translate(0px)';
                document.getElementById("whatsapp").style.transform='translate(0px)';
                document.getElementById("telegram").style.transform='translate(0px)';
                document.getElementById("youtube").style.transform='translate(0px)';
                document.getElementById("linkedin").style.transform='translate(0px)';
                i=0;
                j=0;
            }
        }