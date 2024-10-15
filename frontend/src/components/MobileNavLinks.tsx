import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  const logoutUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5173/' // Local development URL
    : 'https://food-ordering-project-1850.netlify.app/';

  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout({ returnTo: logoutUrl } as any)}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log out
      </Button>
    </>
  );
};

export default MobileNavLinks;