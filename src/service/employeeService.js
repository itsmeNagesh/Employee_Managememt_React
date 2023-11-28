import axios from axios
const emp_api_base_url="localhost:8080/find/emp"
class employeeservice{
   getemployee(){
    return axios.get(emp_api_base_url);
   }
}
export default new employeeservice();