const Avatar = ({ img }) => {
  return (
    <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
        <img src={img} alt="profilepic" />
      </div>
    </div>
  );
};

export default Avatar;
