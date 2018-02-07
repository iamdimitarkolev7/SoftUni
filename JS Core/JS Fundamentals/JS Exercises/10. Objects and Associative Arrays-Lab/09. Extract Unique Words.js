function solve(lines) {
    let uniqueWords = new Set();

    for (let line of lines) {
        let words = line.split(/[^A-Za-z]+/)
            .filter(a => a !== '');
        for (let word of words) {
            uniqueWords.add(word.toLowerCase());
        }
    }
    let arrOfUniqueWords = Array.from(uniqueWords);
    console.log(arrOfUniqueWords.join(', '));
}

solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);