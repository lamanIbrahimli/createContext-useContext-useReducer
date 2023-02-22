import { useStore } from "../../store/store";
import {useEffect} from "react";
import {addEmployeeAction, getEmployeeAction} from "../../store/modules/employee/actions/EmployeeAction";

export const Employee = () =>{
    const [{ employee }, dispatch] = useStore();
    const { employees } = employee;

    useEffect(() => {
        dispatch(addEmployeeAction());
        dispatch(getEmployeeAction());
    }, [dispatch]);
    return(
        <>
            <h4>Employees Table</h4>
         </>)
}