let result = document.getElementById("result");

let URL = "https://api.adviceslip.com/advice";

const generator = async () => {
    const dados = await fetch(URL)
        .then(
            response => response.json()
        )
        .then(data => {
            console.log(data.slip)
            result.innerHTML = `
                <p class="textGenerator">${data.slip.advice}</p>
                <p class="textGenerator">${data.slip.id }</p>
            `
        })
        .catch(() => {
            result.innerHTML = `
                <p class="textGenerator">erro</p>
            `
        });

};

generator();