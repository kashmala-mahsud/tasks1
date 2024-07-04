


// async function fetchAlbums(){
// try {
// let url ="https://jsonplaceholder.typicode.com/albums";
//   let response= await fetch(url);
//   let data= await response.json();
//   console.log(data);
//   // filter that do not have title
//   let filterAlbums= data.filter((album) => {
//   console.log(!album.title); 
//   });
//   // mapping the remaining albums to simpler form
//   let simplerForm= filterAlbums.map(data => ({
//     id:data.id,
//     title:data.title
//   }));
//   console.log(simplerForm);
// } catch (error) {
//   console.log(`please check the error${error}`);
// }
// }                  
// fetchAlbums();



//  async function fetchPosts(){
// try {
//   let url="https://jsonplaceholder.typicode.com/posts";
//   let response= await axios.get(url);
//   let posts= response.data;
//  let dataPosts= posts.filter((data) => {
//   console.log(data.posts && data.title);
//   });
//   //ascending id's
//   const sortedId= dataPosts.sort((a , b) => a.id - b.id);
//   console.log(sortedId);
 

// } catch (error) {
//   console.log(`check error ${error}`);
// }
// }

// fetchPosts();


//  async function fetchUsers(){
// try {
//   let url="https://jsonplaceholder.typicode.com/users";
//   let response= await fetch(url);
//   let data= await response.json();
//  console.log(data);
//  let filterUsers=data.filter((item) => {   
//   return item.username && !item.email;                                         
//  });
// console.log(filterUsers);
// let mappedVal= data.map((val) => {

// return val.phone;
// });

// let val=Object.keys(mappedVal);
// let reduceVal=val.reduce((acc,curr) => acc +curr.length,0);
// console.log(reduceVal);


// } catch (error) {
//   console.log(`check error ${error}`);
// }
// }

// fetchUsers();

// async function fetchTodos(){
//   try {
//     let url ="https://jsonplaceholder.typicode.com/todos";
//     let response= await fetch(url);
//     let data= await response.json();
//     console.log(data);
//     let filterTodos=data.filter((item) => item.completed===true);
//     console.log(filterTodos);
//     let mappedVal= filterTodos.map(val => ({
//       userId: val.userId,
//       title: val.title
//     }));
//     console.log(mappedVal);
//   } catch (error) {
//     console.log(`check error${error}`);
//   }
// }
// fetchTodos();








