const registerView = (register) => `
<div class="col-12">
    <div class="card">
        <h5 class="card-header"> ${register.Name} 
        <div class="card-body">
          <ul class="list-group">
               <li class="list-group-item">Directorate: ${register.Directorate}</li>
                <li class="list-group-item">Description: ${register.Description}</li>
                <li class="list-group-item">Purpose: ${register.Purpose}</li>
                <li class="list-group-item">Sensitivity: ${register.Sensitivity}</li>
          </ul>
        </div>
      </div>
 </div>
`;

const handleSubmit = async () => {
    const searchVal = document.querySelector("#searchInput").value;
    try {
        const registerRef = document.querySelector('#searchItems');
        const ref = await fetch(`/api/search/?search=${searchVal}`);
        const searchResults = await ref.json();
        let searchHtml = [];
        searchResults.forEach(register => {
            searchHtml.push(registerView(register));
        });
        registerRef.innerHTML = registerHtml.join(""); 
    } catch (e) {
        console.log(e);
        console.log('could not search api');
    }
  
}