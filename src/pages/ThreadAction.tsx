import { useNavigate } from "react-router"
import CreateThread from "../components/CreateThread"

const defaultUser = { userName: "guest", password: "guest"}
const ThreadAction = () => {
  const navigate = useNavigate()
  return (
    <CreateThread
      currentUser={defaultUser}
      onCancel={() => navigate("/")}
      onCreateSuccess={() => navigate("/")}
      />
  )
}
export default ThreadAction