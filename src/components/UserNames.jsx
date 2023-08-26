import UserImg from "../assets//images/userimg.jpg";
import { IconDotsVertical } from "@tabler/icons-react";
const UserNames = (props) => {
  return (
    <div className="flex flex-1 flex-row">
      <button className="flex flex-row h-12">
        <div className="avatar">
          <div className="w-12 rounded-full hover:bg-slate-200">
            <img src={UserImg} alt="userimg" />
          </div>
        </div>
        <div className="flex h-full items-center px-2 font-bold">
          <div className="flex flex-col text-left">
            <div className="hover:underline truncate">{props.Name}</div>
            <div className=" font-normal text-neutrals-600">
              {props.ExtraInfo}
            </div>
          </div>
        </div>
      </button>
      <div className="flex-1"></div>
      {props.IndicatorNeed ? (
        <div className="flex indicator p-4">
          <span className="indicator-item indicator-middle indicator-center badge badge-secondary h-1 bg-brand-green p-1"></span>
        </div>
      ) : null}
      {props.MoreOptionNeed ? (
        <div className="flex btn rounded-full bg-neutrals-800 border-transparent text-neutrals-600">
          <IconDotsVertical />
        </div>
      ) : null}
    </div>
  );
};
export default UserNames;

UserNames.defaultProps = {
  Name: "Your Name",
  ExtraInfo: "@UserName",
  IndicatorNeed: false,
  MoreOptionNeed: false,
};
