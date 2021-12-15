import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
export default function Profile(props) {
  return (
    <>
      <div>
        <h1>{props.fullName}</h1>
        <h3>{props.profession}</h3>
        <p>Bio: {props.bio}</p>
      </div>
      <Button onClick={() => props.handleName(`user name:${props.fullName}`)}>
        click me
      </Button>
      <div> {props.children}</div>
    </>
  );
}
Profile.defaultProps = {
  fullName: "FirstName Last Name",
  profession: "profession",
  bio: "bio",
  children: "profile photo",
  handleName: function () {
    return "hello";
  },
};
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  children: PropTypes.any,
  handleName: PropTypes.func,
};
