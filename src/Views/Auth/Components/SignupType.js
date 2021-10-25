import user from "Assets/svg/user.svg";
import org from "Assets/svg/org.svg";

function SignUpType({ state, setstate }) {
  const changeSelectedHandler = (val) => {
    try {
      setstate({ ...state, selected: val });
    } catch (e) {
      return;
    }
  };
  return (
    <div className="auth__type">
      <div
        className={`item ${state.selected === 1 ? "active" : null}`}
        onClick={() => changeSelectedHandler(1)}
      >
        <img src={user} alt="User" />
        <p>Иргэн</p>
      </div>
      <div
        className={`item ${state.selected === 2 ? "active" : null}`}
        onClick={() => changeSelectedHandler(2)}
      >
        <img src={org} alt="Org" />
        <p>Байгууллага</p>
      </div>
    </div>
  );
}
export default SignUpType;
