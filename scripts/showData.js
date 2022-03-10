
const buscarDetalleCiudad = async (e) => {  
    if(e.target.classList.contains('box')){
        const countryName = await e.target.children[1].firstElementChild.textContent;  
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then((res) => res.json())
        .then((data) => {
            searchFilter.innerHTML = '';
            document.querySelector('.back-btn').style.display = 'flex';
            searchFilter.classList.remove('mt-5');
            mainContent.classList.remove('row');
            mainContent.innerHTML = '';

            let box = `

                <div class="row mt-5">
                    <div class="col-md-6">
                        <img class="img-fluid" width="100%" height="auto" src="${data[0].flag}">
                    </div>
                    <div class="col-md-6">
                        <h2 class="mt-4"><b>${data[0].name}</b></h2>
                        <div class="countryDetails row">
                            <div class="col-md-6">
                                <p><b>Native Name:</b> <span>${data[0].nativeName}</span></p>
                                <p><b>Population:</b> <span>${data[0].population}</span></p>
                                <p><b>Region:</b> <span>${data[0].region}</span></p>
                                <p><b>Sub Region:</b> <span>${data[0].subregion}</span></p>
                                <p><b>Capital:</b> <span>${data[0].capital}</span></p>
                            </div>
                            <div class="col-md-6">
                                <p><b>Top Level Domain:</b> `;
                                    data[0].topLevelDomain.forEach((domain) => {
                                        box += `<span>${domain}</span>,`
                                    })
                                box +=`</p>`

                                box += `<p><b>Currencies:</b> `;
                                    data[0].currencies.forEach((currency) => {
                                        box += `<span>${currency.name}</span>,`
                                    })
                                box +=`</p>`

                                box += `<p><bLanguages:</b> `;
                                    data[0].languages.forEach((language) => {
                                        box += `<span>${language.name}</span>,`
                                    })
                                box +=`</p>`
                            box += `
                            </div>
                        </div>
                        <div class"border mt-5 d-flex align-items-center">
                            <h4><b>Border Countries:</b></h4>`
                            if(data[0].borders.length !== 0){
                                box += `<div class="mt-4 mt-md-0 mb-5 mb-md-0">`;
                                data[0].borders.forEach((border) => {
                                    box += `<span class="px-3 py-2 mr-2">${border}</span>`;
                                })
                                box += `</div>`;
                            }
                        box += `    
                        </div>
                    </div>
                </div>`;

            mainContent.innerHTML += box;

        })
    }
}

mainContent.addEventListener("click", buscarDetalleCiudad);

export default showData