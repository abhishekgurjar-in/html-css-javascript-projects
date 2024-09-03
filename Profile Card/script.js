var arr = [
    {
      name: "Alexander",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "Stranger"
    },
    {
      name: "Alex",
      img: "https://images.unsplash.com/photo-1549780101-0c96c7eafbd9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "Stranger"
    },
    {
      name: "Pitter",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "Stranger"
    }
  ];
  
  function print() {
    var clutter = "";
    arr.forEach(function (val, index) {
      clutter += `
        <div id="card">
          <div id="img">
            <img src="${val.img}">
          </div>
          <h3>${val.name}</h3>
          <h5 id="${val.status}">${val.status}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur nobis natus. Provident?</p>
          <button class="${val.status === 'Stranger' ? 'blue' : 'red'}" id="${index}">
            ${val.status === 'Stranger' ? 'Add Friend' : 'Remove Friend'}
          </button>
        </div>`;
    });
    document.querySelector("#main").innerHTML = clutter;
  }
  
  print();
  
  document.querySelector("#main").addEventListener("click", function (details) {
    arr[details.target.id].status = "Friends";
    print();
  });
  