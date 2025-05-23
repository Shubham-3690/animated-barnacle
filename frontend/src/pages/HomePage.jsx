import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4 pb-4">
        <div className="bg-base-100 rounded-xl shadow-lg w-full max-w-6xl h-[calc(100vh-10rem)] border border-base-300/50">
          <div className="flex h-full rounded-xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
