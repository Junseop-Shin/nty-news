// import { ReactComponent as CalendarComponent } from "asset/icon/Calendar.svg";

type IconMapperType = {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
};

// eslint-disable-next-line import/prefer-default-export
export const IconMapper: IconMapperType = {
  // Calendar: CalendarComponent,
};
