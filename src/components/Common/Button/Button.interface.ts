export interface IButtonProps {
  btnType?: ButtonType
  text?: string
  className?: string
}

export enum ButtonType {
    Arrow = 'Arrow',
    Text = 'Text',
    TextWithArrow = 'TextWithArrow',
}
