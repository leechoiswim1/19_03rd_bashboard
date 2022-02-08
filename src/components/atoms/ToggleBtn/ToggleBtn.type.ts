export default interface ToggleBtnProps {
  clicked?: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ToggleClick {
  click?: boolean;
}
