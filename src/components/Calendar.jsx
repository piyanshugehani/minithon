import moment from "moment";
import Calendar from "./CalendarTemplate";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { clsx } from "clsx";

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
    startDate: null,
    startTime: "",
    endDate: null,
    endTime: "",
  });

  const handleAddEvent = () => {
    const { title, startDate, startTime, endDate, endTime } = newEvent;

    // Check if required fields are filled
    if (!title || !startDate || !startTime || !endDate || !endTime) {
      console.error('Please fill in all required fields');
      return;
    }

    // Parse dates correctly
    const start = moment(`${format(startDate, "yyyy-MM-dd")} ${startTime}`, "yyyy-MM-dd HH:mm").toDate();
    const end = moment(`${format(endDate, "yyyy-MM-dd")} ${endTime}`, "yyyy-MM-dd HH:mm").toDate();

    // Add the event to the state
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
      startDate: null,
      startTime: "",
      endDate: null,
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
      const startDate = moment(start).local().format("MMMM Do YYYY, h:mm a");
      const endDate = moment(end).local().format("MMMM Do YYYY, h:mm a");

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
      <div className="h-[100vh]">
      <Calendar
        events={events}
        defaultView={"month"}
        views={["month", "week", "day"]}
        components={components}
      />

      <Dialog>
        <DialogTrigger>
          <div className="flex justify-center mb-4">
            <button className="px-4 py-2 bg-[#17405d] text-white rounded-md hover:bg-blue-600 my-6">
              Add New Event
            </button>
          </div>
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newEvent.startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {newEvent.startDate ? (
                      format(newEvent.startDate, "PPP")
                    ) : (
                      <span>Pick a start date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <ShadCalendar
                    mode="single"
                    selected={newEvent.startDate}
                    onSelect={(date) =>
                      setNewEvent((prev) => ({ ...prev, startDate: date }))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <input
                type="time"
                name="startTime"
                value={newEvent.startTime}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newEvent.endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {newEvent.endDate ? (
                      format(newEvent.endDate, "PPP")
                    ) : (
                      <span>Pick an end date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <ShadCalendar
                    mode="single"
                    selected={newEvent.endDate}
                    onSelect={(date) =>
                      setNewEvent((prev) => ({ ...prev, endDate: date }))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
              className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
            >
              Add Event
            </button>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    </>
  );
};

export default CalendarComponent;
