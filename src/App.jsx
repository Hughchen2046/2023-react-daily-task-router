import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet, useParams } from 'react-router-dom';


const Todo = () => {
  return <div>
    <p>這是 Todo 頁面</p>
    <Logout />
  </div>;
};
export const Logout = () => {
  let navigate = useNavigate();
  return <button type='button' className='btn btn-primary' onClick={()=> {navigate('/login', { replace: true });}}>登出</button>;
};

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const NotThing = () => {
  return <main style={{ padding: "1rem" }}>
    <p>There's nothing here!</p>
  </main>;
};
export const Post = () => {
  return <>
    <p>這是 Post 詳細頁面</p>
    <p className='border-bottom'>上面是父框架</p>
    <Outlet/>
  </>;
};
export const PostPage = () => {
  let params = useParams();
  return <><p>這是 Post 子頁面</p>
  <p>Post ID： {params.postId}</p></>
};



function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav nav-tabs">
          <NavLink className="nav-link" to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink className="nav-link" to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink className="nav-link" to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink className="nav-link" to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink className="nav-link" to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/"  />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="todo" element={<Todo />} />
          <Route path="post" element={<Post />}>
            <Route path=":postId" element={<PostPage />} />
          </Route>
          <Route path="*" element={<NotThing />} />
        </Routes>

        {/* 練習區 */}
        {/* <Routes routes={routes} /> */}
      </HashRouter>
    </div>
  );
}

export default App;
