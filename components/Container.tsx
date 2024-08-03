import { ContainerProps } from "@/data/TypesComponents";
import classNames from "classnames";

export const Container = ({ children, className }: ContainerProps) => {
    return <div className={classNames("mx-auto max-w-[120rem] px-8", className)}>{children}</div>;
};
