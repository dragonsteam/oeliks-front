import { HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import TelegramLoginButton from "telegram-login-button";
import useRequest from "../../hooks/useRequest";

const fake_data = {
  auth_date: 1709487049,
  first_name: "Nick",
  hash: "faa98f1c8c6c25d0db9b27392cf24e1fa2f9822194024bd2d786a594765cefa9",
  id: 992519627,
  last_name: "Wild",
  photo_url:
    "https://t.me/i/userpic/320/Sn5-VT8K0XDt-4JjI5sLB_gv3u0Ew5R0ad04INgSfKo.jpg",
  username: "NickPhilomath",
};

const TelegramLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { post, isLoading, errorMsg } = useRequest({ url: "/token/telegram/" });

  const handleTelegramRequest = (user) => {
    console.log("telegram user", user);
    post({
      data: user,
      callback: (data) => {
        console.log("auth data", data);
        queryClient.setQueryData("auth", data);
        navigate("/");
      },
    });
  };

  return (
    <HStack>
      <TelegramLoginButton
        botName="oeliksbot"
        dataOnauth={(user) => handleTelegramRequest(user)}
      />
      <Button
        // variant="outline"
        onClick={() => {
          handleTelegramRequest(fake_data);
        }}
      >
        submit fake data
      </Button>
    </HStack>
  );
};

export default TelegramLogin;
