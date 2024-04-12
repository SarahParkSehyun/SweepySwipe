import classNames from "classnames";
import { PropsWithChildren, ReactNode } from "react";
import "./style.scss";

export function ModalBtnWrapper({ children }: PropsWithChildren) {
  return <div className="btn-wrapper">{children}</div>;
}

export function ModalContent({ children }: PropsWithChildren) {
  return <div className="modal-content">{children}</div>;
}

export function ModalTitle({
  icon,
  title,
}: {
  icon?: JSX.Element;
  title: string;
}) {
  return (
    <div className="modal-title">
      {icon}
      {title}
    </div>
  );
}

export function ModalWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames("modal-wrapper", { [`${className}`]: className })}
    >
      <div className="modal-body">{children}</div>
    </div>
  );
}
