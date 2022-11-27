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

export function update_todo(id,task_status){
    return http.put(`/${id}`,task_status)
}

export function total_todo_count(){
    return http.get("/get_count")
}