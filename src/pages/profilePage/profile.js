import "./profile.css";
import { UserInfoBox } from "./components/userInfoBox";

export const Profile = () => {
  return (
    <>
      <main>
        <section className="main-box profile-section">
          <UserInfoBox />
        </section>
      </main>
    </>
  );
};
