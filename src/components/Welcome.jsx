import PropTypes from "prop-types";

export default function Welcome({ name }) {
  const changeName = () => {
    name = "Guest";
    console.log(name);
  };

  return (
    <div>
      환영합니다. <br />
      {name}님! <br />
      <button onClick={changeName}>이름 변경</button>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string,
};
