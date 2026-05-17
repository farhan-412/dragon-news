import FindUs from "../FindUs";
import LoginWith from "../LoginWith";
import QZone from "../QZone";

const RightAside = () => {
    return (
        <div className="space-y-5">
            <LoginWith></LoginWith>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;