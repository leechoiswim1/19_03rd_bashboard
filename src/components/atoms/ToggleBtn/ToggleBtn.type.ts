export default interface ToggleBtnProps {
  title?: string;
  clicked?: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ToggleClick {
  click?: boolean;
}
