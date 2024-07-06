let tbody= document.getElementsByTagName('tbody');


async function fetchComments() {
try {
    let url= "https://jsonplaceholder.typicode.com/comments";
    let response= await axios.get(url);
    console.log(response.data);
   let data= response.data;
   let comments=data.filter((comment) => {
    return comment.name;
   });
    comments.forEach( item=> {
        let tr= document.createElement('tr');
        tr.innerHTML=`<td>${item.id}</td>,
                      <td>${item.email}</td>,
                      <td>${item.name}</td>`;
     document.tbody.appendChild(tr);
    });
    
} catch (error) {
    console.log(error);
}

}

fetchComments();