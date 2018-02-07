function solve(input) {
    let regex = /\*[A-Z][a-zA-Z]*(\s+)|\*[A-Z][a-zA-Z]*$|\+[0-9-]{10}(\s+)|\+[0-9-]{10}$|\![a-zA-Z0-9]+(\s+)|\![a-zA-Z0-9]+$|\_[a-zA-Z0-9]+(\s+)|\_[a-zA-Z0-9]+$/g;
    for (let line of input) {
        let match = regex.exec(line);
        while (match) {
            let matched = match[0].trim();
            line = line.replace(matched, '|'.repeat(matched.length));
            match = regex.exec(line);
        }
        console.log(line);
    }
}

solve(['Agent *Ivankov was in the room when it all',
'happened.',
'The person in the room was heavily armed.',
'Agent *Ivankov had to act quick in order.',
'He picked up his phone and called some',
'unknown number.',
'I think it was +555-49-796',
'I can&#39;t really remember...',
'He said something about &quot;finishing work&quot;',
'with subject !2491a23BVB34Q and returning',
'to Base _Aurora21',
'Then after that he disappeared from my',
'sight.',
'As if he vanished in the shadows.',
'A moment, shorter than a second, later, I',
'saw the person flying off the top floor.',
'I really don&#39;t know what happened there.',
'This is all I saw, that night.',
'I cannot explain it myself...',
'',
'+---------8',
'*Ivankov-'])