import {
  Text,
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useRequest from "../../hooks/useRequest";
import { getHeaders } from "../../hooks/useData";
import { getErrorMsg } from "../../util";
import SpinnerButton from "../common/SpinnerButton";
import FormInput from "../common/FormInput";

export const schema = z.object({
  // truck: z.number({ invalid_type_error: "Truck is required" }).positive(),
  title: z.string().min(16).max(70),
  about: z.string(),
  // exchange_method: z.string(),
  price: z.string(),
  // currency: z.string(),
  // is_auto_renew: z.boolean(),
});

const NewPost = () => {
  const { post, isLoading, errorMsg, resErrors } = useRequest("/advertisements/", true, {
    headers: getHeaders(),
  });
  // const resErrors = [],
  //   isLoading = false,
  //   post = () => {},
  //   errorMsg = "fuck you";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("new post data*", data);
    post(data, () => {
      reset();
    });
  };

  return (
    <>
      <Box maxW="69rem">
        <Heading size="lg">Create a new Advertisement</Heading>
        <form id="new-post-form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormInput
              label="Sarlavha kiriting*"
              type="text"
              placeholder="Masalan, Iphone 11 kafolati bilan"
              id="title"
              conf={register("title")}
              errMsg={errors.title?.message}
              resErrMsg={getErrorMsg(resErrors, "title")}
            />
            <FormInput
              label="Tavsif*"
              type="text"
              placeholder="O’zingizni shu e'lonni ko’rayotgan odam o’rniga qo’ying va tavsif yozing"
              id="about"
              conf={register("about")}
              errMsg={errors.about?.message}
              resErrMsg={getErrorMsg(resErrors, "about")}
            />
            <FormInput
              label="Narx*"
              type="number"
              id="price"
              conf={register("price")}
              errMsg={errors.price?.message}
              resErrMsg={getErrorMsg(resErrors, "price")}
            />
          </Stack>
          {errorMsg && (
            <Text fontSize={15} color="tomato">
              {errorMsg}
            </Text>
          )}
        </form>
        <Button variant="outline" mr={3}>
          Cancel
        </Button>
        {isLoading ? (
          <SpinnerButton />
        ) : (
          <Button
            disabled={!isValid}
            type="submit"
            form="new-post-form"
            colorScheme="blue"
          >
            Save
          </Button>
        )}
      </Box>
    </>
  );
};

export default NewPost;
