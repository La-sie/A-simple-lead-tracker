// this is a simple app that stores the url of websites(lead tracker) for easy tracking
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads")) 
const tabBtn = document.getElementById("tab-btn")

    if (leadsFromLocalStorage) { 
        myLeads = leadsFromLocalStorage  
       render(myLeads)
    }

    function render(leads) {    let listItems = ""
      for (let i = 0; i < leads.length; i++){
      listItems += `
         <li>
           <a target = '_blank' href = '${leads[i]}'>
              ${leads[i]}
            </a>
         </li>`
   }
   
      ulEl.innerHTML += listItems 
   }

   const tabs = [
      {
         // this is the url of the founder of scrimba.com where im taking a full course on javascript
  url : "https://www.linkedin.com/in/per-harold-borgen" 
   }
  ]

tabBtn.addEventListener("click", function(){
        chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)   
      })
})

deleteBtn.addEventListener("dblclick", function(){
   localStorage.clear
   myLeads = []
   render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
})



