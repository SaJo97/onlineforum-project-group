import { useNavigate } from "react-router";
import CreateThread from "../components/CreateThread";

const defaultUser = { userName: "guest", password: "guest" };
const ThreadAction = () => {
  const navigate = useNavigate();
  // Skickar användare och skickar två navigeringar för Skapa och Avbryt --> går tillbaka till hemsidan, man kan använda link oxå spelar ingen roll
  return (
    <CreateThread
      currentUser={defaultUser}
      onCancel={() => navigate("/")}
      onCreateSuccess={() => navigate("/")}
    />
  );
};
export default ThreadAction;
