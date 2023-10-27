import { Helmet } from 'react-helmet';
import LoginView from './LoginView';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginView />
    </div>
  );
}
