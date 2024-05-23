import React from 'react';
import {useLocation} from "react-router-dom";

const UserComponent = () => {

    // const {id} = useParams();

    const {state} = useLocation()
    console.log(state)

    // const [user, setUser] = useState<any>({})
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/' + id)
    //         .then(value => value.json())
    //         .then(value => {
    //             setUser(value)
    //         })
    // }, []);

    return (
        <div>
            {state.id} - {state.name}
        </div>
    );
};

export default UserComponent;