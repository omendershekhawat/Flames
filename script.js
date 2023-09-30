const matchbtn = document.getElementById('checkMatchbox')
const matchresult = document.querySelector(".matchResultBox")
// let matches = ["Love", "Friends", "Kattar Dushman", "siblings", "Affection",]

const flames = (username, crushName) => {
    if (username && crushName) {
        username.trim();
        crushName.trim();
        let name1 = username;
        let name2 = crushName;
        let count = 0;



        for (i = 0; i < username.length; i++) {
            for (let j = 0; j < crushName.length; j++) {
                if (username[i] == crushName[j]) {
                    username = username.substring(0, i) + "*" + username.substring(i + 1)
                    crushName = crushName.substring(0, j) + "*" + crushName.substring(j + 1)
                }

            }
        }


        for (i = 0; i < username.length; i++) {
            if (username[i] != "*") {
                count++;
            }
        }
        for (j = 0; j < crushName.length; j++) {
            if (crushName[j] != "*") {
                count++;
            }
        }



        if (count > 1) {
            var flames = "FLAMES";
            c = 0;
            l = 1;
            for (i = 0; flames.length != 1; i++) {
                if (l == count) {
                    if (c >= flames.length) {
                        c = 0;
                    }
                    // flames = replaceAt(flames, c, '');
                    flames = flames.substring(0,c)+""+flames.substring(c+1)
                    l = 1;
                }
                if (c >= flames.length) {
                    c = 0;
                }
                l++;
                c++;
            }

            switch (flames) {
                case 'F':
                    flames = "are Friends";
                    break;
                case 'L':
                    flames = "are in Love";
                    break;
                case 'A':
                    flames = "have Affection";
                    break;
                case 'M':
                    flames = "will have Marriage";
                    break;
                case 'E':
                    flames = "are Enemies (KattarDushman)";
                    break;
                case 'S':
                    flames = "Sibling";
                    break;
            }
        }

        if (count == 0) {
            // matchresult.textContent = "Its Same Name"
            flames="are Same Names"
        }
        if (count == 1) {
            flames="are Siblings"
        }
        matchresult.innerHTML = `${name1} and ${name2}  ${flames}`




    } else {
        matchresult.textContent = "Enter Both Values First"
    }
}


matchbtn.addEventListener("click", () => {
    const username = document.querySelector("#userName").value.toLowerCase()
    const crushName = document.querySelector("#crushName").value.toLowerCase()
    // console.log(username, crushName);
    flames(username, crushName);

    // if (username.value && crushName.value) {
    //     matchresult.textContent = username.value + " and " + crushName.value + " are " + matches[Math.floor(Math.random() * matches.length)]
    //     username.value = ""
    //     crushName.value = ""
    // } else {
    //     matchresult.textContent = "Enter Both Values First"
    // }
})

// console.log("chl rha h");