import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Text,
  Box,
  Button,
  Stack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useRequest from "../../hooks/useRequest";
import { getErrorMsg } from "../../util";
import SpinnerButton from "../common/SpinnerButton";
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
import Pictures from "./Pictures";

export const schema = z.object({
  // truck: z.number({ invalid_type_error: "Truck is required" }).positive(),
  title: z.string().min(16).max(70),
  about: z.string(),
  // exchange_method: z.string(),
  price: z.string(),
  currency: z.string(),
  // currency: z.string(),
  // is_auto_renew: z.boolean(),
});

const NewPost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    // first of all check if user is actually authorized
    const auth = queryClient.getQueryData("auth");
    if (!auth) navigate("/login");
  }, []);

  const [t, i18n] = useTranslation("global");
  const { post, isLoading, errorMsg, resErrors } = useRequest({
    url: "/advertisements/",
    redirectOn401: true,
    appendAuth: true,
  });

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
      navigate("/");
    });
  };

  return (
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
          <Pictures />
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
          <FormSelect
            id="currency"
            label={t("newpost.form.currency")}
            conf={register("currency")}
            errMsg={errors.currency?.message}
            resErrMsg={getErrorMsg(resErrors, "currency")}
          >
            <option value="UZS">Uzbek Sums</option>
            <option value="USD">US Dollars</option>
            <option value="RUB">Russian Rubles</option>
          </FormSelect>
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
  );
};

export default NewPost;
