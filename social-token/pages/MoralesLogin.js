// domain.com/login

// function MoralesLogin() {
//     return <h1>Morales Login Page Test Test Test</h1>
// }

// export default MoralesLogin;

import { useConnect } from 'wagmi';
// connect user to our application
import { InjectedConnector } from 'wagmi/connectors/injected';
// Look at the browser and see which web3 wallet has been connected
import axios from 'axios';

function SignIn() {
    const { connectAsync } = useConnect();
    // destructure the connectAsync from useConnect hook

    const handleAuth = async () => {
        const { account, chain } = await connectAsync({ connector: new InjectedConnector() });
        // get account & chain the user used
        const userData = { address: account, chain: chain.id, network: 'evm' };
        // later use to make a call to backend
        console.log(userData)
    };

    return (
        <div>
            <h3>Web3 Authentication</h3>
            <button onClick={() => handleAuth()}>Authenticate via Metamask</button>
        </div>
    );
}

export default SignIn;
