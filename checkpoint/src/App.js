import Profile from "./profile/profile.js";
function App() {
  const handleName = (fullName) => alert(fullName);
  const objectStyle = {
    border: "3px solid black",
    textAlign: "center",
    maxWidth: 250,
    height: 500,
    marginLeft: 600,
    marginTop: 100,
    color: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div className="App" style={objectStyle}>
      <Profile
        fullName="Baccar Amir "
        bio="Future ingenieur "
        profession="Etudiant"
        handleName={handleName}
      >
        <img src="/photo.jpg" alt="" style={{ width: 250, height: 250 }} />
      </Profile>
    </div>
  );
}

export default App;
