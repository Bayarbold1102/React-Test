import {  SignUpForm } from "../Components/Path";

function Index() {
  return (
    <div className="auth">
      <div className="row">
        <div className="col-md-4">
          <div className="auth__form">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
