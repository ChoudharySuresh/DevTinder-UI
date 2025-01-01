import { useContext } from "react";
import { createContext } from "react";

const CardContext = createContext();

function useCardContext() {
  const cardConext = useContext(CardContext);

  if (!cardConext) {
    throw new Error("Card Context is Not Present");
  }
  return cardConext;
}

const Card = ({ data, children }) => {
  return (
    <CardContext.Provider value={data}>
      <div className="card bg-base-300 w-96 shadow-xl card-bordered card-side border-gray-600 p-4">
        {children}
      </div>
    </CardContext.Provider>
  );
};

Card.ProfilePic = function CardProfilePic() {
  const cardConext = useCardContext();

  return (
    <div>
      <img
        src={cardConext?.fromUserId?.photoUrl}
        alt="profilePic"
        className="w-[5rem] rounded-full"
      />
    </div>
  );
};

Card.Title = function CardTitle() {
  const cardConext = useCardContext();
  console.log("Context in the Sub Component", cardConext);

  return (
    <h1>
      {cardConext?.fromUserId?.firstName} {cardConext?.fromUserId?.lastName}
    </h1>
  );
};

Card.Age = function CardAge() {
  const cardConext = useCardContext();

  return <p>{cardConext?.fromUserId?.age || "-"}</p>;
};

Card.About = function CardAbout() {
  const cardConext = useCardContext();

  return <p>{cardConext?.fromUserId?.about}</p>;
};

Card.Skills = function CardSkills() {
  const cardConext = useCardContext();

  return (
    <div className="flex items-start gap-4 flex-wrap mt-4">
      {cardConext?.fromUserId?.skills?.map((skill) => (
        <div
          key={skill}
          className="px-4 py-2 bg-gray-500 rounded-xl text-white"
        >
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
};

Card.Buttons = function CardButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="btn btn-outline btn-error ">Reject</button>
      <button className="btn btn-primary ">Accept</button>
    </div>
  );
};

export default Card;
