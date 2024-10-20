import moment from "moment";
import Calendar from "./CalendarTemplate";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const events = [
  {
    title: "Juhu Beach Cleaning Workshop",
    start: moment("2024-10-21T10:00:00").toDate(),
    end: moment("2024-10-22T11:00:00").toDate(),
  },
  //   {
  //     title: "",
  //     start: moment("2024-06-09T13:00:00").toDate(),
  //     end: moment("2024-06-09T15:00:00").toDate(),
  //   },
  //   {
  //     title: "Machine Learning Workshop",
  //     start: moment("2024-06-11T12:00:00").toDate(),
  //     end: moment("2024-06-12T14:00:00").toDate(),
  //   },
];

const components = {
  event: (props) => {
    const { title, start, end } = props.event;
    const startDate = moment(start).format("MMMM Do YYYY, h:mm a");
    const endDate = moment(end).format("MMMM Do YYYY, h:mm a");

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              style={{
                backgroundColor: "#06b6d4",
                fontFamily: "Montserrat",
                fontWeight: "500",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {title}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="p-1">
              <p className="font-semibold">{title}</p>
              <p>
                {startDate} - {endDate}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export default function CalendarComponent() {
  return (
    <Calendar
      events={events}
      defaultView={"week"}
      views={["month", "week", "day"]}
      components={components}
    />
  );
}
