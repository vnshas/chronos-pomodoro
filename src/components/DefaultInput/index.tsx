import styles from "./style.module.css"

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export const DefaultInput = ({
  id,
  labelText,
  type,
  ...rest
}: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
};
