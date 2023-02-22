import { AuthReducer } from "./modules/auth/reducers/AuthReducer";
import { EmployeeReducer } from "./modules/employee/reducers/EmployeeReducer";

export const initialState = {
    auth: {
        isLoggedIn: false
    },
    employee: {
        employees: []
    }
};

const rootReducer = ({  auth, employee  }, action) => {
    return {
        auth: AuthReducer(auth, action),
        employee: EmployeeReducer(employee, action)
    };
};

export default rootReducer;
