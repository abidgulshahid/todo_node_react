import http from "./connection"

export function get_todo(){
    return http.get("/get_todo");
}

export function add_todo(todo_list){
    return http.post("/create",todo_list);
}

export function delete_todo(id){
    return http.delete(`/${id}`);
}