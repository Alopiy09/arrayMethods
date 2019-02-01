const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })

businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    
    let totalOrders = business.orders.reduce(
        (currentTotal, nextValue) => currentTotal += nextValue,
        0
    )

    outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outEl.innerHTML += "<hr/>";
});
/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outEl.innerHTML += "<hr/>";
});

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });

    const theBigMoney = []

    const bigSpenders = businesses.filter(business => {
        let over9000 = false
        const order = business.orders
        if (order < 9000){
            over9000 = true
        }

        if (over9000 === true) {
            bigSpenders.push(theBigMoney)
        }
        
    })
    console.log(theBigMoney)


// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const currentRainfall = (rain, rainfall) => rain + rainfall; 

// const totalRainfall = monthlyRainfall.reduce(currentRainfall)

// console.log(totalRainfall)



// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const wordSmasher = (currentWord, nextWord) => currentWord + " " + nextWord;

// const sentence = words.reduce(wordSmasher)

// console.log(sentence)

