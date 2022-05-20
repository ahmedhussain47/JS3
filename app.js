
            document.write("***Question-1"+"<br>");    
            document.write("Result");    
            var vall = 10;
            document.write("The value of a is: "+vall+"<br>");   
            document.write("******************"+"<br><br>");    
 
            vall++
            document.write("The value of ++a is: "+vall+"<br>");    
            document.write("Now The value of ++a is: "+vall+"<br><br>");  

            document.write("The value of a++ is: "+vall+"<br>");  
            vall++
            document.write("The value of a++ is: "+vall+"<br><br>");  

            --vall
            document.write("The value of --a is: "+vall+"<br>");  
            document.write("The value of a++ is: "+vall+"<br><br>");  

            document.write("The value of a-- is: "+vall+"<br>");  
            vall--
            document.write("The value of a-- is: "+vall+"<br><br>");  


            document.write("***Question-2"+"<br>");    
            var a = 2, b = 1;
            document.write("value of a is "+a+"<br>");    
            document.write("value of b is "+b+"<br>");
            var result = --a - --b + ++b + b--;
            document.write("Result is "+result+"<br>"); 
            --a
            document.write("Result of --a is "+a+"<br>"); 
            var result1 = --a - --b;
            document.write("Result is "+result1+"<br>");  
            var result2 = --a - --b + ++b;;
            document.write("Result is "+result2+"<br>");  
            var result3 = --a - --b + ++b + b--;
            document.write("Result is "+result3+"<br>");   

            document.write("<br>" +"***Question-3"+"<br>");    
            document.write("Refresh for Q3"+"<br>");    

            var name = window.prompt("Enter your name: ");
            alert("Hello Dear " + name);

            document.write("***Question-4"+"<br>");    
            var num = +prompt("Enter Number", "0") 
            if(isNaN(num)){
                document.write("<br>" +num + " is not a number <br/>");
             }else{
                document.write("<br>" +num + " is a number <br/>");
                document.write("<br>" + num + " x " + 1 + " = " + num * 1 );
                document.write("<br>" + num + " x " + 2 + " = " + num * 2 );
                document.write("<br>" + num + " x " + 3 + " = " + num * 3 );
                document.write("<br>" + num + " x " + 4 + " = " + num * 4 );
                document.write("<br>" + num + " x " + 5 + " = " + num * 5 );
                document.write("<br>" + num + " x " + 6 + " = " + num * 6 );
                document.write("<br>" + num + " x " + 7 + " = " + num * 7 );
                document.write("<br>" + num + " x " + 8 + " = " + num * 8 );
                document.write("<br>" + num + " x " + 9 + " = " + num * 9 );
                document.write("<br>" + num + " x " + 10 + " = " + num * 10 );

                
                
                // var i = 0;
                // for (i = 1; i < 10; i++) {
                // document.write("<br>" + num + " x " + i + " = " + num * i );
                // }            
                }
                document.write("<br>" + "Refresh for Q4"+"<br>");    
