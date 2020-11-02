import SelectUserProfile from '../containers/SelectProfileContainer';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/features/userSlice';


export default function SelectProfile() {
    const user = useSelector(selectUser);
    return (
        <>
            {user ?
                <SelectUserProfile user={user} />
                :
                <h1 style={{ color: "white" }}>No user found</h1>
            }
        </>
    )
}