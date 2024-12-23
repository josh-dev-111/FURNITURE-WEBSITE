var groupName = "Blackpink";

        function disFunction() {
            var but = document.getElementById("button");

            if (but.innerHTML === "Display") {
                // display group names
                var mem1 = "Joshua Acunin";
                var mem2 = "Jhamillah Magne Mabuyo";
                var mem3 = "Jericho Carl Pornobe";
                var mem4 = "Cyril Mae Mercado";

                // set group name and members
                document.getElementById("groupName").value = groupName;
                document.getElementById("member1").value = mem1;
                document.getElementById("member2").value = mem2;
                document.getElementById("member3").value = mem3;
                document.getElementById("member4").value = mem4;

                but.innerHTML = "Hide"; // update button 
            } else if (but.innerHTML === "Hide") {
                // clear group name
                document.getElementById("groupName").value = "";
                document.getElementById("member1").value = "";
                document.getElementById("member2").value = "";
                document.getElementById("member3").value = "";
                document.getElementById("member4").value = "";

                but.innerHTML = "Display"; // update button 
            }
        }