import ServerDown from "@assets/server-down.svg";

export const Error = () => {
  return (
    <div className="flex justify-center min-h-0" data-testid="server-down">
      <img src={ServerDown} alt="server-down" />
    </div>
  );
};
