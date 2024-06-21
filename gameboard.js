document.addEventListener('DOMContentLoaded', function () {
    let clickcount = 0;
    const xWonPrint = document.querySelector('#xwon');
    const oWonPrint = document.querySelector('#owon');
    const matchTie = document.querySelector('#tie');
    const resetbtn = document.querySelector('#btnreset');
    const modal = document.querySelector('#modal');
    const finalreset = document.querySelector('#finalreset');
    const cancelbtn = document.querySelector('#cancelbtn');
    const scores1 = document.querySelector('#lb-1');
    const scores2 = document.querySelector('#lb-2');
    const resetscores = document.querySelector('#resetscores');
    const highlight1 = document.querySelector('body > section > div.gameboardsection > div.thirdsection > div.leaderboard > div:nth-child(3) > h4');
    const highlight2 = document.querySelector('body > section > div.gameboardsection > div.thirdsection > div.leaderboard > div:nth-child(4) > h4');


    const myData1 = [];
    const myData2 = [];
    const myData3 = [];
    const dataAsString1 = JSON.stringify(myData1);
    const dataAsString2 = JSON.stringify(myData2);
    const dataAsString3 = JSON.stringify(myData3);
    localStorage.setItem('winData', dataAsString1);
    localStorage.setItem('winData', dataAsString2);
    localStorage.setItem('winData', dataAsString3);
    console.log('Data stored in local storage.');


    resetscores.addEventListener('click', function () {
        scores1.value = '';
        scores2.value = '';
        highlight1.classList.remove('highlight');
        highlight2.classList.remove('highlight');
        highlight1.style.color = '#0C1844';
        highlight2.style.color = '#0C1844';
    })

    function highlight() {
        if (scores1.value > scores2.value) {
            highlight1.classList.add('highlight');
            highlight1.style.color = 'white';
            highlight2.classList.remove('highlight');
            highlight2.style.color = '#0C1844';
        }
        else if (scores2.value > scores1.value) {
            highlight1.classList.remove('highlight');
            highlight1.style.color = '#0C1844';
            highlight2.classList.add('highlight');
            highlight2.style.color = 'white';
        }
        else if (scores1.value == scores2.value) {
            highlight1.classList.remove('highlight');
            highlight1.style.color = '#0C1844';
            highlight2.classList.remove('highlight');
            highlight2.style.color = '#0C1844';
        }
    }

    let flag = 1;
    let btnX = document.querySelector('#btnX');
    let btnY = document.querySelector('#btnY');

    if (flag == 0) {
        btnY.classList.add('active');
        btnX.classList.remove('active');
        flag = 1;
    }
    else {
        btnY.classList.remove('active');
        btnX.classList.add('active');
        flag = 0;
    }

    resetbtn.addEventListener('click', function () {
        modal.style.display = 'block';
        modalbox();
    })

    function modalbox() {
        finalreset.addEventListener('click', function callback() {
            modal.style.display = 'none';
            oWonPrint.style.visibility = 'hidden';
            xWonPrint.style.visibility = 'hidden';
            matchTie.style.visibility = 'hidden';
            b1.value = b2.value = b3.value = b4.value = b5.value = b6.value = b7.value = b8.value = b9.value = '';
            b1.disabled = false;
            b2.disabled = false;
            b3.disabled = false;
            b4.disabled = false;
            b5.disabled = false;
            b6.disabled = false;
            b7.disabled = false;
            b8.disabled = false;
            b9.disabled = false;
        })
        cancelbtn.addEventListener('click', function () {
            modal.style.display = 'none';
        })
    }

    function winfunc() {
        //O Won
        //row
        if ((b1.value === 'O') && (b2.value === 'O') && (b3.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }

        else if ((b4.value === 'O') && (b5.value === 'O') && (b6.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);

        }
        else if ((b7.value === 'O') && (b8.value === 'O') && (b9.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }
        //column
        else if ((b1.value === 'O') && (b4.value === 'O') && (b7.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b2.disabled = true;
            b3.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }
        else if ((b2.value === 'O') && (b5.value === 'O') && (b8.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b9.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }
        else if ((b3.value === 'O') && (b6.value === 'O') && (b9.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }
        //diagonal
        else if ((b1.value === 'O') && (b5.value === 'O') && (b9.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b3.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }
        else if ((b3.value === 'O') && (b5.value === 'O') && (b7.value === 'O')) {
            oWonPrint.style.visibility = 'visible';
            oWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b9.disabled = true;
            b8.disabled = true;
            scores1.value++;
            myData1.push(oWonPrint.textContent);
            highlight();
            return console.log(myData1);
        }

        //X won
        //row
        if ((b1.value === 'X') && (b2.value === 'X') && (b3.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        else if ((b4.value === 'X') && (b5.value === 'X') && (b6.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        else if ((b7.value === 'X') && (b8.value === 'X') && (b9.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        //column
        else if ((b1.value === 'X') && (b4.value === 'X') && (b7.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b2.disabled = true;
            b3.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        else if ((b2.value === 'X') && (b5.value === 'X') && (b8.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b9.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        else if ((b3.value === 'X') && (b6.value === 'X') && (b9.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        //diagonal
        else if ((b1.value === 'X') && (b5.value === 'X') && (b9.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b3.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }
        else if ((b3.value === 'X') && (b5.value === 'X') && (b7.value === 'X')) {
            xWonPrint.style.visibility = 'visible';
            xWonPrint.classList.add('properties');
            // console.log('owonnnn');
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b9.disabled = true;
            b8.disabled = true;
            scores2.value++;
            myData2.push(xWonPrint.textContent);
            highlight();
            return console.log(myData2);
        }

        //match tie
        else if ((b1.value === 'X' || b1.value === 'O') && (b2.value === 'X' || b2.value === 'O') && (b3.value === 'X' || b3.value === 'O') && (b4.value === 'X' || b4.value === 'O') && (b5.value === 'X' || b5.value === 'O') && (b6.value === 'X' || b6.value === 'O') && (b7.value === 'X' || b7.value === 'O') && (b8.value === 'X' || b8.value === 'O') && (b9.value === 'X' || b9.value === 'O')) {
            matchTie.style.visibility = 'visible';
            xWonPrint.style.visibility = 'hidden';
            oWonPrint.style.visibility = 'hidden';
            matchTie.classList.add('properties');
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b8.disabled = true;
            myData3.push(matchTie.textContent);
            return console.log(myData3);
        }
    }

    const b1 = document.querySelector('#b1');
    b1.addEventListener('click', function cell1() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b1.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b1.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b1.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b1.disabled = true;
            winfunc();
        }
    })

    const b2 = document.querySelector('#b2');
    b2.addEventListener('click', function cell2() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b2.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b2.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b2.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b2.disabled = true;
            winfunc();
        }
    })



    const b3 = document.querySelector('#b3');
    b3.addEventListener('click', function cell3() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b3.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b3.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b3.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b3.disabled = true;
            winfunc();
        }
    })



    const b4 = document.querySelector('#b4');
    b4.addEventListener('click', function cell4() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b4.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b4.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b4.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b4.disabled = true;
            winfunc();
        }
    })



    const b5 = document.querySelector('#b5');
    b5.addEventListener('click', function cell5() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b5.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b5.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b5.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b5.disabled = true;
            winfunc();
        }
    })



    const b6 = document.querySelector('#b6');
    b6.addEventListener('click', function cell6() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b6.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b6.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b6.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b6.disabled = true;
            winfunc();
        }
    })



    const b7 = document.querySelector('#b7');
    b7.addEventListener('click', function cell7() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b7.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b7.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b7.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b7.disabled = true;
            winfunc();
        }
    })



    const b8 = document.querySelector('#b8');
    b8.addEventListener('click', function cell8() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b8.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b8.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b8.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b8.disabled = true;
            winfunc();
        }
    })



    const b9 = document.querySelector('#b9');
    b9.addEventListener('click', function cell9() {
        if (flag == 1) {
            btnY.classList.remove('active');
            btnX.classList.add('active');
            // btnX.style.color = 'white';
            // btnY.style.color = 'black';
            b9.value = 'X';
            flag = 0;
            clickcount++;
            console.log(clickcount);
            b9.disabled = true;
            winfunc();
        }
        else {
            btnY.classList.add('active');
            btnX.classList.remove('active');
            // btnY.style.color = 'white';
            // btnX.style.color = 'black';
            b9.value = 'O';
            flag = 1;
            clickcount++;
            console.log(clickcount);
            b9.disabled = true;
            winfunc();
        }
    })
})

