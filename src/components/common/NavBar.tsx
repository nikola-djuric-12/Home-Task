import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => navigate("/dashboard");

  return (
    <div className="flex p-4 bg-blue-300" data-testid="navbar">
      <button onClick={handleClickLogo}>
        <p className="text-white text-base font-bold">Home Excercise</p>
      </button>
    </div>
  );
};
