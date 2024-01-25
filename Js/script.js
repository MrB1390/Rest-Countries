const addElement = () => {

    const newDiv = document.createElement("div");
    newDiv.className = "container";

    const newChildRow = document.createElement("div");
    newChildRow.className = "row";
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((country) => {
                console.log(data);
                const newChildCol = document.createElement("div");
                newChildCol.className = "col-lg-4 col-sm-12 cd1";

                const newChildCard = document.createElement("div");
                newChildCard.className = "card cd";

                const newChildHeader = document.createElement("div");
                newChildHeader.className = "card-header";

                const newChildBody = document.createElement("div");
                newChildBody.className = "card-body";

                const newChildButton = document.createElement("button");
                newChildButton.className = "btn btn-primary"
                newChildButton.textContent = "Click for Weather"

                newChildButton.addEventListener("click", () => {
                    fetch("https://api.openweathermap.org/data/2.5/weather?lat=latitude&appid=d79f8035a06183aa41802f3e8a649aa9")
                });
                
                const { name, flags,capital,region,cca3,latlng } = country;

                const headingValue = document.createElement("h3");
                headingValue.textContent = name.common;
                newChildHeader.appendChild(headingValue);

                const latitude = latlng;
                console.log(latitude);

                const flagImage = document.createElement("img");
                flagImage.src = flags.png;
                flagImage.alt = name.common;
                flagImage.width = 300;
                flagImage.height = 200;
                flagImage.style.marginBottom = "10px";

                newChildBody.appendChild(flagImage);

                const capitalValue = document.createElement("p");
                capitalValue.textContent = "Capital:" + capital;
                newChildBody.appendChild(capitalValue)

                const regionValue = document.createElement("p");
                regionValue.textContent = "Region:" + region;
                newChildBody.appendChild(regionValue)

                const codeValue = document.createElement("p");
                codeValue.textContent = "Country Code:" + cca3 ;
                newChildBody.appendChild(codeValue)

                newChildCard.appendChild(newChildHeader);
                newChildCard.appendChild(newChildBody);
                newChildCard.appendChild(newChildButton);

                newChildCol.appendChild(newChildCard);
                newChildRow.appendChild(newChildCol);
                newDiv.appendChild(newChildRow);

                document.body.appendChild(newDiv);

            });
        });
};

document.body.onload = addElement;
