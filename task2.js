function begin_lines(n){
    document.write(`<div>`);
    for(let i = 1; i <= n; i++)
        document.write(`<hr width="${Math.round(100/i)}%">`);
    document.write(`</div>`);
}
function end_lines(n){
    document.write(`<div>`);
    for(let i = n; i > 0; i--) {
        document.write(`<hr width="${Math.round(100/i)}%">`);
    }
    document.write(`</div>`);
}

function draw_table(){
    let count = -1;
    document.write(`<div></div><table border="1" align="center" width="50%" cellpadding="15" cellspacing="0">`)

    for (let i = 0; i < 4; i++) {
        document.write(`<tr>`);
        for (let j = 0; j < 8; j++) {
            if (j < 4)
                document.write('<td></td>');
            else {
                document.write('<td bgcolor="#808080"></td>'.repeat(3 - count));
                count++;
                break;
            }
        }
        if (count !== 0){
            document.write('<td></td>'.repeat(count));
        }
        document.write(`</tr>`);
    }
    count = 0;
    for (let i = 0; i < 4; i++) {
        document.write(`<tr>`);
        document.write('<td bgcolor="#808080"></td>'.repeat(4 - count));
        if (count !== 0)
            document.write('<td></td>'.repeat(count*2));
        document.write('<td bgcolor="#808080"></td>')
        document.write('<td></td>'.repeat(3 - count));
        document.write(`</tr>`);
        count++;
    }
    document.write(`</table></div>`)
}

let num = prompt('Number between 2 and 15:');
let con1 = num.toString().includes('.');
if (isNaN(num) || !isFinite(num) || num <= 2 || num >= 15 || con1 === true){
    alert('Incorrect Input : ' + num);
    process.exit(0);
}
num = Number(num);
begin_lines(num);
draw_table(num);
end_lines(num);