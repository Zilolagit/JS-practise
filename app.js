
window.addEventListener("DOMContentLoaded", () =>{
    const title = document.querySelector("#title"),
    author = document.querySelector("#author"),
    year = document.querySelector("#year"),
    btn = document.querySelector(".btn"),
    bookList = document.querySelector("#book-list");

    btn.addEventListener("click", (event) =>{
        event.preventDefault()

        // Basic  Vlidation

        if(title.value == "" && author.value=="" && year.value == ""){
            alert("Please enter the information!!! :)")
        }else{
            const newRow = document.createElement("tr");

            // Creating newTitle
            const newTitle = document.createElement("td");
            newTitle.innerHTML= title.value
            newRow.appendChild(newTitle)

            // Creating newAuthor
            const newAuthor = document.createElement("td");
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            // Creating newYear
            const newYear = document.createElement("td");
            newYear.innerHTML = year.value
            newRow.appendChild(newYear)
            
            // Displaying data
            bookList.appendChild(newRow)

            title.value = ""
            author.value = ""
            year.value = ""
        }
    })
})
