import "./App.css";
import SideNav from "./components/sidenav/SideNav";
import UserHome from "./containers/user/home/UserHome";
import AdminHome from "./containers/admin/home/AdminHome";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./config/Theme";
import { Route, Routes } from "react-router-dom";
import TopicsViewer from "./containers/user/topics-viewer/TopicsViewer";
import RoadMaps from "./containers/user/roadmaps-viewer/RoadmapsViewer";
import Login from "./containers/common/login/Login";
import AddContent from "./containers/admin/add-content/AddContent";
import ErrorPage from './containers/common/error-page/ErrorPage';
import ContentViewer from './containers/user/content-viewer/ContentViewer';
import Courses from './containers/admin/courses/Courses';
import ViewEditTopics from "./containers/admin/topic/ViewEditTopics";
import { React } from 'react';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        className="App"
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <header className="App-header">
          <SideNav />
        </header>
        <div className="route-container">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/user">
              <Route path="" element={<UserHome />} />
              <Route path="topic/:courseId" element={<TopicsViewer />} />
              <Route path="roadmaps" element={<RoadMaps />} />
              <Route path="content/:topicId" element={<ContentViewer />} />
            </Route>
            <Route path="/admin">
              <Route path="" element={<AdminHome />} />
              <Route path="addContent/:topicId" element={<AddContent />} />
              <Route path="showCourses" element={<Courses />} />
              <Route path="viewEditTopic/:courseId" element={<ViewEditTopics />} />
            </Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
