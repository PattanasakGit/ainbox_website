export interface OpenHours {
    open: boolean;
    from: string;
    to: string;
  }
  
  export interface IOpenTime {
    Monday: OpenHours;
    Tuesday: OpenHours;
    Wednesday: OpenHours;
    Thursday: OpenHours;
    Friday: OpenHours;
    Saturday: OpenHours;
    Sunday: OpenHours;
  }
  