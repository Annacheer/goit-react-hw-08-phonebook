import { Helmet } from 'react-helmet';
import RegisterView from './RegisterView';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterView />
    </div>
  );
}
