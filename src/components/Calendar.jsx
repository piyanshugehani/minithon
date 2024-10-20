import moment from "moment";
import Calendar from "./CalendarTemplate";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: "Juhu Beach Cleaning Workshop",
      start: moment("2024-10-21T10:00:00").toDate(),
      end: moment("2024-10-22T11:00:00").toDate(),
    },
    {
      title: "Versova Beach Cleaning Workshop",
      start: moment("2024-10-21T13:00:00").toDate(),
      end: moment("2024-10-22T14:00:00").toDate(),
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const handleAddEvent = () => {
    const { title, startDate, startTime, endDate, endTime } = newEvent;

    const start = moment(`${startDate} ${startTime}`, "YYYY-MM-DD HH:mm").toDate();
    const end = moment(`${endDate} ${endTime}`, "YYYY-MM-DD HH:mm").toDate();

    setEvents((prevEvents) => [
      ...prevEvents,
      {
        title,
        start,
        end,
      },
    ]);

    // Reset form
    setNewEvent({
      title: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
                  backgroundColor: "#3173AC",
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

  return (
    <>
      <Calendar
        events={events}
        defaultView={"month"}
        views={["month", "week", "day"]}
        components={components}
      />

      <Dialog>
        <DialogTrigger>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add New Event
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>
              Fill in the details for the new event.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleChange}
              placeholder="Event Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="startDate"
                value={newEvent.startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="time"
                name="startTime"
                value={newEvent.startTime}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="endDate"
                value={newEvent.endDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="time"
                name="endTime"
                value={newEvent.endTime}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={handleAddEvent}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add Event
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CalendarComponent;
