import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function ProtectedPage() {
    return <Navigate to="/about" replace />;
}


function Home() {
  return <Link to="/about">Go to About Page</Link>;
}
