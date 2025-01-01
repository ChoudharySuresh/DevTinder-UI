import Card from "../../components/Card/Card";

const Request = ({ requests }) => {
  return (
    <div>
      <div className="flex items-center gap-4 flex-wrap w-full max-w-[95%] mx-auto p-5">
        {requests?.map((item) => (
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
              <div className="mt-5">
                <Card.Buttons />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Request;
