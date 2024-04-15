import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard () {
    return <div>
        <AppBar/>
        <Balance label={'10000'} />
        <Users />
    </div>
}