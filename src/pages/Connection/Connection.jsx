import Card from "../../components/Card/Card";

const Connection = ({ connections }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap w-full max-w-[95%] mx-auto p-5">
      {connections?.map((item) => (
        <Card data={item} key={item?._id}>
          <div>
            <div>
              <Card.ProfilePic />
            </div>
            <div className="mt-4">
              <Card.Title />
              <Card.Age />
              <Card.About />
              <Card.Skills />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Connection;
