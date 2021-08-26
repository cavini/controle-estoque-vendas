import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}
