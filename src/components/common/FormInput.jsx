import { FormControl, Input } from "@chakra-ui/react";
import Msg from "./Msg";

const FormInput = ({
  id,
  type,
  placeholder,
  conf,
  errMsg,
  resErrMsg,
}) => {
  return (
    <FormControl>
      <Input type={type} placeholder={placeholder} id={id} {...conf} />
      <Msg level="error">{errMsg}</Msg>
      <Msg level="error">{resErrMsg}</Msg>
    </FormControl>
  );
};

export default FormInput;
