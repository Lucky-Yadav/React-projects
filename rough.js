function runProgram(input) {
    input = input.split('\n');

    let q = +input[0];

    let line = 1;

    let c1 = [];
    let c2 = [];
    let c3 = [];
    let c4 = [];

    let type = [];

    while (q--) {
        if (input[line][0] == 'E') {
            let club_number = input[line].split(' ').map(Number)[1];
            let roll_number = input[line].split(' ').map(Number)[2];

            if (club_number == 1) {
                if (c1.length == 0) {
                    type.push(club_number);
                }
                c1.push(roll_number);
            } else if (club_number == 2) {
                if (c2.length == 0) {
                    type.push(club_number);
                }
                c2.push(roll_number);
            } else if (club_number == 3) {
                if (c3.length == 0) {
                    type.push(club_number);
                }
                c3.push(roll_number);
            } else {
                if (c4.length == 0) {
                    type.push(club_number);
                }
                c4.push(roll_number);
            }
        } else {

            let club = type[0];
            if (club == 1) {
                console.log(club + " " + c1[0]);
                c1.shift();
                if (c1.length == 0) {
                    type.shift();
                }
            } else if (club == 2) {
                console.log(club + " " + c2[0]);
                c2.shift();
                if (c2.length == 0) {
                    type.shift();
                }
            } else if (club == 3) {
                console.log(club + " " + c3[0]);
                c3.shift();
                if (c3.length == 0) {
                    type.shift();
                }
            } else {
                console.log(club + " " + c4[0]);
                c4.shift();
                if (c4.length == 0) {
                    type.shift();
                }
            }
        }

        line++;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});