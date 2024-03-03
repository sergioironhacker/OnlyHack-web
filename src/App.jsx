import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './pages/UserProfile';
import CurrentUserProfile from './pages/CurrentUserProfile';
/* import Timeline from './pages/Timeline';  */
import Idea from './components/Idea';
import SearchBar from './pages/SearchBar';
import IdeaDetail from './pages/IdeaDetail';
import ChatsView from './pages/AllChats'; //
import Conversation from './pages/Conversation'; // 
import AboutUsPage from './pages/AboutUs'; // 



function App() {
  return (
    <div>
      <NavBar />
      <div className="max-w-container mb-9 mx-auto min-h-body p-4">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><CurrentUserProfile /></ProtectedRoute>} />
          <Route path="/users/:id" element={<UserProfile />} />
          {/* <Route path="/timeline" element={<ProtectedRoute><Timeline /></ProtectedRoute>} /> */}
          <Route path="/ideas/create" element={<ProtectedRoute><Idea /></ProtectedRoute>} />
          <Route path="/ideas/:id" element={<ProtectedRoute><IdeaDetail /></ProtectedRoute>} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/about-us" element={<AboutUsPage />} />



          <Route path="/user/chats" element={<ChatsView />} />
          <Route path="/user/chat/:id" element={<Conversation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
