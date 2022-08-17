let btn = document.querySelector("#get-residents");

const clickBtn = () =>{
    console.log("button clicked");
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
        .then(res =>{        
            // console.log(res.data.results[0].residents)
            let residentArray = res.data.results[0].residents;
            for (i of residentArray){
                axios.get(`${i}`)
                    .then(res => {
                        // console.log(res.data)
                        let newResident =  document.createElement("h2");
                        newResident.textContent = res.data.name;
                        document.querySelector("body").appendChild(newResident)
                    })
            }
        })
}

btn.addEventListener("click",clickBtn);

//making a request
// As you complete this section, be sure to test along the way using Postman and console.log``s 1. Now you'll modify the function to make an ``axios call to SWAPI 2. Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation) 3. Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs. 4. In the loop, make another get request for each URL in the array. 5. You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.

