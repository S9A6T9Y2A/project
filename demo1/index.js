let data =[
    {id: 1, name:"satya", email:"satya@gmail.com"},
    {id: 2, name:"puhan", email:"puhan@gmail.com"},
]


function readAll(){
    var tbdata = document.querySelector(".table_data");
    var elements = "";
    data.map(d => (
        elements += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>
                <button class="edit" onclick={edit(${d.id})}>Update</button>
                <button class="delet" onclick={delet(${d.id})}>Delete</button>
            </td>
        </tr>`
        
    ))
    tbdata.innerHTML = elements;
}

function createForm(){
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";
}

function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = {id: 3, name , email};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";
    readAll();


}
function edit(id) {
        document.querySelector(".update_form").style.display = "block";
        document.querySelector(".addbtn").style.display = "none";
    
        var updateObj = data.find(f => f.id === id);
        document.querySelector(".update_id").value = updateObj.id;
        document.querySelector(".uname").value = updateObj.name;
        document.querySelector(".uemail").value = updateObj.email;
        document.querySelector(".edit").style.bgcolor = "red";
    
}


function update(){

  var id = parseInt(document.querySelector(".update_id").value);
  var name = document.querySelector(".uname").value;
  var email = document.querySelector(".uemail").value;
  var updateObj = {id,name,email};

  var index = data.findIndex(f => f.id === id);
  data[index] = updateObj;
  document.querySelector(".update_form").style.display = "none";
  document.querySelector(".addbtn").style.display = "block";
  readAll();

}

function delet(id) {
    var newdata = data.filter(f => f.id !== id);
    data = newdata;
    readAll();

}
//..........library management.............//



let dataa=[
    {id:1, title:"java", author:"james gosling" , genre:"programmer" , year:"1989", quantity:"1" },
    {id:2, title:"html", author:"tim berner lee" , genre:"programmer" , year:"1989", quantity:"2" },

]


function selectAll(){
    var tbdataa = document.querySelector(".table_udata");
    var elements = "";
    dataa.map(d => (
        elements += `<tr>
            <td>${d.title}</td>
            <td>${d.author}</td>
            <td>${d.genre}</td>
            <td>${d.year}</td>
            <td>${d.quantity}</td>
            <td>
                <button class="editt"  onclick={editt(${d.id})}>Update</button>
                <button class="delett" onclick={delett(${d.id})}>Delete</button>
            </td>
        </tr>`
        
    ))
    tbdataa.innerHTML = elements;
}

function contentCreate() {
    document.querySelector(".content_create").style.display = "block";
    document.querySelector(".addbook").style.display = "none";
}

function book(){
    var title = document.querySelector(".title").value;
    var author = document.querySelector(".author").value;
    var genre = document.querySelector(".genre").value;
    var year = document.querySelector(".year").value;
    var quantity = document.querySelector(".quantity").value;

    var newObj = {id: 3, title , author , genre , year , quantity};
    dataa.push(newObj);

    document.querySelector(".content_create").style.display = "none";
    document.querySelector(".addbook").style.display = "block";
    selectAll();

}

function editt(id) {
    document.querySelector(".content_update").style.display = "block";
    document.querySelector(".addbook").style.display = "none";
    
    var contentObj = dataa.find(f => f.id === id);
    document.querySelector(".content_id").value = contentObj.id;
    document.querySelector(".utitle").value = contentObj.title;
    document.querySelector(".uauthor").value = contentObj.author;
    document.querySelector(".ugenre").value = contentObj.genre;
    document.querySelector(".year").value = contentObj.year;
    document.querySelector(".quantity").value = contentObj.quantity;

}

function updateBook(){
  var id = parseInt(document.querySelector(".content_id").value);
  var title = document.querySelector(".utitle").value;
  var author = document.querySelector(".uauthor").value;
  var genre = document.querySelector(".ugenre").value;
  var year = document.querySelector(".uyear").value;
  var quantity = document.querySelector(".uquantity").value;
  var contentObj = {id,title,author,genre,year,quantity};

  var index = dataa.findIndex(f => f.id === id);
  dataa[index] = contentObj;
  document.querySelector(".content_update").style.display = "none";
  document.querySelector(".addbook").style.display = "block";
  selectAll();
}

function delett(id) {
    var newdataa = dataa.filter(f => f.id !== id);
    dataa = newdataa;
    selectAll();
}





