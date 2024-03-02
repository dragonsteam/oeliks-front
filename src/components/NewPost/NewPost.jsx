import { Text, Box, Button, HStack, Stack, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
  const [t, i18n] = useTranslation("global");
  const { post, isLoading, errorMsg, resErrors } = useRequest(
    "/advertisements/",
    true,
    {
      headers: getHeaders(),
    }
  );

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
        <Heading size="lg" mb={5}>
          {t("newpost.header")}
        </Heading>
        <form id="new-post-form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormInput
              label={t("newpost.form.title")}
              type="text"
              placeholder={t("newpost.form.title_ph")}
              id="title"
              conf={register("title")}
              errMsg={errors.title?.message}
              resErrMsg={getErrorMsg(resErrors, "title")}
            />
            <FormInput
              label={t("newpost.form.about")}
              type="text"
              placeholder={t("newpost.form.about_ph")}
              id="about"
              conf={register("about")}
              errMsg={errors.about?.message}
              resErrMsg={getErrorMsg(resErrors, "about")}
            />
            <FormInput
              label={t("newpost.form.price")}
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
          {t("common.cancel")}
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
            {t("common.save")}
          </Button>
        )}
      </Box>
    </>
  );
};

export default NewPost;
