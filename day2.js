let todos = [];

function tambahTodo(teks) {
    todos.push(teks);
}

function tampilkanTodo() {
    todos.forEach(function (todo) {
        console.log("- " + todo);
    });
}

tambahTodo("Belajar function");
tambahTodo("Beli susu");
tambahTodo("Nonton tutorial JS");
tambahTodo("Mengerjakan tugas");
tambahTodo("Membaca buku");

tampilkanTodo();