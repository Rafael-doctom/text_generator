let result = document.getElementById("result")

let URL = "https://api.adviceslip.com/advice"

const generator = () => {
    fetch(URL)
        .then(
            response => response.json()
        )
        .then(data => {
            console.log(data.slip)

            result.innerHTML = `
                <p class="textGenerator">${data.slip.advice}</p>
            `

        })

}

generator()