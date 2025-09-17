export interface CalendarDate {
    date: Date;
    disabled: boolean;
    selected: boolean;
}

export interface CalendarOption {
    usingDatesFromPast: boolean;
    usingOnlyAllowedDates: boolean;
    allowedDates: Date[];
}